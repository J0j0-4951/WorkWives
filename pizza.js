document.addEventListener('DOMContentLoaded', () => {
  const pizzaBase = document.getElementById('pizza-base');

  window.addIngredient = function(name) {
    if (!document.getElementById(name)) {
      const img = document.createElement('img');
      img.src = `pizza-images/${name}.png`;
      img.alt = name;
      img.id = name;
      img.classList.add('topping');
      pizzaBase.appendChild(img);
    }
  };

  window.resetPizza = function() {
    const baseChildren = pizzaBase.children;
    for (let i = baseChildren.length - 1; i >= 1; i--) {
      pizzaBase.removeChild(baseChildren[i]);
    }
  };
});
