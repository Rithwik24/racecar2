canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d"); 

 racecar2_width= 120;
 racecar2_height= 70;
 racecar2_image= "racecar2.png";
 racecar2_x=10;
 racecar2_y=10;

 car2_width= 120;
 car2_height= 70;
 car2_image= "car2.png";
 car2_x=10;
 car2_y=100;
 



function add() {

    background_imgTag= new Image();
    background_imgTag.onload= uploadBackground;
    background_imgTag.src = track.jpg;

    racecar2_imgTag= new Image();
    racecar2_imgTag = uploadcar1 ;
    racecar2_imgTag = racecar2_image;

    car2_imgTag= new Image();
    car2_imgTag = uploadcar2 ;
    car2_imgTag = car2_image;
}

function uploadBackground() {

    ctx.drawImage(background_imgTag , 0 , 0 , canvas.width, canvas.height );
}

function uploadracecar2() {

    ctx.drawImage(racecar2_imgTag, racecar2_x , racecar2_y , racecar2_width , racecar2_height);
}

function uploadcar2() {

    ctx.drawImage(car2_imgTag, car2_x , car2_y , car2_width , car2_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)

{


    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }


    if(keyPressed == '40')
    {

        down();
        console.log("down");
    }

    if(keyPressed == '37')

    {

       left();
       console.log("left");
    }


    if(keyPressed == '39')

    {


        right();
        console.log("right")
    }

    function car2_up()
    {
        if(car2_y>=0)
        {
            car2_y = car2_y-10;
            console.log("When up arrow is pressed, x="+car2_x+"l y"+car2_y);
            uploadBackground();
            uploadcar2();
            uploadracecar2();
        }
    }


    function car2_down()
    {
        if(car2_y<=500)
        {
            car2_y = car2_y+10;
            console.log("When down arrow is pressed, x="+car2_x+"l y"+car2_y);
            uploadBackground();
            uploadcar2();
            uploadracecar2();
        }
    }


    function car2_left()
    {
        if(car2_x>=0)
        {
            car2_y = car2_y-10;
            console.log("When left arrow is pressed, x="+car2_x+"l y"+car2_y);
            uploadBackground();
            uploadcar2();
            uploadracecar2();
        }
    }

    function car2_right()
    {
        if(car2_y<=500)
        {
            car2_y = car2_y+10;
            console.log("When right arrow is pressed, x="+car2_x+"l y"+car2_y);
            uploadBackground();
            uploadcar2();
            uploadracecar2();
        }
    }





    function racecar2_up()
    {
        if(racecar2_y>=0)
        {
            racecar2_y = racecar2_y-10;
            console.log("When up arrow is pressed, x="+racecar2_x+"l y"+racecar2_y);
            uploadBackground();
            uploadcar2();
            uploadracecar2();
        }
    }


    function racecar2_down()
    {
        if(racecar2_y<=500)
        {
            racecar2_y = racecar2_y+10;
            console.log("When down arrow is pressed, x="+racecar2_x+"l y"+racecar2_y);
            uploadBackground();
            uploadcar2();
            uploadracecar2();
        }
    }


    function racecar2_left()
    {
        if(racecar2_x>=0)
        {
            racecar2_y = racecar2_y-10;
            console.log("When left arrow is pressed, x="+racecar2_x+"l y"+racecar2_y);
            uploadBackground();
            uploadcar2();
            uploadracecar2();
        }
    }

    function racecar2_right()
    {
        if(racecar2_y<=500)
        {
            racecar2_y = racecar2_y+10;
            console.log("When right arrow is pressed, x="+racecar2_x+"l y"+racecar2_y);
            uploadBackground();
            uploadcar2();
            uploadracecar2();
        }
    }









}


