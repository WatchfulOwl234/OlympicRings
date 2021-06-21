canvas = document.getElementById("canvas");
ctx= canvas.getContext("2d");
//-----------------------------------------
color = "grey";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.rect(150, 130, 430 ,200);
ctx.stroke();
//------------------------------------------
color = "blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(230, 200, 40 ,0, 2 * Math.PI);
ctx.stroke();
//-------------------------------------------
color = "black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(350, 200, 40 ,0, 2 * Math.PI);
ctx.stroke();
//--------------------------------------------
color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(470, 200, 40 ,0, 2 * Math.PI);
ctx.stroke();
//---------------------------------------------
color = "yellow";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(290, 240, 40 ,0, 2 * Math.PI);
ctx.stroke();
//---------------------------------------------
color = "green";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(410, 240, 40 ,0, 2 * Math.PI);
ctx.stroke();


