class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        let operators = {
            "+": "add",
            "-": "substract",
            "*": "multiply",
            "/": "divide"
        }
        for(let token of tokens){
            if(token in operators) {
                let rightOperand = parseInt(stack.pop());
                let leftOperand = parseInt(stack.pop());
                if(token === "+"){
                    stack.push(leftOperand + rightOperand)
                }else if(token === "-") {
                    stack.push(leftOperand - rightOperand)
                }else if(token === "*"){
                    stack.push(leftOperand * rightOperand)
                } else {
                    stack.push(leftOperand / rightOperand)
                }
            } else { 
                stack.push(token);
            }
        }
        return stack.length === 0 ? 0 : parseInt(stack.pop())
    }
}
