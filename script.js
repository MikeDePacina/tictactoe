const tiles = document.getElementsByTagName('button')
const resetButton = document.getElementById('reset')
console.log(tiles)

class tictactoe{

    gameBoard(){
        let board = [[['', '', '']],
                    [['','','']],
                    [['','','']]]

    }    

    reset(){
        tiles.forEach(button =>{
            button.classList.toggle("x")
        })
    }
   
    updateClass(){
        let counter = 0
        if(counter % 2 == 0)
            button.classList.add = "x"
        else 
            button.classList.add = "o"
        counter++

    }
}

const game = new tictactoe()


tiles.forEach(button =>{
    button.addEventListener('click', ()=>{
        game.updateClass()
    })
})

resetButton.addEventListener('click',()=>{
    game.reset()

})
