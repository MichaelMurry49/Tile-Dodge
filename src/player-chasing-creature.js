class RandomMovementCreature {
    constructor(size, type, player, startPos) {
        this.type = ["diag", "vert", "horz"][type%3];
        this.iPos = startPos;
        this.pos = startPos;
        this.size = size;
        this.count = 0;
        this.player = player;
        this.pinkeye = new Image();
        this.pinkeye.src = './assets/pinkeye.png';
        this.sideeye = new Image();
        this.sideeye.src = './assets/sideeyemonster.png';
        this.pinkside = new Image();
        this.pinkside.src = './assets/pinkeyemonster.png';
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
        if (this.type === "vert") ctx.drawImage(this.pinkeye, 60 * this.pos[1] + 90, 60 * this.pos[0] + 70, this.size, this.size);
        if (this.type === "horz") ctx.drawImage(this.sideeye, 60 * this.pos[1] + 90, 60 * this.pos[0] + 70, this.size, this.size);
        if (this.type === "diag") ctx.drawImage(this.pinkside, 60 * this.pos[1] + 90, 60 * this.pos[0] + 70, this.size, this.size);
    }
}

export default RandomMovementCreature