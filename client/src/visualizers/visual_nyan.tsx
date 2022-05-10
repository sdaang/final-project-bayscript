// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Ellipse Visualizer.
 * References: https://p5js.org/
 * Author: Nyan Lin Tun
 ** ------------------------------------------------------------------------ */

//test
export const EllipseVisual = new Visualizer(
    'EllipseVisual - nyanjustint', (p5: P5, analyzer: Tone.Analyser) => {
        const width = 300;
        const height = 100;
        const colors = ['purple', 'green', 'yellow', 'red']
        const strokeWeight = colors[Math.floor(Math.random() * (colors.length))];
        p5.fill(strokeWeight);
        p5.background('black');
        p5.stroke(String(strokeWeight));
        const values = analyzer.getValue();

        p5.beginShape();

        for(let i=0; i<values.length; i++){
            const index = p5.map(i, 0, 80, 0, values.length+1);
            const radius = p5.map(values[index] as number, -1, 1, 100, 300);
            const x = radius * Math.sin(i);
            const y = radius * Math.cos(i);
            
            const place = [80,180];
            const randomX = place[Math.floor(Math.random() * (place.length))]
            p5.ellipse(x+200,y,randomX,randomX);
            p5.ellipse(x+400,y,randomX,randomX);
            p5.ellipse(x+500,y-200,randomX,randomX);
            p5.ellipse(x+600,y+100,randomX,randomX);
            p5.ellipse(x+700,y-150,randomX,randomX);
            p5.ellipse(x+800,y,randomX,randomX);
            p5.ellipse(x+1000,y-100,randomX,randomX);
            
        }
        p5.endShape();
    },
    
); 