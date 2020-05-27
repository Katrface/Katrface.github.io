let formVue = new Vue ({
    el: '.watch-form',
    data: {
        questions:[
            {text: "Древние греки называли поглотители времени ...",
                answer: "хронофагами",
                answers:[
                    "хронографами",
                    "хронологиями",
                    "хронотипами",
                    "хронофагами"
                ]},
            {text: "…– значит, принять решение, оценив по определенным критериям, какие из поставленных задач и дел имеют первостепенное значение, какие – второстепенное",
                answer: "Расставить приоритеты",
                answers:[
                    "Осуществить контекстное планирование",
                    "Распределить ресурсы",
                    "Расставить приоритеты",
                    "Расставить контексты в хронологическом порядке",
                    "Рассмотреть хронофаги"
                ]},
            {text: "Неверно, что … является правилом организации эффективного отдыха",
                answer: "концентрация",
                answers:[
                    "ритмичность",
                    "концентрация",
                    "смена контекста",
                    "максимальное переключение"
                ]},
            {text: "Неверно, что … является шагом алгоритма жестко-гибкого планирования",
                answer: "отслеживание изменения показателей с помощью графика",
                answers:[
                    "вычеркивание выполненных задач",
                    "составление списка жестких задач",
                    "определение времени исполнения для всех задач",
                    "составление списка гибких задач",
                    "отслеживание изменения показателей с помощью графика",
                    "бюджетирование времени для приоритетных задач"
                ]},
            {text: "Подход, при котором человек действует вопреки внешним обстоятельствам, активно влияет на свою жизнь, называется…",
                answer: "проактивным",
                answers:[
                    "реактивным",
                    "мотивационным",
                    "приоритезированным",
                    "проактивным",
                    "смартизированным"
                ]},
            //http://www.test-for-you.ru/index.php/extensions/mfpa-1/item/217-tem-men
            // {text: "",
            //     answer: "",
            //     answers:[
            //         "",
            //         "",
            //         "",
            //         "",
            //         ""
            //     ]},
        ]
    }
});

resultVue = new Vue ({
    el: '#result',
    data:{
        correctAnswers: 0,
        countAnswers: formVue.questions.length
    }
})

function getResult() {
    htmlAnswers = document.querySelectorAll('.form-check-input[value="true"]');
    count = 0;
    for (i = 0; i < htmlAnswers.length; i++){
        if (htmlAnswers[i].checked){
            count++;
        }
    }
    resultVue.correctAnswers = count
}

function drawAnswers() {
    htmlAnswers = document.querySelectorAll('.form-check-input');
    for (i = 0; i < htmlAnswers.length; i++){
        if(htmlAnswers[i].value === "true"){
            htmlAnswers[i].parentElement.parentElement.classList.add("alert-success");
        } else if (htmlAnswers[i].checked) {
            htmlAnswers[i].parentElement.parentElement.classList.add("alert-danger");
        }
    }
}