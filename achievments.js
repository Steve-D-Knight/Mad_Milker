var ACHIEVMENTS = '--Place Holder--';

function rarity_cycle(i){
    switch(i) {
        case 0:
            return "Rarity_Poor";
        case 1:
            return "Rarity_Common";
        case 2:
            return "Rarity_Uncommon";
        case 3:
            return "Rarity_Rare";
        case 4:
            return "Rarity_Epic";
        case 5:
            return "Rarity_Legendary";
      } 
};


function Cowchievments(i){
    if(Total_cows[i] >= 1){
        ACHIEVMENTS = ACHIEVMENTS + '<div class="Achievment_box_yes" id=' + rarity_cycle(0) + ' style="background-image: url(pics/cow/' + CowInfo[i].Cow_image + '); background-size: 90px;">1</div>';
    }
    else{
        ACHIEVMENTS = ACHIEVMENTS + '<div class="Achievment_box_no" id=' + rarity_cycle(0) + '>1</div>';
    };
    if(Total_cows[i] >= 100){
        ACHIEVMENTS = ACHIEVMENTS + '<div class="Achievment_box_yes" id=' + rarity_cycle(1) + ' style="background-image: url(pics/cow/' + CowInfo[i].Cow_image + '); background-size: 90px;">100</div>';
    }
    else{
        ACHIEVMENTS = ACHIEVMENTS + '<div class="Achievment_box_no" id=' + rarity_cycle(1) + '>100</div>';
    };
    if(Total_cows[i] >= 1000){
        ACHIEVMENTS = ACHIEVMENTS + '<div class="Achievment_box_yes" id=' + rarity_cycle(2) + ' style="background-image: url(pics/cow/' + CowInfo[i].Cow_image + '); background-size: 90px;">1k</div>';
    }
    else{
        ACHIEVMENTS = ACHIEVMENTS + '<div class="Achievment_box_no" id=' + rarity_cycle(2) + '>1K</div>';
    };
    if(Total_cows[i] >= 10000){
        ACHIEVMENTS = ACHIEVMENTS + '<div class="Achievment_box_yes" id=' + rarity_cycle(3) + ' style="background-image: url(pics/cow/' + CowInfo[i].Cow_image + '); background-size: 90px;">10k</div>';
    }
    else{
        ACHIEVMENTS = ACHIEVMENTS + '<div class="Achievment_box_no" id=' + rarity_cycle(3) + '>10K</div>';
    };
    if(Total_cows[i] >= 100000){
        ACHIEVMENTS = ACHIEVMENTS + '<div class="Achievment_box_yes" id=' + rarity_cycle(4) + ' style="background-image: url(pics/cow/' + CowInfo[i].Cow_image + '); background-size: 90px;">100k</div>';
    }
    else{
        ACHIEVMENTS = ACHIEVMENTS + '<div class="Achievment_box_no" id=' + rarity_cycle(4) + '>100K</div>';
    };
    if(Total_cows[i] >= 1000000){
        ACHIEVMENTS = ACHIEVMENTS + '<div class="Achievment_box_yes" id=' + rarity_cycle(5) + ' style="background-image: url(pics/cow/' + CowInfo[i].Cow_image + '); background-size: 90px;">1M</div>';
    }
    else{
        ACHIEVMENTS = ACHIEVMENTS + '<div class="Achievment_box_no" id=' + rarity_cycle(5) + '>1M</div>';
    };
};

window.setInterval(function achievments(){
    ACHIEVMENTS = '<div class="Achievment_container">';
        for(i = 0; i <= NumberofCOWS; i++){
            Cowchievments(i);
        };
    ACHIEVMENTS = ACHIEVMENTS + '</div>';
}, 250);