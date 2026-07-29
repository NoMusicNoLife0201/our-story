function checkPassword() {

    const password = document
        .getElementById("password")
        .value
        .trim()
        .toUpperCase();

    const screen = document.getElementById("password-screen");
    const content = document.getElementById("content");
    const error = document.getElementById("error");

    if (password === "TOKYOSTATION20260201") {

        error.innerText = "";

        screen.style.opacity = "0";

        setTimeout(() => {

            screen.style.display = "none";

            content.style.display = "block";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 1000);

    } else {

        error.innerText =
            "keywordが違うって、もしかして勘で当てようとしてる？";

    }

}

/* Enterキー対応 */

document
    .getElementById("password")
    .addEventListener("keydown", function (e) {

        if (e.key === "Enter") {
            checkPassword();
        }

    });

/* スクロールアニメーション */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.25
});

document.querySelectorAll(".photo").forEach(photo => {

    observer.observe(photo);

});
