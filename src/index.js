
import Map from './map';
import Game from './game';
import GameView from './game-view';
import Player from './player';
import RandomMovementCreature from './random-movement-creature';
import PlayerChasingCreature from './player-chasing-creature';


// var play = () => {
    document.addEventListener("DOMContentLoaded", function () {
        const tdCanvas = document.getElementById("tile-dodge");
        tdCanvas.width = 600;
        tdCanvas.height = 600;
        const map2 = new Map();

        const ctx = tdCanvas.getContext("2d");
        // debugger;
        const map = new Map();
        let player = new Player(30, map);
        let game = new Game();
        let gameview = new GameView();
        let rmc = new RandomMovementCreature(30, map);
        let pcc = new PlayerChasingCreature(30, player);
        let rmc2 = new RandomMovementCreature(30, map);
        let pcc2 = new PlayerChasingCreature(30, player);
        let rmc3 = new RandomMovementCreature(30, map);
        let pcc3 = new PlayerChasingCreature(30, player);
        ctx.font = "30px noto sans";
        gameview.start(ctx, game, map, player, rmc, pcc, rmc2, pcc2, rmc3, pcc3); 
    });
// }




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


// class Wap {
//     constructor() {
//         this.keyChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
//             'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
//             'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
//             'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
//             '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '[', ']'];
//         this.gridKeys = [];
//         this.gridStorage = new Array(8).fill(null).map(el => new Array(8));
//         this.fillGrid();
//         this.gridStorage[0][0] = 1;
//         // console.log(this.gridStorage)
        
//     }

//     fillGrid() {
//         let temp = this.keyChars.slice(0);
//         for (let i = 0; i < 8; i++) {
//             this.gridKeys.push([]);
//             for (let j = 0; j < 8; j++) {
//                 let rand = Math.floor(Math.random() * temp.length)
//                 // console.log(temp[rand])
//                 this.gridKeys[i].push(temp[rand]);
//                 temp = temp.slice(0, rand).concat(temp.slice(rand + 1));
//                 // console.log(this.gridKeys, i, j)
//             }

//         }
//     }

//     getItem(pos) {
//         return this.gridStorage[pos[0]][pos[1]];
//     }

//     getKey(pos) {
//         // console.log(this.gridKeys, pos);
//         return this.gridKeys[pos[0]][pos[1]];
//     }

//     drawMap(x, ctx){
//         // console.log(x);
//         for (let i = 0; i < x; i++) {
//             for (let j = 0; j < x; j++) {
//                 ctx.fillStyle = ["gray", /*"orange", "yellow", "lightblue", "lightgreen", "turquoise", "pink",*/ "silver"][Math.floor(Math.random() * 2)];

//                 ctx.fillRect(60 * j + 80, 60 * i + 60, 60, 60);
//                 ctx.strokeStyle = "black";
//                 ctx.strokeRect(60 * j + 80, 60 * i + 60, 60, 60);
//                 ctx.fillStyle = "black";
//                 ctx.fillText(this.getKey([i, j]), 60 * j + 100, 60 * i + 100);
//             }
//         }
//     }
// }

// class Wlayer {
//     constructor(size, map){
//         this.pos = [2,4];
//         this.size = size;
//         this.map = map;
//     }

//     move(key){
//         // let neighbors = [];
//         // for(let i = 0; i < 3; i++){
//         //     if(this.map.gridKeys[pos[0] - ]
//         // }
//         // Check Where The Player can move
//         if(key === this.map.getKey(this.pos)) return;
//         let up = false;
//         let left = false;
//         let right = false;
//         let down = false;
//         if(this.pos[0] > 0) up = true;
//         if(this.pos[0] < 7) down = true;
//         if(this.pos[1] > 0) left = true;
//         if(this.pos[1] < 7) right = true; 
//         // Check upper positions
//         if(up){
//             // Check left
//             if(left) {
//                 if(this.map.getKey([this.pos[0]-1, this.pos[1]-1]) === key){
//                     debugger
//                     this.pos = [this.pos[0]-1, this.pos[1]-1];
//                 } 
//             }
//             // Check center
//             if (this.map.getKey([this.pos[0] - 1, this.pos[1]]) === key) {
//                 debugger;
//                 this.pos = [this.pos[0] - 1, this.pos[1]];
//             }
//             // Check right
//             if (right) {
//                 debugger;
//                 if (this.map.getKey([this.pos[0] - 1, this.pos[1] + 1]) === key) {
//                     this.pos = [this.pos[0] - 1, this.pos[1] + 1];
//                 }
//             } 
//         }
//         // Check center positions
//         // Check left
//         if (left) {
//             if (this.map.getKey([this.pos[0], this.pos[1] - 1]) === key) {
//                 debugger
//                 this.pos = [this.pos[0], this.pos[1] - 1];
//             }
//         }
//         // Check right
//         if (right) {
//             if (this.map.getKey([this.pos[0], this.pos[1] + 1]) === key) {
//                 debugger
//                 this.pos = [this.pos[0], this.pos[1] + 1];
//             }
//         }
//         // Check lower positions
//         if (down) {
//             // Check left
//             if (left) {
//                 debugger
//                 if (this.map.getKey([this.pos[0] + 1, this.pos[1] - 1]) === key) {
//                     this.pos = [this.pos[0] + 1, this.pos[1] - 1];
//                 }
//             }
//             // Check center
//             if (this.map.getKey([this.pos[0] + 1, this.pos[1]]) === key) {
//                 debugger
//                 this.pos = [this.pos[0] + 1, this.pos[1]];
//             }
//             // Check right
//             if (right) {
//                 debugger
//                 if (this.map.getKey([this.pos[0] + 1, this.pos[1] + 1]) === key) {
//                     this.pos = [this.pos[0] + 1, this.pos[1] + 1];
//                 }
//             }
//         }

//         // this.pos = [Math.floor(Math.random()*8), Math.floor(Math.random()*8)];
//     }
    

//     drawPlayer(ctx){
//         ctx.fillStyle = "blue";
//         ctx.fillRect(60 * this.pos[1] + 90, 60 * this.pos[0] + 70, this.size, this.size);
//         ctx.strokeStyle = "black";
//         ctx.strokeRect(60 * this.pos[1] + 90, 60 * this.pos[0] + 70, this.size, this.size);
        
//     }
// }

// class WameView {
//     start(ctx, game, map, player){
//         // debugger
//         map.drawMap(8,ctx);
//         player.drawPlayer(ctx);
//         window.setInterval(() => game.step(ctx, map, player), 30);
//     }
// }

// class Wame {
//     // constructor(){

//     // }
//     step(ctx, map, player){
//         // debugger
//         map.drawMap(8, ctx);
        
//         document.addEventListener("keypress", e => {
//             // ctx.clearRect(60 * this.pos[0] + 80, 60 * this.pos[1] + 60, this.size, this.size);
//             player.move(e.key)
//         }, false)
//         // debugger;
//         player.drawPlayer(ctx);
        
//     }
// }