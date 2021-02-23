const btn = document.getElementById("download_button");
const progress = document.querySelector(".progress_bars");
const progressBarPercents = [92, 89, 84, 75, 85, 78, 72, 68, 75, 60];

btn.addEventListener("click", () => {
    window.open('/download');
})

window.addEventListener("scroll", () => {
    if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
        document.querySelectorAll(".progress_percent").forEach((el, i) => {
            el.style.width = `${progressBarPercents[i]}%`;
        });
    }
});