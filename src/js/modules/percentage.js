const fillPercentBar = () => {
    const counters = document.querySelectorAll('.skills__progress__item-percent'),
        lines = document.querySelectorAll('.skills__progress__item__bar-fill');

    counters.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    })
};

export default fillPercentBar;
