// Implemente as funções de uma calculadora.
// Não permitir divisões por zero.
// Não permitir strings como valores (notificar o usuário)

const clear = document.getElementById('btn-clear');
const sum = document.getElementById('btn-sum');
const sub = document.getElementById('btn-sub');
const mult = document.getElementById('btn-mult');
const div = document.getElementById('btn-div');

let result = document.getElementById('result');



// clear.addEventListener('click', getFirstInput(), getSecondInput(){
    
// });

sum.addEventListener('click', () => {
    let firstInput = document.getElementById('first-input').value;

    let secondInput = document.getElementById('second-input').value;

    result.innerText =  firstInput + secondInput;
});
sub.addEventListener('click', () =>{
    let firstInput = document.getElementById('first-input').value;

    let secondInput = document.getElementById('second-input').value;

    result.innerText =  firstInput - secondInput;
});

mult.addEventListener('click', () =>{
    let firstInput = document.getElementById('first-input').value;

    let secondInput = document.getElementById('second-input').value;

    result.innerText =  firstInput * secondInput;
});
div.addEventListener('click', () =>{
    let firstInput = document.getElementById('first-input').value;

    let secondInput = document.getElementById('second-input').value;

    result.innerText =  firstInput / secondInput;
});