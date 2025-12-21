const game = JSON.parse(localStorage.getItem('selectedGame'));

if (!game) {
    alert("No game selected");
    window.location.href = "catagories.html";
}

document.getElementById("gameName").innerText = game.name;
document.getElementById("gamePrice").innerText = game.price;
document.getElementById("gameImage").src = game.image;

function completePurchase(e) {
    e.preventDefault();
    alert("Purchase Successful 🎉");
    localStorage.removeItem("selectedGame");
}