// need number buttons, operand buttons, misc. buttons

let numberButtons = document.querySelectorAll('button')
let current = document.getElementsByClassName('current-operand')[0]
let previous = document.getElementsByClassName('previous-operand')[0]
let currentNoCommas
let previousNoCommas
let result


    numberButtons.forEach(button => button.addEventListener('click', () => {
    
        let clear = () => {
        if (button.innerText === 'AC'){
            if (current.innerText !== ''){
                current.innerText = ''
            }
            else (current.innerText = previous.innerText.slice(0,-1), previous.innerText = '')
        }
    }

    let compute = () => {
            currentNoCommas = current.innerText.replaceAll(',','');
            previousNoCommas = previous.innerText.replaceAll(',','');

        if (current.innerText !== '' && button.innerText === '%'){
            current.innerText = (parseFloat(currentNoCommas) / 100).toLocaleString('en', {maximumFractionDigits:20})
        }
        else if (previous.innerText.includes('÷')) {
            result = parseFloat(previousNoCommas) / parseFloat(currentNoCommas);
            previous.innerText ='';
            current.innerText = result.toLocaleString('en', {maximumFractionDigits: 20});
            // current.append(result) 
        }
        else if (previous.innerText.includes('*')){
            result = parseFloat(previousNoCommas) * parseFloat(currentNoCommas);
            previous.innerText ='';
            current.innerText = result.toLocaleString('en', {maximumFractionDigits: 20});
            // current.append(result)
        }
        else if (previous.innerText.includes('+')){
            result = parseFloat(previousNoCommas) + parseFloat(currentNoCommas);
            previous.innerText ='';
            current.innerText = result.toLocaleString('en', {maximumFractionDigits: 20});
            // current.append(result) 
        }
        else if (previous.innerText.includes('-')){
            result = parseFloat(previousNoCommas) - parseFloat(currentNoCommas);
            previous.innerText ='';
            current.innerText = result.toLocaleString('en', {maximumFractionDigits: 20});
            // current.append(result)
        }

        currentNoCommas = '';
        previousNoCommas = '';
    
    }
    
    
    if (parseFloat(button.innerText) >= 0 ){
        if (result !== ''){
            result = '';
            current.innerText = '';
        }
        current.append(button.innerText)

        let beforeDec = current.innerText.split('.')[0]
        let afterDec = current.innerText.split('.')[1]
        let integerDisplay
    while (beforeDec.includes(',')){
        beforeDec = beforeDec.replace(',','');
        current.innerText = beforeDec
        }
        if (isNaN(beforeDec)){
            return
        } else{
           beforeDec = parseFloat(beforeDec).toLocaleString('en', {maximumFractionDigits: 20})
        }
        if (afterDec !== undefined){
        current.innerText = `${beforeDec}.${afterDec}`;
        } else {
            current.innerText = beforeDec
        }
    }  

    if (button.innerText === 'AC'){
        clear()
    }

    if (button.innerText === '.'){
        if (result !== ''){
            result = '';
            current.innerText = ''
        }
        if(current.innerText.includes('.')){
            return
        }
        else if(current.innerText === '' && !current.innerText.includes('.') ){
            current.append(`0${button.innerText}`)
        } else {
            current.append(button.innerText)
        }
        
    }

    if (button.innerText === '÷' || 
        button.innerText === '*' || 
        button.innerText === '+' ||
        button.innerText === '-'){
           if (previous.innerText === '' && current.innerText.length > 0){
            current.append(` ${button.innerText}`);
            previous.innerText = current.innerText
            current.innerText = ''
           }
           else if (!previous.innerText.includes(button.innerText) && previous.innerText.length > 0){
                let newComputation = previous.innerText.slice(0,-1)
                previous.innerText = newComputation
                previous.append(` ${button.innerText}`)
            }
    }

    if (button.innerText === '=' || button.innerText === '%'){
        if(current.innerText !== '')
        compute()
    }

    //Leaving the delete button logic here incase I revamp the calculator and include this again

    // if (button.innerText === 'DEL'){
    //     let newCurrent = current.innerText.slice(0,-1)
    //     current.innerText = ''
    //     current.append(newCurrent)
    // }


    if (button.innerText === '+/-'){
        if(current.innerText[0] === '-'){
            let removeNegative = current.innerText.slice(1)
            current.innerText = ''
            current.append(removeNegative)
        }
        else(current.prepend('-'))
    }
    

}) 
)

