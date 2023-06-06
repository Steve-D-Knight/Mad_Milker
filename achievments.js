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
    for(j=0;j<=5;j++){ // x number of cows
        var cheivenumber = [1, 100, 1000, 10000, 100000, 1000000];
        var cheivtitle = ['1', '100', '1k', '10k', '100k', '1M']
        if(Total_cows[i] >= cheivenumber[j]){
            ACHIEVMENTS = ACHIEVMENTS +  '<div class="Achievment_box_yes" id=' + rarity_cycle(j) + ' style="background-image: url(pics/cow/cow/' + CowInfo[i].Achievment_image_Xcow + '); background-size: 90px;">' + cheivtitle[j] + '<br />Cows</div>';
        }
        else{
            ACHIEVMENTS = ACHIEVMENTS + '<div class="Achievment_box_no" id=' + rarity_cycle(j) + '>' + cheivtitle[j] + '<br />Cows</div>';
        };
    };
    for(j=0;j<=5;j++){ // x number of cows
        var cheivenumber = [1, 100, 1000, 10000, 100000, 1000000];
        var cheivtitle = ['1', '100', '1k', '10k', '100k', '1M']
        if( Total_bulls[i] >= cheivenumber[j]){
            ACHIEVMENTS = ACHIEVMENTS +  '<div class="Achievment_box_yes" id=' + rarity_cycle(j) + ' style="background-image: url(pics/cow/bull/' + CowInfo[i].Achievment_image_Xbull + '); background-size: 90px;">' + cheivtitle[j] + '<br />Bulls</div>';
        }
        else{
            ACHIEVMENTS = ACHIEVMENTS + '<div class="Achievment_box_no" id=' + rarity_cycle(j) + '>' + cheivtitle[j] + '<br />Bulls</div>';
        };
    };
};

window.setInterval(function achievments(){
    ACHIEVMENTS = '<div class="Achievment_container">';
        for(i = 0; i <= NumberofCOWS; i++){
            Cowchievments(i);
        };
    ACHIEVMENTS = ACHIEVMENTS + '</div>';
}, 250);