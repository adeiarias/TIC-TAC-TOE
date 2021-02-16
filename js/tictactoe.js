var x,y;
var actualPlayer=0;
var cont=0;
var board = [["-","-","-"],["-","-","-"],["-","-","-"]];
function findWinner(player){
	if(board[0][0]==player && board[1][0]==player && board[2][0]==player){
		return true;
	}else if(board[0][1]==player && board[1][1]==player && board[2][1]==player){
		return true;
	}else if(board[0][2]==player && board[1][2]==player && board[2][2]==player){
		return true;
	}else if(board[0][0]==player && board[0][1]==player && board[0][2]==player){
		return true;
	}else if(board[1][0]==player && board[1][1]==player && board[1][2]==player){
		return true;
	}else if(board[2][0]==player && board[2][1]==player && board[2][2]==player){
		return true;
	}else if(board[0][0]==player && board[1][1]==player && board[2][2]==player){
		return true;
	}else if(board[0][2]==player && board[1][1]==player && board[2][0]==player){
		return true;
	}else{
		return false;
	}
};
function tdclick(id){
	switch(id){
		case "S_I":
			x=0,y=0;
			break;
		case "S_C":
			x=1,y=0;
			break;
		case "S_D":
			x=2,y=0;
			break;
		case "C_I":
			x=0,y=1;
			break;
		case "C_C":
			x=1,y=1;
			break;
		case "C_D":
			x=2,y=1;
			break;
		case "I_I":
			x=0,y=2;
			break;
		case "I_C":
			x=1,y=2;
			break;
		case "I_D":
			x=2,y=2;
			break;
	};
	if(board[x][y] != "-"){
		alert("THAT POSITION IS TAKEN");
	}else{
		switch(actualPlayer){
		case 0:
			board[x][y] = "O";
			document.getElementById("IMG_"+id).src="images/circle.png";
			if(findWinner("O")){
				document.getElementById("turn").innerHTML="PLAYER 1 HAS WON!!!";
			}else{
				cont++;
				if(cont == 9){
					document.getElementById("turn").innerHTML="DRAW";
				}else{
					document.getElementById("turn").innerHTML="TURN: PLAYER 1";
					actualPlayer=1;
				}	
			}				
			break;
		case 1:
			board[x][y] = "X";
			document.getElementById("IMG_"+id).src="images/cross.png";
			if(findWinner("X")){
				document.getElementById("turn").innerHTML="PLAYER 2 HAS WON!!!";
			}else{
				cont++;
				if(cont == 9){
					document.getElementById("turn").innerHTML="DRAW";
				}else{
					document.getElementById("turn").innerHTML="TURN: PLAYER 2";
					actualPlayer=0;
				}
			}				
			break;
		};
	}
};
