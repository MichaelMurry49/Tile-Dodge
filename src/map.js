
class Map {
    constructor() {
        this.keyChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
            'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
            'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '[', ']'];
        this.gridKeys = [];
        this.gridStorage = new Array(8).fill(null).map(el => new Array(8));
        this.gridColors = new Array(8).fill(null).map(el => new Array(8));
        this.fillGrid();
        this.gridStorage[0][0] = 1;
        // console.log(this.gridStorage)

    }

    fillGrid() {
        let temp = this.keyChars.slice(0);
        for (let i = 0; i < 8; i++) {
            this.gridKeys.push([]);
            for (let j = 0; j < 8; j++) {
                let rand = Math.floor(Math.random() * temp.length)
                // console.log(temp[rand])
                this.gridKeys[i].push(temp[rand]);
                this.gridColors[i][j] = "gray";
                temp = temp.slice(0, rand).concat(temp.slice(rand + 1));
                // console.log(this.gridKeys, i, j)
            }

        }
    }

    getItem(pos) {
        return this.gridStorage[pos[0]][pos[1]];
    }

    getKey(pos) {
        // console.log(this.gridKeys, pos);
        return this.gridKeys[pos[0]][pos[1]];
    }

    getColor(pos) {
        return this.gridColors[pos[0]][pos[1]];
    }

    setColor(pos, color) {
        this.gridColors[pos[0]][pos[1]] = color;
    }

    getColorArray() {
        return this.gridColors;
    }

    drawMap(x, ctx, title) {
        // console.log(x);
       
        for (let i = 0; i < x; i++) {
            for (let j = 0; j < x; j++) {
                // ctx.fillStyle = ["gray", /*"orange", "yellow", "lightblue", "lightgreen", "turquoise", "pink",*/ "silver"][Math.floor(Math.random() * 2)];
                ctx.fillStyle = this.getColor([i,j]);
                ctx.fillRect(60 * j + 80, 60 * i + 60, 60, 60);
                ctx.strokeStyle = "black";
                ctx.strokeRect(60 * j + 80, 60 * i + 60, 60, 60);
                ctx.fillStyle = "black";
                // this.getKey([i, j]) === this.getKey([i, j]).toUpperCase ? ctx.font = "30px Source Sans Pro" : "60px Source Sans Pro"
                ctx.fillText(this.getKey([i, j]), 60 * j + 100, 60 * i + 100);
            }
        } 
        ctx.fillStyle = "black";
        ctx.fillText(title, 270, 30);
    }
}

export default Map;