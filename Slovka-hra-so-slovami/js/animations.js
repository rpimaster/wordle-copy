//BOUNCE WHEN YOU ADD A NEW LETTER
const animateTileBounce = (tile) => {

	tile.classList.add('is-filled', 'animate__animated', 'animate__bounceIn')
}

//ROTATE TILE, WHEN ENTER UN-EXISTING WORD
const animateTileReveal = (row) => {
    row.querySelectorAll('.tile').forEach((tile, index) => {

        tile.classList.remove('animate__bouncIn', 'animate__flipInY')

        

        setTimeout(() => {
            tile.style.visibility = 'visible'
            tile.classList.add('animate__flipInY', `animate__delay-${index}s`)
        }, 0);   
    })
}

//Dance when you win
const animateTileDance = (row) => {
    row.querySelectorAll('.tile').forEach((tile, index) => {
        
        tile.innerHTML = solution.charAt(index)


        tile.classList.remove('animate__bouncIn', 'animate__flipInY', 'animate__bounce', 'animate__jackInTheBox')

        setTimeout(() => {
            tile.classList.add('animate__jackInTheBox', `animate__delay-${index}s`)
        }, 0);   
    })
}

//SHAKE WHOLE ROW, WHEN NON-EXISTING WORD IS ENTERED
const animateRowShake = (row) => {
	
 row.classList.remove('animate__shakeX')


	setTimeout(() => {
		row.classList.add('is-filled', 'animate__animated', 'animate__shakeX')
	}, 0);
}

//GAME OVER

const youVeryMuchLose = () => {
    let board = document.querySelector('.board')
    board.classList.add('animate__animated', 'animate__hinge')
}


//HIGHLIGHT LETTERS
const highlightLetters = (row) => {
    let presentLetters = []

    row.querySelectorAll('.tile').forEach((tile, index) => {
        tile.style.visibility = 'hidden'
        
        let letter = noAccents(word.charAt(index))

    let colorClass = 'wrong'

//if a letter is both 'present' and 'correct', only show correct
// only show each 'present'letter once
    if (noAccentSolution.includes(letter) && !presentLetters.includes(letter)) {
        if(!lettersInRow.correct.includes(letter)) {
            colorClass = 'present'
            presentLetters.push(letter)
        }
        
    }

    // letter is in correct place
    if (solution.charAt(index) === letter) {
        colorClass = 'correct'
    }

    tile.classList.add(colorClass)
    })
    
    // keyboard row in footer
	document.querySelectorAll('.keyboard .tile').forEach(tile => {
		let colorClass = ''

		if (lettersInRow.wrong.includes(tile.id)) colorClass = 'wrong'
		if (lettersInRow.present.includes(tile.id)) colorClass = 'present'
		if (lettersInRow.correct.includes(tile.id)) colorClass = 'correct'

		if (colorClass) tile.classList.add(colorClass)
	})
}
