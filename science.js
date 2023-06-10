// plans
// I think having a science tab set up like a story section

// this section will have a button that will unlock new things as its pressed

// --- dig in the mud ---- rummage through something???? ---- 
    // the 1st science option i will have as a button that gives you the option to dig
    // this will give you maybe mud as a currency, or maybe every x diggs you get something?
    // regardless of that after a little while we can dig up a scientist? maybe?
    // this can be a seporate mini game that allows for more scientists
    // we can afford for this section to be played super slowely as it goes along side the actual game
    
    //---- excavation ----
        // just like the main game
        // get some sort of digging tool
        // use a specialist to automate the tool
        // get mud from the tool
        // spend mud getting scientists?
            // maybe filter the mud for sciency things? fossils? researchable stuff?????
    
    // rather than unlock a currency from digging we unlock a percentage of a scientist?????

    // --- Spend milk getting the stuff for digging
    // --- the stuff excavates scientists


    // i have already made a bulldozer so its probably a shout to make more exavation equiptment that allows for faster digging/automated digging

// ---- Scientist ----
    // with the newley uncovered scientist we can start earning science
    // scientists earn science automatically
    // scientists unlock upgrades with science
    // maybe find the new cows?

    // ----- CURRENCY: science [or some kind of science cow pun]
    //          science unlocks stuff for the rest of the game, both digging stuff and milking stuff.

var Science = 0;
var SCIENCE_HTML = '';
var excavation = 0;
var excavation_max = 100;
var excavated = 0;
var Science_load = 0;
var Science_cost = 100;
var excavate_power = 1;
var toools_price = [];

for(i=0; i <= Digging_tools_info.length; i++){
    toools_price[i] = Math.ceil(1000 * Math.pow(20, i));
};

// cow unlock 1 should cost around 10 science at the current rates
// after playing (08/06/2023) it took a little under 3 minutes to unlock the 1st cow
// at the current rate 1 scientist would genorate 7 science in 3 mins
// therefore with the expectation that the player would likely grind out several scientists
// 10 science seems like a good place for cow 1.

// excavation_max should slightly increase with each excavated scientist

function Excavate_click(){ // ----button function---- !! don't delete !!
	excavation = excavation + excavate_power;
	Total_clicks = Total_clicks + 1;
    if(excavation >= excavation_max){
        excavation = excavation - excavation_max;
        excavated = excavated + 1;
    };
    SCIENCE_HTML = EXCAVATE_();
};

window.setInterval(function SCIENCE_points(){
    // if you get more than 100 science per tick i will need to make it give you more than 1 science per tick
    Science_load = Science_load + excavated;
    if(Science_load >= Science_cost){
        if((Science_load/Science_cost) >= 1){
            Science = Science + Math.floor(Science_load/Science_cost);
            var x = Math.floor(Science_load/Science_cost)
            Science_load = Science_load - (x * Science_cost);
        }
        else{
            Science_load = Science_load - Science_cost;
            Science = Science + 1;
        }
    };
}, 250);

function Unlock_cow_button(i){
    if(Science >= Cow_science_cost[i]){
        Science = Science - Cow_science_cost[i];
        cowsenabled[i] = 1;
    };
};

function Next_cow(){
    var next_cow_output;
    for(i = 0; i <= NumberofCOWS; i++) {
        if(cowsenabled[i] < 1){
            next_cow_output = i;
            break;
        }
        else{
            next_cow_output = NumberofCOWS;
        };
    };
    return next_cow_output;
};

var next_tool = 0;
function Buy_next_tool_button(){
    if(Milk >= toools_price[next_tool]){
        excavate_power = excavate_power * 2;
        next_tool++;
    };
};


function EXCAVATE_(){
    var next_cow = Next_cow();
    var EXCAVATE_HTML = '';
    if(excavated > 0){
        EXCAVATE_HTML = EXCAVATE_HTML + '<div id="science_Buttons_container">';
        EXCAVATE_HTML = EXCAVATE_HTML +     '<button class="button_background" id="science_button">';
        EXCAVATE_HTML = EXCAVATE_HTML +         '<div class="left">';
        EXCAVATE_HTML = EXCAVATE_HTML +             'Scientists: '+ Arbitrary_addsuffix(excavated) +'<br />Science: ' + Arbitrary_addsuffix(Science);
        EXCAVATE_HTML = EXCAVATE_HTML +         '</div>';
        EXCAVATE_HTML = EXCAVATE_HTML +         '<div class="right">';
        EXCAVATE_HTML = EXCAVATE_HTML +             '<img src="pics/mk3_scientist.png" id="imagesize">';
        EXCAVATE_HTML = EXCAVATE_HTML +         '</div>';
        EXCAVATE_HTML = EXCAVATE_HTML + '</button>';
        EXCAVATE_HTML = EXCAVATE_HTML + '<div style="background: rgba(0, 0, 0, 0.5); width: 100px; border: solid 2px; border-radius: 4px;">';
        EXCAVATE_HTML = EXCAVATE_HTML + '<div style="background: rgba(0, 255, 0, 0.5); width: ' + Math.floor((Science_load/Science_cost)*100) + 'px; height: 67px; padding: 2px;">';
        EXCAVATE_HTML = EXCAVATE_HTML + Science_load + '/' + Science_cost + '</div></div>';
        EXCAVATE_HTML = EXCAVATE_HTML +     '<button onmousedown="Unlock_cow_button(' + next_cow + ')" id="science_button"' ;
        if(Science >= Cow_science_cost[next_cow]){
            EXCAVATE_HTML = EXCAVATE_HTML + 'class="button_background"';
        }
        else{
            EXCAVATE_HTML = EXCAVATE_HTML + 'class="button_background_grey"';
        }
        EXCAVATE_HTML = EXCAVATE_HTML +         '><div class="left">';
        EXCAVATE_HTML = EXCAVATE_HTML +             'unlock new cow<br />' + Cow_science_cost[next_cow] + ' Science<br />';
        EXCAVATE_HTML = EXCAVATE_HTML +         '</div>';
        EXCAVATE_HTML = EXCAVATE_HTML +         '<div class="right">';
        EXCAVATE_HTML = EXCAVATE_HTML +             '<img src="pics/cow/cow/silhouette_cow.png" id="imagesize">';
        EXCAVATE_HTML = EXCAVATE_HTML +         '</div>';
        EXCAVATE_HTML = EXCAVATE_HTML + '</button></div>';
    }
    else{
        EXCAVATE_HTML = EXCAVATE_HTML + '';
    };
    EXCAVATE_HTML = EXCAVATE_HTML +'<div id="science_Buttons_container">';
    EXCAVATE_HTML = EXCAVATE_HTML +     '<button onmousedown="Excavate_click()" class="button_background" id="science_button">';
    EXCAVATE_HTML = EXCAVATE_HTML +         '<div class="left">';
    EXCAVATE_HTML = EXCAVATE_HTML +             'Excavate<br />Digging Power: ' + excavate_power;
    EXCAVATE_HTML = EXCAVATE_HTML +         '</div>';
    EXCAVATE_HTML = EXCAVATE_HTML +         '<div class="right">';
    EXCAVATE_HTML = EXCAVATE_HTML +             '<img src="pics/dirt_pile.png" id="imagesize">';
    EXCAVATE_HTML = EXCAVATE_HTML +         '</div>';
    EXCAVATE_HTML = EXCAVATE_HTML +     '</button>';
    EXCAVATE_HTML = EXCAVATE_HTML + '<div style="background: rgba(0, 0, 0, 0.5); width: 100px; border: solid 2px; border-radius: 4px;">';
    EXCAVATE_HTML = EXCAVATE_HTML + '<div style="background: rgba(0, 255, 0, 0.5); width: ' + Math.floor((excavation/excavation_max)*100) + 'px; height: 67px; padding: 2px;">';
    EXCAVATE_HTML = EXCAVATE_HTML + excavation + '/' + excavation_max + '</div></div>';
    if(next_tool >= Digging_tools_info.length){
        EXCAVATE_HTML = EXCAVATE_HTML + '';
    }
    else{
        EXCAVATE_HTML = EXCAVATE_HTML + '<button onmousedown="Buy_next_tool_button()"';
        if(Milk >= toools_price[next_tool]){
            EXCAVATE_HTML = EXCAVATE_HTML + 'class="button_notgrey"';
        }
        else{
            EXCAVATE_HTML = EXCAVATE_HTML + 'class="button_grey"';
        }
        EXCAVATE_HTML = EXCAVATE_HTML + '>';
        EXCAVATE_HTML = EXCAVATE_HTML + '<div class="left">Buy ' + Digging_tools_info[next_tool].Name + '<br />' ;
        EXCAVATE_HTML = EXCAVATE_HTML + Arbitrary_addsuffix(toools_price[next_tool]) + ' Milk</div>';
        EXCAVATE_HTML = EXCAVATE_HTML + '<div class="right">' + Digging_tools_info[next_tool].image + '</div>';
        EXCAVATE_HTML = EXCAVATE_HTML + '</button>'
    };
    EXCAVATE_HTML = EXCAVATE_HTML + '</div></div>'

    return EXCAVATE_HTML;
};






