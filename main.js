console.log('My Tic-tac')
//Selecting starting page
const selectBox = document.querySelector('.select-box'),
choose = document.querySelectorAll(".choose")

//selecting game page
const gameZone = document.querySelector("#game-container"),
showChange = document.querySelector(".slider")

//how can we change turn
let changeTurn =null

choose.forEach(choosePlayer =>{
    choosePlayer.addEventListener('click', ()=>{
        if(choosePlayer.id === 'playerX'){
            changeTurn = false;
            console.log(changeTurn)
            showChange.style.left =`160px`;
        }else{
            changeTurn = true;
            console.log(changeTurn)
            showChange.style.left =`160px`;
        }
        selectBox.style.display ="none";
        gameZone.style.display ="block";
        // selectBox.classList.add("hide");
        // gameZone.classList.add("show")
    })
})





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