import { Ppt24 } from '@carbon/icons-react';
import P5 from 'p5';
import * as Tone from 'tone';
import { couldStartTrivia } from 'typescript';
import { SideNav } from '../SideNav';

// project imports
import { Visualizer } from '../Visualizers';


export const CircleVisualizer = new Visualizer(
  'Circle-khtun1',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);
    p5.background(0, 0, 0, 255);
    // const r = p5.random(255);
    // const g = p5.random(255);
    // const b = p5.random(255);
    // p5.stroke(r,g,b); //comment it out if you have photosensitive epilepsy
    // p5.stroke(255,255,255,255);
    p5.stroke(255,255,0);
    
    p5.strokeWeight(dim * 0.005);
    p5.noFill();
    p5.translate((width/2.5), height/2); //to center the circle

    const values = analyzer.getValue();
    p5.beginShape();
    for (let i = 0; i < 180; i++) {
      //const amplitude = values[i] as number;
      const index = p5.floor(p5.map(i, 0, 180, 0, values.length/10));
      const radius = p5.map(values[index] as number, -0.5, 1, 150, 350);
      const x = radius * Math.sin(i);
      const y = radius * Math.cos(i);
      // Place vertex
      p5.vertex(x, y);
    }
    p5.endShape();
  },
);
