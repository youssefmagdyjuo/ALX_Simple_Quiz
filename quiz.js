const button = document.getElementById('submit-answer');
const feedback = document.getElementById('feedback');
button.addEventListener('click', checkAnswer);
function checkAnswer (){
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    const correctAnswer  = "4";
if (userAnswer) {
    if (userAnswer === correctAnswer){
        feedback.innerText = "Correct! Well done."; 
    }
    else {
        feedback.innerText = "That's incorrect. Try again!.";
    }
}
}