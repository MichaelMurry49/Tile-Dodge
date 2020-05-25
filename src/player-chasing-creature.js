import Map from './map';
class RandomMovementCreature {
    constructor(size, type, player, startPos) {
        // debugger;
        this.type = ["diag", "vert", "horz"][type%3];
        this.iPos = startPos;
        this.pos = startPos;
        this.size = size;
        this.count = 0;
        this.player = player;
    }

    reset() {
        this.pos = this.iPos;
    }

    move() {

        let vert = 0;
        let horz = 0;
        this.player.getYPos() < this.pos[0] ? vert -= 1 : vert += 0;
        this.player.getYPos() > this.pos[0] ? vert += 1 : vert += 0;
        this.player.getXPos() < this.pos[1] ? horz -= 1 : horz += 0;
        this.player.getXPos() > this.pos[1] ? horz += 1 : horz += 0;
        // debugger;
        if(this.type === "diag"){
            this.pos = [this.pos[0] + vert, this.pos[1] + horz];
        } else if(this.type === "vert"){
            this.pos = vert === 0 ? [this.pos[0], this.pos[1] + horz] : [this.pos[0] + vert, this.pos[1]];
        } else {
            this.pos = horz === 0 ? [this.pos[0] + vert, this.pos[1]] : [this.pos[0], this.pos[1] + horz];
        }
        
    }

    getXPos() {
        return this.pos[1];
    }

    getYPos() {
        return this.pos[0];
    }


    drawCreature(ctx) {
        this.count += 1;
        if (this.count >= 35) {
            this.count = 0;
            this.move();
        }
        if(this.type==="vert") ctx.fillStyle = "pink";
        if(this.type==="horz") ctx.fillStyle = "purple";
        if(this.type==="diag") ctx.fillStyle = "red";
        ctx.fillRect(60 * this.pos[1] + 90, 60 * this.pos[0] + 70, this.size, this.size);
        ctx.strokeStyle = "black";
        ctx.strokeRect(60 * this.pos[1] + 90, 60 * this.pos[0] + 70, this.size, this.size);

    }
}

export default RandomMovementCreature