class Calculator{
    // construction takes all inputs and functiosn for calculator 
    constructor(previousOperandTextElement, currentOperandTextElement) { 
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
        
    }

    delete() {
        
    }
    appendNumber(number) {
        // appends numbers together when entered in calculator . click number and adds to screen
    }
    chooseOperation(operation) {
        
    }
    compute() {
        
    }
    updateDisplay(){
    
    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement= document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')