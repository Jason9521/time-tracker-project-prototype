const daily = document.getElementById("daily")
const weekly = document.getElementById("weekly")
const monthly = document.getElementById("monthly")

// const timeSpan = document.querySelector(".previous-timespan");

const workCount = document.getElementById("work-count")
const playCount = document.getElementById("play-count")
const studyCount = document.getElementById("study-count")
const exerciseCount = document.getElementById("exercise-count")
const socialCount = document.getElementById("social-count")
const selfcareCount = document.getElementById("selfcare-count")

const workPrev = document.getElementById("work-previous")
const playPrev = document.getElementById("play-previous")
const studyPrev = document.getElementById("study-previous")
const exercisePrev = document.getElementById("exercise-previous")
const socialPrev = document.getElementById("social-previous")
const selfCarePrev = document.getElementById("selfcare-previous")

function dailyOption() {

    workCount.innerHTML = 5;
    playCount.innerHTML = 1;
    studyCount.innerHTML = 0;
    exerciseCount.innerHTML = 1;
    socialCount.innerHTML = 1;
    selfcareCount.innerHTML = 0;

    // timeSpan.innerHTML = "Yesterday"

    workPrev.innerHTML = "Yesterday : " + 7;
    playPrev.innerHTML = "Yesterday : " + 2;
    studyPrev.innerHTML = "Yesterday : " + 1;
    exercisePrev.innerHTML = "Yesterday : " + 1;
    socialPrev.innerHTML = "Yesterday : " + 3;
    selfCarePrev.innerHTML = "Yesterday : " + 1;
}


function weeklyOption() {

    workCount.innerHTML = 32;
    playCount.innerHTML = 10;
    studyCount.innerHTML = 4;
    exerciseCount.innerHTML = 4;
    socialCount.innerHTML = 5;
    selfcareCount.innerHTML = 2;

    // timeSpan.innerHTML = "Last Week"

    workPrev.innerHTML = "Last Week : " + 36;
    playPrev.innerHTML = "Last Week : " + 8;
    studyPrev.innerHTML = "Last Week : " + 7;
    exercisePrev.innerHTML = "Last Week : " + 5;
    socialPrev.innerHTML = "Last Week : " + 10;
    selfCarePrev.innerHTML = "Last Week : " + 2;
}


function monthlyOption() {

    workCount.innerHTML = 103;
    playCount.innerHTML = 23;
    studyCount.innerHTML = 13;
    exerciseCount.innerHTML = 11;
    socialCount.innerHTML = 21;
    selfcareCount.innerHTML = 7;

    // timeSpan.innerHTML = "Last Month"

    workPrev.innerHTML = "Last Month : " + 128;
    playPrev.innerHTML = "Last Month : " + 29;
    studyPrev.innerHTML = "Last Month : " + 19;
    exercisePrev.innerHTML = "Last Month : " + 18;
    socialPrev.innerHTML = "Last Month : " + 23;
    selfCarePrev.innerHTML = "Last Month : " + 11;
}



function main() {

daily.addEventListener("click", function() {
    dailyOption();
    
    daily.style.color = "white";
    weekly.style.color = "hsl(236, 100%, 87%)"
    monthly.style.color = "hsl(236, 100%, 87%)"
})

weekly.addEventListener("click", function() {
    weeklyOption();
    weekly.style.color = "white";
    daily.style.color = "hsl(236, 100%, 87%)"
    monthly.style.color = "hsl(236, 100%, 87%)"
})

monthly.addEventListener("click", function() {
    monthlyOption();
    monthly.style.color = "white";
    weekly.style.color = "hsl(236, 100%, 87%)"
    daily.style.color = "hsl(236, 100%, 87%)"
})

}

main()