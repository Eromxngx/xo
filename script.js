var x,y;
var condicion = true;
document.addEventListener("keypress",function(e){
    var tecla =e.key;
    switch (tecla)
    {
        case "7":
            x=55;
            y=50;
            break;
        case "8":
            x=155;
            y=50;
            break;
        case "9":
            x=250;
            y=50;
            break;
        case "4":
            x=55;
            y=150;
            break;
        case "5":
            x=155;
            y=150;
            break;
        case "6":
            x=250;
            y=150;
            break;
        case "1":
            x=55;
            y=250;
            break;
        case "2":
            x=155;
            y=250;
            break;
        case "3":
            x=250;
            y=250;
            break;
    }
    draw();
});
function draw(){
    var canvas = document.getElementById("prueba");
    var ctx = canvas.getContext("2d");
    ctx.moveTo(100,0);
    ctx.lineTo(100,300);
    ctx.moveTo(200,0);
    ctx.lineTo(200,300);
    ctx.moveTo(0,100);
    ctx.lineTo(300,100)
    ctx.moveTo(0,200);
    ctx.lineTo(300,200);
    ctx.stroke();

    var O = new Path2D();
    O.arc(x,y,30,0,2 *Math.PI,false)

    var X = new Path2D();
    X.arc(x,y,30,0,2 *Math.PI,false)

    if (condicion === true){
        ctx.stroke(O);
        
        condicion = false;
    }else{
    ctx.fill(X);

    condicion = true;
    }
 }
