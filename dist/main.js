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

/***/ "./src/game-view.js":
/*!**************************!*\
  !*** ./src/game-view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GameView {\n    constructor(game){\n        this.game = game;\n    }\n    start() {\n        this.game.startLevel(0);\n        \n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n//# sourceURL=webpack:///./src/game-view.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n\n\n\nclass Game {\n    constructor(ctx, map, player, creatures){\n        this.extraLives = 10;\n        this.nextLevel = 0;\n        this.ctx = ctx;\n        this.map = map;\n        this.player = player;\n        this.creatures = creatures;\n       \n        this.level1 = new _level__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, this.ctx, this.map, this.player, this.creatures.slice(0, 3), this);\n        this.level2 = new _level__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1, this.ctx, this.map, this.player, this.creatures.slice(5, 7), this);\n        this.level3 = new _level__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2, this.ctx, this.map, this.player, this.creatures.slice(5, 8), this);\n        this.level4 = new _level__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, this.ctx, this.map, this.player, this.creatures.slice(0, 1).concat(this.creatures.slice(6, 9)), this);\n        this.level5 = new _level__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4, this.ctx, this.map, this.player, this.creatures.slice(0, 3).concat(this.creatures.slice(6, 8)).concat(this.creatures.slice(9)), this);\n        this.level6 = new _level__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5, this.ctx, this.map, this.player, this.creatures.slice(0, 5).concat(this.creatures.slice(5, 10)), this);\n        this.levels = [this.level1, this.level2, this.level3, this.level4, this.level5, this.level6]; \n        this.curLevel = this.level1; \n    }\n    levelRunning(){\n        return this.curLevel.running();\n    }\n    livesLeft(){\n        return this.extraLives;\n    }\n    loseLife(){\n        this.extraLives -= 1;\n    }\n    gainLife(){\n        this.extraLives += 1;\n    }\n\n    startLevel(levelId) {\n        this.curLevel = this.levels[levelId];\n        this.curLevel.start();\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ \"./src/map.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-view */ \"./src/game-view.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _random_movement_creature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./random-movement-creature */ \"./src/random-movement-creature.js\");\n/* harmony import */ var _player_chasing_creature__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player-chasing-creature */ \"./src/player-chasing-creature.js\");\n\n\n\n\n\n\n\n\nclass Index {\n    constructor(){\n        this.bool = true;\n    }\n    render() {\n        document.addEventListener(\"DOMContentLoaded\", function () {\n            this.bool = true;\n            let tdCanvas = document.getElementById(\"tile-dodge\");\n            let start = document.getElementsByClassName(\"start\");\n            let instructions = document.getElementById(\"instructions\");\n            \n            start[0].addEventListener(\"click\", () => {\n                let cover = document.getElementById(\"start-page\")\n                let hide = document.createAttribute(\"hidden\")\n                let hide2 = document.createAttribute(\"hidden\")\n                cover.setAttributeNode(hide);\n                start[0].setAttributeNode(hide2);\n\n                if(this.bool){\n                    this.gameview.start();\n                    this.bool = !this.bool;\n                }\n            })\n\n            start[1].addEventListener(\"click\", () => {\n                let cover = document.getElementById(\"start-page\")\n                console.log(cover)\n                let hide = document.createAttribute(\"hidden\")\n                let hide2 = document.createAttribute(\"hidden\")\n                cover.setAttributeNode(hide);\n                start[0].setAttributeNode(hide2);\n\n                if (this.bool) {\n                    console.log(\"okay\")\n                    this.gameview.start();\n                    this.bool = !this.bool;\n                }\n            })\n            instructions.addEventListener(\"click\", () => {\n                let instruct = document.getElementById(\"instructions-page\");\n                instruct.removeAttribute(\"hidden\");\n            })\n            \n            tdCanvas.width = 600;\n            tdCanvas.height = 600;\n\n            \n\n            const ctx = tdCanvas.getContext(\"2d\");\n            const map = new _map__WEBPACK_IMPORTED_MODULE_0__[\"default\"](600, 600);\n            let player = new _player__WEBPACK_IMPORTED_MODULE_3__[\"default\"](30, map);\n\n            let rmc = new _random_movement_creature__WEBPACK_IMPORTED_MODULE_4__[\"default\"](30, map, [0, 4]);\n            let pcc = new _player_chasing_creature__WEBPACK_IMPORTED_MODULE_5__[\"default\"](30, 1, player, [0, 0]);\n            let rmc2 = new _random_movement_creature__WEBPACK_IMPORTED_MODULE_4__[\"default\"](30, map, [4, 7]);\n            let pcc2 = new _player_chasing_creature__WEBPACK_IMPORTED_MODULE_5__[\"default\"](30, 1, player, [7, 7]);\n            let rmc3 = new _random_movement_creature__WEBPACK_IMPORTED_MODULE_4__[\"default\"](30, map, [3, 0]);\n            let pcc3 = new _player_chasing_creature__WEBPACK_IMPORTED_MODULE_5__[\"default\"](30, 2, player, [0, 7]);\n            let rmc4 = new _random_movement_creature__WEBPACK_IMPORTED_MODULE_4__[\"default\"](30, map, [7, 3]);\n            let pcc4 = new _player_chasing_creature__WEBPACK_IMPORTED_MODULE_5__[\"default\"](30, 2, player, [7, 0]);\n            let rmc5 = new _random_movement_creature__WEBPACK_IMPORTED_MODULE_4__[\"default\"](30, map, [5, 0]);\n            let pcc5 = new _player_chasing_creature__WEBPACK_IMPORTED_MODULE_5__[\"default\"](30, 0, player, [7, 4]);\n\n            let creatures = [rmc, rmc2, rmc3, rmc4, rmc5, pcc, pcc2, pcc3, pcc4, pcc5];\n\n            let game = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, map, player, creatures);\n            this.gameview = new _game_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"](game);\n\n            ctx.font = \"30px Arial\";\n        });\n    }\n\n    start(){\n        this.gameview.start();\n    }\n}\n\nlet ind = new Index();\nind.render();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Level {\n    constructor(posId, ctx, map, player, creatures, game){\n        this.ctx = ctx;\n        this.map = map;\n        this.player = player;\n        this.creatures = creatures;\n        this.levelRunning = false;\n        this.posId = posId;\n        this.game = game;\n        this.paused = false;\n    }\n\n    running(){\n        return this.levelRunning;\n    }\n\n    pause(){\n        this.paused = !this.paused; \n    }\n    start(){\n        this.curLevel = window.setInterval(() => this.step(), 30);\n        this.levelRunning = true;\n    }\n    step() {\n        if(this.paused) return;\n        this.map.drawMap(8, this.ctx, this.posId, this.game.livesLeft());\n\n        let movements = document.addEventListener(\"keypress\", e => {\n            this.player.move(e.key)\n        }, false)\n        this.player.drawPlayer(this.ctx);\n        this.creatures.map(el => {\n            el.drawCreature(this.ctx);\n        })\n\n        this.creatures.map(el => {\n            if (el.getXPos() === this.player.getXPos() && el.getYPos() === this.player.getYPos()) {\n            if(this.game.livesLeft() === 0){\n                alert(\"game over, you lose\");\n                this.levelRunning = false;\n                window.clearInterval(this.curLevel);\n            } else {\n                this.game.loseLife();\n                window.clearInterval(this.curLevel);\n                this.player.reset();\n                this.creatures.map(c => c.reset());\n                this.game.startLevel(this.posId);\n            }\n            \n        }\n        })\n        \n        if (this.map.getColorArray().every(outerEl => outerEl.every(innerEl => innerEl === \"orange\"))) {\n            if(this.posId === 5) {\n                alert(\"congratulations, you win\");\n                window.clearInterval(this.curLevel);\n            } else {\n                this.levelRunning = false;\n                window.clearInterval(this.curLevel);\n                this.map.reset();\n                this.player.reset();\n                this.creatures.map(c => c.reset());\n                this.game.gainLife();\n                this.game.startLevel(this.posId + 1);\n            }\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Level);\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Map {\n    constructor(w, h) {\n        this.width = w;\n        this.height = h;\n        this.keyChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',\n            'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',\n            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',\n            'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',\n            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '[', ']'];\n        this.gridKeys = [];\n        this.gridStorage = new Array(8).fill(null).map(el => new Array(8));\n        this.gridColors = new Array(8).fill(null).map(el => new Array(8));\n        this.fillGrid();\n        this.gridStorage[0][0] = 1;\n    }\n\n    reset(){\n        this.gridKeys = [];\n        this.fillGrid();\n    }\n\n    fillGrid() {\n        let temp = this.keyChars.slice(0);\n        for (let i = 0; i < 8; i++) {\n            this.gridKeys.push([]);\n            for (let j = 0; j < 8; j++) {\n                let rand = Math.floor(Math.random() * temp.length)\n                this.gridKeys[i].push(temp[rand]);\n                this.gridColors[i][j] = \"tan\";\n                temp = temp.slice(0, rand).concat(temp.slice(rand + 1));\n            }\n        }\n    }\n\n    getItem(pos) {\n        return this.gridStorage[pos[0]][pos[1]];\n    }\n\n    getKey(pos) {\n        return this.gridKeys[pos[0]][pos[1]];\n    }\n\n    getColor(pos) {\n        return this.gridColors[pos[0]][pos[1]];\n    }\n\n    setColor(pos, color) {\n        this.gridColors[pos[0]][pos[1]] = color;\n    }\n\n    getColorArray() {\n        return this.gridColors;\n    }\n\n    drawMap(x, ctx, posId, liveCount) {\n        ctx.clearRect(0, 0, this.width, this.height);\n        for (let i = 0; i < x; i++) {\n            for (let j = 0; j < x; j++) {\n                ctx.fillStyle = this.getColor([i,j]);\n                ctx.fillRect(60 * j + 80, 60 * i + 60, 60, 60);\n                ctx.strokeStyle = \"black\";\n                ctx.strokeRect(60 * j + 80, 60 * i + 60, 60, 60);\n                if (this.getKey([i, j]).charCodeAt() > 96){\n                    ctx.fillStyle = \"rgb(0,90, 0)\";\n                } else if (this.getKey([i, j]).charCodeAt() < 58 ||\n                           this.getKey([i, j]).charCodeAt() === 91 ||\n                           this.getKey([i, j]).charCodeAt() === 93 ){\n                               ctx.fillStyle = \"black\";\n                } else {\n                    ctx.fillStyle = \"rgb(0,45, 0)\";\n                }\n                ctx.font = \"30px Helvetica\";\n                ctx.fillText(this.getKey([i, j]), 60 * j + 100, 60 * i + 100);\n            }\n        } \n        ctx.fillStyle = \"black\";\n        ctx.fillText(`Level ${posId + 1}`, 80, 30);\n        ctx.fillText(`Extra Lives: ${liveCount}`, 370, 30);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\n\n//# sourceURL=webpack:///./src/map.js?");

/***/ }),

/***/ "./src/player-chasing-creature.js":
/*!****************************************!*\
  !*** ./src/player-chasing-creature.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass RandomMovementCreature {\n    constructor(size, type, player, startPos) {\n        this.type = [\"diag\", \"vert\", \"horz\"][type%3];\n        this.iPos = startPos;\n        this.pos = startPos;\n        this.size = size;\n        this.count = 0;\n        this.player = player;\n        this.pinkeye = new Image();\n        this.pinkeye.src = './assets/pinkeye.png';\n        this.sideeye = new Image();\n        this.sideeye.src = './assets/sideeyemonster.png';\n        this.pinkside = new Image();\n        this.pinkside.src = './assets/pinkeyemonster.png';\n    }\n\n    reset() {\n        this.pos = this.iPos;\n    }\n\n    move() {\n        let vert = 0;\n        let horz = 0;\n        this.player.getYPos() < this.pos[0] ? vert -= 1 : vert += 0;\n        this.player.getYPos() > this.pos[0] ? vert += 1 : vert += 0;\n        this.player.getXPos() < this.pos[1] ? horz -= 1 : horz += 0;\n        this.player.getXPos() > this.pos[1] ? horz += 1 : horz += 0;\n        if(this.type === \"diag\"){\n            this.pos = [this.pos[0] + vert, this.pos[1] + horz];\n        } else if(this.type === \"vert\"){\n            this.pos = vert === 0 ? [this.pos[0], this.pos[1] + horz] : [this.pos[0] + vert, this.pos[1]];\n        } else {\n            this.pos = horz === 0 ? [this.pos[0] + vert, this.pos[1]] : [this.pos[0], this.pos[1] + horz];\n        }   \n    }\n\n    getXPos() {\n        return this.pos[1];\n    }\n\n    getYPos() {\n        return this.pos[0];\n    }\n\n\n    drawCreature(ctx) {\n        this.count += 1;\n        if (this.count >= 35) {\n            this.count = 0;\n            this.move();\n        }\n        if (this.type === \"vert\") ctx.drawImage(this.pinkeye, 60 * this.pos[1] + 90, 60 * this.pos[0] + 70, this.size, this.size);\n        if (this.type === \"horz\") ctx.drawImage(this.sideeye, 60 * this.pos[1] + 90, 60 * this.pos[0] + 70, this.size, this.size);\n        if (this.type === \"diag\") ctx.drawImage(this.pinkside, 60 * this.pos[1] + 90, 60 * this.pos[0] + 70, this.size, this.size);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RandomMovementCreature);\n\n//# sourceURL=webpack:///./src/player-chasing-creature.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Player {\n    constructor(size, map) {\n        this.iPos = [3,3]\n        this.pos = [3, 3];\n        this.size = size;\n        this.map = map;\n        this.image = new Image();\n        this.image.src = './assets/player.png';\n    }\n\n    reset(){\n        this.pos = this.iPos;\n    }\n\n    move(key) {\n        if (key === this.map.getKey(this.pos)) return; // player selected current position\n        let up = false;\n        let left = false;\n        let right = false;\n        let down = false;\n        let found = false;\n        // Check Where The Player can move\n        if (this.pos[0] > 0) up = true;\n        if (this.pos[0] < 7) down = true;\n        if (this.pos[1] > 0) left = true;\n        if (this.pos[1] < 7) right = true;\n        // Check upper positions\n        if (up && !found) {\n            // Check left\n            if (left && !found) {\n                if (this.map.getKey([this.pos[0] - 1, this.pos[1] - 1]) === key) {\n                    this.pos = [this.pos[0] - 1, this.pos[1] - 1];\n                    this.map.setColor(this.pos, \"orange\");\n                    found = true;\n                }\n            }\n            // Check center\n            if (!found && this.map.getKey([this.pos[0] - 1, this.pos[1]]) === key) {\n                this.pos = [this.pos[0] - 1, this.pos[1]];\n                this.map.setColor(this.pos, \"orange\");\n                found = true;\n            }\n            // Check right\n            if (right && !found) {\n                if (this.map.getKey([this.pos[0] - 1, this.pos[1] + 1]) === key) {\n                    this.pos = [this.pos[0] - 1, this.pos[1] + 1];\n                    this.map.setColor(this.pos, \"orange\");\n                    found = true;\n                }\n            }\n        }\n        // Check center positions\n        // Check left\n        if (left && !found) {\n            if (this.map.getKey([this.pos[0], this.pos[1] - 1]) === key) {\n                this.pos = [this.pos[0], this.pos[1] - 1];\n                this.map.setColor(this.pos, \"orange\");\n                found = true;\n            }\n        }\n        // Check right\n        if (right && !found) {\n            if (this.map.getKey([this.pos[0], this.pos[1] + 1]) === key) {\n                this.pos = [this.pos[0], this.pos[1] + 1];\n                this.map.setColor(this.pos, \"orange\");\n                found = true;\n            }\n        }\n        // Check lower positions\n        if (down && !found) {\n            // Check left\n            if (left && !found) {\n                if (this.map.getKey([this.pos[0] + 1, this.pos[1] - 1]) === key) {\n                    this.pos = [this.pos[0] + 1, this.pos[1] - 1];\n                    this.map.setColor(this.pos, \"orange\");\n                    found = true;\n                }\n            }\n            // Check center\n            if (!found && this.map.getKey([this.pos[0] + 1, this.pos[1]]) === key) {\n                this.pos = [this.pos[0] + 1, this.pos[1]];\n                this.map.setColor(this.pos, \"orange\");\n                found = true;\n            }\n            // Check right\n            if (right && !found) {\n                if (this.map.getKey([this.pos[0] + 1, this.pos[1] + 1]) === key) {\n                    this.pos = [this.pos[0] + 1, this.pos[1] + 1];\n                    this.map.setColor(this.pos, \"orange\");\n                    found = true;\n                }\n            }\n        }\n    }\n\n    getXPos(){\n        return this.pos[1];\n    }\n\n    getYPos(){\n        return this.pos[0];\n    }\n\n    drawPlayer(ctx) {\n        ctx.drawImage(this.image, 60 * this.pos[1] + 90, 60 * this.pos[0] + 70, this.size, this.size);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/random-movement-creature.js":
/*!*****************************************!*\
  !*** ./src/random-movement-creature.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ \"./src/map.js\");\n\nclass RandomMovementCreature{\n    constructor(size, map, startPos) {\n        this.iPos = startPos;\n        this.pos = startPos;\n        this.size = size;\n        this.map = map;\n        this.count = 0;\n        this.image = new Image();\n        this.image.src = './assets/RandomMovement.png';\n    }\n\n    reset(){\n        this.pos = this.iPos;\n    }\n\n    move() {\n        let up = false;\n        let left = false;\n        let right = false;\n        let down = false;\n        if (this.pos[0] > 0) up = true;\n        if (this.pos[0] < 7) down = true;\n        if (this.pos[1] > 0) left = true;\n        if (this.pos[1] < 7) right = true;\n        let vert = 0;\n        let horz = 0;\n        while(vert === 0 && horz === 0){\n            up ? vert -= Math.floor(Math.random()* 2) : vert += 0;\n            down ? vert += Math.floor(Math.random() * 2) : vert += 0;\n            left ? horz -= Math.floor(Math.random() * 2) : horz += 0;\n            right ? horz += Math.floor(Math.random() * 2) : horz += 0;\n        }\n\n        this.pos = [this.pos[0] + vert, this.pos[1] + horz];\n    }\n\n    getXPos() {\n        return this.pos[1];\n    }\n\n    getYPos() {\n        return this.pos[0];\n    }\n\n    drawCreature(ctx) {\n        this.count += 1;\n        if(this.count >= 35){\n            this.count = 0;\n            this.move();\n        }\n        ctx.drawImage(this.image, 60 * this.pos[1] + 90, 60 * this.pos[0] + 70, this.size, this.size);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RandomMovementCreature);\n\n//# sourceURL=webpack:///./src/random-movement-creature.js?");

/***/ })

/******/ });