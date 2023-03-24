window.onload = calculateAges;

function calculateAges() {
  const birthYears = [2000, 2001, 2018]; // Cambiar a tus años de nacimiento
  const currentYear = new Date().getFullYear();
  const ages = birthYears.map(year => currentYear - year);
  document.getElementById("cimarron").textContent = ages[0];
  document.getElementById("manacor").textContent = ages[1];
  document.getElementById("baasil").textContent = ages[2];
}