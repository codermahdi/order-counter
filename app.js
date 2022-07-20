const orderForm = document.getElementById("orderForm");
const countdown = document.querySelector(".countdown");


//Submit Order Form
orderForm.onsubmit = (e) => {
    e.preventDefault();

    //Get Form Value
    const formData = new FormData(e.target);
    const {date, time} = Object.fromEntries(formData.entries());


    let count = setInterval( () => {
        //Get Timestamp
        let startTime = Date.now();
        let endTime = new Date(date + " " + time);
        let pendingTime = Math.floor(endTime.getTime() - startTime);

        let totalSec = Math.floor(pendingTime / 1000);
        let totalMin = Math.floor(totalSec / 60);
        let totalHour = Math.floor(totalMin / 60);
        let totaldays = Math.floor(totalHour / 24);

        let hour = totalHour - (totaldays * 24);
        let min = totalMin - (hour * 60) - (totaldays * 24 * 60);
        let sec = totalSec - (hour * 60 * 60) - (totaldays * 24 * 60 * 60) - (min * 60);

        if(totalSec == 0){
            clearInterval(count);
        }

        countdown.innerHTML = `<h3 class="text-center">${totaldays} Days : ${hour} Hour : ${min} Munites : ${sec} Seconds</h3>`;

    },1000);
    
    


}