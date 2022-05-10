// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */

interface KalimbaKeyProps {
  note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
  duration?: string;
  synth?: Tone.Synth; // Contains library code for making sound
  minor?: boolean; // True if minor key, false if major key
  octave: number;
  index: number; // octave + index together give a location for the piano key
}

export function KalimbaKey({
  note,
  synth,
  minor,
  index,
}: KalimbaKeyProps): JSX.Element {
  /**
   * This React component corresponds to either a major or minor key in the piano.
   * See `PianoKeyWithoutJSX` for the React component without JSX.
   */
  return (
    // Observations:
    // 1. The JSX refers to the HTML-looking syntax within TypeScript.
    // 2. The JSX will be **transpiled** into the corresponding `React.createElement` library call.
    // 3. The curly braces `{` and `}` should remind you of string interpolation.
    // <div
    //   onMouseDown={() => synth?.triggerAttack(`${note}`)} // Question: what is `onMouseDown`?
    //   onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
    //   className={classNames('ba pointer absolute dim', {
    //     'bg-black black h3': minor, // minor keys are black
    //     'black bg-white h4': !minor, // major keys are white
    //   })}
    //   style={{
    //     CSS
    //     top: 0,
    //     left: `${index * 2}rem`,
    //     zIndex: minor ? 1 : 0,
    //     width: minor ? '1.5rem' : '2rem',
    //     marginLeft: minor ? '0.25rem' : 0,
    //   }}
    // ></div>
    <div
    onMouseDown={() => synth?.triggerAttack(`${note}`)} // Question: what is `onMouseDown`?
    onMouseUp={() => synth?.triggerRelease('+0.1')} // Question: what is `onMouseUp`?
    style = {{
      float:'left'
    }}
    >
      <div  >
      <button style = {{width : '26px', height : '30px', fontSize:'8px'}}>
        {note}
      </button>
      </div>
    </div>
  );
}

// eslint-disable-next-line
function KalimbaKeyWithoutJSX({
  note,
  synth,
  minor,
  index,
}: KalimbaKeyProps): JSX.Element {
  /**
   * This React component for pedagogical purposes.
   * See `PianoKey` for the React component with JSX (JavaScript XML).
   */
  return React.createElement(
    'div',
    {
      onMouseDown: () => synth?.triggerAttack(`${note}`),
      onMouseUp: () => synth?.triggerRelease('+0.25'),
      className: classNames('ba pointer absolute dim', {
        'bg-black black h3': minor,
        'black bg-white h4': !minor,
      }),
      style: {
        top: 0,
        left: `${index * 2}rem`,
        zIndex: minor ? 1 : 0,
        width: minor ? '1.5rem' : '2rem',
        marginLeft: minor ? '0.25rem' : 0,
      },
    },
    [],
  );
}

function KalimbaType({ title, onClick, active }: any): JSX.Element {
  return (
    <div
      onClick={onClick}
      className={classNames('dim pointer ph2 pv1 ba mr2 br1 fw7 bw1', {
        'b--black black': active,
        'gray b--light-gray': !active,
      })}
    >
      {title}
    </div>
  );
}

function naelInstrument({ synth, setSynth }: InstrumentProps): JSX.Element {
  const keys = List([
    { note: 'C', idx: 0 },
    { note: 'Db', idx: 0.5 },
    { note: 'D', idx: 1 },
    { note: 'Eb', idx: 1.5 },
    { note: 'E', idx: 2 },
    { note: 'F', idx: 3 },
    { note: 'Gb', idx: 3.5 },
    { note: 'G', idx: 4 },
    { note: 'Ab', idx: 4.5 },
    { note: 'A', idx: 5 },
    { note: 'Bb', idx: 5.5 },
    { note: 'B', idx: 6 },
  ]);

  // const setOscillator = (newType: Tone.ToneOscillatorType) => {
  //   setSynth((oldSynth) => {
  //     oldSynth.disconnect();

  //     return new Tone.Synth({
  //       volume: 5,
  //       detune: -8,
  //     },
  //       oscillator: { type: newType } as Tone.OmniOscillatorOptions,
  //     }).toDestination();
  //   });
  // };

  const setOscillator = (newType: Tone.ToneOscillatorType) => {
    setSynth((oldSynth) => {
      oldSynth.disconnect();

      return new Tone.Synth({
        volume: 8,
        detune: 3,
        portamento: 0,
        envelope: {
          attack: 0.05,
          attackCurve: "exponential",
          decay: 0.9,
          decayCurve: "exponential",
          release: 0.5  ,
          releaseCurve: "exponential",
          sustain: 0,
        },
        oscillator: { type: newType } as Tone.OmniOscillatorOptions,
      }).toDestination();
    });
  };

  const oscillators: List<OscillatorType> = List([
    'sine',
    'sawtooth',
    'square',
    'triangle',
    'fmsine',
    'fmsawtooth',
    'fmtriangle',
    'amsine',
    'amsawtooth',
    'amtriangle',
  ]) as List<OscillatorType>;

  return (
    <div className="pv4">
      <div className={'pl4 pt4 flex'} style = {{padding:'20px'}}>
        {oscillators.map(o => (
          <KalimbaType
            key={o}
            title={o}
            onClick={() => setOscillator(o)}
            active={synth?.oscillator.type === o}
          />
        ))}
      </div>
      <div style={{
        backgroundImage: 'url("https://i.ibb.co/cYw3tdP/Kalimba-Instrument.png")',
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        width:'500px',
        height:'500px',
        marginLeft : 'auto',
        marginRight: 'auto'}}>
          
        <div className="relative dib h4 w-100 ml4" style={{width:'350px', height : '35px', right:'-48px', bottom:'-35px'}}>
          {Range(5,6).map(octave =>
            keys.map(key => {
              const isMinor = false;
              const note = `${key.note}${octave}`;
              return (
                <KalimbaKey
                  key={note} //react key
                  note={note}
                  synth={synth}
                  minor={isMinor}
                  octave={octave}
                  index={(octave - 2) * 7 + key.idx}
                />
              );
            }),
          )}
        </div>
      </div>
      
    </div>
  );
}

export const NaelInstrument = new Instrument('Kalimba - Nael-Yun', naelInstrument);
