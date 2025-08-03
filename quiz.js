const button = document.getElementById('submit-answer');
const feedback = document.getElementById('feedback');
button.addEventListener('click', checkAnswer);
function checkAnswer (){
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    const correctAnswer  = "4";
if (userAnswer) {
    userAnswer.value === correctAnswer ?
        feedback.innerText = "Correct!" :
        feedback.innerText = "Incorrect, try again.";
}
}