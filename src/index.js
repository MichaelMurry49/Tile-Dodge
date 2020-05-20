// const Game = require("./game");
// const GameView = require("./game-view");
// import Map from './map';
// const MAP = new Map();

document.addEventListener("DOMContentLoaded", function () {
    const tdCanvas = document.getElementById("tile-dodge");
    tdCanvas.width = 600;
    tdCanvas.height = 600;

    const ctx = tdCanvas.getContext("2d");
    // debugger;
    const map = new Wap();
    let player = new Wlayer(30, map);
    let game = new Wame();
    let gameview = new WameView();
    ctx.font = "30px Arial";
    debugger
    // map.drawMap(8, ctx);
    gameview.start(ctx, game, map, player);
    // map.drawMap(8, ctx);
    
    // document.addEventListener("keypress", e => {
    //     player.move(e.key)
    // }, false)
    // player.drawPlayer(ctx);
    
});



// // const Game = 


// const cvs = document.getElementById('tile-dodge');
// const ctx = cvs.getContext('2d');

// // let imageName = new Image();
// // imageName.src = "path/img.png";

// // ctx.drawImage(imageName, 40, 50, 25, 45);

// const tile = 32;

// // const map = new Image();

// 
// ctx.fillRect(tile*1, tile*4, tile, tile);

// // function draw(){
//     ctx.fillStyle = "blue";
//     ctx.fillRect(tile * 4, tile * 5, tile, tile);
// }


// // let tile = 50px;


class Wap {
    constructor() {
        this.keyChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
            'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
            'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '[', ']'];
        this.gridKeys = [];
        this.gridStorage = new Array(8).fill(null).map(el => new Array(8));
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

    drawMap(x, ctx){
        // console.log(x);
        for (let i = 0; i < x; i++) {
            for (let j = 0; j < x; j++) {
                ctx.fillStyle = ["gray", "orange", "yellow", "lightblue", "lightgreen", "turquoise", "pink", "silver"][Math.floor(Math.random() * 8)];

                ctx.fillRect(60 * i + 80, 60 * j + 60, 60, 60);
                ctx.strokeStyle = "black";
                ctx.strokeRect(60 * i + 80, 60 * j + 60, 60, 60);
                ctx.fillStyle = "black";
                ctx.fillText(this.getKey([i, j]), 60 * i + 100, 60 * j + 100);
            }
        }
    }
}

class Wlayer {
    constructor(size, map){
        this.pos = [3,3];
        this.size = size;
        this.map = map;
    }

    move(key){
        // let neighbors = [];
        // for(let i = 0; i < 3; i++){
        //     if(this.map.gridKeys[pos[0] - ]
        // }
        this.pos = [Math.random()*8, Math.random()*8];
    }
    

    drawPlayer(ctx){
        ctx.fillStyle = "blue";
        ctx.fillRect(60 * this.pos[0] + 80, 60 * this.pos[1] + 60, this.size, this.size);
        ctx.strokeStyle = "black";
        ctx.strokeRect(60 * this.pos[0] + 80, 60 * this.pos[1] + 60, this.size, this.size);
        
    }
}

class WameView {
    start(ctx, game, map, player){
        // debugger
        map.drawMap(8,ctx);
        player.drawPlayer(ctx);
        window.setInterval(() => game.step(ctx, map, player), 30);
    }
}

class Wame {
    // constructor(){

    // }
    step(ctx, map, player){
        // debugger
        // map.drawMap(8, ctx);
        
        document.addEventListener("keypress", e => {
            // ctx.clearRect(60 * this.pos[0] + 80, 60 * this.pos[1] + 60, this.size, this.size);
            player.move(e.key)
        }, false)
        // debugger;
        player.drawPlayer(ctx);
        
    }
}