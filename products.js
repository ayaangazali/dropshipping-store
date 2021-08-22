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
	},
	{
		id: 5,
		name: "Phone Tripod",
		price: 15.99,
		category: "Gadgets",
		image: "images/tripod.jpg"
	},
	{
		id: 6,
		name: "Resistance Bands",
		price: 12.99,
		category: "Fitness",
		image: "images/bands.jpg"
	},
	{
		id: 7,
		name: "Car Vacuum",
		price: 34.99,
		category: "Home",
		image: "images/vacuum.jpg"
	},
	{
		id: 8,
		name: "Wireless Earbuds",
		price: 39.99,
		category: "Gadgets",
		image: "images/earbuds.jpg"
	},
	{
		id: 9,
		name: "Yoga Mat",
		price: 22.99,
		category: "Fitness",
		image: "images/yogamat.jpg"
	}
];

function renderProducts(list) {
	var grid = document.getElementById("product-grid");
	grid.innerHTML = "";
	for (var i = 0; i < list.length; i++) {
		var p = list[i];
		var div = document.createElement("div");
		div.className = "product";
		div.innerHTML = '<div class="product-img"></div>' +
			'<h3><a href="product.html?id=' + p.id + '">' + p.name + '</a></h3>' +
			'<p class="price">$' + p.price + '</p>' +
			'<button onclick="addToCart(' + p.id + ')">Add to Cart</button>';
		grid.appendChild(div);
	}
}

function filterCategory(cat) {
	if (cat == "All") {
		renderProducts(products);
		return;
	}
	var filtered = [];
	for (var i = 0; i < products.length; i++) {
		if (products[i].category == cat) {
			filtered.push(products[i]);
		}
	}
	renderProducts(filtered);
}

window.onload = function() {
	renderProducts(products);
	updateBadge();
};
