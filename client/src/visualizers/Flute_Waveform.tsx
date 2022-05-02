// 3rd party library imports
import { CenterCircle16, Pdf16, Translate16 } from '@carbon/icons-react';
import P5 from 'p5';
import * as Tone from 'tone';
import { couldStartTrivia } from 'typescript';

// project imports
import { Visualizer } from '../Visualizers';

// References 
// https://p5js.org/examples/simulate-particle-system.html
// https://p5js.org/reference/#/p5/quad
// https://www.youtube.com/watch?v=Bk8rLzzSink&t=9s   (more info on sound synthesis (e.g. amplitude))


export const WaveformVisualizerFlute = new Visualizer(
  'Flute Waveform',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight/2;
    let tempColor = '#F9AE2E'
    //const strokeColors = ['rgba(255,140,0)', 'rgba(255,69,0)']
    // const color = strokeColors[ 2 * Math.floor(Math.random()];
    const color = '#c93d06';
    let angle = 0;

    //p5.background(25, 5, 20, 255);
    p5.background('black')
    p5.stroke(String(color));
    const values = analyzer.getValue();
    //p5.translate(width/2, height/2);
 
    // for(let i = 0; i < 50; i++){
    //   let position 
    //   position = p5.createVector(0,0)
    // }


    class ParticleEffect{
      position: any
      velocity: any
      acceleration: any


     constructor(){
       // positioning of the particle is randomized every frame
       this.position = p5.createVector(p5.random(width), p5.random(height))
       // acceleration of particle (left vs right )
       this.velocity = p5.createVector(p5.random(-2,2),p5.random(-2,2))
       this.acceleration = p5.createVector(0,0)
     }

     update(){
       this.position.add(this.velocity)
     }

     show(){
       p5.noStroke()
       p5.fill(255)
       p5.ellipse(this.position.x, this.position.y, 4)

     }

     
   }
 

    // ------------------------------------------------------------------------------------------------------
    // // Circular shape created -> idea already done by Kaung, so I can't do it too, NEW IDEA (le cube)
    // for(let i = -3; i <= 2; i+= 2){
    //   p5.beginShape();
    //   for (let j = 0; j <= 180; j+= 0.25) {
    //     const amplitude = values[i] as number;
    //     let index = p5.floor(p5.map(i, 0, 180, 0, values.length - 1))
    //     let radius = p5.map(amplitude, -1, 1, 150, 350);
    //     let x = radius * p5.sin(j) * i;
    //     let y = radius * p5.cos(j);

    //     p5.box
    //     // Place vertex
    //     p5.vertex(x, y);
    //   }
    // p5.endShape();
    // } // end of out loop ---------------------------------------------------------------------------------

    // CUBE IDEA WITH RECT() --------------------------------------------------------------------------------
    // function draw(){
    //   p5.fill('black')
    //   p5.rect(-200,-150,300,300);
    //   p5.quad(-200, -150, -50, -225, 200, -225, 100, -150);
      
    // }
    // draw() 
    // ------------------------------------------------------------------------------------------------------

    // Circle Upgrade ---------------------------------------------------------------------------------------
    // p5.beginShape();
    // for (let i = 0; i < values.length; i++) {
    //   const amplitude = values[i] as number;
    //   p5.background('black');
    //   p5.fill('black')

    //   p5.translate(1.25,1.25)
    //   let radius = p5.map(amplitude, -1, .005, 225, 300);
    //   let x = radius * p5.sin(i) * 1;
    //   let y = radius * p5.cos(i);
      
    //   // Place vertex
    //   p5.vertex(x, y);
    // }
    // p5.endShape();
    
    let particles = []
    for(let i = 0; i <= 2; i++){
     let s = new ParticleEffect()
     particles.push(s)
    }
 
    for(let i = 0; i < particles.length; i++){
      particles[i].show()
      p5.fill('white')
      
    }

    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      //p5.background('black');
      p5.fill('#FFB93F')

      p5.translate(1.25,2.7)
      let radius = p5.map(amplitude, -1, .005, 225, 600);
      let x = radius * p5.sin(i) * 1;
      let y = radius * p5.cos(i) ;
      
      // Place vertex
      p5.vertex(x, y);
    }
    p5.endShape();
    // ----------------------------------------



    // FRONT FACE -------------------------------
    // Horizontal Line #1
    // p5.beginShape();
    // for (let i = 0; i < values.length; i++) {
    //   const amplitude = values[i] as number;
    //   p5.background(25, 5, 20, 255);
    //   p5.fill('black')

    //   p5.translate(3.1,-0.5)
    //   const x = p5.map(i, 0, 5, 0, 7);
    //   const y = height / 2 + amplitude * height/4;

    //   p5.translate(3.1,-0.5)
    //   const v = p5.map(i, 0, 5, 0, 7);
    //   const z = height / 2 + amplitude * height/4;
      
    //   // Place vertex
    //   p5.vertex(x, y);
    //   p5.vertex(v ,z)
    // }
    
    // p5.endShape();


    // // Vertical Line #1
    // p5.beginShape();
    // for (let i = 0; i < values.length; i++) {
    //   const amplitude = values[i] as number;

    //   p5.translate(310,225)
    //   const x = p5.map(i, 0, 5, 0, 7);
    //   const y = height / 2 + amplitude * height/4;
    //   p5.rotate(-5.0253);
      
      
    //   // Place vertex
    //   p5.vertex(x, y);
    // }
    
    // p5.endShape();


        // // Line #2
    // p5.beginShape();
    // for (let i = 0; i < values.length; i++) {
    //   const amplitude = values[i] as number;

    //   p5.translate(1,-0.5)
    //   const x = p5.map(i, 0, 5, 0, 10);
    //   const y = height / 2 + amplitude * height/4;
      
    //   // Place vertex
    //   p5.vertex(x, y);
    // }
    
    // p5.endShape();



},
);

// p5 Reference Notes
/** p5.quad()
 *  Example:quad(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4, [detailX], [detailY])
    x1 Number: the x-coordinate of the first point
    y1 Number: the y-coordinate of the first point
    x2 Number: the x-coordinate of the second point
    y2 Number: the y-coordinate of the second point
    x3 Number: the x-coordinate of the third point
    y3 Number: the y-coordinate of the third point
    x4 Number: the x-coordinate of the fourth point
    y4 Number: the y-coordinate of the fourth point
    detailX Integer: number of segments in the x-direction (Optional)
    detailY Integer: number of segments in the y-direction (Optional)
    z1 Number: the z-coordinate of the first point
    z2 Number: the z-coordinate of the second point
    z3 Number: the z-coordinate of the third point
    z4 Number: the z-coordinate of the fourth point 


    p5.map()
    Example: map(value, start1, stop1, start2, stop2, [withinBounds])
    value Number: the incoming value to be converted
    start1 Number: lower bound of the value's current range
    stop1 Number: upper bound of the value's current range
    start2 Number: lower bound of the value's target range
    stop2 Number: upper bound of the value's target range
    withinBounds Boolean: constrain the value to the newly mapped range (Optional)
    Returns
    Number: remapped number
*/
