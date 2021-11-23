function func(num){
    alert(num * num * num);
}

func(2);

//task 2

function func1(num) {
    if(num % 2 === 0){
        alert('+++');
    }else {
        alert('---');
    }
}

func1(9);

//task 3 , 4

function func2(num1, num2, num3) {
    alert(num1 + num2 + num3);
}
let param1 = 1;
let param2 = 2;
let param3 = 5;
func2(param1, param2, param3);

//task 5

function func3(num = 5) {
    alert(num * num);
}

func3();