// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  
  background("#0C1713");


    // star ----- start ------------------------------
  stroke(255);
  strokeWeight(0.5);
  let star_line_radius = 10;  // ANIMATE THIS WITH MUSIC!!!
  let num_star_lines = 20;
  center_x = width * 0.5;
  center_y = height * 0.5;

  let num_star_cols = 10;
  let num_star_rows = 6;

  let star_col_space = width / num_star_cols;
  let star_row_space = height / num_star_rows;
  let star_offset_x = 75;
  let star_offset_y = 65;
  
  for (let i = 0; i < num_star_cols; i++) {
    for (let j = 0; j < num_star_rows; j++) {
      for (let k = 0; k < num_star_lines; k++) {
        angle = 360.0 / num_star_lines * k;
        line(star_line_radius + star_offset_x + (star_col_space * i), star_line_radius + star_offset_y + (star_row_space * j), 
             star_line_radius + star_offset_x + (star_col_space * i) + cos(angle) * star_line_radius, star_line_radius + star_offset_y + (star_row_space * j) + sin(angle) * star_line_radius);
      }
    }
  }
  // star ----- end ------------------------------



  // sun ----- start -------------------------------------------------------
  noStroke();

  // bass is 0..100
let t = constrain(bass / 100, 0, 1);

// pick a darker base and a brighter glow
let base = color('#83690dff');   // warm yellow
let glow = color('#ffe600ff');   // bright yellow

let sunColor = lerpColor(base, glow, t);
fill(sunColor);



  //let sun_color = color("#ffe600ff");
  //sun_color *= bass * 0.01;
  //fill(sun_color);
  let sun_radius = height * 0.2;
  let sun_tri_height = 100;     // ANIMATE THIS WITH MUSIC!!!
  let num_sun_tris = 50;   // controls the number of sun rays and determines how wide each triangle is
  sun_center_x = width * 0.5;
  sun_center_y = height * 0.5;


  ellipse(width * 0.5, height * 0.5, sun_radius * 2.0, sun_radius * 2.0);


  for (let i = 0; i < num_sun_tris; i++) {
    sun_tri_angle = 360.0 / num_sun_tris * i;
   
    sun_tri_angle_incr = 360.0 / num_sun_tris * 0.5;
    triangle(sun_center_x + cos(sun_tri_angle) * sun_radius, sun_center_y + sin(sun_tri_angle) * sun_radius,
             sun_center_x + cos(sun_tri_angle + sun_tri_angle_incr) * (sun_radius + sun_tri_height), sun_center_y + sin(sun_tri_angle + sun_tri_angle_incr) * (sun_radius + sun_tri_height),
             sun_center_x + cos(sun_tri_angle + sun_tri_angle_incr * 2.0)  * sun_radius, sun_center_y + sin(sun_tri_angle + sun_tri_angle_incr * 2.0) * sun_radius);
  }
  // sun ----- end -------------------------------------------------------------








}





/*

  let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
 
// changes 
   // vocal bar is red
   fill(200, 0, 0);
   rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   fill(0);
   text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // drum bar is green
   fill(0, 200, 0);
   rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   fill(0);
   text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is blue
   fill(50, 50, 240);
   rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
   fill(0);
   text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // other bar is white
   fill(200, 200, 200);
   rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   fill(0);
   text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   fill(255, 255, 0);
 
   // display "words"
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);

   

  */ 


