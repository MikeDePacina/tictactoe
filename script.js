const tiles = document.querySelectorAll('.cell')
const resetButton = document.querySelector('#reset')
const xPlayer = 'x'
const oPlayer = 'o'
const resultText = document.querySelector('.results')
let currentPlayer = xPlayer


let board = ['','','','','','','','',''] 
let counter = 0


const verticalWin = ()=> {
    if(board[0] == xPlayer || board[0] == oPlayer){
        if(board[0] == board[3] && board[3] == board[6])
        return true
    }
    if(board[1] == xPlayer || board[1] == oPlayer){
        if(board[1] == board[4] && board[4] == board[7])
        return true
    }
    if( board[2] == xPlayer || board[2] == oPlayer){
          if(board[2] == board[5] && board[5] == board[8])
        return true
    }
    return false
}



const horizontalWin = ()=>{
    if(board[0] == xPlayer || board[0] == oPlayer){
        if(board[0] == board[1] && board[1] == board[2])
        return true
    }
    if(board[3] == xPlayer || board[3] == oPlayer){
        if(board[3] == board[4] && board[4] == board[5])
        return true
    }
    if( board[6] == xPlayer || board[6] == oPlayer){
          if(board[6] == board[7] && board[7] == board[8])
        return true
    }
    return false
}




const diagonalWin = () =>{
    if(board[0] == xPlayer || board[0] == oPlayer)
        if(board[0] == board[4] && board[4] == board[8])
            return true
    if(board[2] == xPlayer || board[2] == oPlayer)
        if(board[2] == board[4] && board[4] == board[6])
            return true
    return false
}



const checkWin = ()=>{
    if(diagonalWin() == true || horizontalWin() == true || verticalWin() == true)
        return true
    return false
}



const checkDraw = () =>{
    if(board.includes(''))
        return false
    return true
}
//|| horizontalWin() === true || diagonalWin() === true) */
            
const tileClicked = (e)=>{
    const index = e.target.getAttribute('data-index')
        if(board[index] == ''){
            board[index] = currentPlayer
            e.target.innerText = currentPlayer

            if(checkWin() == true){
                resultText.innerText = `${currentPlayer} won`
                tiles.forEach(button =>{
                    button.setAttribute('disabled', true)
                })
            }

            if(checkDraw() == true)
            resultText.innerText = 'Draw'
         }

        
        
  
        
    
    currentPlayer = (currentPlayer == xPlayer ? oPlayer : xPlayer)
    
   
}




tiles.forEach(button =>{
   button.addEventListener('click', tileClicked)
})



resetButton.addEventListener('click', ()=>{
    tiles.forEach(button =>{
        button.innerText = ''
    })
    for(let i = 0; i < board.length; i++)
        board[i] = ''
    
    
    resultText.innerHTML = ''
    tiles.forEach(button =>{
        button.removeAttribute('disabled')
    })
})




