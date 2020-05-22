
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
        
        let rmc = new RandomMovementCreature(30, map, [6,7]);
        let pcc = new PlayerChasingCreature(30, player, [6,0]);
        let rmc2 = new RandomMovementCreature(30, map, [6, 1]);
        let pcc2 = new PlayerChasingCreature(30, player, [6,6]);
        let rmc3 = new RandomMovementCreature(30, map, [6,5]);
        let pcc3 = new PlayerChasingCreature(30, player, [6, 2]);
        let rmc4 = new RandomMovementCreature(30, map, [5, 5]);
        let pcc4 = new PlayerChasingCreature(30, player, [5, 2]);
        let rmc5 = new RandomMovementCreature(30, map, [4, 4]);
        let pcc5 = new PlayerChasingCreature(30, player, [4, 6]);
        

        let creatures = [rmc, rmc2, rmc3, rmc4, rmc5, pcc, pcc2, pcc3, pcc4, pcc5];
        
        let game = new Game(ctx, map, player, creatures);
        let gameview = new GameView(game);
        
        ctx.font = "30px noto sans";
        gameview.start(); 
    });