// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

export const NaelWaveformVisualizer = new Visualizer(
  'Nael Waveform - Nael-Yun',

  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const dim = Math.min(width, height);

    let rgbColors:string[] = ['rgb(235,50,195)', 'rgb(255,0,227)', 'rgb(255,38,104)','rgb(255,138,174)','rgb(28,255,0)']
    p5.background('#702E42');
    p5.strokeWeight(dim * 0.008);

    // p5.rect(2,2,2,400)
    // p5.rect(2,2,1400,2)
    // p5.rect(1275,2,2,400)
    // p5.rect(2,368,1400,2)

    for (let i = rgbColors.length - 1; i > 0; i--) {
      let random = Math.floor(Math.random() * (i + 1))
      let temp = rgbColors[i] 
      rgbColors[i] = rgbColors[random]
      rgbColors[random] = temp 
      p5.stroke(rgbColors[i])
    }

    const values = analyzer.getValue();
    p5.translate(width / 2.5, height / 4) 
  
    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const r = values[i] as number   
      const x = r * Math.cos(i) * width / 1.5
      const y = r * Math.sin(i) * width / 1.5
      p5.point(x, y);
    }
    p5.endShape();
  },
);