const cardapio = {
    drinks: [
      {
        id: 1,
        name: "Espresso",
        price: 3.5,
      },
      {
        id: 2,
        name: "Americano",
        price: 4.0,
      },
      {
        id: 3,
        name: "Cappuccino",
        price: 4.5,
      },
    ],
    foods: [
      {
        id: 1,
        name: "Bagel with Cream Cheese",
        price: 3.0,
      },
      {
        id: 2,
        name: "Croissant",
        price: 2.5,
      },
      {
        id: 3,
        name: "Avocado Toast",
        price: 5.0,
      },
    ],
  };
  
  const drinksList = document.getElementById("drinks-list");
  const foodsList = document.getElementById("foods-list");
  
  cardapio.drinks.forEach((drink) => {
    const li = document.createElement("li");
    li.innerHTML = `${drink.name} <span class="valores">R$${drink.price.toFixed(
      2
    )}</span>`;
    drinksList.appendChild(li);
  });
  
  cardapio.foods.forEach((food) => {
    const li = document.createElement("li");
    li.innerHTML = `${food.name} <span class="valores">R$${food.price.toFixed(
      2
    )}</span>`;
    foodsList.appendChild(li);
  });