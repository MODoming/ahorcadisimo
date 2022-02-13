
function palo(ctx, xi, yi, xf, yf){
    ctx.beginPath();
    ctx.moveTo(xi, yi);
    ctx.lineTo(xf, yf);
    ctx.stroke();
};
function dibujarMunieco(vidas){
    if (vidas === 5) {
        ctx.beginPath();
        ctx.fillStyle = "white"
        ctx.arc(170, 120, 30, 0, 2* Math.PI);
        ctx.fill();
        ctx.stroke();
    };    
    if (vidas === 4) {palo(ctx, 170, 150, 170, 240)};
    if (vidas === 3) {palo(ctx, 170, 240, 200, 310)};
    if (vidas === 2) {palo(ctx, 170, 240, 140, 310)};
    if (vidas === 1) {palo(ctx, 170, 170, 200, 190)};
    if (vidas === 0) {palo(ctx, 170, 170, 140, 190)};
};
function dibujarTorre(){
    ctx.clearRect(0, 0 , 250, 550);
    ctx.beginPath();    
    var img = new Image();
    img.src = "js/rope-24291_640.png";
    img.onload = function(){
        ctx.drawImage(img, 0, 0);
    }
    /*ctx.moveTo(0, 450);
    ctx.lineTo(100, 400);
    ctx.lineTo(200, 450);
    ctx.closePath();
    ctx.stroke();
    palo(ctx, 100, 400, 100, 050);
    palo(ctx, 100, 050, 200, 050);
    palo(ctx, 200, 050, 200, 100);*/
};