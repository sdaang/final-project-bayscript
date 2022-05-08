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
  note: string; // A4,C5,C4,A5,A3,F4,E4,E5,B5
  duration?: string;
  synth?: Tone.Synth; // Contains library code for making sound
  keyNote: string; 
  octave: number;
  index: number; // octave + index together give a location for the piano key
}

const Polysynth = new Tone.PolySynth().toDestination();


export function PianoKey({
  note,
  keyNote,
}: KalimbaKeyProps): JSX.Element {
  /**
   * This React component corresponds to either a major or minor key in the piano.
   * See `PianoKeyWithoutJSX` for the React component without JSX.
   */
  return (
    <div>
      <button 
        onMouseDown={() => {
          Polysynth?.triggerAttack(`${note}`);
        }} 
        onMouseUp={() => Polysynth?.triggerRelease(`${note}`,'+0.005')}
        style= //To style the button
        {{ 
          fontSize:'9px'
        }}>
          {keyNote}</button>
    </div>
  );
}

// eslint-disable-next-line
function PianoKeyWithoutJSX({
  note,
  synth,
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
      }),
      style: {
        top: 0,
        left: `${index * 2}rem`,
      },
    },
    [],
  );
}

function naelInstrument({ state, dispatch, synth }: InstrumentProps): JSX.Element {
  const keys = List([
    { note: "A4", idx: 0 },
    { note: "C5", idx: 0.5 },
    { note: "C4", idx: 1 },
    { note: "A5", idx: 1.5 },
    { note: "A3", idx: 2 },
    { note: "F4", idx: 2.5 },
    { note: "E4", idx: 3 },
    { note: "E5", idx: 3.5 },
    { note: "B4", idx: 4 },
  ]);

  return (
    <div className="pv1">
      <div className="pv2">
        {}
      </div>
      <div className="ClassKalimba">
        <div style={{backgroundImage: 'url("https://i.ibb.co/VpdRHnP/Kalimba.png")',backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
          <div style={{height: '500px', width: '620px',marginLeft:'auto',marginRight:'auto'}}>
            <div className="keys" style={{margin: 'auto', width: '50%', padding: '30px', display: "flex"}}>
              {Range(1, 2).map(octave =>
                keys.map(key => {
                  const note = `${key.note}`;
                  return (
                    <PianoKey
                      key={note} //react key
                      note={note}
                      synth={synth}
                      octave={octave}
                      index={(octave - 2) * 7 + key.idx}
                      keyNote={key.note}
                    />
                  );
                })
              )}
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}
export const NaelInstrument = new Instrument('Nael Instrument', naelInstrument);  