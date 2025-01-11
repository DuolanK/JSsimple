let fruits = ["apple", "banana", "cherry"]   

fruits[3] = "blueberry";

//console.log(fruits[3]);

///// Циклы ////////////////


/// Цикл for 

// for (инициализация; условие; шаг )
for (let i = 0; i < fruits.length; i++) {
    console.log("Элемент " + i + ": " + fruits[i])
}


// for ..of 

for (const fruit of fruits) {
    console.log(fruit);
}


// forEach

fruits.forEach((fruit, index) => {
    console.log(fruit);
});


// if else

// вывести в случае min < или = max надпись "Все верно"
// Иначе надпись "Не верно"

min = 40 ;
max = 40 ;

if(min < max){
    console.log("min<max");
}
else if(max=min){
    console.log("min=max");
}
else{
    console.log("min>max");
}

///// ОБЪЕКТЫ

const user = {
    name: "Alice",
    age: 25,
    isAdmin: true,
    greet() {
        console.log('hello, my name is ' + this.name);
    }
};

console.log(user.name);
console.log(user["age"]);

user.greet();

function check(people) {

    people.forEach(human => {
        if (human.age < 18) {
            console.log("Запрет для объекта " + human.name);
        }
        else {
            console.log("Разрешения для объекта " + human.name);
        }
    });
    }


    // ОБЪЕКТ
let people = [
    {    name: "Alice",
        age: 25,
        isAdmin: true,
        greet() {
            console.log('hello, my name is ' + this.name);
        }},
    {    name: "Pete",
        age: 5,
        isAdmin: true,
        greet() {
            console.log('hello, my name is ' + this.name);
        }},
    {    name: "Jio",
        age: 15,
        isAdmin: true,
        greet() {
            console.log('hello, my name is ' + this.name);
        }},
]

check(people);