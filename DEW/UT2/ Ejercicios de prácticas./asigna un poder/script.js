const poderes = {
    Superman: "Super fuerza, volar, visión láser",
    Batman: "Artes marciales, gadgets avanzados",
    "Wonder Woman": "Super fuerza, lazo de la verdad"
};

document.getElementById('heroes').onchange = function() {
    const heroe = this.value;
    document.getElementById('poder').textContent = poderes[heroe] || "Selecciona un superhéroe";
};
