// 3rd party library imports
import * as Tone from "tone";
import classNames from "classnames";
import { List, Range } from "immutable";
import React, { useEffect } from "react";

// project imports
import { Instrument, InstrumentProps } from "../Instruments";
import { url } from "inspector";

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */

interface xylophoneKeyProps {
  note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
  duration?: string;
  synth?: Tone.Synth; // Contains library code for making sound
  minor?: boolean; // True if minor key, false if major key
  octave: number;
  index: number; // octave + index together give a location for the piano key
}

export function XylophoneKey({
  note,
  synth,
  minor,
  index,
}: xylophoneKeyProps): JSX.Element {
  /**
   * This React component corresponds to either a major or minor key in the piano.
   * See `PianoKeyWithoutJSX` for the React component without JSX.
   */
  return (
    // Observations:
    // 1. The JSX refers to the HTML-looking syntax within TypeScript.
    // 2. The JSX will be **transpiled** into the corresponding `React.createElement` library call.
    // 3. The curly braces `{` and `}` should remind you of string interpolation.
    <div
      onMouseDown={() => synth?.triggerAttack(`${note}`)} // Question: what is `onMouseDown`?
      onMouseUp={() => synth?.triggerRelease("+0.1")} // Question: what is `onMouseUp`?
      className={classNames("ba absolute dim", {
        //'bg-black black h3': minor, // minor keys are black
        "black bg-red h4": note,
      })}
      style={{
        // CSS
        cursor: "crosshair",
        top: 0,
        left: `${index * 4}rem`,
        zIndex: 0,
        width: "2rem",
        marginLeft: 0,
      }}
    ></div>
  );
}

// eslint-disable-next-line
function XylophoneKeyWithoutJSX({
  note,
  synth,
  minor,
  index,
}: xylophoneKeyProps): JSX.Element {
  /**
   * This React component for pedagogical purposes.
   * See `PianoKey` for the React component with JSX (JavaScript XML).
   */
  return React.createElement(
    "div",
    {
      onMouseDown: () => synth?.triggerAttack(`${note}`),
      onMouseUp: () => synth?.triggerRelease("+0.25"),
      className: classNames("ba pointer absolute dim", {
        //'bg-black black h3': minor,
        "black bg-white h4": !minor,
      }),
      style: {
        top: 0,
        left: `${index * 2}rem`,
        zIndex: minor ? 1 : 0,
        width: minor ? "1.5rem" : "2rem",
        marginLeft: minor ? "0.25rem" : 0,
      },
    },
    []
  );
}

function XylophoneType({ title, onClick, active }: any): JSX.Element {
  return (
    <div
      onClick={onClick}
      className={classNames("dim pointer ph2 pv1 ba mr2 br1 fw7 bw1", {
        "b--black black": active,
        "gray b--light-gray": !active,
      })}
    >
      {title}
    </div>
  );
}

function Xylophone({ synth, setSynth }: InstrumentProps): JSX.Element {
  const keys = List([
    { note: "C", idx: 0 },
    { note: "Db", idx: 0.5 },
    { note: "D", idx: 1 },
    { note: "Eb", idx: 1.5 },
    { note: "E", idx: 2 },
    { note: "F", idx: 3 },
    { note: "Gb", idx: 3.5 },
    { note: "G", idx: 4 },
    { note: "Ab", idx: 4.5 },
    { note: "A", idx: 5 },
    { note: "Bb", idx: 5.5 },
    { note: "B", idx: 6 },
  ]);

  const setOscillator = () => {
    setSynth((oldSynth) => {
      oldSynth.disconnect();

      return new Tone.Synth({
        volume: 1,
        detune: 0,
        portamento: 0,
        envelope: {
          attack: 1,
          attackCurve: "exponential",
          decay: 0,
          decayCurve: "exponential",
          release: 0.5,
          releaseCurve: "exponential",
          sustain: 1,
        },
        oscillator: {
          partials: [
            0.00004822530900128186, 0.0007716049440205097,
            0.000003014081790123446, 0.000244140625, 0.00390625,
          ],
          phase: 0,
          type: "fatcustom",
          count: 2,
          spread: 2,
        },
      }).toDestination();
    });
  };

  useEffect(setOscillator, [setSynth]);

  return (
    <div className="pv4" style={{cursor: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/stick.svg)'}}>
      <div className="relative dib h4 w-100 ml4">
        {Range(3, 5).map((octave) =>
          keys.map((key) => {
            const isMinor = false;
            const note = `${key.note}${octave}`;
            return (
              <XylophoneKey
                key={note} //react key
                note={note}
                synth={synth}
                minor={isMinor}
                octave={octave}
                index={(octave - 2) * 7 + key.idx}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export const xylophoneInstrument = new Instrument(
  "xylophone-khtun1",
  Xylophone
);
