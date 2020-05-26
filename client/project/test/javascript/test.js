let vue = new Vue ({
    el: '.watch-form',

    data: {
        questions:[
            {isOpen: false, text: "Вопрос1", answer: "answer1", answers:[
                    "SDGSDGDFDSFDFj", "asd", "asd"
                ]},
            {isOpen: true, text: "Вопрос2", answer: "answer2"},
            {isOpen: false, text: "Вопрос3", answer: "answer3", answers:[
                    "dj", "asd", "asd", "safa", "asfasfF"
                ]},
            {isOpen: true, text: "Вопрос4", answer: "answer4"},
            {isOpen: true, text: "Вопрос5", answer: "answer5"}
        ]
    },
    methods: {
        getQuestion(i){
            return this.questions[i];
        }
    }
});

function checkAnswers(corAnswer, answers){
    for (answer in answers){
        cheker = answer.getElementById('answer');
        label = answer.querySelectorAll("label")
        if((label[0].innerText === corAnswer) && cheker.checked){
            return true;
        }
    }
    return false;
}

let questions = document.querySelectorAll('.answers');

i = 0;

questions.forEach(quest => {
    questionVue = vue.getQuestion(i)
    corAnswer = questionVue.answer;

    isRight = false;
    if(questionVue.isOpen){
        isRight = quest.value === questionVue.answer;
    }
    else {
        answers = quest.querySelectorAll('li');
        isRight = checkAnswers(corAnswer, answers);
    }

    console.log(isRight);
    i++;
});
