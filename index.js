window.addEventListener("click", clicked)

const score_list  = [];

function clicked (e) {
    const parentContainer = e.target.parentNode.parentNode.parentNode;
    const containerId= Number(parentContainer.id);
    
    const classAnswer = e.target.parentNode;
    const classAnswerList= [...classAnswer.parentNode.children];

    const next = document.getElementById(String(containerId+1));

    applyChange(classAnswerList, classAnswer);

    if (score_list.length === 4) {
        displayResult(calculate(score_list));
    } else {
        addScore(classAnswer, score_list);
        scrollNext(next)
    }
}

function applyChange(allAnswers, clickedAnswer  ) {
    allAnswers.forEach(element => {
        element.classList.remove("clicked");
        element.classList.remove("unclicked");
    })
    clickedAnswer.classList.add("clicked");
    allAnswers.forEach(element => {
        if(!element.classList.contains("clicked")) {
            element.classList.add("unclicked");
        }
    })
}

function addScore(clickedAnswer, score_list) {
    const score = Number(clickedAnswer.getAttribute("data-score"));
    score_list.push(score);
    console.log(score_list)
}

function scrollNext(nextContainer) {
    nextContainer.scrollIntoView({behavior:"smooth"});
}

function calculate(scores) {
    return scores.reduce((init, cur) => init + cur)
}

function displayResult(calculatedScore) {
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
    // console.log(resultList)
    const result = (resultList.filter(element=> element.id == i.toString()))[0]
    // console.log(result)
    result.classList.add("result-clicked");
    scrollNext(result);
    // console.log(result.classList.add("result-clicked"))
} 
