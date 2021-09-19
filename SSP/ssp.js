var userEingabe = prompt("Gib 'stein', 'schere' oder 'papier' ein.);

function computerPlay(max) {
  return Math.floor(Math.random()*max);
}

console.log(Math.random());

if (computerPlay < 0.34) {
    computerPlay = "stein";
} else if(computerPlay <= 0.67) {
    computerPlay = "papier";
} else {
    computerPlay = "schere";
}

var compare = function(userEingabe, computerPlay) {
    if(userEingabe === computerPlay) {
    return "Unentschieden!";
}
if(userEingabe === "stein") {
    if(computerPlay === "schere") {
        return "Stein gewinnt!";
    } else {
        return "Papier gewinnt!";
    }
}
if (userEingabe === "papier") {
    if (computerPlay === "stein") {
        return "Papier gewinnt!";
    } else {
        if (computerPlay === "schere") {
            return "Schere gewinnt!";
        }
    }
    if (userEingabe === "schere") {
        if (computerPlay === "stein") {
            return "Stein gewinnt";
        } else {
            if (computerPlay === "papier") {
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
