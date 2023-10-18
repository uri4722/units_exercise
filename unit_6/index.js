const DIV_GAME = document.getElementById("game");
const INPUT = document.getElementById("input");
const BUTTON = document.getElementById("btn");
const RESULT = document.getElementById("result");
const SELECTED = document.getElementById("selcetLtrs");
let a_z
for (let n = 0; n < 26; n++) {
    a_z += String.fromCharCode(65 + n)

}
let numAttempt = 0;
let comuterLtr = String.fromCharCode(65 + Math.floor(Math.random() * 26));

// הרצת המשחק מאנטר ומכפתור
BUTTON.addEventListener("click", runGame);
INPUT.addEventListener('keydown', enterRunGame, event)
// אפשר למחוק בסוף
console.log("this is comuter " + comuterLtr);

function runGame() {

    // בחירת מספר משתמש 
    let userLtr = INPUT.value.toUpperCase();
    // אם בחר את זה כבר
    if (SELECTED.innerHTML.includes(userLtr)) {
        return alert("You already guessed this letter");
    }
    INPUT.value = "";

    // אם זה לא אות באנגלית
    if (!a_z.includes(userLtr)) {
        return alert("this is not a single letter");
    }
    SELECTED.innerHTML += " " + userLtr;
    RESULT.innerHTML = "Let's try again!";
    numAttempt++;
    // אפשר למחוק בסוף
    console.log("this is user " + userLtr);

    // סיום
    if (userLtr === comuterLtr) {
        RESULT.style.color = "rgba(71, 111, 71, 0.784)";
        RESULT.innerHTML = `Well done, you did it! <br>
        You did it in ${numAttempt} attempts!`;
        BUTTON.removeEventListener("click", runGame);
        INPUT.removeEventListener('keydown', enterRunGame, event);
        INPUT.readOnly = true;

        // כפתור משחק חדש
        let newGameBtn = document.createElement('button');
        newGameBtn.setAttribute("id", 'newGameBtn');
        DIV_GAME.appendChild(newGameBtn);
        newGameBtn.innerHTML = "new game";
        newGameBtn.addEventListener("click", newGame);
        INPUT.addEventListener('keydown', enterNewGame, event)

    }
}

function newGame() {
    INPUT.value = "";
    BUTTON.addEventListener("click", runGame);
    INPUT.removeEventListener('keydown', enterNewGame, event)
    INPUT.addEventListener('keydown', enterRunGame, event)
    INPUT.readOnly = false;
    comuterLtr = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    // אפשר למחוק בסוף
    console.log("this is comuter " + comuterLtr);

    numAttempt = 0
    document.getElementById('newGameBtn').remove();
    RESULT.innerHTML = "";
    RESULT.style.color = "rgba(230, 114, 32, 0.784)";
    SELECTED.innerHTML = "";
}

function enterRunGame(e) {
    if (e.key === "Enter") {
        runGame()
    }
}
function enterNewGame(e) {
    if (e.key === "Enter") {
        newGame()
    }
}