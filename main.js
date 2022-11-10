console.log('My Tic-tac')

const selectBox = document.querySelector('.select-box'),
selectX_b = document.querySelector('.playerX'),
selectO_b = document.querySelector('.playerO'),
gameZone = document.querySelector('.game-container');

window.onload =()=>{
    selectX_b.onclick =()=>{
        selectBox.classList.add("hide");
       // gameZone.classList.add("show") ;//hide the select box on player click
    }
    selectO_b.onclick =()=>{
    
        selectBox.classList.add("hide");
        //gameZone.classList.add("show") ;
    }
}





// let gameWin = new Audio("game_win.mp3");
// let gameover = new Audio("game_over.mp3");
// let audioTurn = new Audio('ui-click-97915.mp3')


// let turn="X"
// let isgameOver = false

// //function to change the turn
// const ChangeTrun=()=>{
//     return turn === "X"? "0" : "X"
// }

// //function to check for win
// const checkWin =()=>{
//     let wins =[
//         [0, 1, 2],
//         [3, 4 ,5],
//         [6 ,7 ,8],
//         [0 ,3 ,6],
//         [1 ,4 ,7],
//         [2 ,5 ,8],
//         [0 ,4 ,8],
//         [2 ,4 ,6]
//     ]
//     wins.forEach(e =>{
//         if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
//             document.querySelector(".info").innerText = boxtext[e[0]].innerText + 'Won';
//             // gameWin.play();
//             isgameOver = true
//         }
//     })
// }

// //Game Logic
// let boxes= document.getElementsByClassName('box');
// Array.from(boxes).forEach(element =>{
//     let boxtext = element.querySelector('.boxText');
//     element.addEventListener('click',(e)=>{
//         if(boxtext.innerText === ''){
//             boxtext.innerText = turn;
//             turn = ChangeTrun();
//             checkWin();
//             audioTurn.play();
//             if(!isgameOver){
//                 document.getElementsByClassName('info')[0].innerText ='Turn for' +" "+ turn;
//             }
            
//         }
//     })
// })