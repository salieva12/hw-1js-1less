
const saliev = prompt("Введите значение:");

// Проверка, является ли введенное значение числом
if (!isNaN(saliev) && saliev !== null && saliev !== "") {
    alert("Вы ввели число: " + saliev);
} else {
    alert("Введено некорректное значение");
}
