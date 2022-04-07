const textAge = document.getElementById("textAge");
const textInfo = document.getElementById("textInfo");
const inputBox = document.getElementById("userInput")

textAge.textContent = ""

function main() {
    textInfo.textContent = "You are probably ...";
    let name = inputBox.value; 
    fetch('https://api.agify.io?name='+name)
    .then(response => response.json())
    .then(data => {
    let age = data['age'];

    textAge.textContent = age;

    if (age == null){
        textInfo.textContent = "Error ! Please try again";
        textAge.textContent = ""
    }
    })
}
