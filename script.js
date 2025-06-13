const form = document.getElementById('age-form');
const resultElement = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

 const day = parseInt(document.getElementById('day').value);
 const month = parseInt(document.getElementById('month').value) - 1; 
const year = parseInt(document.getElementById('year').value);

const birthDate = new Date(year, month, day);
const today = new Date();

if (isNaN(birthDate.getTime())) {
     resultElement.textContent = 'Invalid date';
    return;
}

let ageYears = today.getFullYear() - birthDate.getFullYear();
let ageMonths = today.getMonth() - birthDate.getMonth();
let ageDays = today.getDate() - birthDate.getDate();

if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
}

if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
}

if (resultElement) {
     resultElement.textContent = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
}else {
    console.error("Result element not found");
}
});
const resetButton = document.querySelector('.btn2');

form.addEventListener('submit', (e) => {
});
resetButton.addEventListener('click', () => {
  resultElement.textContent = '';
});







