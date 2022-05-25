var assert = require('assert');
var placeMines = require('./script_test')

describe('placesMines', function(){
    var numRow = 2;
    var numCol = 4;
    var numMine = 3;
    output= placeMines(numRow, numCol, numMine);
    it('Should return a string.', function(){
        assert.strictEqual(typeof(output), 'string', "The function didn't return a string.")
    });
    it('Should return a string with a defined number of row with the help of the Break Line caractere.', function(){
        const expectedResult = numRow - 1;
        const controle = output.split('').filter(letter => letter == '\n').length;
        assert.strictEqual(controle, expectedResult, "The function didn't retrun the good number of row.")
    });
    it('Should return a string with a length of (numRow * numCol) + (numRow - 1).', function(){
        const expectedResult = (numRow*numCol) + numRow - 1;
        const controle = output.length;
        assert.strictEqual(controle, expectedResult, "The function didn't retrun the good string lenght.")
    });
    it('Should return a grid string with each row having a specifique length.', function(){
        const expectedResult = true;
        const controle = output.split('\n').every(array => array.length == numCol);
        assert.strictEqual(controle, expectedResult, "The function didn't retrun the good string lenght.")
    });
    it('Should return a defined number of mine.', function(){
        const expectedResult = numMine;
        const controle = output.split('').filter(letter => letter == 'x').length;
        assert.strictEqual(controle, expectedResult, "The function didn't add the good number of mine in our grid.")
    });
})