
import Map from './map';
import Game from './game';
import GameView from './game-view';
import Player from './player';
import RandomMovementCreature from './random-movement-creature';
import PlayerChasingCreature from './player-chasing-creature';

class Index {
    constructor(){
        this.bool = true;
    }
    render() {
        document.addEventListener("DOMContentLoaded", function () {
            this.bool = true;
            let tdCanvas = document.getElementById("tile-dodge");
            let start = document.getElementsByClassName("start");
            let instructions = document.getElementById("instructions");
            
            start[0].addEventListener("click", () => {
                let cover = document.getElementById("start-page")
                let hide = document.createAttribute("hidden")
                let hide2 = document.createAttribute("hidden")
                cover.setAttributeNode(hide);
                start[0].setAttributeNode(hide2);

                if(this.bool){
                    this.gameview.start();
                    this.bool = !this.bool;
                }
            })

            start[1].addEventListener("click", () => {
                let cover = document.getElementById("start-page")
                console.log(cover)
                let hide = document.createAttribute("hidden")
                let hide2 = document.createAttribute("hidden")
                cover.setAttributeNode(hide);
                start[0].setAttributeNode(hide2);

                if (this.bool) {
                    console.log("okay")
                    this.gameview.start();
                    this.bool = !this.bool;
                }
            })
            instructions.addEventListener("click", () => {
                let instruct = document.getElementById("instructions-page");
                instruct.removeAttribute("hidden");
            })
            
            tdCanvas.width = 600;
            tdCanvas.height = 600;

            

            const ctx = tdCanvas.getContext("2d");
            const map = new Map(600, 600);
            let player = new Player(30, map);

            let rmc = new RandomMovementCreature(30, map, [0, 4]);
            let pcc = new PlayerChasingCreature(30, 1, player, [0, 0]);
            let rmc2 = new RandomMovementCreature(30, map, [4, 7]);
            let pcc2 = new PlayerChasingCreature(30, 1, player, [7, 7]);
            let rmc3 = new RandomMovementCreature(30, map, [3, 0]);
            let pcc3 = new PlayerChasingCreature(30, 2, player, [0, 7]);
            let rmc4 = new RandomMovementCreature(30, map, [7, 3]);
            let pcc4 = new PlayerChasingCreature(30, 2, player, [7, 0]);
            let rmc5 = new RandomMovementCreature(30, map, [5, 0]);
            let pcc5 = new PlayerChasingCreature(30, 0, player, [7, 4]);

            let creatures = [rmc, rmc2, rmc3, rmc4, rmc5, pcc, pcc2, pcc3, pcc4, pcc5];

            let game = new Game(ctx, map, player, creatures);
            this.gameview = new GameView(game);

            ctx.font = "30px Arial";
        });
    }

    start(){
        this.gameview.start();
    }
}

let ind = new Index();
ind.render();

export default Index;