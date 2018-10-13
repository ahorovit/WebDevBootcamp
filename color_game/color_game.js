/* game Variables */
var numSquares = 6; // Default Hard mode
var colors;
var targetColor;

/*  Selectors */
var squares = document.querySelectorAll(".square");
var targetString = document.querySelector("#target");
var feedbackString = document.querySelector("#feedback");
var h1 = document.querySelector('h1');
var resetBtn = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init() {
	reset();
	setupButtons()
	setupSquares();
}

function reset() 
{
  colors = randomizeColors(numSquares);
  targetColor = pickColor();
  targetString.textContent = targetColor;
  h1.style.backgroundColor = 'steelblue';
  feedbackString.textContent = '';

  for (var i = 0; i < squares.length; i++)
  {
    if (colors[i]) // If easy mode, only set colors for first 3
    {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else { // If easy mode, hide last three
      squares[i].style.display = 'none';
    }
  }
}

function setupButtons()
{
	resetBtn.addEventListener('click', function ()
	{
	  reset();
	});
	
	for (var i = 0; i < modeButtons.length; i++)
	{
		modeButtons[i].addEventListener('click', function() 
		{
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			this.classList.add('selected');
			this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}


function setupSquares()
{
	for (var i = 0; i < squares.length; i++)
	{
	  // Apply color
	  squares[i].style.backgroundColor = colors[i];

	  // Add click listeners
	  squares[i].addEventListener('click', function()
	  {
	      if (this.style.backgroundColor === targetColor)
	      {
	        feedbackString.textContent = 'Correct!';
	        resetBtn.textContent = 'Play Again?'
	        changeColors(targetColor);
	        h1.style.backgroundColor = targetColor;
	      }
	      else
	      {
	        this.style.backgroundColor = '#232323';
	        feedbackString.textContent = 'Try Again';
	      }
	  })
	}
}

function changeColors(color)
{
  for (var i = 0; i < squares.length; i++)
  {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor()
{
  var pickedIndex = Math.floor(Math.random() * colors.length);
  return colors[pickedIndex];
}

function randomizeColors(numColors)
{
  var randColors = [];
  for (var i = 0; i < numColors; i++)
  {
    randColors.push(getRandomColor());
  }
  return randColors;
}

function getRandomColor()
{
  var r =Math.floor(Math.random() * 256);
  var g =Math.floor(Math.random() * 256);
  var b =Math.floor(Math.random() * 256);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}