const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//grab button & 
const generateBtn = document.getElementById("generate-btn")
//grab two output fields
const outputOne = document.getElementById("output-one")
const outputTwo = document.getElementById("output-two")
//grab each copy btn
const copyOne = document.getElementById("copy-one")
const copyTwo = document.getElementById("copy-two")


//EVENT LISTENERS
//event listener running generate function upon clicking the button
generateBtn.addEventListener("click", displayPass)
copyOne.addEventListener("click", copy)
copyTwo.addEventListener("click", copy)


//GENERATEPASS function - create a string of random characters
function generatePass() {
    let password = ""
    //get users input
    let passLength = document.getElementById("pass-length").value;
    let includeSymbols = document.getElementById("pass-symbols").checked
    let randomIndex
    for (let i = 0; i < passLength; i++) {
        //check if symbols is checked
        if (includeSymbols) {
            //get random character including symbols
            randomIndex = Math.floor(Math.random() * characters.length)
            //get random character excluding symbols
        } else {
            randomIndex = Math.floor(Math.random() * 62) 
        }
        
        password += characters[randomIndex]
    }
    return password
}


//DISPLAYPASS function
function displayPass() {
    outputOne.textContent = generatePass()
    outputTwo.textContent = generatePass()
}


//COPY function - copy password to clipboard
function copy(e) {
    let copyText
    //check which password to copy
    if (e.target.id === "copy-one") {
        copyText = outputOne.textContent
    } else if (e.target.id === "copy-two") {
        copyText = outputTwo.textContent
    }
    // copy to clipboard =  navigator.clipboard.writeText(WhatToCopy)
    navigator.clipboard.writeText(copyText);
}
