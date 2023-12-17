function getPasswordLength() {
    const length = document.getElementById("length").value;
    return Number(length);
}

function getPasswordProperties(){
    const ids = ["lowercase", "uppercase", "numbers", "special"];
    const properties = {};
    
    for (const id of ids){
        const element = document.getElementById(id);
        properties[id] = element.checked;
    }

    return properties;
}

function getNumbers(){
    const nums = [];

    for (let i = 0; i < 10; i++){
        nums.push(i);
    }

    return nums;
}

const lowercaseChars =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; //getChars(true);
const uppercaseChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numbers = getNumbers();
const special = ["!","@","#","%","^","&","*","&","(",")","-","_","?"];

function copyText(){
    const length = getPasswordLength();
    const properties = getPasswordProperties();

    const characters = [];
    if(properties.lowercase) characters.push(...lowercaseChars);
    if(properties.uppercase) characters.push(...uppercaseChars);
    if(properties.numbers) characters.push(...numbers);
    if(properties.special) characters.push(...special);

    if(characters.length === 0) {
        return alert("You must select at least one set of characters");
    }

    let pwd = [];
    for (let i = 0; i < length; i++) {
        const randonIdx = Math.floor(Math.random() * characters.length);
        const char = characters[randonIdx];
        pwd.push(char);
    }
    const pwdString = pwd.join("");
    document.getElementById("password").innerHTML = "<p>" + pwdString + "</p>";
}
//Attempt to create a copy to clipboard button
function copy(){
    //input and button copy to clipboard
    var copyt = document.createElement("INPUT");
    copyt.setAttribute("type","text");
    copyt.setAttribute("value", pwdString);
    copyt.setAttribute("id","copyinfo");
    document.body.appendChild(copyt);
    const textText = document.getElementById("copyinfo");
    var newButton = document.createElement("button");
    newButton.textContent = "Copy to Clipboard";
    newButton.setAttribute("onclick","copy")
    document.body.appendChild(newButton);
    newButton.select();
    navigator.clipboard.writeText(newButton.value);
    alert("Copied the text: " + newButton.value);
}

