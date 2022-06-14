let food = [
    { name: " ORANGE", price: 500, isFruit: true },
    { name: "burger", price: 100, isFruit: false },
    { name: "watermelon", price: 210, isFruit: false },
    { name: "toast", price: 350, isFruit: false },
    { name: "apple ", price: 140, isFruit: true },
    { name: " bAn ana", price: 380, isFruit: true },
];
//1

function getNamesOfExpensiveFruits(arr) {
    let newArr = arr.filter(item => {
        return ((item.price > 200) && (item.isFruit));
    }).map(item => item.name.trim().toLowerCase().replace(' ', ''));
    return newArr
};

let result1 = getNamesOfExpensiveFruits(food);

console.log(result1);


function getNamesOfExpensiveFruitsForEach(arr) {
    let newArr = [];
    arr.forEach(item => {
        if ((item.price > 200) && (item.isFruit)) {
            newArr.push(item.name.trim().toLowerCase().replace(' ', ''));
        };
    });
    return newArr;
};

let result2 = getNamesOfExpensiveFruitsForEach(food);

console.log(result2);


function getNamesOfExpensiveFruitsReduce(arr) {
    let newArr = arr.reduce((acc, item) => {
        if ((item.price > 200) && (item.isFruit)) {
            acc.push(item.name.trim().toLowerCase().replace(' ', ''));
        };
        return acc;
    }, []);
    return newArr;
};

let result3 = getNamesOfExpensiveFruitsForEach(food);

console.log(result3);

//2

let salary = [1000, 500, 1200, 230];

function getSortSalary(arr) {
    let newArr = arr.sort((a, b) => a - b).reverse();
    (Array.isArray(newArr)) ? console.log(newArr): console.log("Это не  массив");
    return newArr;
};

let result4 = getSortSalary(salary);

//3

let serials = ["How i met your mom", "Friends", "Big bang theory"];

let str = serials.join();

console.log(str);

//4

function getSummFoodForEach(arr) {
    let summ = 0;
    arr.forEach(item => {
        summ += item.price;
    });
    return summ;
};

let result5 = getSummFoodForEach(food);

console.log(result5);

function getSummFoodReduce(arr) {
    let summ = arr.reduce((acc, item) => {
        return acc + item.price;
    }, 0);
    return summ;
};

let result6 = getSummFoodReduce(food);

console.log(result6);