const userInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultSpan = document.getElementById("result");



const checkPalindrome = (input) => {

    const initialInput = input;

    if(input === ''){
        alert("Please input a value");
        return;
    }
    
    resultSpan.replaceChildren();

    let regex = /[^a-zA-Z0-9]/g;

    const cleanedLowerCaseStr = input.replace(regex, '').toLowerCase();
    let resultMsg = `<strong>${initialInput}</strong>
    ${
        cleanedLowerCaseStr === [...cleanedLowerCaseStr].reverse().join('') ? 'is' : 'is not'
    } a palindrome.`;

    const text = document.createElement('p');
    text.className = 'user-result';
    text.innerHTML = resultMsg;
    resultSpan.appendChild(text);


    resultSpan.classList.remove('hidden');
}

checkButton.addEventListener("click", () => {
    checkPalindrome(userInput.value);
    userInput.value = '';
})
