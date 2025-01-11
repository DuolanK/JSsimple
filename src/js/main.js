console.log("Привет мир");

        let age = 17;                               //  number
         

        

        
         name = "Alice";                       // string

        let fakeCencorAge = "18";                   // string

        var pol = "girl";                           // string

        let isActive = true;                        // boolean
        
        let items = [age, name, pol, isActive]      // object array

        console.log("Возраст", age);
        console.log("Имя", name);
        console.log("Пол", pol);
        console.log(items);

        console.log("//////////////////////////////////////////////////")

        // Конкатенация строк

        let hello = "Hello My dear";

        let helloAlice = hello + name;

        console.log(helloAlice);

        //   арифметические операторы + - * / %
        //   инкримент, декримент ++ --

        let cencorAge = 18;                         // number
        let age1 = 17;  
        let age2 = 18; 


        // операторы сравнения 


        if (age1 >= 18 && age2 >= 18) {
            console.log("Можно");
        } 

        else if  (age1 >= 18) {
            console.log("Можно для age1");

        }

        else if  (age2 > 18 || age2 == 18) {
            console.log("Можно для age2");

        }
        else {
            console.log("Нельзя");
        }

        let c = age1 - cencorAge;


        // оператор свич 

        let day = 8;

        switch (day) {
            case 1: 
            case 2:    
            case 3:
            case 4:
            case 5:
            case 6:
                console.log("Рабочий день");
                break;
            case 7:
                console.log("Выходной день");
                break;
            default:
                console.log("Неизвестный день");
        }


        switch (true) {

        case (day>0 && day<7):
            console.log("Рабочий день");
            break;
        case (day>7):
            console.log("Выходной день");
            break;
        default:
            console.log("Неизвестный день");
        }


        // тернарный оператор 

        let sum  = 20;

        let itog = sum >= 18 ? "Больше или равно" : "Меньше";

        console.log("itog", itog);
        
        // функция


        function greetMaster(user) {
            // return `Hello, ${user}!!!`;    // клавиши SHIFT Ё  = `
            return "Hello," + user + "!";
        }

        console.log(greetMaster("Duo"));
        console.log(greetMaster(3));






        function checkAge(humanName, humanAge) {

            if (humanAge < 18) {
                return "Запрет для " + humanName;
            }
            else {
                return "Разрешения для " + humanName;
            }
        }


        console.log(checkAge("Alice", 21));
        console.log(checkAge("April", 26));
        console.log(checkAge("Autumn", 32));
        console.log(checkAge("Alen",12));


        console.log("//////////////////////////////////////////////////")


        // ЦИКЛ ПО ЧЕК ВОЗРАСТ


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
            {name: "Alice", age:18},
            {name: "Ali", age:18},
            {name: "Alina", age:21},
        ]

        check(people);


        // ЦИКЛЫ, ОБЪЕКТЫ, МАССИВЫ, DATE, MATH, ООП 


