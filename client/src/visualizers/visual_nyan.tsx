// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

//test
export const FlowerVisualizer = new Visualizer(
    'FlowerVisualizer (Nyan)', (p5: P5, analyzer: Tone.Analyser) => {
        const width = 50;
        const height = 100;
        const colors = ['purple', 'green', 'yellow', 'red']
        const strokeWeight = colors[Math.floor(Math.random() * (colors.length))];

        p5.background('black');
        p5.stroke(String(strokeWeight));
        const values = analyzer.getValue();

        p5.beginShape();

        for(let i=0; i<values.length; i++){
            const amplitude = values[i] as number;
            const x = p5.map(i, 0, values.length-1, 0, width/2);
            const y = p5.map(i, 0, values.length-1, 0, height/2);
            const angleX = p5.map(i, 0, x, Math.PI*(-4), 4*Math.PI);
            const angleY = p5.map(i, 0, y, Math.PI*(-4), 4*Math.PI);
            const angle = angleX * (x/width) + angleY * (y/height);

            for(let j=0; j<10; j++) {
                const drawX = (width*(-4)) - width / 2 * p5.cos(2 * Math.PI * amplitude + angle);
                const drawY = (height*(-0.5)) - height / 2 * p5.sin(2 * Math.PI * -1 * amplitude + angle);
                p5.circle(drawX + j * 145, drawY, 10);
                p5.circle(drawX + j * 145, drawY + 1 * 150, 10);
                p5.circle(drawX + j * 145, drawY, 10);
                p5.circle(drawX + j * 145, drawY + 1 * 150, 10);
            }
        }
        p5.endShape();
    },
    
); 