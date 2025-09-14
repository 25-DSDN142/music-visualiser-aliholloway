

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
   
  background("#0C1713");

  // sun ----- start -------------------------------------------------------
  noStroke();
  fill("#ffe600ff");
  let sun_radius = height * 0.33;
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




  // star -----------------------------------
  stroke(255);
  strokeWeight(2);
  let star_line_radius = 20;
  let num_star_lines = 20;
  center_x = width * 0.5;
  center_y = height * 0.5;


  for (let i = 0; i < num_star_lines; i++) {
    angle = 360.0 / num_star_lines * i;
    line(center_x, center_y, center_x + cos(angle) * star_line_radius, center_y + sin(angle) * star_line_radius);
  }



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


