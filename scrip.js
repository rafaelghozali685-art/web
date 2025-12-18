// FILTER KATEGORI
const buttons = document.querySelectorAll(".cat");
const articles = document.querySelectorAll(".news-card");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const cat = btn.dataset.cat;

        articles.forEach(card => {
            if (cat === "all" || card.dataset.cat === cat) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// FITUR BUKA/TUTUP DETAIL BERITA
articles.forEach(card => {
    card.addEventListener("click", () => {
        const detail = card.querySelector(".detail");
        detail.classList.toggle("hidden");
    });
});
