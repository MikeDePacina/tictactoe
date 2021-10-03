const tiles = document.getElementsByTagName('button')
console.log(tiles)

class tictactoe{

    gameBoard(){
        let board = [[['', '', '']],
                    [['','','']],
                    [['','','']]]

    }    

   
    updateClass(e){
        let counter = 0
        if(counter % 2 == 0)
            tiles.classList.add = "x"
        else 
            tiles.classList.add = "o"
        counter++

    }
}

const game = new tictactoe()


forEach(button =>{
    button.addEventListener('click', ()=>{
        game.updateClass()
    })
})
