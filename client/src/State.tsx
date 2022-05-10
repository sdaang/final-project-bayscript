// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { FluteInstrument } from './instruments/Flute';
import { NaelInstrument } from './instruments/NaelInstrument';
import { ViolinInstrument } from './instruments/violin_nyan';

import { WaveformVisualizer } from './visualizers/Waveform';
import { WaveformVisualizerFlute } from './visualizers/Flute_Waveform';
import { CircleVisualizer } from './visualizers/Circle_Kaung';
import { NaelWaveformVisualizer } from './visualizers/NaelWaveform';
import { EllipseVisual } from './visualizers/visual_nyan';
import { xylophoneInstrument } from './instruments/xylophone_kaung';



/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */
export type AppState = Map<string, any>;           // similar to { [id: string]: any }

/**
 * Start with the default piano instrument.
 * Add your instruments to this list.
 */
const instruments = List([PianoInstrument, FluteInstrument, NaelInstrument, ViolinInstrument, xylophoneInstrument]);     // similar to Instrument[]

/**
 * Start with the default waveform visualizer.
 * Add your visualizers to this list.
 */
const visualizers = List([WaveformVisualizer, EllipseVisual, NaelWaveformVisualizer, CircleVisualizer, WaveformVisualizerFlute ]);    // similar to Visualizer[]

/**
 * The default application state contains a list of instruments and a list of visualizers.
 *
 * 'instrument': List<Instrument>
 * 'visualizer': List<Visualizer>
 */
export const defaultState: AppState = Map<string, any>({
  'instruments': instruments,
  'visualizers': visualizers,
});

