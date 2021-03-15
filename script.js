let
    pawelki = 0,
    pieczarki = 0,
    pawelkiMultiplier = 1,
    pieczarkiMultiplier = 1,
    randomPoints = 0,
    bigPawel = false;

let
    checkedIcon,
    mousePawel = document.querySelector(".mouse"),
    clickCounter = document.querySelector(".mouse__points"),
    upgrades = document.querySelectorAll(".shop__link");

document.querySelector(".game__img").addEventListener("click", (event) => {
    randomPoints = Math.floor(Math.random() * 6 + 1);
    if (randomPoints % 3 == 0) {
        pieczarki += (randomPoints * pieczarkiMultiplier);
        clickCounter.innerHTML = randomPoints * pieczarkiMultiplier;
    }
    else {
        pawelki += (randomPoints * pawelkiMultiplier);
        clickCounter.innerHTML = randomPoints * pawelkiMultiplier;
    }
    locate(event);
    reloadCounters();
});

for (let i = 0; i < upgrades.length; i++) {
    upgrades[i].onclick = () => {
        checkedIcon = document.createElement("i");
        checkedIcon.classList.add("fa", "fa-check-square", "game__icon");
        switch (i) {
            case 0:
                if (pieczarki >= 200 && pawelkiMultiplier == 1) {
                    pieczarki = pieczarki - 200;
                    pawelkiMultiplier = 2;
                    upgrades[i].appendChild(checkedIcon);
                }
                break;
            case 1:
                if (pawelki >= 800 && pieczarkiMultiplier == 1) {
                    pawelki = pawelki - 800;
                    pieczarkiMultiplier = 2;
                    upgrades[i].appendChild(checkedIcon);
                }
                break;
            case 2:
                break;
            case 3:
                if (pawelki >= 2400 && bigPawel == false) {
                    pawelki = pawelki - 2400;
                    bigPawel = true;
                    document.querySelector(".game__img").setAttribute("src", "img/poteznyPawel.png");
                    upgrades[i].appendChild(checkedIcon);
                    reloadCounters();
                }
                break;
            case 4:
                break;
        }
        reloadCounters();
    }
}

const locate = (event) => {
    mousePawel.style.top = (event.clientY - 30) + "px";
    mousePawel.style.left = (event.clientX - 30) + "px";
    mousePawel.style.display = "block";
    setTimeout(() => {
        mousePawel.style.display = "none";
    }, 200);
}

const reloadCounters = () => {
    document.querySelector(".game__pawelki").innerHTML = pawelki;
    document.querySelector(".game__pieczarki").innerHTML = pieczarki;
}