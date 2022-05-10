// 3rd party library imports
import * as Tone from "tone";
import classNames from "classnames";
import { List, Range } from "immutable";
import React from "react";

// project imports
import { Instrument, InstrumentProps } from "../Instruments";
import image from "./../img/violin.jpg";

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Violin.
 * References: https://tonejs.github.io/
 * Author: Nyan Lin Tun
 ** ------------------------------------------------------------------------ */

interface ViolinKeyProps {
  note: string;
  duration?: string;
  synth?: Tone.Synth;
  minor?: boolean;
  octave: number;
  index: number;
  horizontal: number;
  vertical: number;
  rota: string;
}
export function ViolinKey({
  note,
  synth,
  minor,
  index,
  horizontal,
  vertical,
  rota,
}: ViolinKeyProps): JSX.Element {
  return (
    <div
      onMouseDown={() => synth?.triggerAttack(`${note}`)}
      onMouseUp={() => synth?.triggerRelease("+0.1")}
      className={classNames("ba pointer absolute dim")}
      style={{
        top: horizontal,
        transform: "rotate(0deg)",
        left: `${vertical}rem`,
        marginLeft: minor ? "1rem" : 0,
        background: "gray",
        height: "50px",
        width: "20px",
        borderRadius: "50px",
      }}
    >
      <div
        style={{
          transform: rota,
        }}
      ></div>
    </div>
  );
}

function ViolinType({ title, onClick, active }: any): JSX.Element {
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

function Violin({ synth, setSynth }: InstrumentProps): JSX.Element {
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

  const setOscillator = (newType: Tone.ToneOscillatorType) => {
    setSynth((oldSynth) => {
      oldSynth.disconnect();

      return new Tone.Synth({
        volume: 5,
        detune: 0,
        portamento: 0,
        envelope: {
          attack: 3,
          attackCurve: "cosine",
          decay: 0.2,
          decayCurve: "linear",
          release: 0.5,
          releaseCurve: "cosine",
          sustain: 0.5,
        },
        oscillator: { type: newType } as Tone.OmniOscillatorOptions,
      }).toDestination();
    });
  };

  const oscillators: List<OscillatorType> = List([
    "sine",
    "sawtooth",
    "square",
    "triangle",
    "fmsine",
    "fmsawtooth",
    "fmtriangle",
    "amsine",
    "amsawtooth",
    "amtriangle",
  ]) as List<OscillatorType>;

  return (
    <div className="pv4">
      <div className={"image"}>
        <img
          src={image}
          alt={"Violin"}
          style={{
            position: "absolute",
            top: window.innerHeight / 50,
            left: window.innerWidth / 10,
          }}
        />
      </div>
      <div className="relative dib h4 w-100 ml4">
        {Range(3, 5).map((octave) =>
          keys.map((key) => {
            const isMinor = key.note.indexOf("b") !== -1;
            const note = `${key.note}${octave}`;
            return (
              <ViolinKey
                key={note} //react key
                note={note}
                synth={synth}
                minor={isMinor}
                octave={octave}
                index={(octave - 2) * 7 + key.idx}
                horizontal={3}
                vertical={((octave - 2) * 7 + key.idx) * 2}
                rota={"rotate(0deg)"}
              />
            );
          })
        )}
      </div>
      <div className={"pl4 pt4 flex"}>
        {oscillators.map((o) => (
          <ViolinType
            key={o}
            title={o}
            onClick={() => setOscillator(o)}
            active={synth?.oscillator.type === o}
          />
        ))}
      </div>
    </div>
  );
}

export const ViolinInstrument = new Instrument("Violin - nyanjustint", Violin);
