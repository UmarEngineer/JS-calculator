        // VARIABLES
    let resultScreen = document.querySelector(".result-screen");
    let buttons = document.querySelectorAll(".button");
    let equal = document.querySelector(".btn-equal");
    let clear = document.querySelector(".btn-clear");
    let backspace = document.querySelector(".backspace");
    let answerScreen = document.querySelector('.answer-screen');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            resultScreen.value += value;
        });
    });

    equal.addEventListener('click', function(e) {
        if (resultScreen.value === "") {
            resultScreen.className = 'result-screen__small';
            resultScreen.value = "Iltimos, avval sonni kiriting";

            setTimeout(() => {
                resultScreen.value = "";
                resultScreen.className = 'result-screen';
            }, 2000);
        }
        else {
            let answer = eval(resultScreen.value);
            answerScreen.value = resultScreen.value;
            resultScreen.value = answer;
        }
    });

    clear.addEventListener('click', function(e) {
        resultScreen.value = "";
        answerScreen.value = "";
    });

    backspace.addEventListener('click', function(e) {
        resultScreenValue = resultScreen.value
        if (resultScreen.value != "") {
            resultScreen.value = resultScreen.value.slice(0, -1);
        }

        if (resultScreen.value == "") {
            resultScreen.value = answerScreen.value
            answerScreen.value = "";
            resultScreen.value = resultScreen.value.slice(0, -1);
        }
        console.log(resultScreenValue.length - 1);
        // answerScreen.value = "";
    });

    // BUTTONS

    const moon = document.querySelector('.moon');
    const sun = document.querySelector('.sun');
    const ball = document.querySelector('.ball');
    const link = document.querySelector('#link');

    moon.addEventListener('click', () => {
        sun.style.visibility = "visible"
        moon.style.visibility = "hidden"
        ball.style.left = '2px'
        link.href = "./css/ligth.css";
    })

    sun.addEventListener('click', () => {
        moon.style.visibility = "visible"
        sun.style.visibility = "hidden"
        ball.style.cssText = '\nrigth: 2px;\n'
        link.href = "./css/dark.css";
    })

