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
        if (key === this.map.getKey(this.pos)) return; // player selected current position
        let up = false;
        let left = false;
        let right = false;
        let down = false;
        let found = false;
        // Check Where The Player can move
        if (this.pos[0] > 0) up = true;
        if (this.pos[0] < 7) down = true;
        if (this.pos[1] > 0) left = true;
        if (this.pos[1] < 7) right = true;
        // Check upper positions
        if (up && !found) {
            // Check left
            if (left && !found) {
                if (this.map.getKey([this.pos[0] - 1, this.pos[1] - 1]) === key) {
                    this.pos = [this.pos[0] - 1, this.pos[1] - 1];
                    this.map.setColor(this.pos, "orange");
                    found = true;
                }
            }
            // Check center
            if (!found && this.map.getKey([this.pos[0] - 1, this.pos[1]]) === key) {
                this.pos = [this.pos[0] - 1, this.pos[1]];
                this.map.setColor(this.pos, "orange");
                found = true;
            }
            // Check right
            if (right && !found) {
                if (this.map.getKey([this.pos[0] - 1, this.pos[1] + 1]) === key) {
                    this.pos = [this.pos[0] - 1, this.pos[1] + 1];
                    this.map.setColor(this.pos, "orange");
                    found = true;
                }
            }
        }
        // Check center positions
        // Check left
        if (left && !found) {
            if (this.map.getKey([this.pos[0], this.pos[1] - 1]) === key) {
                this.pos = [this.pos[0], this.pos[1] - 1];
                this.map.setColor(this.pos, "orange");
                found = true;
            }
        }
        // Check right
        if (right && !found) {
            if (this.map.getKey([this.pos[0], this.pos[1] + 1]) === key) {
                this.pos = [this.pos[0], this.pos[1] + 1];
                this.map.setColor(this.pos, "orange");
                found = true;
            }
        }
        // Check lower positions
        if (down && !found) {
            // Check left
            if (left && !found) {
                if (this.map.getKey([this.pos[0] + 1, this.pos[1] - 1]) === key) {
                    this.pos = [this.pos[0] + 1, this.pos[1] - 1];
                    this.map.setColor(this.pos, "orange");
                    found = true;
                }
            }
            // Check center
            if (!found && this.map.getKey([this.pos[0] + 1, this.pos[1]]) === key) {
                this.pos = [this.pos[0] + 1, this.pos[1]];
                this.map.setColor(this.pos, "orange");
                found = true;
            }
            // Check right
            if (right && !found) {
                if (this.map.getKey([this.pos[0] + 1, this.pos[1] + 1]) === key) {
                    this.pos = [this.pos[0] + 1, this.pos[1] + 1];
                    this.map.setColor(this.pos, "orange");
                    found = true;
                }
            }
        }
    }

    getXPos(){
        return this.pos[1];
    }

    getYPos(){
        return this.pos[0];
    }

    drawPlayer(ctx) {
        ctx.drawImage(this.image, 60 * this.pos[1] + 90, 60 * this.pos[0] + 70, this.size, this.size);
    }
}

export default Player;