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
var SCIENCE_HTML = EXCAVATE_();
var excavation = 0;
var excavation_max = 100;
var excavated = 0;
var Science_load = 0;
var Science_cost = 100;

function Excavate_click(){ // ----button function---- !! don't delete !!
	excavation = excavation + 1;
	Total_clicks = Total_clicks + 1;
    if(excavation >= excavation_max){
        excavation = 0;
        excavated = excavated + 1;
    };
    SCIENCE_HTML = EXCAVATE_();
};

window.setInterval(function SCIENCE_points(){
    Science_load = Science_load + excavated;
    if(Science_load >= Science_cost){
        Science_load = Science_load - Science_cost;
        Science = Science + 1;
    };
}, 250);

function EXCAVATE_(){
    var EXCAVATE_HTML = '';
    EXCAVATE_HTML = EXCAVATE_HTML +'<div id="science_Buttons_container">'
    EXCAVATE_HTML = EXCAVATE_HTML +     '<button onmousedown="Excavate_click()" class="button_background" id="science_button">'
    EXCAVATE_HTML = EXCAVATE_HTML +         '<div class="left">'
    EXCAVATE_HTML = EXCAVATE_HTML +             'Dig'
    EXCAVATE_HTML = EXCAVATE_HTML +         '</div>'
    EXCAVATE_HTML = EXCAVATE_HTML +         '<div class="right">'
    EXCAVATE_HTML = EXCAVATE_HTML +             '<img src="pics/dirt_pile.png" id="imagesize">'
    EXCAVATE_HTML = EXCAVATE_HTML +         '</div>'
    EXCAVATE_HTML = EXCAVATE_HTML +     '</button>'
    EXCAVATE_HTML = EXCAVATE_HTML + '<div style="background: rgba(0, 0, 0, 0.5); width: 100px; border: solid 2px; border-radius: 4px;">'
    EXCAVATE_HTML = EXCAVATE_HTML + '<div style="background: rgba(0, 255, 0, 0.5); width: ' + Math.floor((excavation/excavation_max)*100) + 'px; height: 67px; padding: 2px;">'
    EXCAVATE_HTML = EXCAVATE_HTML + excavation + '/' + excavation_max + '</div></div>'
    EXCAVATE_HTML = EXCAVATE_HTML + '</div>';
    if(excavated > 0){
        EXCAVATE_HTML = EXCAVATE_HTML + '<div id="science_Buttons_container">';
        EXCAVATE_HTML = EXCAVATE_HTML +     '<button class="button_background" id="science_button">'
        EXCAVATE_HTML = EXCAVATE_HTML +         '<div class="left">'
        EXCAVATE_HTML = EXCAVATE_HTML +             'Scientists: '+ excavated +'<br />Science: ' + Science;
        EXCAVATE_HTML = EXCAVATE_HTML +         '</div>'
        EXCAVATE_HTML = EXCAVATE_HTML +         '<div class="right">'
        EXCAVATE_HTML = EXCAVATE_HTML +             '<img src="pics/mk3_scientist.png" id="imagesize">'
        EXCAVATE_HTML = EXCAVATE_HTML +         '</div>'
        EXCAVATE_HTML = EXCAVATE_HTML + '</button>';
        EXCAVATE_HTML = EXCAVATE_HTML + '<div style="background: rgba(0, 0, 0, 0.5); width: 100px; border: solid 2px; border-radius: 4px;">'
        EXCAVATE_HTML = EXCAVATE_HTML + '<div style="background: rgba(0, 255, 0, 0.5); width: ' + Math.floor((Science_load/Science_cost)*100) + 'px; height: 67px; padding: 2px;">'
        EXCAVATE_HTML = EXCAVATE_HTML + Science_load + '/' + Science_cost + '</div>'
    }
    else{
        EXCAVATE_HTML = EXCAVATE_HTML + '';
    };
    return EXCAVATE_HTML;
};
