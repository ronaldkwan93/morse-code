const textArea = document.querySelector("textArea");
const result = document.querySelector("#result");
const resultPara = document.createElement("p");
result.appendChild(resultPara);

const morseCode = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  " ": "/",

  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",

  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "!": "-.-.--",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  _: "..--.-",
  '"': ".-..-.",
  $: "...-..-",
  "@": ".--.-.",
};

const english = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  " ": "   ",

  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",

  ".-.-.-": ".",
  "--..--": ",",
  "..--..": "?",
  ".----.": "'",
  "-.-.--": "!",
  "-..-.": "/",
  "-.--.": "(",
  "-.--.-": ")",
  ".-...": "&",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  ".-.-.": "+",
  "-....-": "-",
  "..--.-": "_",
  ".-..-.": '"',
  "...-..-": "$",
  ".--.-.": "@",
};

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// textArea.addEventListener("input", (e) => {
//   console.log(e.data);
//   //see if input has a key in morseCode. If there is. replace the value of the input value
//   const keyValue = e.data;
//   if(morseCode.hasOwnProperty(`${keyValue}`)) {

//   }
//   resultPara.textContent = textArea.value;
// });

textArea.addEventListener("input", () => {
  //   console.log(textArea.value);
  const textValue = textArea.value.toLowerCase();
  //   console.log(textValue.split(""));
  //   console.log(textValue);
  if (/[a-z]/.test(textValue)) {
    let morseArr = [];
    for (let i = 0; i < textValue.length; i++) {
      if (morseCode.hasOwnProperty(`${textValue[i]}`)) {
        const translatedLetter = morseCode[textValue[i]];
        morseArr.push(translatedLetter);
      } else {
        // console.log(`this doesn't exist ${textValue[i]}`);
        morseArr.push(textValue[i]);
      }
      const result = morseArr.join("  ");
      resultPara.textContent = result;
      console.log("Translating to morse...");
    }
  } else {
    // splits with 3 spaces
    let words = textValue.split("/");
    console.log(words);
    //map through the words
    //each word we want to split and return and check if each letter has key found in object. 
    let morseWords = words.map(word => {
        let letters = word.split(" ");
        let translatedMorseLetter = letters.map(letter => {
            //if found, provide value of key, if not provide nothing
            return english.hasOwnProperty(letter) ? english[letter] : "";
        })
        // return letters and join together
        return translatedMorseLetter.join("");
    })
    // Then join the words 
    const result = morseWords.join(" ")
    resultPara.textContent = result;
    console.log("Translating to english...");
    
  }
});
