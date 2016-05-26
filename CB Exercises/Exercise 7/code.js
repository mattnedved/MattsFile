void setup()
{
    size(400, 400);
}

// position of the ball
var x = 20;
var y = 200;

// how far the ball moves every time
var xspeed = 2;
var yspeed = 3;

var r = 65;//main value of 0, max value of 255
var g = 65;//main value of 0, max value of 255
var b = 65;//main value of 0, max value of 255
var rd = 90;
var gr = 18;
var bl = 92;

var rval = 1;

var whatToDraw = 0;

void draw(){
    //this colors in the background, change a value to change the color
    background(rd, gr, bl);

    //this draws the ball
    if(rval==1){
        ellipse(x, y, 50, 50);
    }
    else{
        rect(x, y, 50, 50)
    }

    //This is how the color of the ball is determined.  Don't worry about the format, just know that changing the value of a variable will change it's color.
    fill(r,g,b);

    //@TODO 1: make the ball bounce back and forth
    if(x>=350){
        xspeed=-2;
        rval=2;
        r=255; g=154; b=10;
        rd=53; gr=255; bl=1;
    }
    else if(x<=25){
        xspeed=2;
        rval=2;
        r=65; g=65; b=65;
        rd=53; gr=255; bl=1;
    }

    //@TODO 2: does the ball bounce on it's edge or the center? Make it bounce on it's edge. Keep in mind that it's diameter is 50 and we draw it from the center...

    //@TODO 3: make the ball bounce in the y coordinate using the same structure you did for x.  Does it bounce in a predictable or unpredictable manner? How do you fix that?
    if(y>=350){
        rval=1;
        yspeed=-2;
        r=255; g=15; b=155;
        rd=90; gr=18; bl=92;
    }
    else if(y<=25){
        rval=1;
        yspeed=2;
        r=20; g=30; b=252;
        rd=90; gr=18; bl=92;
    }


    //@TODO 4: can you draw a different shape when it bounces off a wall?
    //         use rect(x, y, 50, 50)


    // move the ball
    x = x + xspeed;
    y = y + yspeed;

    //@TODO 5: can you create code to make the ball change color?
    //      use a similar series of if statements and change the value of the r and rval variables

};