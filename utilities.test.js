import {
  translateEnglishToMorse,
  translateMorseToEnglish,
} from "./utilities.js";

const morseCodeObj = {
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

  const englishObj = {
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

describe("translateEnglishToMorse", () => {
  test("translates a single letter correctly", () => {
    expect(translateEnglishToMorse("a", morseCodeObj)).toBe(".-");
    expect(translateEnglishToMorse("b", morseCodeObj)).toBe("-...");
  });

  test("translates multiple letters correctly with proper spacing", () => {
    expect(translateEnglishToMorse("ab", morseCodeObj)).toBe(".-  -...");
    expect(translateEnglishToMorse("hello", morseCodeObj)).toBe(
      "....  .  .-..  .-..  ---"
    );
  });

  test("translates spaces correctly", () => {
    expect(translateEnglishToMorse("a b", morseCodeObj)).toBe(
      ".-  /  -..."
    );
  });

  test("handles empty string input", () => {
    expect(translateEnglishToMorse("", morseCodeObj)).toBe("");
  });
});

describe("translateMorseToEnglish", () => {
  test("translates single morse code characters correctly", () => {
    expect(translateMorseToEnglish([".-"], englishObj)).toBe("a");
    expect(translateMorseToEnglish(["-..."], englishObj)).toBe(
      "b"
    );
  });

  test("translates multiple morse characters within a word correctly", () => {
    expect(translateMorseToEnglish([".- -..."], englishObj)).toBe(
      "ab"
    );
    expect(
      translateMorseToEnglish(
        [".... . .-.. .-.. ---"],
        englishObj
      )
    ).toBe("hello");
  });

  test("translates multiple words correctly with proper spacing", () => {
    expect(
      translateMorseToEnglish(
        [".... ..", "-... -.-- ."],
        englishObj
      )
    ).toBe("hi bye");
    expect(
      translateMorseToEnglish(
        ["... --- ...", ".... . .-.. .--."],
        englishObj
      )
    ).toBe("sos help");
  });

  test("handles empty array input", () => {
    expect(translateMorseToEnglish([], englishObj)).toBe("");
  });
});
