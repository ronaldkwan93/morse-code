export const textArea = document.querySelector("textArea");
export const result = document.querySelector("#result");
export const resultPara = document.createElement("p");

export const appendParagraphToResultBox = () => {
    result.appendChild(resultPara);
    
}

export const appendResult = (result, language) => {
    resultPara.textContent = result;
    console.log(`Translating to ${language}...`);
}

