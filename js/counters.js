const counters = {

    'users1':1078,
    'visits1': 5388,
    'monthly1': 449
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

