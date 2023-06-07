var initialisation = 0;

var HTML = '<div id="HTML">Loading</div>';
var HEADER = '<div><button>test</button></div>'
var LEFTSTUFF = '<div>LEFTSTUFF test</div>'
var MAINSTUFF = '<div>MAINSTUFF test</div>'
var RIGHTSTUFF = '<div>RIGHTSTUFF test</div>'

window.setInterval(function HTML_REFRESH(){
    LEFTSTUFF = '<div id="LEFTSTUFF"><div id="LEFTSTUFF_inner">'+ MILK + MILKMAID + SAVING + '</div></div>';

    HEADER = ''; 
    if(Visible_page == 0){
        HEADER = HEADER + '<button onmousedown="change_tab_button(1)" class="button_grey" id="HTML_cell">Statistics</button>';
        HEADER = HEADER + '<button onmousedown="change_tab_button(2)" class="button_grey" id="HTML_cell">Achievments</button>';
        MAINSTUFF = '<div id="MAINSTUFF"><div id="MAINSTUFF_inner">';
        for(sloop = NumberofCOWS; sloop >= 0; sloop--){
            MAINSTUFF = MAINSTUFF + '<div id="MAINSTUFF_cell">' + COWS_DATA[sloop] + '</div>';
            MAINSTUFF = MAINSTUFF + '<div id="MAINSTUFF_cell">' + SPECIALISTS_DATA[sloop] + '</div>';
            MAINSTUFF = MAINSTUFF + '<div id="MAINSTUFF_cell">' + SPECIALIST_TRAINING_DATA[sloop] + '</div>';
            MAINSTUFF = MAINSTUFF + '<div id="MAINSTUFF_cell">' + BULLS_DATA[sloop] + '</div>';
        };
        MAINSTUFF = MAINSTUFF + '</div></div>'
        RIGHTSTUFF = UPGRADES;
    }
    else if(Visible_page == 1){
        HEADER = HEADER + '<button onmousedown="change_tab_button(0)" class="button_grey" id="HTML_cell">Return to game</button>';
        HEADER = HEADER + '<button onmousedown="change_tab_button(2)" class="button_grey" id="HTML_cell">Achievments</button>';
        MAINSTUFF = STATS;
        RIGHTSTUFF = '';
    }
    else if(Visible_page == 2){
        HEADER = HEADER + '<button onmousedown="change_tab_button(1)" class="button_grey" id="HTML_cell">Statistics</button>';
        HEADER = HEADER + '<button onmousedown="change_tab_button(0)" class="button_grey" id="HTML_cell">Return to game</button>';
        MAINSTUFF = ACHIEVMENTS;
        RIGHTSTUFF = '';
    };	

    HTML = '<div id="HTML">';
    HTML = HTML +'<div id="HTML_header">' + HEADER + '</div>';
    HTML = HTML + '<div id="HTML_cell">' + LEFTSTUFF + '</div>';
    HTML = HTML + '<div id="HTML_cell">' + MAINSTUFF + '</div>';
    HTML = HTML + '<div id="HTML_cell">' + RIGHTSTUFF + '</div>' + '</div>';
    document.getElementById('HTML').innerHTML = HTML;
}, 15);

// ---------------------------------------------------------------------------
//----------------------------------------------------------------------------
// ---------------------------------------------------------------------------
//-----------------------------Cow HTML---------------------------------------
// ---------------------------------------------------------------------------
//----------------------------------------------------------------------------

var COW_COST_X10 = [];
var COW_COST_X100 = [];
var COW_COST_X1000 = [];
function COWS_(A){	
    COWS_DATA[A] = '';
	COSTS(A);
	COW_COST_X10[A] = Times_X_calculator(boughtcows[A], basecowcost[A], 1.1, 10);
	COW_COST_X100[A] = Times_X_calculator(boughtcows[A], basecowcost[A], 1.1, 100);
	COW_COST_X1000[A] = Times_X_calculator(boughtcows[A], basecowcost[A], 1.1, 1000);
	if(cowsenabled[A] == 1){
		COWS_DATA[A] = COWS_DATA[A] + '<div id="MAINSTUFF_Buttons_container">';
        COWS_DATA[A] = COWS_DATA[A] + '<button onmousedown="buycow(' + A + ")"; 
        COWS_DATA[A] = COWS_DATA[A] + '" id="'; 
        COWS_DATA[A] = COWS_DATA[A] + CowInfo[A].Rarity + '"'; 
        if (Milk >= cowcost[A]){
            COWS_DATA[A] = COWS_DATA[A] + 'class="button_background">';
        }
		else{
            COWS_DATA[A] = COWS_DATA[A] + 'class="button_background_grey">';
        };
        COWS_DATA[A] = COWS_DATA[A] + '<div class="left">' + CowInfo[A].Name + '<br /><div style="font-weight:bold;">'; 
        COWS_DATA[A] = COWS_DATA[A] + Arbitrary_addsuffix(cowcost[A]) + ' Milk</div> Cows: '; 
        COWS_DATA[A] = COWS_DATA[A] + Arbitrary_addsuffix(Total_cows[A]) + '<div> Unmilked Cows: '; 
        COWS_DATA[A] = COWS_DATA[A] + Arbitrary_addsuffix((Total_cows[A] - Specialists[A])); 
        COWS_DATA[A] = COWS_DATA[A] + '</div><br /></div><div class="right">' + SPRITE_animation(i); 
        COWS_DATA[A] = COWS_DATA[A] + '</div></button><div id="MAINSTUFF_Buttons_multi">';
		COWS_DATA[A] = COWS_DATA[A] + '<div class="tooltip"><button onmousedown="buycowx10(' + A + ')" ';
		if (Milk >= COW_COST_X10[A]){
			COWS_DATA[A] = COWS_DATA[A] + 'class="button_notgrey"';
		}
		else{
			COWS_DATA[A] = COWS_DATA[A] + 'class="button_grey"';
		};
		COWS_DATA[A] = COWS_DATA[A] + '>Buy 10<span class="tooltiptext">Buy 10 Cows for ';
        COWS_DATA[A] = COWS_DATA[A] + Arbitrary_addsuffix(COW_COST_X10[A]);
        COWS_DATA[A] = COWS_DATA[A] + '</span></button></div>';
		COWS_DATA[A] = COWS_DATA[A] + '<div class="tooltip"><button onmousedown="buycowx100(' + A + ')" ';
		if (Milk >= COW_COST_X100[A]){
			COWS_DATA[A] = COWS_DATA[A] + 'class="button_notgrey"';
		}
		else{
			COWS_DATA[A] = COWS_DATA[A] + 'class="button_grey"';
		};
		COWS_DATA[A] = COWS_DATA[A] + '>Buy 100<span class="tooltiptext">Buy 100 Cows for ';
        COWS_DATA[A] = COWS_DATA[A] + Arbitrary_addsuffix(COW_COST_X100[A]);
        COWS_DATA[A] = COWS_DATA[A] + '</span></button></div>';
		COWS_DATA[A] = COWS_DATA[A] + '<div class="tooltip"><button onmousedown="buycowx1000(' + A + ')" ';
		if (Milk >= COW_COST_X1000[A]){
			COWS_DATA[A] = COWS_DATA[A] + 'class="button_notgrey"';
		}
		else{
			COWS_DATA[A] = COWS_DATA[A] + 'class="button_grey"';
		};
		COWS_DATA[A] = COWS_DATA[A] + '>Buy 1000<span class="tooltiptext">Buy 1000 Cows for '; 
        COWS_DATA[A] = COWS_DATA[A] + Arbitrary_addsuffix(COW_COST_X1000[A]); 
        COWS_DATA[A] = COWS_DATA[A] + '</span></button></div></div></div>';
	}
	else{
		COWS_DATA[A] = '';
	};
};

// ---------------------------------------------------------------------------
//----------------------------------------------------------------------------
// ---------------------------------------------------------------------------
//-----------------------------Bull HTML--------------------------------------
// ---------------------------------------------------------------------------
//----------------------------------------------------------------------------

var BULL_COST_X10 = [];
var BULL_COST_X100 = [];
var BULL_COST_X1000 = [];
function BULLS_(B){	
	COSTS(B);
	BULL_COST_X10[B] = Times_X_calculator(boughtbulls[B], basebullcost[B], 1.1, 10);
	BULL_COST_X100[B] = Times_X_calculator(boughtbulls[B], basebullcost[B], 1.1, 100);
	BULL_COST_X1000[B] = Times_X_calculator(boughtbulls[B], basebullcost[B], 1.1, 1000);
    BULLS_DATA[B] = '';
	if(cowsenabled[B] == 1){
		BULLS_DATA[B] = BULLS_DATA[B] + '<div id="MAINSTUFF_Buttons_container_bulls">';
        BULLS_DATA[B] = BULLS_DATA[B] + '   <div class="tooltip">';
        BULLS_DATA[B] = BULLS_DATA[B] +         '<button onmousedown="buybull(' + B + ")" + '" ';
		if (Milk >= bullcost[B]){
			BULLS_DATA[B] = BULLS_DATA[B] +     'class="button_background"';
		}
		else{
			BULLS_DATA[B] = BULLS_DATA[B] +     'class="button_background_grey"';
		};
		BULLS_DATA[B] = BULLS_DATA[B] +         'id="' + CowInfo[B].Rarity + '" >';
        BULLS_DATA[B] = BULLS_DATA[B] +         '<div class="left">';
        BULLS_DATA[B] = BULLS_DATA[B] +             '<br />Buy ' + CowInfo[B].Bull_Name + '<br />';
        BULLS_DATA[B] = BULLS_DATA[B] +             '<div style="font-weight:bold;">';
        BULLS_DATA[B] = BULLS_DATA[B] +                 Arbitrary_addsuffix(bullcost[B]) + ' Milk';
        BULLS_DATA[B] = BULLS_DATA[B] +             '</div>'; /*</div style="font-weight:bold;">*/
        BULLS_DATA[B] = BULLS_DATA[B] +             'Bulls: ' + Arbitrary_addsuffix(Total_bulls[B]) + '<br /><br />';
        BULLS_DATA[B] = BULLS_DATA[B] +         '</div>';
        BULLS_DATA[B] = BULLS_DATA[B] +         '<div class="right">';
        BULLS_DATA[B] = BULLS_DATA[B] +             '<img src="pics/cow/bull/' + CowInfo[B].Bull_image +'" id="imagesize">';
        BULLS_DATA[B] = BULLS_DATA[B] +         '</div>';
        BULLS_DATA[B] = BULLS_DATA[B] +         '<span class="tooltiptext">Bulls create more cows every 10 seconds (requires at least 1 cow and 1 bull)</span>';
        BULLS_DATA[B] = BULLS_DATA[B] +         '</button>';
        BULLS_DATA[B] = BULLS_DATA[B] +     '</div>';
		BULLS_DATA[B] = BULLS_DATA[B] +     '<div id="MAINSTUFF_Buttons_multi">';
		BULLS_DATA[B] = BULLS_DATA[B] +         '<div class="tooltip">';
        BULLS_DATA[B] = BULLS_DATA[B] +             '<button onmousedown="buybullx10(' + B + ')' + '" ';
		if (Milk >= BULL_COST_X10[B]){
			BULLS_DATA[B] = BULLS_DATA[B] +         'class="button_notgrey" ';
		}
		else{
			BULLS_DATA[B] = BULLS_DATA[B] +         'class="button_grey" ';
		};
		BULLS_DATA[B] = BULLS_DATA[B] +             '>Buy 10<span class="tooltiptext">Buy 10 Bulls for ' + Arbitrary_addsuffix(BULL_COST_X10[B]) + '</span>';
        BULLS_DATA[B] = BULLS_DATA[B] +             '</button>';
        BULLS_DATA[B] = BULLS_DATA[B] +         '</div>';
		BULLS_DATA[B] = BULLS_DATA[B] +     '<div class="tooltip">';
        BULLS_DATA[B] = BULLS_DATA[B] +         '<button onmousedown="buybullx100(' + B + ')' + '" ';
		if (Milk >= BULL_COST_X100[B]){
			BULLS_DATA[B] = BULLS_DATA[B] +     'class="button_notgrey"';
		}
		else{
			BULLS_DATA[B] = BULLS_DATA[B] +     'class="button_grey"';
		};
		BULLS_DATA[B] = BULLS_DATA[B] +         '>Buy 100<span class="tooltiptext">Buy 100 Bulls for ' + Arbitrary_addsuffix(BULL_COST_X100[B]) + '</span>';
        BULLS_DATA[B] = BULLS_DATA[B] +         '</button>';
        BULLS_DATA[B] = BULLS_DATA[B] +         '</div>';
		BULLS_DATA[B] = BULLS_DATA[B] +         '<div class="tooltip">';
        BULLS_DATA[B] = BULLS_DATA[B] +             '<button onmousedown="buybullx100(' + B + ')' + '" ';
		if (Milk >= BULL_COST_X1000[B]){
			BULLS_DATA[B] = BULLS_DATA[B] +         'class="button_notgrey"';
		}
		else{
			BULLS_DATA[B] = BULLS_DATA[B] +         'class="button_grey"';
		};
		BULLS_DATA[B] = BULLS_DATA[B] +             '>Buy 1000<span class="tooltiptext">Buy 1000 Bulls for ' + Arbitrary_addsuffix(BULL_COST_X1000[B]) ;
		BULLS_DATA[B] = BULLS_DATA[B] +             '</span></button>';
        BULLS_DATA[B] = BULLS_DATA[B] +         '</div>';
        BULLS_DATA[B] = BULLS_DATA[B] +     '</div>';
        BULLS_DATA[B] = BULLS_DATA[B] + '</div>';
	}
	else{
		BULLS_DATA[B] = '';
	};
};

// ---------------------------------------------------------------------------
//----------------------------------------------------------------------------
// ---------------------------------------------------------------------------
//------------------------------Specialist HTML-------------------------------
// ---------------------------------------------------------------------------
//----------------------------------------------------------------------------

function SPECIALISTS_(G){
	COSTS(G);
	SPEC_IMAGE(G);
    SPECIALISTS_DATA[G] = '';
	if(cowsenabled[G] == 1){
        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + '<div id="MAINSTUFF_Buttons_container_bulls">'
        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + '<div >'
        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + '<div class="tooltip">'
		if(Milk >= Specialists_Cost[G]){
            SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + '<button onmousedown="buySpecialist(' + G + ')" class="button_notgrey">'
		}
		else{
			SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + '<button onmousedown="buySpecialist(' + G + ')" class="button_grey">'
		};
        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + '<div class="left">Buy Specialist<br />'
        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + '<div style="font-weight:bold;">' 
        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + Arbitrary_addsuffix(Specialists_Cost[G]) + ' Milk</div> Specialists: <br />' 
        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + Arbitrary_addsuffix(Specialists[G]) 
        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + '<div>Power: ' 
        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + Arbitrary_addsuffix(Spec_power_value(G)) 
        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + '</div></div><div class="right">' 
        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + spec_image[G] 
        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + '</div><span class="tooltiptext">Specialists Milk 1 cow every 0.5 seconds. They take priorety over milk maids.<br />' 
        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + Spec_names[G] 
        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + ' produces ' 
        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + Arbitrary_addsuffix(Spec_Milk_Value(G)) 
        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + ' Milk per tick (' 
        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + Arbitrary_addsuffix(Spec_Milk_Value(G)*2) 
        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + ' MpS)</span></button></div></div><div id="MAINSTUFF_Buttons_multi">';
        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + '<div class="tooltip"><button onmousedown="buySpecialistxTEN(' + G 
		if(Milk >= (Specialists_Cost[G] * 10)){
            SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + ')" class="button_notgrey">Buy 10<span class="tooltiptext">Buy 10 Specialists for ' 
		}
		else{
            SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + ')" class="button_grey" >Buy 10<span class="tooltiptext">Buy 10 Specialists for ' 
		};
        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + Arbitrary_addsuffix((10 * Specialists_Cost[G])) 
        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + ' Milk</span></button></div>';

        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + '<div class="tooltip"><button onmousedown="buySpecialistx100(' + G 
		if(Milk >= (Specialists_Cost[G] * 100)){
            SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + ')" class="button_notgrey">Buy 100<span class="tooltiptext">Buy 100 Specialists for ' 
		}
		else{
            SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + ')" class="button_grey">Buy 100<span class="tooltiptext">Buy 100 Specialists for ' 
		};
        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + Arbitrary_addsuffix((100 * Specialists_Cost[G])) 
        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + ' Milk</span></button></div>';


        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + '<div style="margin-bottom:2px;" class="tooltip"><button onmousedown="buySpecialistxALL(' + G 
		if(Milk >= ((Total_cows[G] - Specialists[G]) * Specialists_Cost[G])){

            SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + ')" class="button_notgrey">Buy Max<span class="tooltiptext">Buy ' 
		}
		else{
            SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + ')" class="button_grey">Buy Max<span class="tooltiptext">Buy ' 
		};
        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + Arbitrary_addsuffix((Total_cows[G] - Specialists[G])) 
        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + ' Specialists for ' 
        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + Arbitrary_addsuffix(((Total_cows[G] - Specialists[G]) * Specialists_Cost[G])) 
        SPECIALISTS_DATA[G] = SPECIALISTS_DATA[G] + ' Milk</span></button></div></div></div>';
	}
	else{
		SPECIALISTS_DATA[G] = '';
	};

	
};
