function inserir(num) {
    document.querySelector('.calc-number').innerHTML += num;
}

function clean() {
    document.querySelector('.calc-number').innerHTML = '';
    document.querySelector('.calc-result').innerHTML = '';
}

function back() {
    let number = document.querySelector('.calc-number').innerHTML;
    document.querySelector('.calc-number').innerHTML = number.substring(0, number.length -1);
}

function equals() {
    let result = document.querySelector('.calc-number').innerHTML;
    if(result) {
        document.querySelector('.calc-result').innerHTML = eval(result);
    } else {
        document.querySelector('.calc-result').innerHTML = '';
    }
}