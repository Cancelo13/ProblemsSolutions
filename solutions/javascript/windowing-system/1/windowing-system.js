// @ts-check

export function Size(width = 80, height = 60){
    this.width = width;
    this.height = height;
}

Size.prototype.resize = function(w, h){
    this.width = w;
    this.height = h;
}

export function Position(x = 0, y = 0){
    this.x = x;
    this.y = y;
}

Position.prototype.move = function(newX, newY){
    this.x = newX;
    this.y = newY;
}

export class ProgramWindow{
    constructor(){
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position()
    }
    resize(size){
        size.width = Math.max(1, size.width);
        size.height = Math.max(1, size.height);
        if(size.width + this.position.x > this.screenSize.width){
            size.width = this.screenSize.width - this.position.x;
        }
        if(size.height + this.position.y > this.screenSize.height){
            size.height = this.screenSize.height - this.position.y;
        }
        this.size = size;
    }
    move(pos){
        pos.x = Math.max(0, pos.x);
        pos.y = Math.max(0, pos.y);
        if(pos.x + this.size.width > this.screenSize.width){
            pos.x = this.screenSize.width - this.size.width;
        }
        if(pos.y + this.size.height > this.screenSize.height){
            pos.y = this.screenSize.height - this.size.height;
        } 
        this.position = pos;
    }
}
export function changeWindow(programWindow){
    programWindow.size = new Size(400, 300);
    programWindow.position = new Position(100, 150);
    return programWindow;
}