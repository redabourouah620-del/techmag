/* ==================================================
   TECHMAG V2
   ================================================== */


/* ================= ARTICLES DATA ================= */

const articles = [

    {
        id: 0,

        title:
            "كيف يغير الذكاء الاصطناعي طريقة استخدامنا للتكنولوجيا؟",

        category:
            "الذكاء الاصطناعي",

        date:
            "27 سبتمبر 2026",

        read:
            "6 دقائق",

        type:
            "AI",

        class:
            "ai-bg",

        description:
            "نظرة مبسطة على تطور أدوات الذكاء الاصطناعي وتأثيرها على العمل والتعليم والبرمجة.",

        content: `
            <p>
                أصبح الذكاء الاصطناعي من أكثر المجالات
                تأثيراً في عالم التكنولوجيا. فقد انتقلت
                أدوات الذكاء الاصطناعي من المختبرات
                المتخصصة إلى التطبيقات التي يستخدمها
                الناس يومياً.
            </p>

            <h2>
                الذكاء الاصطناعي في الحياة اليومية
            </h2>

            <p>
                يمكن العثور على تقنيات الذكاء الاصطناعي
                في محركات البحث والهواتف الذكية
                وتطبيقات الترجمة وتحليل الصور
                والمساعدات الرقمية.
            </p>

            <h2>
                ماذا عن المستقبل؟
            </h2>

            <p>
                من المتوقع استمرار تطور هذه التقنيات،
                لكن استخدامها يتطلب أيضاً الاهتمام
                بالخصوصية والأمان ودقة المعلومات.
            </p>
        `
    },


    {
        id: 1,

        title:
            "ما الذي يجب معرفته قبل شراء هاتف جديد؟",

        category:
            "الهواتف",

        date:
            "26 سبتمبر 2026",

        read:
            "5 دقائق",

        type:
            "PHONE",

        class:
            "phone-bg",

        description:
            "أهم المواصفات التي ينبغي مقارنتها قبل شراء هاتف جديد.",

        content: `
            <p>
                اختيار الهاتف المناسب لا يعتمد فقط
                على السعر أو عدد الكاميرات.
                يجب النظر إلى مجموعة من المواصفات
                التي تتوافق مع طريقة استخدامك.
            </p>

            <h2>
                المعالج والأداء
            </h2>

            <p>
                المعالج يؤثر بشكل مباشر على سرعة
                التطبيقات والألعاب وتعدد المهام.
            </p>

            <h2>
                البطارية والشاشة
            </h2>

            <p>
                إذا كنت تستخدم الهاتف لفترات طويلة،
                فمن المهم مقارنة سعة البطارية
                وكفاءة الجهاز وجودة الشاشة.
            </p>
        `
    },


    {
        id: 2,

        title:
            "كيف تبدأ تعلم تطوير المواقع من الصفر؟",

        category:
            "البرمجة",

        date:
            "25 سبتمبر 2026",

        read:
            "7 دقائق",

        type:
            "CODE",

        class:
            "code-bg",

        description:
            "دليل مبسط للمبتدئين لفهم HTML وCSS وJavaScript.",

        content: `
            <p>
                تطوير المواقع من المجالات التي يمكن
                البدء فيها تدريجياً دون الحاجة إلى
                معرفة عدد كبير من لغات البرمجة.
            </p>

            <h2>
                HTML
            </h2>

            <p>
                HTML تستخدم لبناء هيكل الصفحة،
                مثل العناوين والفقرات والصور
                والروابط.
            </p>

            <h2>
                CSS
            </h2>

            <p>
                CSS مسؤولة عن المظهر والتنسيق
                والألوان والمسافات والتصميم المتجاوب.
            </p>

            <h2>
                JavaScript
            </h2>

            <p>
                JavaScript تضيف التفاعل والوظائف
                الديناميكية إلى الموقع.
            </p>
        `
    },


    {
        id: 3,

        title:
            "خطوات بسيطة لحماية حساباتك على الإنترنت",

        category:
            "الأمن السيبراني",

        date:
            "24 سبتمبر 2026",

        read:
            "4 دقائق",

        type:
            "SECURITY",

        class:
            "security-bg",

        description:
            "خطوات عملية لتحسين مستوى الأمان في حساباتك الرقمية.",

        content: `
            <p>
                حماية الحسابات الرقمية أصبحت مهمة
                مع زيادة الخدمات التي تعتمد على
                الإنترنت.
            </p>

            <h2>
                استخدم كلمات مرور مختلفة
            </h2>

            <p>
                من الأفضل استخدام كلمة مرور مختلفة
                لكل حساب مهم وعدم إعادة استخدام
                كلمة المرور نفسها.
            </p>

            <h2>
                المصادقة الثنائية
            </h2>

            <p>
                تفعيل المصادقة الثنائية يضيف طبقة
                إضافية من الحماية عند تسجيل الدخول.
            </p>
        `
    },


    {
        id: 4,

        title:
            "أهم النصائح لحماية بياناتك الشخصية",

        category:
            "الأمن السيبراني",

        date:
            "23 سبتمبر 2026",

        read:
            "5 دقائق",

        type:
            "SECURITY",

        class:
            "security-bg",

        description:
            "كيف تقلل من المخاطر المرتبطة بمشاركة بياناتك الشخصية.",

        content: `
            <p>
                البيانات الشخصية من المعلومات المهمة
                التي يجب التعامل معها بحذر أثناء
                استخدام الإنترنت.
            </p>

            <p>
                تجنب مشاركة المعلومات الحساسة مع
                المواقع غير الموثوقة، وتحقق دائماً
                من عنوان الموقع قبل إدخال بياناتك.
            </p>
        `
    },


    {
        id: 5,

        title:
            "كيف يعمل الإنترنت بطريقة مبسطة؟",

        category:
            "الإنترنت",

        date:
            "22 سبتمبر 2026",

        read:
            "6 دقائق",

        type:
            "WEB",

        class:
            "internet-bg",

        description:
            "شرح مبسط لما يحدث عندما تفتح موقعاً على الإنترنت.",

        content: `
            <p>
                عندما تكتب عنوان موقع في المتصفح،
                يبدأ جهازك بإرسال طلب إلى خادم
                يستضيف الموقع.
            </p>

            <p>
                بعد وصول الطلب، يرسل الخادم الملفات
                اللازمة إلى المتصفح ليعرض الصفحة.
            </p>
        `
    }
];


/* ================= DOM ================= */

const articlesGrid =
    document.getElementById("articlesGrid");

const noResults =
    document.getElementById("noResults");

const mainContent =
    document.getElementById("mainContent");

const articlePage =
    document.getElementById("articlePage");


/* ================= RENDER ================= */

function renderArticles(list = articles) {

    articlesGrid.innerHTML = "";

    if (list.length === 0) {

        noResults.style.display = "block";

        return;
    }

    noResults.style.display = "none";


    list.forEach(article => {

        const card =
            document.createElement("article");

        card.className =
            "article-card";

        card.onclick =
            () => openArticle(article.id);


        card.innerHTML = `

            <div
                class="article-card-image ${article.class}">

                ${article.type}

            </div>

            <div class="article-card-content">

                <span class="category">
                    ${article.category}
                </span>

                <h3>
                    ${article.title}
                </h3>

                <p>
                    ${article.description}
                </p>

                <div class="card-meta">

                    <span>
                        ${article.date}
                    </span>

                    <span>
                        ${article.read}
                    </span>

                </div>

            </div>
        `;


        articlesGrid.appendChild(card);

    });

}


/* ================= OPEN ARTICLE ================= */

function openArticle(id) {

    const article =
        articles.find(item => item.id === id);

    if (!article) return;


    document.getElementById(
        "articleCategory"
    ).textContent =
        article.category;


    document.getElementById(
        "articleTitle"
    ).textContent =
        article.title;


    document.getElementById(
        "articleMeta"
    ).textContent =
        `${article.date} • ${article.read} قراءة`;


    const cover =
        document.getElementById("articleCover");

    cover.className =
        `article-cover ${article.class}`;

    cover.textContent =
        article.type;


    document.getElementById(
        "articleBody"
    ).innerHTML =
        article.content;


    mainContent.style.display =
        "none";


    articlePage.classList.add("show");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    history.pushState(
        { article: id },
        "",
        `#article-${id}`
    );

}


/* ================= CLOSE ARTICLE ================= */

function closeArticle() {

    articlePage.classList.remove("show");

    mainContent.style.display = "";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    history.pushState(
        {},
        "",
        window.location.pathname
    );

}


function showHome() {

    closeArticle();

}


/* ================= SEARCH ================= */

function searchArticles() {

    const query =
        document
            .getElementById("searchInput")
            .value
            .trim()
            .toLowerCase();


    if (!query) {

        renderArticles();

        return;
    }


    const results =
        articles.filter(article =>

            article.title
                .toLowerCase()
                .includes(query)

            ||

            article.category
                .toLowerCase()
                .includes(query)

            ||

            article.description
                .toLowerCase()
                .includes(query)

        );


    renderArticles(results);

}


/* ================= CATEGORY ================= */

function filterCategory(category) {

    const results =
        articles.filter(
            article =>
                article.category === category
        );


    mainContent.style.display = "";

    articlePage.classList.remove("show");


    renderArticles(results);


    document
        .getElementById("latest")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ================= SHOW ALL ================= */

function showAllArticles() {

    document
        .getElementById("searchInput")
        .value = "";

    renderArticles();

}


/* ================= SEARCH PANEL ================= */

function toggleSearch() {

    document
        .getElementById("searchPanel")
        .classList.toggle("show");

}


function clearSearch() {

    document
        .getElementById("searchInput")
        .value = "";

    renderArticles();

}


/* ================= MOBILE MENU ================= */

function toggleMenu() {

    document
        .getElementById("mobileMenu")
        .classList.toggle("show");

}


function closeMenu() {

    document
        .getElementById("mobileMenu")
        .classList.remove("show");

}


/* ================= DARK MODE ================= */

function toggleTheme() {

    document.body
        .classList.toggle("dark");


    const dark =
        document.body.classList.contains("dark");


    localStorage.setItem(
        "techmag-theme",
        dark ? "dark" : "light"
    );


    document.getElementById(
        "themeButton"
    ).textContent =
        dark ? "☀️" : "🌙";

}


/* ================= LOAD THEME ================= */

function loadTheme() {

    const theme =
        localStorage.getItem(
            "techmag-theme"
        );


    if (theme === "dark") {

        document.body.classList.add("dark");

        document.getElementById(
            "themeButton"
        ).textContent = "☀️";

    }

}


/* ================= NEWSLETTER ================= */

function subscribe(event) {

    event.preventDefault();


    const email =
        document
            .getElementById("email")
            .value;


    alert(
        `تم تسجيل ${email} في النسخة التجريبية.`
    );


    document
        .getElementById("email")
        .value = "";

}


/* ================= SHARE ================= */

function shareArticle() {

    const title =
        document.getElementById(
            "articleTitle"
        ).textContent;


    if (
        navigator.share
    ) {

        navigator.share({
            title: title,
            text: title,
            url: window.location.href
        });

    } else {

        navigator.clipboard.writeText(
            window.location.href
        );

        alert(
            "تم نسخ رابط المقال."
        );

    }

}


/* ================= INITIALIZE ================= */

loadTheme();

renderArticles();


/* ================= BROWSER BACK ================= */

window.addEventListener(
    "popstate",
    () => {

        closeArticle();

    }
);