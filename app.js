var inputText = document.querySelector("#input");

var btnTranslate = document.querySelector("#btn-translate");

var outputDiv = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/morse.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function clickEventHandler(){
    var txtInput = inputText.value;
    
    fetch(getTranslationURL(txtInput))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;  
            outputDiv.innerText = translatedText;
        })

};

btnTranslate.addEventListener("click", clickEventHandler);