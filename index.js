var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var myimage = new Image()
    myimage.src = "alien.png";
    var x = canvas.width / 2;
    var y = canvas.height - 60;
    var dx = 2

    var alienHeight = 160 * 1.5;
    var alienWidth = 100 * 1.25;
    var alienX = (canvas.width-alienWidth) / 2;
    var rightPressed = false;
    var leftPressed = false;

    var counterR = 0;
    var counterL = 0;

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    function keyDownHandler(e)
    {
        if(e.key == "Right" || e.key == "ArrowRight")
        {
            rightPressed = true;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft")
        {
            leftPressed = true;
        }
    }
    function keyUpHandler(e)
    {
        if(e.key == "Right" || e.key == "ArrowRight")
        {
            rightPressed = false;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft")
        {
            leftPressed = false;
        }
    }
    function drawAlien()
    {
        ctx.beginPath();
        ctx.drawImage(myimage, alienX, (canvas.height-alienHeight) /1.25, alienWidth, alienHeight);
        //ctx.drawImage(myimage, alienX, alienHeight);
        //ctx.(alienX, (canvas.height-alienHeight) / 1.25, alienWidth, alienHeight);
        //ctx.rect(alienX, canvas.height-alienHeight, alienWidth, alienHeight);
        //ctx.fillStyle = "#0095DD";
        //ctx.fill();
        ctx.closePath();
    }
    function draw()
    {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        drawAlien();
        if(rightPressed)
        {
            alienX += 2;
            if((counterR % 8) == 0 || (counterR % 8) == 1)
            {
                myimage.src="alien1.png";
            }
            else if(((counterR % 8) == 2 || (counterR % 8) == 3))
            {
                myimage.src="alien2.png";
            }
            else if((counterR % 8) == 4 || (counterR % 8) == 5)
            {
                myimage.src="alien3.png";
            }
            else if((counterR % 8) == 6 || (counterR % 8) == 7)
            {
                myimage.src="alien4.png";
            }
            counterR += 1;
            counterL = 0;

            if(alienX + alienWidth > canvas.width)
            {
                alienX = canvas.width - alienWidth;
            }
        }
        else if(leftPressed)
        {
            alienX -= 2;
            if((counterL % 4) == 0)
            {
                myimage.src="alien_1.png";
            }
            else if((counterL % 4) == 1)
            {
                myimage.src="alien_2.png";
            }
            else if((counterL % 4) == 2)
            {
                myimage.src="alien_3.png";
            }
            else if((counterL % 4) == 3)
            {
                myimage.src="alien_4.png";
            }
            counterL += 1;
            counterR = 0;
            
            if(alienX < 0)
            {
                alienX = 0;
            }
        }
        else
        {
            myimage.src="alien.png";
            counterR = 0;
            counterL = 0;
        }
        x += dx;
    }
    setInterval(draw, 10)

