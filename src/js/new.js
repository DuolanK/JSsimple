//const name = prompt("Введите имя");
//const age = prompt("Введите возраст");
//const city = prompt("Введите город");

//console.log(`Привет, ${name}! Тебе ${age} лет, и ты живешь в городе ${city}.`);
//console.log("Привет," + name + "! Тебе" + age + "лет, и ты живешь в городе " + city + ".");


let films = ["Форсаж 1", "Форсаж 2", "Форсаж 3", "Форсаж 4", "Форсаж 5"];
console.log(films[2]);
films[5] = "Форсаж 6";
delete films[0];
console.log(films);
console.log(films.length);


const number = prompt("Введите число");

if (number>10) {
    console.log(`Число ${number} больше 10`);
}
else if (number<10) {
    console.log(`Число ${number} меньше 10`);
}
else {
    console.log(`Число ${number} равно 10`);
}