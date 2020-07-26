let answers = ['A','B','B','A'];
let form = document.querySelector('form');
let input = document.querySelectorAll('.question input');
let result = document.querySelector('.result-container');
let userScore = document.querySelector('.result-container span');
form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    let ansArr = [form.question1.value, form.question2.value, form.question3.value, form.question4.value];
    ansArr.forEach(function(ans, index){
        if(ans === answers[index]){
            score += 25;
        }
    });
    result.style.display = 'block';
    window.scrollTo(0, 0);
    var i = 0;
    function slowDown(){
            userScore.innerText = i + '%';
            i++;
            if(i === score + 1){
                clearInterval(id);
            }
    }
    var id = setInterval(slowDown, 20);
    
});
