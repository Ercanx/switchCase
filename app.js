const date = new Date();
const tarih = date.getDay();
const p = document.getElementById("today");

// const para = document.createElement("p");
// para.innerText = "baba";
// document.body.appendChild(para);

switch (tarih) {
        case 1:
            p.innerHTML = "Pazartesi";
            break;
        case 2:
            p.innerHTML = "Salı";
            break;
        case 3:
            p.innerHTML = "Çarşamba";
            break;
        case 4:
            p.innerHTML = "Perşenbe";
            break;
        case 5:
            p.innerHTML = "Cuma";
            break;
        case 6:
            p.innerHTML = "Cumartesi";
            break;
        case 7:
            p.innerHTML = "Pazar"
            break;
    default:
        p.innerHTML = "Sistem Saati Bulunamdı..";
        break;
}
