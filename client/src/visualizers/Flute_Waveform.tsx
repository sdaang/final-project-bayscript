// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';
import { couldStartTrivia } from 'typescript';

// project imports
import { Visualizer } from '../Visualizers';


export const WaveformVisualizerFlute = new Visualizer(
  'Flute Waveform',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight/2;
    const strokeColors = ['white', 'black']
    // const color = strokeColors[Math.floor(Math.random() * (strokeColors.length + 1))];
    const color = 'white';

    p5.background(25, 5, 20, 255);
    p5.stroke(String(color));
    const values = analyzer.getValue();
    


    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;

      const x = p5.map(i, 0, values.length - 1, 0, width);
      const y = height / 2 + amplitude * height;

    // const x = p5.map(i, 0, values.length - 1, 500, width / 2);
    // const y = p5.map(i, 0, values.length - 1, 0, height / 2);

    //   const xCircle = p5.circle(30,30,20)
    //   const yCircle = p5.circle(30,30,20)
      const myX = p5.cos(i);
      const myY = p5.sin(i);

      let circleColor = 'black';
      p5.fill(circleColor);
    //   p5.translate(width/2, height/2);
      p5.circle(50, 50, 50); 
      p5.circle(100, 100, 500); 

   
      // Place vertex
      p5.vertex(x, y);
    }
    p5.endShape();
},
);
