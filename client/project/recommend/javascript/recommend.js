recVue = new Vue({
    el: '#resultRec',
    data: {
        recText: [],
    },
});

function checkRec() {
    if (isCorInput()){
        text = [checkPhoneTime(), checkListWork(), checkSayNo(), checkAskedHelp(), checkCareY()];
    } else {
        text = ["Некоторые поля введены неверно"];
    }
    recVue.recText = text;
}

function clearRed(el) {
    el.classList.remove("is-invalid")
}

function isCorInput() {
    isCor = true;
    if (!((elHTML = document.getElementById("phoneTime")).value > 0 && elHTML.value < 24)){
        elHTML.classList.add("is-invalid");
        isCor = false;
    }
    if ((elHTML = document.getElementById("listWork")).selectedIndex === 0){
        elHTML.classList.add("is-invalid");
        isCor = false;
    }
    if ((elHTML = document.getElementById("sayNo")).selectedIndex === 0){
        elHTML.classList.add("is-invalid");
        isCor = false;
    }
    if ((elHTML = document.getElementById("askedHelp")).selectedIndex === 0){
        elHTML.classList.add("is-invalid");
        isCor = false;
    }
    if ((elHTML = document.getElementById("careY")).selectedIndex === 0){
        elHTML.classList.add("is-invalid");
        isCor = false;
    }
    return isCor;
}


function checkPhoneTime() {
    text = "Вы уверены в своем ответе? Смартфоны, планшеты и компьютеры заполонили нашу жизнь, и они являются основной причиной снижения продуктивности. Вы слышали фразу «прилипнуть к экрану»? Это и есть то время, которое мы тратим на наши гаджеты, даже если этого особо и не хотим. Вы и сами знаете, что такое «быстренько проверить свою почту», за которым следует долгий просмотр смешных видеороликов и новостных лент. Итак, сколько времени вы проводите перед экраном (это не включает рабочие моменты)? Если больше часа, то ваша производительность, вероятно, заметно страдает."
    return text;
}

function checkListWork() {
    listWork = document.getElementById("listWork").selectedIndex;
    text = "";
    if (listWork === 1){
        text = "Вы молодец";
    } else {
        text = "Задумайтесь над тем, чтобы начать делать записи";
    }
    text += " ,так как у наиболее продуктивных людей всегда есть список дел, которые нужно выполнить. Даже если вам хочется верить в то, что вы можете хранить его в своей голове, это практически невозможно. Вы не сможете уследить за всем и ничего не забыть. Итак, если у вас нет постоянного списка, который расставляет приоритетность задач, вы, скорее всего, не столь продуктивны, как могли бы быть.";
    return text;
}

function checkSayNo() {
    sayNo = document.getElementById("sayNo").selectedIndex;
    text = "";
    if (sayNo === 1){
        text = "Красавчик.";
    } else {
        text = "Что вы делаете, когда ваш босс просит вас взвалить на себя еще один проект? А ваша соседка постоянно просит выгулять её собаку? А подруга требует, чтобы вы примчались к ней по первому зову? Вы вообще умеете произносить волшебное слово «НЕТ»?";
    }
    text += " Самые продуктивные люди знают, сколько часов у них есть в сутках, и они не боятся отказать вместо того, чтобы добавить еще одну задачу к своей и без того немалой нагрузке. Вы не можете тянуть на себе всё, потому что в итоге вы не увидите никаких хороших результатов. Так что научитесь говорить «нет»! Если вы это сделаете, ваша продуктивность сразу же возрастет.";
    return text;
}

function checkAskedHelp() {
    askedHelp = document.getElementById("askedHelp").selectedIndex;
    text = "";
    if (askedHelp === 1){
        text = "Правильное решение. ";
    } else {
        text = "Задумайтесь! ";
    }
    text += "Самые продуктивные люди в мире – это не те, кто стараются сделать все сами. Это те, кто умеют делегировать задачи, чтобы добиться успеха. В современном мире безумная занятость возведена чуть ли не в ранг добродетели – вы особо гордитесь тем, что мало спите и много работаете. Истина в том, что самые продуктивные люди этого не делают: они знают, что, обратившись за помощью и распределив задания, они будут более эффективными и менее измученными.";
    return text;
}

function checkCareY() {
    careY = document.getElementById("careY").selectedIndex;
    text = "";
    if (careY === 1){
        text = "Верно! ";
    } else {
        text = "Ваша продуктивность напрямую зависит от вашего физического и эмоционального благополучия. Если вы тот человек, который не высыпается, плохо питается или борется со стрессом и депрессией, – то о продуктивности вы можете забыть.";
    }
    text += "Для хорошей работы вам нужна ясность ума и физическая выносливость. Так что позаботьтесь о себе. Достаточно хорошо поспать, хорошо поесть, погулять, дать себе немного физической нагрузки и помедититровать, чтобы расслабить тело и разум.";
    return text;
}