var products = [
	{
		id: 1,
		name: "Posture Corrector",
		price: 19.99,
		category: "Fitness",
		image: "images/posture.jpg"
	},
	{
		id: 2,
		name: "LED Strip Lights",
		price: 24.99,
		category: "Home",
		image: "images/led.jpg"
	},
	{
		id: 3,
		name: "Mini Drone",
		price: 49.99,
		category: "Gadgets",
		image: "images/drone.jpg"
	},
	{
		id: 4,
		name: "Portable Blender",
		price: 29.99,
		category: "Home",
		image: "images/blender.jpg"
	}
];

function renderProducts(list) {
	var grid = document.getElementById("product-grid");
	grid.innerHTML = "";
	for (var i = 0; i < list.length; i++) {
		var p = list[i];
		var div = document.createElement("div");
		div.className = "product";
		div.innerHTML = '<h3>' + p.name + '</h3>' +
			'<p class="price">$' + p.price + '</p>';
		grid.appendChild(div);
	}
}

window.onload = function() {
	renderProducts(products);
};
