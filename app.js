 window.onload = function(){
    var btnTranslate = document.querySelector("#btn-translate");
    var txtInput = document.querySelector("#txt-input");
    var outputDiv = document.querySelector("#output");
    
    // var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
    var serverURL = "https://api.funtranslations.com/translate/yoda.json"

    function errorHandler(error) {
        console.log("error occured", error);
    }

    function getTranslationURL(input){
        return serverURL + "?" + "text=" + input
    }

    function clickHandler(){
        var inputTxt = txtInput.value;
        fetch(getTranslationURL(inputTxt))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler);
    }
    btnTranslate.addEventListener("click", clickHandler); 

 }
 
 
