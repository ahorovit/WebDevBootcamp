function printReverse(input)
{
    lastIdx = input.length - 1;
    for (var i = lastIdx; i >= 0; i--)
    {
        console.log(input[i]);
    }
}

var testArray = ['a', 'b', 'c'];



function isUniform(input)
{
    var firstElement = input[0];

    try{

        input.forEach(function(thisElement)
        {
            // console.log('first: ' + firstElement);
            // console.log('this: ' + thisElement);

            if (thisElement !== firstElement)
            {
               throw 'not a match';
            }
        })
    }
    catch (e)
    {
        return false;
    }

    return true;
}

var testUniform = ['a', 'a', 'a'];