document.addEventListener("DOMContentLoaded", () => {
    const searchBox = document.getElementById("searchBox");
    const searchButton = document.getElementById("searchButton");
    const resetButton = document.getElementById("resetButton");
    const cards = document.querySelectorAll(".w-engine-card");

    function filterEngines() {
        const query = searchBox.value.toLowerCase().trim();
        const searchWords = query.split(/\s+/);

        cards.forEach(card => {
            const name = card.getAttribute("data-name").toLowerCase();
            const matchesAllWords = searchWords.every(word => name.includes(word)); 
            
            if (matchesAllWords) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    }

    function resetSearch() {
        searchBox.value = "";
        cards.forEach(card => card.style.display = "flex");
    }

    searchButton.addEventListener("click", filterEngines);
    resetButton.addEventListener("click", resetSearch);
});
