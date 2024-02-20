//1 задание
var x = 20
var y = 58
var z = 42
console.log(x + y + z);
 
//2 задание
var second = 60;
var minuta = 60;
var hour = 24;
var day = 365;

var myAgeInSeconds = day * 22 * hour * minuta * second;
console.log(myAgeInSeconds);

//3 задание
var count = 42;
var userName = "42";

count = '' + count;
count = count.toString()

userName = +userName;
userName = Number(userName);

//4 задание 
var a = 1;
var b = 2;
var c = "белых медведей";
var result = (a + (b + ' ') + c);
console.log(result);

//5 задание 
var number = 2;
var string = 'строка';
var boolean = true;
console.log(`Variable: number have type: ${typeof number}`);
console.log(`Variable: string have type: ${typeof string}`);
console.log(`Variable: boolean have type: ${typeof boolean}`);

//6 задание 
var name = prompt('Как вас зовут?');
var years = prompt('Сколько вам лет?');
console.log(name);
console.log(years);

//7 задание 
var a = 4;
var b = 3;

a = --a;
b = ++b;

//8 задание
var one = 'true';
var two = false;
var three = 17;
var four = undefined;
var five = null;

console.log(typeof one);
console.log(typeof two);
console.log(typeof three);
console.log(typeof four);
console.log(typeof five);

//9 задание
var height = 15;
var width = 20;
if (height > width){
   console.log(height)
} else {
   console.log(width)
}

//10 задание
for (let i = 0; i < 20; i++){
   i % 3;
   if(i % 3 === 0)
   console.log(i);
}

//11 задание
var key = true;
var documents = true;
var pen = true;
var apple = false;
var orange = true;
var shouldGoToWork;
if(key && documents && pen && apple || orange)
shouldGoToWork = true; 
else shouldGoToWork = false;
console.log(shouldGoToWork)

//12 задание 
var onenum = prompt('Напишите число');
if(onenum % 5 === 0){
alert('Fiz');}
if(onenum % 3 === 0){
alert('Biz');}
if(onenum % 5 === 0 && onenum % 3 === 0){
alert('FizBiz');}


//13 задание 
var years = +prompt('Сколько тебе лет?');
if(years > 18){
   alert('Попей пивка');
}
if(years < 18){
   alert('Пей колу');
}
if(years >= 16 && years <= 18){
   alert('Можешь выкурить сигаретку, только маме не говори ');
}

//14 задание 
var user = prompt('В какую сторону света он бы хотел отправиться');
switch (user) {
  case "юг":
    console.log("на юг пойдешь счастье найдешь");
    break;
  case "север":
    console.log("на север пойдешь много денег найдешь");
    break;
  case "запад":
    console.log("на запад пойдешь верного друга найдешь");
    break;
  case "восток":
    console.log("на восток пойдешь разработчиком станешь");
    break;
     default:
      console.log('Неверные данные')
}


