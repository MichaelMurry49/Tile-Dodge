/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ \"./src/map.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    const tdCanvas = document.getElementById(\"tile-dodge\");\n    tdCanvas.width = 600;\n    tdCanvas.height = 600;\n    const map2 = new _map__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n    const ctx = tdCanvas.getContext(\"2d\");\n    // debugger;\n    // const map = new Wap();\n    // let player = new Wlayer(30, map);\n    // let game = new Wame();\n    // let gameview = new WameView();\n    ctx.font = \"30px Arial\";\n    debugger\n    // map.drawMap(8, ctx);\n    gameview.start(ctx, game, map, player);\n    // map.drawMap(8, ctx);\n    \n    // document.addEventListener(\"keypress\", e => {\n    //     player.move(e.key)\n    // }, false)\n    // player.drawPlayer(ctx);\n    \n});\n\n\n\n// // const Game = \n\n\n// const cvs = document.getElementById('tile-dodge');\n// const ctx = cvs.getContext('2d');\n\n// // let imageName = new Image();\n// // imageName.src = \"path/img.png\";\n\n// // ctx.drawImage(imageName, 40, 50, 25, 45);\n\n// const tile = 32;\n\n// // const map = new Image();\n\n// \n// ctx.fillRect(tile*1, tile*4, tile, tile);\n\n// // function draw(){\n//     ctx.fillStyle = \"blue\";\n//     ctx.fillRect(tile * 4, tile * 5, tile, tile);\n// }\n\n\n// // let tile = 50px;\n\n\n// class Wap {\n//     constructor() {\n//         this.keyChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',\n//             'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',\n//             'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',\n//             'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',\n//             '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '[', ']'];\n//         this.gridKeys = [];\n//         this.gridStorage = new Array(8).fill(null).map(el => new Array(8));\n//         this.fillGrid();\n//         this.gridStorage[0][0] = 1;\n//         // console.log(this.gridStorage)\n        \n//     }\n\n//     fillGrid() {\n//         let temp = this.keyChars.slice(0);\n//         for (let i = 0; i < 8; i++) {\n//             this.gridKeys.push([]);\n//             for (let j = 0; j < 8; j++) {\n//                 let rand = Math.floor(Math.random() * temp.length)\n//                 // console.log(temp[rand])\n//                 this.gridKeys[i].push(temp[rand]);\n//                 temp = temp.slice(0, rand).concat(temp.slice(rand + 1));\n//                 // console.log(this.gridKeys, i, j)\n//             }\n\n//         }\n//     }\n\n//     getItem(pos) {\n//         return this.gridStorage[pos[0]][pos[1]];\n//     }\n\n//     getKey(pos) {\n//         // console.log(this.gridKeys, pos);\n//         return this.gridKeys[pos[0]][pos[1]];\n//     }\n\n//     drawMap(x, ctx){\n//         // console.log(x);\n//         for (let i = 0; i < x; i++) {\n//             for (let j = 0; j < x; j++) {\n//                 ctx.fillStyle = [\"gray\", /*\"orange\", \"yellow\", \"lightblue\", \"lightgreen\", \"turquoise\", \"pink\",*/ \"silver\"][Math.floor(Math.random() * 2)];\n\n//                 ctx.fillRect(60 * j + 80, 60 * i + 60, 60, 60);\n//                 ctx.strokeStyle = \"black\";\n//                 ctx.strokeRect(60 * j + 80, 60 * i + 60, 60, 60);\n//                 ctx.fillStyle = \"black\";\n//                 ctx.fillText(this.getKey([i, j]), 60 * j + 100, 60 * i + 100);\n//             }\n//         }\n//     }\n// }\n\nclass Wlayer {\n    constructor(size, map){\n        this.pos = [2,4];\n        this.size = size;\n        this.map = map;\n    }\n\n    move(key){\n        // let neighbors = [];\n        // for(let i = 0; i < 3; i++){\n        //     if(this.map.gridKeys[pos[0] - ]\n        // }\n        // Check Where The Player can move\n        if(key === this.map.getKey(this.pos)) return;\n        let up = false;\n        let left = false;\n        let right = false;\n        let down = false;\n        if(this.pos[0] > 0) up = true;\n        if(this.pos[0] < 7) down = true;\n        if(this.pos[1] > 0) left = true;\n        if(this.pos[1] < 7) right = true; \n        // Check upper positions\n        if(up){\n            // Check left\n            if(left) {\n                if(this.map.getKey([this.pos[0]-1, this.pos[1]-1]) === key){\n                    debugger\n                    this.pos = [this.pos[0]-1, this.pos[1]-1];\n                } \n            }\n            // Check center\n            if (this.map.getKey([this.pos[0] - 1, this.pos[1]]) === key) {\n                debugger;\n                this.pos = [this.pos[0] - 1, this.pos[1]];\n            }\n            // Check right\n            if (right) {\n                debugger;\n                if (this.map.getKey([this.pos[0] - 1, this.pos[1] + 1]) === key) {\n                    this.pos = [this.pos[0] - 1, this.pos[1] + 1];\n                }\n            } \n        }\n        // Check center positions\n        // Check left\n        if (left) {\n            if (this.map.getKey([this.pos[0], this.pos[1] - 1]) === key) {\n                debugger\n                this.pos = [this.pos[0], this.pos[1] - 1];\n            }\n        }\n        // Check right\n        if (right) {\n            if (this.map.getKey([this.pos[0], this.pos[1] + 1]) === key) {\n                debugger\n                this.pos = [this.pos[0], this.pos[1] + 1];\n            }\n        }\n        // Check lower positions\n        if (down) {\n            // Check left\n            if (left) {\n                debugger\n                if (this.map.getKey([this.pos[0] + 1, this.pos[1] - 1]) === key) {\n                    this.pos = [this.pos[0] + 1, this.pos[1] - 1];\n                }\n            }\n            // Check center\n            if (this.map.getKey([this.pos[0] + 1, this.pos[1]]) === key) {\n                debugger\n                this.pos = [this.pos[0] + 1, this.pos[1]];\n            }\n            // Check right\n            if (right) {\n                debugger\n                if (this.map.getKey([this.pos[0] + 1, this.pos[1] + 1]) === key) {\n                    this.pos = [this.pos[0] + 1, this.pos[1] + 1];\n                }\n            }\n        }\n\n        // this.pos = [Math.floor(Math.random()*8), Math.floor(Math.random()*8)];\n    }\n    \n\n    drawPlayer(ctx){\n        ctx.fillStyle = \"blue\";\n        ctx.fillRect(60 * this.pos[1] + 90, 60 * this.pos[0] + 70, this.size, this.size);\n        ctx.strokeStyle = \"black\";\n        ctx.strokeRect(60 * this.pos[1] + 90, 60 * this.pos[0] + 70, this.size, this.size);\n        \n    }\n}\n\nclass WameView {\n    start(ctx, game, map, player){\n        // debugger\n        map.drawMap(8,ctx);\n        player.drawPlayer(ctx);\n        window.setInterval(() => game.step(ctx, map, player), 30);\n    }\n}\n\nclass Wame {\n    // constructor(){\n\n    // }\n    step(ctx, map, player){\n        // debugger\n        map.drawMap(8, ctx);\n        \n        document.addEventListener(\"keypress\", e => {\n            // ctx.clearRect(60 * this.pos[0] + 80, 60 * this.pos[1] + 60, this.size, this.size);\n            player.move(e.key)\n        }, false)\n        // debugger;\n        player.drawPlayer(ctx);\n        \n    }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Map {\n    constructor() {\n        this.keyChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',\n            'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',\n            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',\n            'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',\n            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '[', ']'];\n        this.gridKeys = [];\n        this.gridStorage = new Array(8).fill(null).map(el => new Array(8));\n        this.fillGrid();\n        this.gridStorage[0][0] = 1;\n        // console.log(this.gridStorage)\n\n    }\n\n    fillGrid() {\n        let temp = this.keyChars.slice(0);\n        for (let i = 0; i < 8; i++) {\n            this.gridKeys.push([]);\n            for (let j = 0; j < 8; j++) {\n                let rand = Math.floor(Math.random() * temp.length)\n                // console.log(temp[rand])\n                this.gridKeys[i].push(temp[rand]);\n                temp = temp.slice(0, rand).concat(temp.slice(rand + 1));\n                // console.log(this.gridKeys, i, j)\n            }\n\n        }\n    }\n\n    getItem(pos) {\n        return this.gridStorage[pos[0]][pos[1]];\n    }\n\n    getKey(pos) {\n        // console.log(this.gridKeys, pos);\n        return this.gridKeys[pos[0]][pos[1]];\n    }\n\n    drawMap(x, ctx) {\n        // console.log(x);\n        for (let i = 0; i < x; i++) {\n            for (let j = 0; j < x; j++) {\n                ctx.fillStyle = [\"gray\", /*\"orange\", \"yellow\", \"lightblue\", \"lightgreen\", \"turquoise\", \"pink\",*/ \"silver\"][Math.floor(Math.random() * 2)];\n\n                ctx.fillRect(60 * j + 80, 60 * i + 60, 60, 60);\n                ctx.strokeStyle = \"black\";\n                ctx.strokeRect(60 * j + 80, 60 * i + 60, 60, 60);\n                ctx.fillStyle = \"black\";\n                ctx.fillText(this.getKey([i, j]), 60 * j + 100, 60 * i + 100);\n            }\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\n\n//# sourceURL=webpack:///./src/map.js?");

/***/ })

/******/ });