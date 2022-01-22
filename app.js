// need number buttons, operand buttons, misc. buttons

let numberButtons = document.querySelectorAll('button')
let current = document.getElementsByClassName('current-operand')[0]


    
    numberButtons.forEach(button => button.addEventListener('click', () => {
    // console.log(button.innerText)

    let clear = () => {
        button.innerText === 'AC' ? current.innerText = '' : null
    }
    
    if (parseInt(button.innerText) >= 0 ) {
        current.append(button.innerText)   
    }

    // if (current.innerText.includes('.')){
    //     return
    // }

    if (button.innerText === 'AC'){
        clear()
    }

    if (button.innerText === '.'){
        if(current.innerText.includes('.')){
            return
        }
        else (current.append(button.innerText))
        
    }
    

}) 
)

