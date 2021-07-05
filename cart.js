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
}

function clearCart() {
	localStorage.removeItem("cart");
}
