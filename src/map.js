// const Player = require("./player");

class Map {
    constructor(){
        this.keyChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
         'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K','L', 'M', 'N',
             'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '[', ']'];
        this.gridKeys = new Array(8).fill(new Array(8));
        this.gridStorage = new Array(8).fill(new Array(8));
        this.fillGrid();
    }

    fillGrid(){
        let temp = this.keyChars.slice(0);
        for(let i = 0; i < 8; i++){
            for(let j = 0; j < 8; j++ ){
                let rand = Math.floor(Math.random()*temp.length)
                this.grid[i][j]
                temp = temp.slice(0, rand).concat(temp.slice(rand+1));
            }
            
        } 
    }

    getItem(pos){
        return this.gridStorage[pos[0]][pos[1]];
    }

    getKey(pos){
        // console.log(this.gridKeys, pos);
        return this.gridKeys[pos[0]][pos[1]];
    }
}

export default Map;