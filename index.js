const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width  = 1000;
canvas.height = 800;

var mouseEvent = false;

class Node{
    constructor({position}){
        this.x = position.x;
        this.y = position.y;
    }
}
class Draw{
    constructor(){
        this.path = [];
        // this.maxLengthOnPath = 200;
    }
    update(){
        if(this.path.length < 2){return;}
        // else if(this.path.length > this.maxLengthOnPath){
        //     this.path.splice(0,this.path.length-this.maxLengthOnPath);
        // }
    }
    draw(){
        
        for (let i = 1; i < this.path.length; i++) {
            ctx.beginPath();
            ctx.moveTo(this.path[i-1].x,this.path[i-1].y);
            ctx.lineTo(this.path[i].x,this.path[i].y);
            ctx.lineWidth=1;       
            ctx.closePath();
            ctx.stroke();
        }
    }
    static clearCanvas(){
        ctx.beginPath();
        ctx.fillStyle='white';
        ctx.fillRect(0,0,canvas.width-200,canvas.height);
        ctx.closePath();
    }
}
const drawer = new Draw();


canvas.addEventListener('mousedown',() => {
    mouseEvent = true;   
});

canvas.addEventListener('mouseup' ,() => {
   mouseEvent = false;
//    drawer.path = [];
});

canvas.addEventListener('mousemove',(event) => {
    if(mouseEvent){   
    const x = event.clientX;
    const y = event.clientY;
    drawer.path.push(new Node({position:{
        x,
        y,
    }}))
    }
});

function animation(){
    Draw.clearCanvas();
    drawer.update();
    drawer.draw();
    window.requestAnimationFrame(animation);
}

window.requestAnimationFrame(animation)



