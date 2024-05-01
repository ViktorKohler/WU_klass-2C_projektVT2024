// hamburgermeny
const burger = document.getElementById('burger')
const linkList = document.getElementById('link_list')

function toggleMenu() {
    linkList.classList.toggle('links_visible')
    burger.classList.toggle('burger_in_x_form')
}

burger.addEventListener('click', toggleMenu)

/*click*/
document.addEventListener("DOMContentLoaded", function() {
    const imageUrls = [
        "img/plikt_bak.jpg", 
        "img/cpr_train.jpg", 
        "img/heart_doctor.jpg",
        "img/helping.jpg",
    ];

    let currentIndex = 0;
    const image = document.getElementById("plikt_bak");

    const leftButton = document.getElementById("but_left");
    const rightButton = document.getElementById("but_right");

    leftButton.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
        image.src = imageUrls[currentIndex];
    });

    rightButton.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % imageUrls.length;
        image.src = imageUrls[currentIndex];
    });
});
