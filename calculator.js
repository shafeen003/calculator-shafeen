const buttons = document.getElementsByClassName('btn');
let screen = document.getElementById('screen');
let result = document.getElementById('result');
let screenValue = '';
for (const button of buttons) {
    button.addEventListener('click', function () {
        let buttonText = button.innerText;
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.innerText = screenValue;
        }
        else if (buttonText == 'AC') {
            screenValue = "";
            screen.innerText = screenValue;
            resultValue = '';
            result.innerText = resultValue;
        }
        else if (buttonText == '=') {
            let resultValue = eval(screenValue);
            result.innerText = resultValue;
            screen.innerText = 'Your result is';
        }
        else if (buttonText == 'C') {
            screen.innerText = '';
        }
        else if (buttonText == 'Del') {
            let lastNumberIndex = screenValue.length - 1;
            let lastNumber = screenValue[lastNumberIndex];
            screenValue = screenValue.replace(lastNumber, '');
            screen.innerText = screenValue;
        }
        else if (buttonText == '%') {
            buttonText = '/100'
            screenValue += buttonText;
            screen.innerText += '%';
        }
        else {
            screenValue += buttonText;
            screen.innerText = screenValue;
        }
    })
}