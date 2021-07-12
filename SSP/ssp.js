var userEingabe = prompt("Gib 'stein', 'schere' oder 'papier' ein.);
var computerWahl = Math.random();
if (computerWahl < 0.34) {
    computerWahl = "stein";
} else if(computerWahl <= 0.67) {
    computerWahl = "papier";
} else {
    computerWahl = "schere";
}

var compare = function(userEingabe, computerWahl) {
    if(userEingabe === computerWahl) {
    return "Unentschieden!";
}
if(userEingabe === "stein") {
    if(computerWahl === "schere") {
        return "Stein gewinnt!";
    } else {
        return "Papier gewinnt!";
    }
}
if (userEingabe === "papier") {
    if (computerWahl === "stein") {
        return "Papier gewinnt!";
    } else {
        if (computerWahl === "schere") {
            return "Schere gewinnt!";
        }
    }
    if (userEingabe === "schere") {
        if (computerWahl === "stein") {
            return "Stein gewinnt";
        } else {
            if (computerWahl === "papier") {
                return "Schere gewinnt!";
            }
        }
    }
}
}
};
console.log("User-Eingabe: " + userEingabe);
console.log("Computer-Eingabe: " + computerWahl);
compare(userEingabe, computerWahl);
