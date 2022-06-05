const users = [
  { id: "1", name: "John Smith", age: 20 },
  { id: "2", name: "Ann Smith", age: 24 },
  { id: "3", name: "Tom Jones", age: 31 },
  { id: "4", name: "Rose Peterson", age: 17 },
  { id: "5", name: "Alex John", age: 25 },
  { id: "6", name: "Ronald Jones", age: 63 },
  { id: "7", name: "Elton Smith", age: 16 },
  { id: "8", name: "Simon Peterson", age: 30 },
  { id: "9", name: "Daniel Cane", age: 51 },
];

/* -------------------------------------------------------------------------*/

function getUserAverageAge(v) {
  let sum = 0;
  let count = v.length;
  v.filter(ageSum);
  function ageSum(v) {
    sum += v.age;
  }
  console.log("Amžiaus vidurkis yra " + Math.round(sum / count) + " metai");
}

getUserAverageAge(users);

/* -------------------------------------------------------------------------*/

function getUsersNames(x) {
  let names = [];
  x.forEach((e) => {
    names.push(e.name);
  });
  console.log(names);
}

getUsersNames(users);

/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus visurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */
