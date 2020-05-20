import Map from './map';
class RandomMovementCreature {
    constructor(size, player) {
        this.pos = [2, 6];
        this.size = size;
        this.count = 0;
        this.player = player;
    }

    move() {

        let vert = 0;
        let horz = 0;
        this.player.getYPos() < this.pos[0] ? vert -= 1 : vert += 0;
        this.player.getYPos() > this.pos[0] ? vert += 1 : vert += 0;
        this.player.getXPos() < this.pos[1] ? horz -= 1 : horz += 0;
        this.player.getXPos() > this.pos[1] ? horz += 1 : horz += 0;
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
        if (this.count >= 70) {
            this.count = 0;
            this.move();
        }
        ctx.fillStyle = "pink";
        ctx.fillRect(60 * this.pos[1] + 90, 60 * this.pos[0] + 70, this.size, this.size);
        ctx.strokeStyle = "black";
        ctx.strokeRect(60 * this.pos[1] + 90, 60 * this.pos[0] + 70, this.size, this.size);

    }
}

export default RandomMovementCreature