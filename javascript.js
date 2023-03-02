function chooseXCoordinates(){
    const xCoordinate = ["a", "b", "c", "d", "e", "f", "g", "h"];
    let x = xCoordinate[Math.floor(Math.random() * xCoordinate.length)];
        if (xCoordinate == 0){
            let x = "a";
        } if (xCoordinate == 1){
            let x = "b";
        } if (xCoordinate == 2){
            let x = "c";
        } if (xCoordinate == 3){
            let x = "d";
        } if (xCoordinate == 4){
            let x = "e";
        } if (xCoordinate == 5){
            let x = "f";
        } if (xCoordinate == 6){
            let x = "g";
        } if (xCoordinate == 7){
            let x = "h";
        }
        
        return x;
    }

let x = chooseXCoordinates();

function chooseYCoordinates(){
    const yCoordinate = ["1", "2", "3", "4", "5", "6", "7", "8"];
    let y = yCoordinate[Math.floor(Math.random() * yCoordinate.length)];
        if (yCoordinate == 0){
            let y = "1";
        } if (yCoordinate == 1){
            let y = "2";
        } if (yCoordinate == 2){
            let y = "3";
        } if (yCoordinate == 3){
            let y = "4";
        } if (yCoordinate == 4){
            let y = "5";
        } if (yCoordinate == 5){
            let y = "6";
        } if (yCoordinate == 6){
            let y = "7";
        } if (yCoordinate == 7){
            let y = "8";
        }
        
        return y;
    }

let y = chooseYCoordinates();

let randomSquare = (x + y);

console.log(randomSquare);


