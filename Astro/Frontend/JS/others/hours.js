const hours = document.getElementById("hours");

if (new Date().getHours() >= 24 && new Date().getHours() < 5) {
  hours.innerHTML = "Boa Madrugada";
} else if (new Date().getHours() >= 5 && new Date().getHours() < 12) {
  hours.innerHTML = "Boa Dia";
} else if (new Date().getHours() >= 12 && new Date().getHours() < 18) {
  hours.innerHTML = "Boa Tarde";
} else if (new Date().getHours() >= 18 && new Date().getHours() < 24) {
  hours.innerHTML = "Boa Noite";
}
