class Board {
    constructor(table){
        this.table = table;
        this.boardState = [[],[],[]];
        this.player = "O";
        this.winner = null;
    }

    initBoard(){
        const places = this.table.querySelectorAll("td");
        places.forEach((place, ind) => {
            if(this.boardState[0].length < 3){
                this.boardState[0].push(place)
            } else if(this.boardState[1].length < 3){
                this.boardState[1].push(place);
            } else if(this.boardState[2].length < 3){
                this.boardState[2].push(place);
            }
            console.log(this.boardState);
        });
    }

    changeTurn(){
        if(player === "O"){
            player = "X";
        } else {
            player = "O";
        }
    }

    updateBoard(e){
        const places = this.table.querySelectorAll("td");
        places.forEach(places => {
            //update boardstate & table
            // this.
        });
        this.changeTurn();
    }

    checkWin(){};
}