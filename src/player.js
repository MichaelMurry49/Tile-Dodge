import Map from './map';
class Player {
    constructor(size, map) {
        this.iPos = [3,3]
        this.pos = [3, 3];
        this.size = size;
        this.map = map;
        this.image = new Image();
        this.image.src = './assets/player.png';
    }

    reset(){
        this.pos = this.iPos;
    }


    move(key) {
        // let neighbors = [];
        // for(let i = 0; i < 3; i++){
        //     if(this.map.gridKeys[pos[0] - ]
        // }
        // Check Where The Player can move
        if (key === this.map.getKey(this.pos)) return;
        let up = false;
        let left = false;
        let right = false;
        let down = false;
        if (this.pos[0] > 0) up = true;
        if (this.pos[0] < 7) down = true;
        if (this.pos[1] > 0) left = true;
        if (this.pos[1] < 7) right = true;
        // Check upper positions
        if (up) {
            // Check left
            if (left) {
                if (this.map.getKey([this.pos[0] - 1, this.pos[1] - 1]) === key) {
                    // debugger
                    this.pos = [this.pos[0] - 1, this.pos[1] - 1];
                    this.map.setColor(this.pos, "orange");
                }
            }
            // Check center
            if (this.map.getKey([this.pos[0] - 1, this.pos[1]]) === key) {
                // debugger;
                this.pos = [this.pos[0] - 1, this.pos[1]];
                this.map.setColor(this.pos, "orange");
            }
            // Check right
            if (right) {
                // debugger;
                if (this.map.getKey([this.pos[0] - 1, this.pos[1] + 1]) === key) {
                    this.pos = [this.pos[0] - 1, this.pos[1] + 1];
                    this.map.setColor(this.pos, "orange");
                }
            }
        }
        // Check center positions
        // Check left
        if (left) {
            if (this.map.getKey([this.pos[0], this.pos[1] - 1]) === key) {
                // debugger
                this.pos = [this.pos[0], this.pos[1] - 1];
                this.map.setColor(this.pos, "orange");
            }
        }
        // Check right
        if (right) {
            if (this.map.getKey([this.pos[0], this.pos[1] + 1]) === key) {
                // debugger
                this.pos = [this.pos[0], this.pos[1] + 1];
                this.map.setColor(this.pos, "orange");
            }
        }
        // Check lower positions
        if (down) {
            // Check left
            if (left) {
                // debugger
                if (this.map.getKey([this.pos[0] + 1, this.pos[1] - 1]) === key) {
                    this.pos = [this.pos[0] + 1, this.pos[1] - 1];
                    this.map.setColor(this.pos, "orange");
                }
            }
            // Check center
            if (this.map.getKey([this.pos[0] + 1, this.pos[1]]) === key) {
                // debugger
                this.pos = [this.pos[0] + 1, this.pos[1]];
                this.map.setColor(this.pos, "orange");
            }
            // Check right
            if (right) {
                // debugger
                if (this.map.getKey([this.pos[0] + 1, this.pos[1] + 1]) === key) {
                    this.pos = [this.pos[0] + 1, this.pos[1] + 1];
                    this.map.setColor(this.pos, "orange");
                }
            }
        }

        // this.pos = [Math.floor(Math.random()*8), Math.floor(Math.random()*8)];
    }

    getXPos(){
        return this.pos[1];
    }

    getYPos(){
        return this.pos[0];
    }


    drawPlayer(ctx) {
        // ctx.fillStyle = "blue";
        // ctx.fillRect(60 * this.pos[1] + 90, 60 * this.pos[0] + 70, this.size, this.size);
        // ctx.strokeStyle = "black";
        // ctx.strokeRect(60 * this.pos[1] + 90, 60 * this.pos[0] + 70, this.size, this.size);
        ctx.drawImage(this.image, 60 * this.pos[1] + 90, 60 * this.pos[0] + 70, this.size, this.size);

    }
}

export default Player;