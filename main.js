function podajLiczby() {
    liczba1 = parseInt(prompt("Podaj pierwszą liczbę:"));

    liczba2 = parseInt(prompt("Podaj drugą liczbę:"));
    document.getElementById("liczby").innerHTML = "Liczba 1: " + liczba1 + "<br>Liczba 2: " + liczba2;
}

function dodawanie() {
    document.getElementById("ekran").innerHTML = liczba1 + liczba2;
}

function odejmowanie() {
    document.getElementById("ekran").innerHTML = liczba1 - liczba2;
}

function mnozenie() {
    document.getElementById("ekran").innerHTML = liczba1 * liczba2;
}