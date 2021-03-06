import Map from './map';
class RandomMovementCreature{
    constructor(size, map, startPos) {
        this.iPos = startPos;
        this.pos = startPos;
        this.size = size;
        this.map = map;
        this.count = 0;
        this.image = new Image();
        this.image.src = './assets/RandomMovement.png';
    }

    reset(){
        this.pos = this.iPos;
    }

    move() {
        let up = false;
        let left = false;
        let right = false;
        let down = false;
        if (this.pos[0] > 0) up = true;
        if (this.pos[0] < 7) down = true;
        if (this.pos[1] > 0) left = true;
        if (this.pos[1] < 7) right = true;
        let vert = 0;
        let horz = 0;
        while(vert === 0 && horz === 0){
            up ? vert -= Math.floor(Math.random()* 2) : vert += 0;
            down ? vert += Math.floor(Math.random() * 2) : vert += 0;
            left ? horz -= Math.floor(Math.random() * 2) : horz += 0;
            right ? horz += Math.floor(Math.random() * 2) : horz += 0;
        }

        this.pos = [this.pos[0] + vert, this.pos[1] + horz];
    }

    getXPos() {
        return this.pos[1];
    }

    getYPos() {
        return this.pos[0];
    }

    drawCreature(ctx) {
        this.count += 1;
        if(this.count >= 35){
            this.count = 0;
            this.move();
        }
        ctx.drawImage(this.image, 60 * this.pos[1] + 90, 60 * this.pos[0] + 70, this.size, this.size);
    }
}

export default RandomMovementCreature