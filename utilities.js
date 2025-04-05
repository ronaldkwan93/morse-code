export const translateEnglishToMorse = (text, obj) => {
  let morseArr = [];
  for (let i = 0; i < text.length; i++) {
    if (obj.hasOwnProperty(`${text[i]}`)) {
      const translatedLetter = obj[text[i]];
      morseArr.push(translatedLetter);
    } else {
      // console.log(`this doesn't exist ${text[i]}`);
      morseArr.push(text[i]);
    }
    console.log(morseArr);
  }
  const result = morseArr.join("  ");
  return result;
};

export const translateMorseToEnglish = (mWords, obj) => {
  let morseWords = mWords.map((word) => {
    //map through the words
    //each word we want to split and return and check if each letter has key found in object.
    let letters = word.split(" ");
    let translatedMorseLetter = letters.map((letter) => {
      //if found, provide value of key, if not provide nothing
      return obj.hasOwnProperty(letter) ? obj[letter] : "";
    });
    // return letters and join together
    return translatedMorseLetter.join("");
  });
    // Then join the words

  return morseWords.join(" ");
};
