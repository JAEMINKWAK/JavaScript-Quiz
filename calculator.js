const calculator = {
    add: function (a, b){
        console.log(a + b);
    },
    minus: function (a, b){
        console.log(a - b);
    },
    div: function (a, b){
        console.log(a / b);
    },
    multi: function (a, b){
        console.log(a * b);
    },
    power: function (a, b){
        console.log(a ** b);
    },
};

calculator.add(4, 2); // 4 + 2 = 6
calculator.minus(6, 2); // 6 - 2 = 4
calculator.div(8, 4); // 8 / 4 = 2
calculator.multi(4, 5); // 4 x 5 = 20
calculator.power(3, 4); // 3의 4제곱 = 81