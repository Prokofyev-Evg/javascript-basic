//////////////////////////////////////////      Задание 1       \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 сначала проинкрементировали "a", потом присвоили в "c"
d = b++; alert(d);           // 1 сначала присвоили b в d, потом проинкркементировали b
c = (2+ ++a); alert(c);      // 5 еще раз проинкрементировали "a" (получилось 3), потом сложили с 2, получилил 5
d = (2+ b++); alert(d);      // 4 сначала сложили 2 и b, получили 4, после получения значения "b" проинкрементировали "b"
alert(a);                    // 3 т.к. инкрементировали два раза после инициализации единицей
alert(b);                    // 3 т.к. инкрементировали два раза после инициализации единицей


//////////////////////////////////////////      Задание 2       \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
a = 2;
var x = 1 + (a *= 2); // "a" умножили на 2 и сложили с 1 -> x = 1 + 2 * 2 = 5


//////////////////////////////////////////      Задание 3       \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
a = 1;
b = 2;

if ((a >= 0) & (b >= 0))
    console.log(a - b);
else if ((a < 0) & (b < 0))
    console.log(a * b);
else
    console.log(a + b);

//////////////////////////////////////////      Задание 4       \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
a = Math.round(Math.random() * 15)

switch (a) {
        case 0:     console.log(0);
        case 1:     console.log(1);
        case 2:     console.log(2);
        case 3:     console.log(3);
        case 4:     console.log(4);
        case 5:     console.log(5);
        case 6:     console.log(6);
        case 7:     console.log(7);
        case 8:     console.log(8);
        case 9:     console.log(9);
        case 10:    console.log(10);
        case 11:    console.log(11);
        case 12:    console.log(12);
        case 13:    console.log(13);
        case 14:    console.log(14);
        case 15:    console.log(15);
        break;
    default:
        break;
}

//////////////////////////////////////////      Задание 5       \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const sum = (x, y) => (x + y);
const sub = (x, y) => (x - y);
const mul = (x, y) => (x * y);
const div = (x, y) => (x / y);


//////////////////////////////////////////      Задание 6       \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "сумма":        return sum(arg1, arg2);
        case "разность":     return sub(arg1, arg2);
        case "произведение": return mul(arg1, arg2);
        case "частное":      return div(arg1, arg2);
    default:
        break;
    }
}

// Это решение красивее, но не по заданию ((
function mathOperation2(arg1, arg2, operation) {
    return operation(arg1, arg2);
}

alert(mathOperation(8, 2, "сумма"));
alert(mathOperation(8, 2, "разность"));
alert(mathOperation(8, 2, "произведение"));
alert(mathOperation(8, 2, "частное"));

//////////////////////////////////////////      Задание 7       \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
if (null == 0) {
    alert("null = 0");
} else {
    alert("null != 0");
}
// Согласно спецификации сравнения null и Number дает результат false

////////////////////////////////////////      Задание 8       \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function power(val, pow){
    if (pow == 0)
        return 1;
    else if (Math.abs(pow) == 1)
        return pow < 0 ? 1 / val : val;
    else
        return pow < 0 ? 1 / val * power(val, pow + 1) : val * power(val, pow - 1);
}

alert(power(5, 0));
alert(power(5, 4));
alert(power(5, -4));