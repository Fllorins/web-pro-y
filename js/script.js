// tabs
const tabsBtns = document.querySelectorAll(".tabs__nav button")

const tabsItems = document.querySelectorAll(".tabs__item");


// функция убирает табы и убирает active из кнопок 
function hideTabs() {
    tabsItems.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(item => item.classList.remove("active"));
}


// функция показывает переданный номер таба и делает соответствующую ему кнопку активной.

function showTab(index) {
    tabsItems[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}

hideTabs();
showTab(0);

tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}));

// anchors якори 
const anchors = document.querySelectorAll(".header__nav a");

anchors.forEach(anc => {
    anc.addEventListener("click", function(event) {
        event.preventDefault();

        const id = anc.getAttribute("href");
        
        const elem = document.querySelector(id);
        
        window.scroll({
            top: elem.offsetTop - 780,
            behavior: "smooth"
        });

    });
});