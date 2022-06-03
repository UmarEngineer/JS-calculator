(function() {

    let resultScreen = document.querySelector(".result-screen");
    let buttons= document.querySelectorAll(".btn");
    let equal = document.querySelector(".btn-equal");
    let clear = document.querySelector(".btn-clear");
    let clear2 = document.querySelector(".btn-clear2");
    let answerScreen = document.querySelector('.answer-screen');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            resultScreen.value += value;
        });
    });


    equal.addEventListener('click', function(e){
        if (resultScreen.value === ""){
            resultScreen.className = 'result-screen__small';
            resultScreen.value = "Iltimos, avval sonni kiriting";

            setTimeout( () => {
                resultScreen.value = "";
                resultScreen.className = 'result-screen';
            }, 2000);
        } else {
            console.log(resultScreen.value)
            let answer = eval(resultScreen.value);
            answerScreen.value = resultScreen.value;
            resultScreen.value = answer;
        }
    });

    clear.addEventListener('click', function(e){
        resultScreen.value = "";
        answerScreen.value = "";
    });

    clear2.addEventListener('click', function(e){
        resultScreen.value = "";
        answerScreen.value = "";
    });


})();