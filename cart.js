// shopping cart stuff

function getCart() {
	var cart = localStorage.getItem("cart");
	if (cart == null) {
		return [];
	}
	return JSON.parse(cart);
}

function saveCart(cart) {
	localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(id) {
	var cart = getCart();
	var found = false;
	for (var i = 0; i < cart.length; i++) {
		if (cart[i].id == id) {
			cart[i].qty = cart[i].qty + 1;
			found = true;
		}
	}
	if (found == false) {
		cart.push({ id: id, qty: 1 });
	}
	saveCart(cart);
	updateBadge();
	alert("Added to cart!");
}

function removeFromCart(id) {
	var cart = getCart();
	var newCart = [];
	for (var i = 0; i < cart.length; i++) {
		if (cart[i].id != id) {
			newCart.push(cart[i]);
		}
	}
	saveCart(newCart);
	updateBadge();
}

function clearCart() {
	localStorage.removeItem("cart");
	updateBadge();
}

function getProductById(id) {
	for (var i = 0; i < products.length; i++) {
		if (products[i].id == id) {
			return products[i];
		}
	}
	return null;
}

function cartTotal() {
	var cart = getCart();
	var total = 0;
	for (var i = 0; i < cart.length; i++) {
		var p = getProductById(cart[i].id);
		total = total + (p.price * cart[i].qty);
	}
	return total;
}

function updateBadge() {
	var badge = document.getElementById("cart-count");
	if (badge == null) {
		return;
	}
	var cart = getCart();
	var count = 0;
	for (var i = 0; i < cart.length; i++) {
		count = count + cart[i].qty;
	}
	badge.innerHTML = count;
}

function renderCart() {
	var cart = getCart();
	var list = document.getElementById("cart-list");
	if (list == null) {
		return;
	}
	list.innerHTML = "";
	if (cart.length == 0) {
		list.innerHTML = "<p>Your cart is empty.</p>";
		return;
	}
	for (var i = 0; i < cart.length; i++) {
		var p = getProductById(cart[i].id);
		var row = document.createElement("div");
		row.className = "cart-row";
		row.innerHTML = '<span>' + p.name + ' x ' + cart[i].qty + '</span>' +
			'<span>$' + (p.price * cart[i].qty).toFixed(2) + '</span>' +
			'<button onclick="removeFromCart(' + p.id + ');renderCart();">Remove</button>';
		list.appendChild(row);
	}
	var totalDiv = document.getElementById("cart-total");
	if (totalDiv != null) {
		totalDiv.innerHTML = "Total: $" + cartTotal().toFixed(2);
	}
}
