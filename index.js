//Declaring the variables
const fullText = document.getElementById("textInput");
const replaceWord = document.querySelector('#scrambleText');
const replaceWith = document.querySelector('#replaceText');
const btn = document.getElementById('btn');
const outputText = document.querySelector('#outputText');
const numberScanned = document.querySelector('#numberScanned');
const executionTime = document.querySelector('#executionTime');

scramble = () => {
    let t0 = performance.now();
    replaceTextArray = replaceWord.value.split(',');
    fullTextArray = fullText.value.split(' ');
    if(fullText.value.length == 0 || replaceWord.value.length == 0){
        alert('please fill all required field')
    }else{
        function escapeRegExp(string){
            return string.replace(/[.*+?^${}()|[\]\\]/gi, "\\$&");
        }
        function replaceAll(str, term, replacement) {
            return str.replace(new RegExp(escapeRegExp(term), 'gi'), replacement);
        }
        let myStr = fullText.value;
        let newStr = myStr;
        for(i of replaceTextArray){
            if(i !== ' '){
                if(replaceWith.value.length == 7){
                    newStr = replaceAll(newStr, i, replaceWith.value);
                }
                else{
                    newStr = replaceAll(newStr, i, '*******');
                }
                
            }
        }
        let t1 = performance.now();
    
        outputText.innerText = newStr;
        numberScanned.innerText = `${fullTextArray.length} words`
        executionTime.innerText = `${t1-t0} millisecs`
    
    }
    
}
btn.addEventListener('click', scramble);