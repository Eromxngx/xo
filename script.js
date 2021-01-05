var x,y;
var used1 = true;
var used2 = true;
var used3 = true;
var used4 = true;
var used5 = true;
var used6 = true;
var used7 = true;
var used8 = true;
var used9 = true;
var condicion = true;
document.addEventListener("keypress",function(e){
    var tecla =e.key;
    switch (tecla)
    {
        case "7":
            if( used7 === true ){
                x=55;
                y=50;
                used7 = false;
            }
            break;
        case "8":
            if( used8 === true ){
                x=155;
                y=50;
                used8 = false;
            }
            break;
        case "9":
            if( used9 === true ){
                x=250;
                y=50;
                used9 = false;
            }
            break;
        case "4":
            if( used4 === true ){
                x=55;
                y=150;
                used4 = false;
            }
            break;

        case "5":
            if( used5 === true ){
                x=155;
                y=150;
                used5 = false;
            }
            break;

        case "6":
            if( used6 === true ){
                x=250;
                y=150;
                used6 = false;
            }
            break;
                
        case "1":
            if( used1 === true ){
                x=55;
                y=250;
                used1 = false;
            }
            break;
            
        case "2":
            if( used2 === true ){
                x=155;
                y=250;
                used2 = false;
            }
            break;
        case "3":
            if( used3 === true ){
                x=250;
                y=250;
                used3 = false;
            }
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
