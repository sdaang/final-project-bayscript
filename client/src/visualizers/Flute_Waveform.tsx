// 3rd party library imports
import { CenterCircle16, Pdf16, Translate16 } from "@carbon/icons-react";
import P5 from "p5";
import * as Tone from "tone";
import { couldStartTrivia } from "typescript";

// project imports
import { Visualizer } from "../Visualizers";

// Information ---------------------------------------------------------------------
// Name:       Sabrina Dang
// Instrument: Flute
// ---------------------------------------------------------------------------------

// References
// https://p5js.org/examples/simulate-particle-system.html
// https://p5js.org/reference/#/p5/quad
// https://p5js.org/reference/#/p5/colorMode
// https://www.youtube.com/watch?v=Bk8rLzzSink&t=9s   (more info on sound synthesis (e.g. amplitude))

export const WaveformVisualizerFlute = new Visualizer(
  "Flute Visualizer - sdaang",
  (p5: P5, analyzer: Tone.Analyser) => {
    // Visualizer Window Attributes
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const values = analyzer.getValue();
    p5.background("black");

    // Visualizer Colors
    const colors = ["purple", "blue", "pink", "dark purple"];
    const colors2 = ["black", "white", "black", "white"]
    const strokeColors = colors[Math.floor(Math.random() * colors.length)];
    const strokeColors2 = colors2[Math.floor(Math.random() * colors.length)];
    p5.translate(width / 2.5, height / 2);
    p5.noFill();

    // ParticleEffect Class -------------------------------------------------------------------------------------------
    class ParticleEffect {
      position: any;
      velocity: any;
      acceleration: any;

      constructor() {
        // positioning of the particle is randomized every frame
        this.position = p5.createVector(p5.random(width), p5.random(height));
        // acceleration of particle (left vs right )
        this.velocity = p5.createVector(p5.random(-2, 2), p5.random(-2, 2));
        this.acceleration = p5.createVector(0, 0);
      }

      update() {
        this.position.add(this.velocity);
      }

      show() {
        p5.noStroke();
        p5.fill(255);
        p5.ellipse(this.position.x, this.position.y, 4);
      }
    }
    // End of ParticleEffect Class -------------------------------------------------------------------------------------


    // Double Circle Base Planet ---------------------------------------------------------------------------------------
    p5.angleMode(p5.DEGREES); // Angle Mode changed to get the amount of rotation turn 

    // Outer Circle
    for (let i = -1; i <= 1; i += 2) {
      p5.beginShape();
      for (let j = 0; j < values.length; j++) {
        const amplitude = values[j] as number;
        let index = p5.floor(p5.map(i, 0, 180, 0, values.length - 1));
        p5.noFill()
        p5.stroke(strokeColors)


        let radius = p5.map(amplitude, -1, 1, 100, 475);
        let x = radius * p5.sin(j) * i;
        let y = radius * p5.cos(j) * i;
        // Place vertex
        p5.vertex(x, y);
      }
      p5.endShape();
    }

    // Inner Circle
    p5.fill('white')
    for (let i = -3; i <= 2; i += 2) {
      p5.beginShape();
      for (let j = 0; j <= 360; j += 0.25) {
        const amplitude = values[i] as number;
        let index = p5.floor(p5.map(i, 0, 180, 0, values.length - 1));
        p5.stroke('gray');
  
        var radius = p5.map(amplitude, -2, 1, 100, 300);
        let x = radius * p5.sin(j) * i;
        let y = radius * p5.cos(j) * i;
        // Place vertex
        p5.vertex(x, y);
      }
      p5.endShape();
    }

    // Second Half of Circle for the half circle dissonance effect --------------
    // for (let i = -3; i <= 2; i += 2) {
    //   p5.beginShape();
    //   for (let j = 360; j >= 180; j -= 0.25) {
    //     const amplitude = values[i] as number;
    //     let color = p5.random(0,360)
    //     p5.stroke(color, color, color);

    //     let index = p5.floor(p5.map(i, 0, 180, 0, values.length - 1));
    //     var radius = p5.map(amplitude, -2, 1, 100, 400)
    //     let x = radius * p5.sin(j) * i;
    //     let y = radius * p5.cos(j) * i;
    //     // Place vertex
    //     p5.vertex(x, y);
    //   }
    //   p5.endShape();
    // }
    // -----------------------------------------------------------------------------

    p5.angleMode(p5.RADIANS);

    // End of Doubel Circle Base --------------------------------------------------------------------------------------

    // Randomized Particles -------------------------------------------------------------------------------------------
    let particles = [];
    for (let i = 0; i <= 2; i++) {
      let s = new ParticleEffect();
      particles.push(s);
    }

    for (let i = 0; i < particles.length; i++) {
      particles[i].show();
      p5.fill("white");
    }
    // End of Radomized Particles -------------------------------------------------------------------------------------

    // Halo Effect (Each Shape on the Halo is an Arc) -----------------------------------------------------------------
    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      //p5.noFill();
      p5.stroke(255);
      p5.strokeJoin("round");
      p5.strokeWeight(1);

      let radius = p5.map(amplitude, 0, 1, 150, 1000);
      let x = radius * p5.sin(i) * 4;
      let y = (radius * p5.cos(i)) / 2;

      //p5.translate(p5.createVector(p5.millis() /15));

      // Place vertex
      //p5.vertex(x, y);

      //p5.vertex(x, y, 25);

      //p5.fill("white");

      p5.stroke(strokeColors);
      p5.arc(x, y, 5, 10, 0, p5.HALF_PI);

      // Falling Snow effect -> No need since I have another function for stars
      // for (let j = 0; j < 2; j++) {
      //   p5.fill("white");
      //   p5.ellipse(50, -300 + p5.frameCount, 0.5);
      //   p5.ellipse(-250, -200 + p5.frameCount, 0.5);
      //   p5.ellipse(-350, -20 + p5.frameCount, 0.5);
      //   p5.ellipse(-400, -200 + p5.frameCount, 0.5);
      // }

      // Flower Ellipse Shape
      // p5.ellipse(0, 30, 20, 80);
      // p5.rotate(p5.PI / 5);
    }
    p5.endShape();
    // End of Halo Effect----------------------------------------------------------------------------------------------------

    // Flower Ellipse Piece -------------------------------------------------------------------------------------------------
    // p5.beginShape();
    // for (let i = 0; i < values.length; i++) {
    //   const amplitude = values[i] as number;
    //   p5.noFill();
    //   p5.stroke(255);
    //   p5.strokeJoin("round");
    //   p5.strokeWeight(1);

    //   let radius = p5.map(amplitude, 0, 1, 150, 1000);
    //   let x = radius * p5.sin(i) * 4;
    //   let y = (radius * p5.cos(i)) / 2;


    //   p5.noFill()

    //   p5.stroke('black');

    //   //Flower Ellipse Shape
     

    //   p5.ellipse(0, 5, 30, y);
    //   p5.rotate(p5.PI / 5);
    // }
    // p5.endShape();
   // -----------------------------------------------------------------------------------------------------------------------

   // Particle Movement -----------------------------------------------------------------------------------------------------


   p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      p5.stroke('white');

      let radius = p5.map(amplitude, 0, 1, 150, 50);
      let x = radius * p5.sin(i) * 6;
      let y = (radius * p5.cos(i)) / 2;

      for (let j = 0; j < 10; j += 5) {

        p5.ellipse(x, -300 + p5.frameCount * 5, 0.5);
        p5.ellipse(y, -200 + p5.frameCount * 5, 0.5);
        // p5.ellipse(-350, -20 + p5.frameCount, 0.5);
        // p5.ellipse(-400, -200 + p5.frameCount, 0.5);
      }

      p5.rotate(p5.PI / 10);
    }
    p5.endShape();

    for(let i = 0; i < 25; i ++){
      
    }

    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      p5.stroke('white');

      let radius = p5.map(amplitude, 0, 1, 150, 50);
      let x = radius * p5.sin(i) * 8;
      let y = (radius * p5.cos(i)) / 2;

      for (let j = 0; j < 10; j += 5) {

        p5.ellipse(x, -300 + p5.frameCount /4, 0.5);
        p5.ellipse(y, -200 + p5.frameCount /4, 0.5);
        // p5.ellipse(-350, -20 + p5.frameCount, 0.5);
        // p5.ellipse(-400, -200 + p5.frameCount, 0.5);
      }

      p5.rotate(p5.PI / 10);
    }
    p5.endShape();
    // ----------------------------------------------------------------------------------------------------------------------



    // p5.beginShape();
    // for (let i = 0; i < values.length; i++) {
    //   const amplitude = values[i] as number;
    //   p5.noFill();
    //   p5.stroke(255);

    //   let radius = p5.map(amplitude, 0, 1, 150, 1000);
    //   let x = radius * p5.sin(i) * 4;
    //   let y = (radius * p5.cos(i)) / 2;

    //   for (let j = 0; j < 5; j += 2) {
    //     p5.fill("white");
    //     p5.ellipse(x, 250 - p5.frameCount, 2);
    //     p5.ellipse(-250, -200 + p5.frameCount, 0.5);
    //     // p5.ellipse(-350, -20 + p5.frameCount, 0.5);
    //     // p5.ellipse(-400, -200 + p5.frameCount, 0.5);
    //   }

    //   p5.rotate(p5.PI / 5);
    // }
    // p5.endShape();

    // ----------------------------------------------
    // p5.beginShape();
    // for (let i = 0; i < values.length; i++) {
    //   const amplitude = values[i] as number;
    //   //p5.background('black');
    //   //p5.fill('#FFB93F')
    //   p5.noFill()
    //   p5.stroke(255)
    //   p5.strokeJoin('round')

    //   //p5.translate(0,0)

    //   //p5.translate(4,2.7)
    //   let radius = p5.map(amplitude, 0, 1, 150, 500);
    //   let x = radius * p5.sin(i) * 1;
    //   let y = radius * p5.cos(i);

    //   // Place vertex
    //   //p5.vertex(x, y);
    //   //p5.triangle(30, 75, 58, 20, 86, 75)

    //   const colors = ['purple', 'blue', 'pink', 'dark purple']
    //   const strokeWeight = colors[Math.floor(Math.random() * (colors.length))];
    //   p5.fill(strokeWeight);

    //   p5.stroke('white')
    //   p5.arc(x, y, 5, 5, 0, p5.HALF_PI)

    // }
    // p5.endShape();
    // ----------------------------------------

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

    // p5.beginShape();
    // for (let i = 0; i < values.length; i++) {
    //   const amplitude = values[i] as number;
    //   //p5.background('black');
    //   p5.fill('#FFB93F')

    //   p5.translate(1.25,2.7)
    //   let radius = p5.map(amplitude, -1, .005, 225, 600);
    //   let x = radius * p5.sin(i) * 1;
    //   let y = radius * p5.cos(i) ;

    //   // Place vertex
    //   p5.vertex(x, y);
    // }
    // p5.endShape();
    // // ----------------------------------------

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
  }
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
