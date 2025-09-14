// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  
  background("#0C1713");


    // star ----- start ------------------------------
  stroke(255);
  strokeWeight(0.3);
  let star_large_line_radius = 0.5 * bass;  // ANIMATE THIS WITH MUSIC!!!
  let num_star_lines = 40;
  center_x = width * 0.5;
  center_y = height * 0.5;

  let num_star_cols = 10;
  let num_star_rows = 6;

  let star_col_space = width / num_star_cols;
  let star_row_space = height / num_star_rows;
  let star_offset_x = 85;
  let star_offset_y = 85;


  // interpolate stars_large_color
  let stars_large_t = constrain(other / 100, 0, 1);

  // pick a darker base and a brighter glow
  let stars_large_base_color = color('#750000ff');   // bright yellow
  let stars_large_glow_color = color('#fab7b7ff');   // bright yellow

  let stars_large_color = lerpColor(stars_large_base_color, stars_large_glow_color, stars_large_t);
  stroke(stars_large_color);
  
  for (let i = 0; i < num_star_cols; i++) {
    for (let j = 0; j < num_star_rows; j++) {
      for (let k = 0; k < num_star_lines; k++) {
        angle = 360.0 / num_star_lines * k;
        line(star_offset_x + (star_col_space * i), star_offset_y + (star_row_space * j), 
             star_offset_x + (star_col_space * i) + cos(angle) * star_large_line_radius, star_offset_y + (star_row_space * j) + sin(angle) * star_large_line_radius);
      }
    }
  }


  // interpolate stars_small_color
  let stars_small_t = constrain(vocal / 100, 0, 1);

  // pick a darker base and a brighter glow
  let stars_small_base_color = color('#000275ff');   // bright yellow
  let stars_small_glow_color = color('#b8b7faff');   // bright yellow

  let stars_small_color = lerpColor(stars_small_base_color, stars_small_glow_color, stars_small_t);
  stroke(stars_small_color);
  let star_small_line_radius = 0.4 * drum;
  for (let i = 0; i < num_star_cols; i++) {
    for (let j = 0; j < num_star_rows; j++) {
      for (let k = 0; k < num_star_lines; k++) {
        angle = 360.0 / num_star_lines * k;
        line(star_offset_x + star_col_space * 0.5 + (star_col_space * i), star_offset_y + star_row_space * 0.5 + (star_row_space * j), 
             star_offset_x + star_col_space * 0.5 + (star_col_space * i) + cos(angle) * star_small_line_radius, star_offset_y + star_row_space * 0.5 + (star_row_space * j) + sin(angle) * star_small_line_radius);
      }
    }
  }



  // star ----- end ------------------------------



  // sun ----- start -------------------------------------------------------
  noStroke();


let bass_t = constrain(bass / 100, 0, 1);

// pick a darker base and a brighter glow
let sun_base_color = color('#83690dff');   // warm yellow
let sun_glow_color = color('#ffe600ff');   // bright yellow

let sun_color = lerpColor(sun_base_color, sun_glow_color, bass_t);
fill(sun_color);

  let sun_radius = height * 0.2;
  let sun_tri_height = Math.max(50, vocal * 3.0);     // ANIMATE THIS WITH MUSIC!!!
  let num_sun_tris = 50;   // controls the number of sun rays and determines how wide each triangle is
  sun_center_x = width * 0.5;
  sun_center_y = height * 0.5;

  sun_diameter = sun_radius * 2;
  ellipse(width * 0.5, height * 0.5, sun_diameter, sun_diameter);

  // sun drum animation
  fill(sun_color, drum * (255 / 100))
  sun_diameter = sun_radius * 2 * drum * 0.005 + 350;
  ellipse(width * 0.5, height * 0.5, sun_diameter, sun_diameter);

  
  // interpolate sunray_color
  let sunray_t = constrain(bass / 100, 0, 1);

  // pick a darker base and a brighter glow
  let sunray_base_color = color('#756a00ff');   // bright yellow
  let sunray_glow_color = color('#faf3b7ff');   // bright yellow

  let sunray_color = lerpColor(sunray_base_color, sunray_glow_color, sunray_t);
  fill(sunray_color);


  push(); 
  translate(width * 0.5, height * 0.5); 
  rotate(counter * 0.0125 * map(vocal, 0, 100, 0.1, 1)); // deg per frame
  translate(width * -0.5, height * -0.5); 
  // draw sunrays
  for (let i = 0; i < num_sun_tris; i++) {
    sun_tri_angle = 360.0 / num_sun_tris * i;
   
    sun_tri_angle_incr = 360.0 / num_sun_tris * 0.5;
    triangle(sun_center_x + cos(sun_tri_angle) * sun_radius, sun_center_y + sin(sun_tri_angle) * sun_radius,
             sun_center_x + cos(sun_tri_angle + sun_tri_angle_incr) * (sun_radius + sun_tri_height), sun_center_y + sin(sun_tri_angle + sun_tri_angle_incr) * (sun_radius + sun_tri_height),
             sun_center_x + cos(sun_tri_angle + sun_tri_angle_incr * 2.0)  * sun_radius, sun_center_y + sin(sun_tri_angle + sun_tri_angle_incr * 2.0) * sun_radius);
  }
  // draw rays here
  pop();




  // sun ----- end -------------------------------------------------------------



  // text lyrics ----- start ---------------------------------------------
    // drum is 0..100
  let lyrics_t = constrain(vocal / 100, 0, 1);

  // pick a darker base and a brighter glow
  let lyrics_base_color = color('#755600ff');   // bright yellow
  let lyrics_glow_color = color('#ffd993ff');   // bright yellow

  let lyrics_color = lerpColor(lyrics_base_color, lyrics_glow_color, lyrics_t);
  fill(lyrics_color); 
  
  // display "words"
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/2 + 10);

  // text lyrics ------ end ----------------------------------------









}


