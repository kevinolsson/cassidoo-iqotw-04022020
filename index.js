const evenWord = word => {
  let lettersToRemove = 0;
  let wordArray = Array.from(word);

  const countLettersToRemove = (wordArrayInFunction, lettersToRemove) => {
    if(wordArrayInFunction.length === 0) { return lettersToRemove };
    let duplicateCount = 0;
    wordArrayInFunction.map(letter => {
      if(letter === wordArrayInFunction[0]) {
        duplicateCount++;
      }
    })

    lettersToRemove = lettersToRemove + (duplicateCount % 2);
    return countLettersToRemove( wordArrayInFunction.filter(arrayValue => { return arrayValue !== wordArrayInFunction[0]}), lettersToRemove)
  }

  return countLettersToRemove(wordArray, lettersToRemove);
}

console.log(evenWord('aaaa')); // 0
console.log(evenWord('potato')); // 2
console.log(evenWord('helloworld')) // 6
