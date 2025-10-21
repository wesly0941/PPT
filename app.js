var opt_piedra = document.getElementById("piedra");
var opt_papel = document.getElementById("papel");
var opt_tijera = document.getElementById("tijera");

var start = document.getElementById("start_game");

var img_opt_player1 = document.getElementById("player1");
var img_opt_player2 = document.getElementById("player2");

var ptos_player1 = parseInt(document.getElementById("ptos_player1").innerText) || 0;
var ptos_player2 = parseInt(document.getElementById("ptos_player2").innerText) || 0;

var select_player1;
var select_player2;
var vs;

start.onclick = function() {            
    select_player2 = opt_random(val_opt_random.toString());
    display_option_player2(select_player2);
    game_vs(select_player1, select_player2);
    console.log(select_player1, select_player2.toString());
}

opt_piedra.onclick = function() {
    select_player1 = "piedra";
    img_opt_player1.src = "./css/piedra.png";
    img_opt_player2.src = "./css/bot.png";
}

opt_papel.onclick = function() {
    select_player1 = "papel";
    img_opt_player1.src = "./css/papel.png";
    img_opt_player2.src = "./css/bot.png";
}

opt_tijera.onclick = function() {
    select_player1 = "tijera";
    img_opt_player1.src = "./css/tijeras.png";
    img_opt_player2.src = "./css/bot.png";
}

var val_opt_random = ["piedra", "papel", "tijera"];
function opt_random() {
    return [...val_opt_random]
    .sort(() => Math.random() > 0.5 ? 1 : -1)
    .slice(0, 1)[0]; 
}

function game_vs(select_player1, select_player2) { 
    if (select_player1 == "piedra") {
        if (select_player2 == "piedra") {
            vs = "same";
        } else if (select_player2 == "papel") {
            vs = "p2win";
        } else {
            vs = "p1win";
        } 
    } else if (select_player1 == "papel") {
        if (select_player2 == "papel") {
            vs = "same";
        } else if (select_player2 == "tijera") {
            vs = "p2win";
        } else {
            vs = "p1win";
        }
    } else if (select_player1 == "tijera") { 
        if (select_player2 == "tijera") {
            vs = "same";
        } else if (select_player2 == "piedra") {
            vs = "p2win";
        } else {
            vs = "p1win";
        } 
    }
    combate(); 

        if (vs == "p1win") {
            document.getElementById("result").innerText = "JUGADOR GANA";
            document.getElementById("result").style.color = "#00ff0dff";
            ptos_player1++;
            document.getElementById("ptos_player1").innerText = ptos_player1;
        } else if (vs == "same") {
            document.getElementById("result").innerText = "EMPATE";
            document.getElementById("result").style.color = "#ffbb00ff";
        } else if (vs == "p2win") {
            document.getElementById("result").innerText = "CPU GANA";
            document.getElementById("result").style.color = "#ff0000ff";
            ptos_player2++;
            document.getElementById("ptos_player2").innerText = ptos_player2;
        }
    }

    function display_option_player2(select_player2) {
        if (select_player2 == "piedra") {
            img_opt_player2.src = "./css/piedra.png";
        } else if (select_player2 == "papel") {
            img_opt_player2.src = "./css/papel.png";
        } else {
            img_opt_player2.src = "./css/tijeras.png";
        }
    }

    const reload = document.getElementById('reset');
    reload.addEventListener('click', _ => {
        location.reload();
    });

    function Crearmensaje(result) {
        let sectionmensaje = document.getElementById('historico');
        let parrafo = document.createElement('p');
        parrafo.textContent = 'Jugador eligió ' + select_player1 + ' y CPU eligió ' + select_player2 + ' - ' + result;
        sectionmensaje.appendChild(parrafo); 
    }

    function combate() {
        if (select_player1 == select_player2) {
            Crearmensaje("EMPATE");
        } else if (select_player1 == 'piedra' && select_player2 == 'tijera') {
            Crearmensaje("GANASTE");
        } else if (select_player1 == 'tijeras' && select_player2 == 'papel') {
            Crearmensaje("GANASTE");
        } else if (select_player1 == 'papel' && select_player2 == 'piedra') {
            Crearmensaje("GANASTE");
        } else {
            Crearmensaje("PERDISTE");
        }
    }
