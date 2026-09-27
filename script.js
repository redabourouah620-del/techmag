// ===============================
// الوضع الليلي
// ===============================

const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const dark =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "theme",
        dark ? "dark" : "light"
    );

    themeBtn.textContent =
        dark ? "☀️" : "🌙";

});


// ===============================
// البحث
// ===============================

function searchArticles() {

    const input =
        document.getElementById("searchInput");

    const query =
        input.value
            .trim()
            .toLowerCase();

    const articles =
        document.querySelectorAll(".article-card");

    let found = false;

    articles.forEach(article => {

        const title =
            article.dataset.title.toLowerCase();

        const category =
            article.dataset.category.toLowerCase();

        if (
            title.includes(query) ||
            category.includes(query) ||
            query === ""
        ) {

            article.style.display = "";

            found = true;

        } else {

            article.style.display = "none";

        }

    });

    document.getElementById("noResults").style.display =
        found ? "none" : "block";
}


// البحث عند الضغط على Enter

document
    .getElementById("searchInput")
    .addEventListener("keydown", event => {

        if (event.key === "Enter") {
            searchArticles();
        }

    });


// ===============================
// فلترة التصنيف
// ===============================

function filterCategory(category) {

    const articles =
        document.querySelectorAll(".article-card");

    let found = false;

    articles.forEach(article => {

        if (
            article.dataset.category === category
        ) {

            article.style.display = "";

            found = true;

        } else {

            article.style.display = "none";

        }

    });

    document
        .getElementById("articles")
        .scrollIntoView({
            behavior: "smooth"
        });

    document.getElementById("noResults").style.display =
        found ? "none" : "block";
}


// ===============================
// فتح المقال
// ===============================

function openArticle(
    title,
    category,
    text
) {

    document.getElementById(
        "modalTitle"
    ).textContent = title;

    document.getElementById(
        "modalCategory"
    ).textContent = category;

    document.getElementById(
        "modalText"
    ).textContent = text;

    document
        .getElementById("articleModal")
        .classList.add("show");

    document.body.style.overflow = "hidden";
}


// ===============================
// إغلاق المقال
// ===============================

function closeArticle() {

    document
        .getElementById("articleModal")
        .classList.remove("show");

    document.body.style.overflow = "";

}


// إغلاق النافذة عند الضغط خارجها

document
    .getElementById("articleModal")
    .addEventListener("click", event => {

        if (
            event.target.id === "articleModal"
        ) {
            closeArticle();
        }

    });


// إغلاق باستخدام ESC

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {
            closeArticle();
        }

    }
);