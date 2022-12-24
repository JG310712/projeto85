//Criar uma referência para tela
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Dê altura e largura específicas para a imagem do carro
greencar_width = 75;
greencar_height = 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

//Defina a posição inicial para uma imagem de carro.
greencar_x = 5;
greencar_y= 255;

function add() {
	//carregar carro e imagens de fundo na tela.
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;
	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	//Defina a função ‘uploadBackground’
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadGreenCar() {
	//Defina a função ‘uploadGreenCar’.
	ctx.drawImage(greencar_imgTag, greencar_x,greencar_y,greencar_width, greencar_height);

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
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
			console.log("right");
		}
		
		
}

function up()
{
	//Definir função para mover o carro para cima
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		console.log("quando a seta direcional Cima for pressionada, x =" + greencar_x + "| y ="+greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	//Definir função para mover o carro para baixo
	if(greencar_y <=0)
	{
		greencar_y = greencar_y + 10;
		console.log("quando a seta direcional Baixo for pressionada, x =" + greencar_x + "| y ="+greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	//Definir função para mover o carro para o lado esquerdo
	if(greencar_y >=0)
	{
		greencar_x = greencar_x - 10;
		console.log("quando a seta direcional Esquerda for pressionada, x =" + greencar_x + "| y ="+greencar_x);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	//Definir função para mover o lado direito do carroif(greencar_y >=0)
	if(greencar_x <=0)
	{
		greencar_x = greencar_x + 10;
		console.log("quando a seta direcional Direita for pressionada, x =" + greencar_x + "| y ="+greencar_x);
		uploadBackground();
		uploadgreencar();
	}
}
