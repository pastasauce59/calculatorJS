// need number buttons, operand buttons, misc. buttons

let numberButtons = document.querySelectorAll('button')
let current = document.getElementsByClassName('current-operand')[0]
let previous = document.getElementsByClassName('previous-operand')[0]

    
    numberButtons.forEach(button => button.addEventListener('click', () => {
    // console.log(button.innerText)

    let clear = () => {
        // button.innerText === 'AC' ? current.innerText = '' : null
        if (button.innerText === 'AC'){
            if (current.innerText !== ''){
                current.innerText = ''
            }
            else (current.innerText = previous.innerText, previous.innerText = '')
        }
    }

    let compute = () => {
        if (previous.innerText.includes('÷')) {
            let result = parseFloat(previous.innerText) / parseFloat(current.innerText);
            previous.innerText ='';
            current.innerText = '';
            current.append(result)
            // current.append( parseInt(previous.innerText) / parseInt(current.innerText) ) 
        }
        else if (previous.innerText.includes('*')){
            let result = parseFloat(previous.innerText) * parseFloat(current.innerText);
            previous.innerText ='';
            current.innerText = '';
            current.append(result)
        }
        else if (previous.innerText.includes('+')){
            let result = parseFloat(previous.innerText) + parseFloat(current.innerText);
            previous.innerText ='';
            current.innerText = '';
            current.append(result) 
        }
        else if (previous.innerText.includes('-')){
            let result = parseFloat(previous.innerText) - parseFloat(current.innerText);
            previous.innerText ='';
            current.innerText = '';
            current.append(result)
        }
    }

    // if (current.innerText !== ''){
    //     numberButtons[0].innerText = 'C'
    // }
    
    if (parseInt(button.innerText) >= 0 ){
        current.append(button.innerText)   
    }

    if (button.innerText === 'AC'){
        clear()
    }

    if (button.innerText === '.'){
        if(current.innerText.includes('.')){
            return
        }
        else (current.append(button.innerText))
        
    }

    if (button.innerText === '÷' || 
        button.innerText === '*' || 
        button.innerText === '+' ||
        button.innerText === '-'){
            // console.log('computation button')
           if (previous.innerText === ''){
            current.append(button.innerText);
            previous.innerText = current.innerText
            current.innerText = ''
           }
           else if (!previous.innerText.includes(button.innerText)){
                let newComputation = previous.innerText.slice(0,-1)
                previous.innerText = newComputation
                previous.append(button.innerText)
            }
    }

    if (button.innerText === '='){
        if(current.innerText !== '')
        compute()
    }

    if (button.innerText === 'DEL'){
        let newCurrent = current.innerText.slice(0,-1)
        current.innerText = ''
        current.append(newCurrent)
    }

    if (button.innerText === '+/--'){
        if(current.innerText[0] === '-'){
            let removeNegative = current.innerText.slice(1)
            current.innerText = ''
            current.append(removeNegative)
        }
        else(current.prepend('-'))
    }
    

}) 
)

