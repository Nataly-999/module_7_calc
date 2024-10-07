let lastOperand = 0; //последний введенный операнд
let operation = null; //выбранная операция

const inputWindow = document.getElementById('inputWindow');

document.getElementById('btn_1').addEventListener('click', function () {      //событие click
    inputWindow.value += '1';  //прибавили текст 1
})

document.getElementById('btn_2').addEventListener('click', function () {      //событие click
    inputWindow.value += '2';  //прибавили текст 1
})

document.getElementById('btn_3').addEventListener('click', function () {      //событие click
    inputWindow.value += '3';  //прибавили текст 1
})

document.getElementById('btn_4').addEventListener('click', function () {      //событие click
    inputWindow.value += '4';  //прибавили текст 1
})

document.getElementById('btn_5').addEventListener('click', function () {      //событие click
    inputWindow.value += '5';  //прибавили текст 1
})

document.getElementById('btn_6').addEventListener('click', function () {      //событие click
    inputWindow.value += '6';  //прибавили текст 1
})

document.getElementById('btn_7').addEventListener('click', function () {      //событие click
    inputWindow.value += '7';  //прибавили текст 1
})

document.getElementById('btn_8').addEventListener('click', function () {      //событие click
    inputWindow.value += '8';  //прибавили текст 1
})

document.getElementById('btn_9').addEventListener('click', function () {      //событие click
    inputWindow.value += '9';  //прибавили текст 1
})

document.getElementById('btn_0').addEventListener('click', function () {      //событие click
    inputWindow.value += '0';  //прибавили текст 1
})

document.getElementById('btn_sum').addEventListener('click', function () {      //событие click
    lastOperand = parseInt(inputWindow.value); //запомнили введенное значение
    operation = 'sum'; //запомнили операцию сумма
    inputWindow.value = '';  //очистка поля
})

document.getElementById('btn_def').addEventListener('click', function () {      //событие click
    lastOperand = parseInt(inputWindow.value); //запомнили введенное значение
    operation = 'def'; //запомнили операцию сумма
    inputWindow.value = '';  //очистка поля
})

document.getElementById('btn_mult').addEventListener('click', function () {      //событие click
    lastOperand = parseInt(inputWindow.value); //запомнили введенное значение
    operation = 'mult'; //запомнили операцию сумма
    inputWindow.value = '';  //очистка поля
})

document.getElementById('btn_div').addEventListener('click', function () {      //событие click
    lastOperand = parseInt(inputWindow.value); //запомнили введенное значение
    operation = 'div'; //запомнили операцию сумма
    inputWindow.value = '';  //очистка поля
})

document.getElementById('btn_sqrt').addEventListener('click', function () {      //событие click
    lastOperand = parseInt(inputWindow.value); //запомнили введенное значение
    operation = 'sqrt'; //запомнили операцию сумма
    inputWindow.value = '';  //очистка поля
})

document.getElementById('btn_culc').addEventListener('click', function () {      //событие click
    if (operation === 'sum'){
        const result = lastOperand + parseInt(inputWindow.value);
        inputWindow.value = result;
    }else
    if (operation === 'def'){
        const result = lastOperand - parseInt(inputWindow.value);
        inputWindow.value = result;
    }else
    if (operation === 'mult'){
        const result = lastOperand * parseInt(inputWindow.value);
        inputWindow.value = result;
    }else
    if (operation === 'div'){
        const result = lastOperand / parseInt(inputWindow.value);
        inputWindow.value = result;
    }else
    if (operation === 'sqrt'){
        const result = Math.sqrt(lastOperand);
        inputWindow.value = result;
    }
    operation = null; //очищаем операцию
    lastOperand = 0;
})

document.getElementById('btn_clr').addEventListener('click', function () {      //событие click
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';  //очистка поля
})



