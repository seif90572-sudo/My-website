const searchInput = document.getElementById("search");
const userCards = document.querySelectorAll(".user-card");

searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value.toLowerCase();

    userCards.forEach(function (card) {
        const userName = card.querySelector(".user-name").textContent.toLowerCase();

        if (userName.includes(searchValue)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
});