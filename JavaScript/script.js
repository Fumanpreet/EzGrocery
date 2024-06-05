// change slider poster function (AUTOMATICALLY)
let slider_right_button = document.getElementById("slider-right-button");

changeSliderPoster = () => {
    slider_right_button.click();
}

setInterval(changeSliderPoster, 4000);


// change the best deals of the day (MANUALLY)
let best_deals_length = 3;
let current_best_deals_displayNo = 0;
let all_Best_Deals_Poster = document.querySelectorAll('.best-deal-poster');

// Left best deals button
let best_deal_left_swipe = document.getElementById("best-deal-left-button");

best_deal_left_swipe.addEventListener("click", function () {

    all_Best_Deals_Poster[current_best_deals_displayNo].className = "best-deal-poster disappear";
    current_best_deals_displayNo = (current_best_deals_displayNo - 1) % best_deals_length;    

    if (current_best_deals_displayNo < 0){
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