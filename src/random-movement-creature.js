import Map from './map';
class RandomMovementCreature{
    constructor(size, map) {
        this.pos = [3, 3];
        this.size = size;
        this.map = map;
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
        // Check upper positions
        let vert = 0;
        let horz = 0;
        up ? vert -= Math.floor(Math.random()* 2) : vert += 0;
        down ? vert += Math.floor(Math.random() * 2) : vert += 0;
        left ? vert -= Math.floor(Math.random() * 2) : vert += 0;
        right ? vert += Math.floor(Math.random() * 2) : vert += 0;
    }


    drawCreature(ctx) {
        ctx.fillStyle = "orange";
        ctx.fillRect(60 * this.pos[1] + 90, 60 * this.pos[0] + 70, this.size, this.size);
        ctx.strokeStyle = "black";
        ctx.strokeRect(60 * this.pos[1] + 90, 60 * this.pos[0] + 70, this.size, this.size);

    }
}

export default RandomMovementCreature