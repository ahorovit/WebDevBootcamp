

var playerOneButton = document.querySelector('#p1');
var playerTwoButton = document.querySelector('#p2');
var resetButton = document.querySelector('#reset');
var numInput = document.querySelector('input[type="number"]');
var winningScoreDisplay = document.querySelector('#winningScore');

var p1Display = document.querySelector('#score1');
var p2Display = document.querySelector('#score2');

var p1Score = 0;
var p2Score = 0;

var winningScore = 5;
var gameOver = false;

playerOneButton.addEventListener("click", function()
{
	if (gameOver) {return;}

	if (p1Score < winningScore && p2Score < winningScore)
	{
		p1Score++;
		// console.log(p1Score, winningScore);
		p1Display.textContent = p1Score;
	}

	if (p1Score === winningScore)
	{
		p1Display.classList.add('green');
		gameOver = true;
	}

})

playerTwoButton.addEventListener("click", function()
{
	if (gameOver) {return;}

	if (p1Score < winningScore && p2Score < winningScore)
	{
		p2Score++;
		p2Display.textContent = p2Score;
	}

	if (p2Score === winningScore)
	{
		p2Display.classList.add('green');
		gameOver = true;
	}
});

resetButton.addEventListener('click', reset);

numInput.addEventListener('change', function()
{
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});

function reset()
{
	p1Display.classList.remove('green');
	p2Display.classList.remove('green');
	gameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
}