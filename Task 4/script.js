let loadCars = async () => {
  try {
    const response = await fetch(`cars.json`);
    let cars = await response.json();
    renderData(cars);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

let renderData = async (cars) => {
  cars.forEach((car) => {
    let output = document.querySelector("#output");
    let userCard = document.createElement("div");
    userCard.setAttribute("id", "user-card");
    let brandName = document.createElement("div");
    brandName.setAttribute("id", "brand-name");
    brandName.append(car.brand);
    userCard.append(brandName, car.models.join(", "));
    output.append(userCard);
  });
};

loadCars();

/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
