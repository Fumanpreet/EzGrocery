// change slider poster function (AUTOMATICALLY)
let slider_right_button = document.getElementById("slider-right-button");

changeSliderPoster = () => {
    slider_right_button.click();
}

setInterval(changeSliderPoster, 5000);


// change the best deals of the day (MANUALLY)
let best_deals_length = 3;
let current_best_deals_displayNo = 0;
let all_Best_Deals_Poster = document.querySelectorAll('.best-deal-poster');

// Left best deals button
let best_deal_left_swipe = document.getElementById("best-deal-left-button");

best_deal_left_swipe.addEventListener("click", function () {

    all_Best_Deals_Poster[current_best_deals_displayNo].className = "best-deal-poster disappear";
    current_best_deals_displayNo = (current_best_deals_displayNo - 1) % best_deals_length;

    if (current_best_deals_displayNo < 0) {
        current_best_deals_displayNo = best_deals_length + current_best_deals_displayNo;
    }
    console.log(current_best_deals_displayNo);
    all_Best_Deals_Poster[current_best_deals_displayNo].className = "best-deal-poster";

});

// Right best deals button
let best_deal_right_swipe = document.getElementById("best-deal-right-button");

best_deal_right_swipe.addEventListener("click", function () {

    all_Best_Deals_Poster[current_best_deals_displayNo].className = "best-deal-poster disappear";
    current_best_deals_displayNo = (current_best_deals_displayNo + 1) % best_deals_length;
    all_Best_Deals_Poster[current_best_deals_displayNo].className = "best-deal-poster";

});


// change the best deals of the day (AUTOMATICALLY)
changeBestDealPoster = () => {
    best_deal_right_swipe.click();
}


setInterval(changeBestDealPoster, 4000);


// scroll the arrival item 
let arrivalWindows = document.querySelectorAll(".arrival-items-body");

let scrollArrival = () => {
    arrivalWindows.forEach(arrivalWindow => {
        let scrollAmount = 155;
        let maxScrollLeft = arrivalWindow.scrollWidth - arrivalWindow.clientWidth;

        if (arrivalWindow.scrollLeft + scrollAmount >= maxScrollLeft) {
            // Scroll to the start
            arrivalWindow.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        } else {
            // Scroll by the specified amount
            arrivalWindow.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    });
}

setInterval(scrollArrival, 4000);


// scroll the stores 
let storeWindow = document.querySelector(".cards");

let scrollStore = () => {
    let scrollAmount = 172.5;
    let maxScrollLeft = storeWindow.scrollWidth - storeWindow.clientWidth;

    if (storeWindow.scrollLeft + scrollAmount >= maxScrollLeft) {
        // Scroll to the start
        storeWindow.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    } else {
        // Scroll by the specified amount
        storeWindow.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

setInterval(scrollStore, 5000);