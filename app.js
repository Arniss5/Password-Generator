const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//grab button
const generateBtn = document.getElementById("generate-btn")
//grab two output fields
const outputOne = document.getElementById("pass-one")
const outputTwo = document.getElementById("pass-two")

//event listener running generate function upon clicking the button
generateBtn.addEventListener("click", displayPass)


//GENERATEPASS function - create a string of 15 random characters
function generatePass() {
    let password = ""
    for (let i = 0; i < 15; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }
    return password
}

//DISPLAYPASS function
function displayPass() {
    outputOne.textContent = generatePass()
    outputTwo.textContent = generatePass()
}