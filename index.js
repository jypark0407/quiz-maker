function clicked (e) {
    const parentContainer = e.target.parentNode.parentNode.parentNode;
    const containerId= Number(parentContainer.id);
    
    const classAnswer = e.target.parentNode;
    const classAnswerList= [...classAnswer.parentNode.children];

    const next = document.getElementById(String(containerId+1));
    
    function applyChange() {
        classAnswer.classList.add("clicked");
        const unclickedElements = classAnswerList.filter(element => !element.classList.contains("clicked"))
        unclickedElements.map(element => element.classList.add("unclicked"));
    }
    
    function scrollNext() {
       next.scrollIntoView({behavior:"smooth"});
    }
    
    function addScore() {
        const score = Number(classAnswer.getAttribute("data-score"));
        score_list.push(score);
        console.log(score_list)
    }
    const sum = (initialValue, currentValue) => initialValue + currentValue;
    
    function calculate() {
        return (score_list.reduce(sum, 0))
    }
    
    function displayResult() {
        if (calculatedScore >0 || calculateScore < 15) {
            var i = 1;
        }
        if (calculatedScore >= 15 || calculatedScore < 30) {
            var i = 2;
        }
        if (calculatedScore >=30 || calculatedScore < 40) {
            var i = 3;
        } else {
            var i = 4;
        }
        const resultList = Array.from(document.querySelectorAll(".result"));
        console.log(resultList)
        const result = (resultList.filter(element=> element.id == i.toString()))[0]
        console.log(result)
        result.classList.add("result-clicked");
        console.log(result.classList.add("result-clicked"))
    }   

    const calculatedScore = calculate();

    if (score_list.length == 4) {
        applyChange();
        calculate();
        displayResult();
    } else {
        applyChange();
        scrollNext();
        addScore();
    }
}

window.addEventListener("click", clicked)

const score_list = [];

