let display = 
document.getElementById('display');
let buttons = 
Array.from(document.querySelectorAll('button'));
let currentInput  = '';

buttons.forEach(button => {
    button.addEventListener('click', () =>{
        let value = button.textContent;
        
        if (value =='C'){
            currentInput = '';
        } else if (value == '='){
            try {
                currentInput =
                eval(currentInput).toString();
            } catch{
                currentInput = 'Error';
            }
        } else{
            currentInput += value;
        }

        display.textContent = currentInput || '0';
    });
});