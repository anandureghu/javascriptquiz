const correctAnswers = ['C', 'D', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const displayScore = document.querySelector('.score');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;

    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    correctAnswers.forEach((answer, index) => {
        if(answer === userAnswer[index]){
            score += 25;
        }
    });
    console.log(score);
    scrollTo(0, 0);
    result.classList.remove('d-none');
    
    let output = 0;
    const timer = setInterval(() => {
        displayScore.textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }else{
            output++;
        }
    }, 17);
});