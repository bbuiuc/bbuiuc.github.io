const counters = {

    'users1':1093,
    'visits1': 5417,
    'monthly1': 451
}

function changeCounterValue(counterID, val) {
    document.getElementById(counterID).innerText = val.toLocaleString();
}

function startCountRoll(counterID) {
    const val = counters[counterID];
    let i = 0;
    let counter = setInterval(() => {
        if(i > val) {
            clearInterval(counter);
        } else {
            changeCounterValue(counterID, i);
            i++;
        }
    });
    
}

