var Milk = 0; // NEEDS to be saved (is saved)
var ClickPower = 1; // don't save calculation
var COWS; // don't save HTML genoration
var BULLS; // don't save HTML genoration
var COWS_DATA = []; // don't save HTML genoration
var BULLS_DATA = []; // don't save HTML genoration
var MILKMAID; // don't save HTML genoration
var MILKMAID_DATA = []; // don't save HTML genoration
var MilkMaids = 0; // NEEDS to be saved (is saved)																				
var Milkmaidcost = 10; // don't save (calculation)
var BaseMilkmaidcost = 10; // don't save (won't change)
var cows = 			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // NEEDS to be saved (is saved)
var cowsenabled = 	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];	// NEEDS to be saved (is saved)
var bulls = 		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // NEEDS to be saved (is saved)
var cowcost = 		[55, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800, 3900, 4000]; // don't save (calculation)
var basecowcost = 	[55, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800, 3900, 4000]; // don't save (won't change)
var boughtcows = 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];	// NEEDS to be saved (is saved)
var bullcost = [500, 2e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13, 1e14, 1e15, 1e16, 1e17, 1e18, 1e19, 1e20, 1e21, 1e22, 1e24, 1e25, 1e26, 1e27, 1e28, 1e29, 1e30, 1e31, 1e32, 1e33, 1e34, 1e35, 1e36, 1e37, 1e38, 1e39, 1e40]; // don't save (calculation)
var basebullcost = [500, 2e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13, 1e14, 1e15, 1e16, 1e17, 1e18, 1e19, 1e20, 1e21, 1e22, 1e24, 1e25, 1e26, 1e27, 1e28, 1e29, 1e30, 1e31, 1e32, 1e33, 1e34, 1e35, 1e36, 1e37, 1e38, 1e39, 1e40]; // don't save (won't change)
var boughtbulls = 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];	// NEEDS to be saved (is saved)
var Total_cows = 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // don't save (calculation)
var Total_ALL_cows = 1;																									// don't save (calculation)			
var Total_bulls = 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // don't save (calculation)
var Total_ALL_bulls = 0; // don't save (calculation)
var SPECIALISTS; 					// don't save HTML genoration
var SPECIALISTS_DATA = [];			// don't save HTML genoration
var SPECIALISTS_BUYMULT;			// don't save HTML genoration																			
var SPECIALISTS_DATA_x100 = [];		// don't save HTML genoration
var SPECIALISTS_DATA_xTEN = [];		// don't save HTML genoration
var SPECIALISTS_DATA_xALL = [];		// don't save HTML genoration
var SPECIALIST_TRAINING;			// don't save HTML genoration
var SPECIALIST_TRAINING_DATA = [];	// don't save HTML genoration
var ALLSPEC_price = 0;																			
var Specialists = 			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // NEEDS to be saved (is saved)
var Specialists_Cost = 		[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800, 3900, 4000]; // don't save (calculation)
var Specialists_Cost_Base = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800, 3900, 4000]; // don't save (won't change)
var Specialist_Level = []; // NEEDS to be saved (is saved)
var Specialist_training_Unlock = 1; // NEEDS to be saved (is saved)
var Total_Specialists = 0; // don't save (calculation)
var Spec_Power = [	1, 5, Math.pow(5, 2), Math.pow(5, 3), Math.pow(5, 4), Math.pow(5, 5), Math.pow(5, 6), Math.pow(5, 7), Math.pow(5, 8), Math.pow(5, 9), Math.pow(5, 10), Math.pow(5, 11), Math.pow(5, 12), Math.pow(5, 13), Math.pow(5, 14), Math.pow(5, 15), Math.pow(5, 16), Math.pow(5, 17), Math.pow(5, 18), Math.pow(5, 19), Math.pow(5, 20), Math.pow(5, 21), Math.pow(5, 22), Math.pow(5, 23), Math.pow(5, 24), Math.pow(5, 25), Math.pow(5, 26), Math.pow(5, 27), Math.pow(5, 28), Math.pow(5, 29), Math.pow(5, 30), Math.pow(5, 31), Math.pow(5, 32), Math.pow(5, 33), Math.pow(5, 34), Math.pow(5, 35), Math.pow(5, 36), Math.pow(5, 37), Math.pow(5, 38), Math.pow(5, 39), Math.pow(5, 40)]; // don't save (calculation)
var suffix = ['', 'k', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc', 'Ud', 'Dd', 'Td', 'Qad', 'Qid', 'Sxd', 'Spd', 'Ocd', 'Nod', 'Vg', 'Uvg', 'Dvg', 'Tvg', 'Qavg', 'Qivg', 'Sxvg', 'Spvg', 'Ocvg', 'Novg', 'Tg', 'Utg', 'Dtg', 'Qatg', 'Qitg', 'Sxtg', 'Sptg', 'Octg', 'Notg', 'G', 'Ug', 'Dg', 'Tg', 'Qag', 'Qig', 'Sxg', 'Spg', 'Ocg', 'Nog', 'Quite a lot'];
var Milk_calc = 0;
var Milk_bottle_icon = ' <img src="pics/milk_bottle.png" id="Teeny">';
var spec_image = [];
var SpecialistxALL_ALL_DATA;
var UNMILKEDCOWS;
var Total_clicks = 0;
function MilkClick(){
	Milk = Milk + ClickPower;
	Total_clicks = Total_clicks + 1;
	MILK_();
};
function MILK_(){
	addsuffix_milk();
	MILK = '<div><button onmousedown="MilkClick()"><div class="left">Milk Cow<br />Milk per click:<br />' + Arbitrary_addsuffix(ClickPower) + ' </div><div class="right"><img src="pics/milkbucket.png"></div></button></div><div>Milk: ' + Milk_calc + ' litres </div>' + '<div>MpS: ' + MPS_out_calc + '</div>'
	document.getElementById('MILK').innerHTML = MILK;
};
function addsuffix_milk(){
	var tier0 = Math.log10(Milk) / 3 | 0;
	var suffix_symble0 = suffix[tier0];
	var scale0 = Math.pow(10, tier0 * 3);
	var scaled0 = Milk / scale0;
	Milk_calc = scaled0.toFixed(3) + suffix_symble0;
};
var COW_COST_X10 = [];
var COW_COST_X100 = [];
var COW_COST_X1000 = [];
function COWS_(A){	
	COSTS(A);
	COW_COST_X10[A] = Times_X_calculator(boughtcows[A], basecowcost[A], 1.1, 10);
	COW_COST_X100[A] = Times_X_calculator(boughtcows[A], basecowcost[A], 1.1, 100);
	COW_COST_X1000[A] = Times_X_calculator(boughtcows[A], basecowcost[A], 1.1, 1000);
	if(cowsenabled[A] == 1){
		COWS_DATA[A] = '<div class="div-table"><div class="div-table-col1">';
		if (Milk >= cowcost[A]){
			COWS_DATA[A] = COWS_DATA[A] + '<button width="75%" onmousedown="buycow(' + A + ")" + '" id="' + CowInfo[A].Rarity + '" class="button_background"><div class="left">' + CowInfo[A].Name + '<br /><div style="font-weight:bold;">' + Arbitrary_addsuffix(cowcost[A]) + ' Milk</div> Cows: ' + Arbitrary_addsuffix(Total_cows[A]) + '<div> Unmilked Cows: ' + Arbitrary_addsuffix((Total_cows[A] - Specialists[A])) + '</div><br /></div><div class="right"><img src="pics/cow/' + CowInfo[A].Cow_image +'" id="imagesize"></div></button>';
		}
		else{
			COWS_DATA[A] = COWS_DATA[A] + '<button onmousedown="buycow(' + A + ")" + '" id="' + CowInfo[A].Rarity + '" class="button_background_grey"><div class="left">' + CowInfo[A].Name + '<br /><div style="font-weight:bold;">' + Arbitrary_addsuffix(cowcost[A]) + ' Milk</div> Cows: ' + Arbitrary_addsuffix(Total_cows[A]) + '<div> Unmilked Cows: ' + Arbitrary_addsuffix((Total_cows[A] - Specialists[A])) + '</div><br /></div><div class="right"><img src="pics/cow/' + CowInfo[A].Cow_image +'" id="imagesize"></div></button>';
		};
		COWS_DATA[A] = COWS_DATA[A] + '</div><div class="div-table-col2">';
		COWS_DATA[A] = COWS_DATA[A] + '<div class="tooltip"><button width="24%" onmousedown="buycowx10(' + A + ')' + '" '
		if (Milk >= COW_COST_X10[A]){
			COWS_DATA[A] = COWS_DATA[A] + 'class="button_notgrey"'
		}
		else{
			COWS_DATA[A] = COWS_DATA[A] + 'class="button_grey"'
		};
		COWS_DATA[A] = COWS_DATA[A] + 'id="buy_mult4" >Buy 10<span class="tooltiptext">Buy 10 Cows for ' + Arbitrary_addsuffix(COW_COST_X10[A]) + '</span></button></div>';
		COWS_DATA[A] = COWS_DATA[A] + '<div class="tooltip"><button width="24%" onmousedown="buycowx100(' + A + ')' + '" '
		if (Milk >= COW_COST_X100[A]){
			COWS_DATA[A] = COWS_DATA[A] + 'class="button_notgrey"'
		}
		else{
			COWS_DATA[A] = COWS_DATA[A] + 'class="button_grey"'
		};
		COWS_DATA[A] = COWS_DATA[A] + 'id="buy_mult4" >Buy 100<span class="tooltiptext">Buy 100 Cows for ' + Arbitrary_addsuffix(COW_COST_X100[A]) + '</span></button></div>';
		COWS_DATA[A] = COWS_DATA[A] + '<div class="tooltip"><button width="24%" onmousedown="buycowx1000(' + A + ')' + '" '
		if (Milk >= COW_COST_X1000[A]){
			COWS_DATA[A] = COWS_DATA[A] + 'class="button_notgrey"'
		}
		else{
			COWS_DATA[A] = COWS_DATA[A] + 'class="button_grey"'
		};
		COWS_DATA[A] = COWS_DATA[A] + 'id="buy_mult4" >Buy 1000<span class="tooltiptext">Buy 1000 Cows for ' + Arbitrary_addsuffix(COW_COST_X1000[A]) + '</span></button></div>';
		COWS_DATA[A] = COWS_DATA[A] + '</div></div>';
	}
	else{
		COWS_DATA[A] = '';
	};
};
function buycow(cownumber){
	if (Milk >= cowcost[cownumber]){
		boughtcows[cownumber] = boughtcows[cownumber] + 1;
		Milk = Milk - cowcost[cownumber];
	};
	MILK_();
	document.getElementById('COWS').innerHTML = COWS;
};
function buycowx10(cownumberx10){
	if (Milk >= COW_COST_X10[cownumberx10]){
		boughtcows[cownumberx10] = boughtcows[cownumberx10] + 10;
		Milk = Milk - COW_COST_X10[cownumberx10];
	};
	MILK_();
	document.getElementById('COWS').innerHTML = COWS;
};
function buycowx100(cownumberx100){
	if (Milk >= COW_COST_X100[cownumberx100]){
		boughtcows[cownumberx100] = boughtcows[cownumberx100] + 100;
		Milk = Milk - COW_COST_X100[cownumberx100];
	};
	MILK_();
	document.getElementById('COWS').innerHTML = COWS;
};
function buycowx1000(cownumberx1000){
	if (Milk >= COW_COST_X1000[cownumberx1000]){
		boughtcows[cownumberx1000] = boughtcows[cownumberx1000] + 1000;
		Milk = Milk - COW_COST_X1000[cownumberx1000];
	};
	MILK_();
	document.getElementById('COWS').innerHTML = COWS;
};
function COW_enable(C){
	if(Total_bulls[C - 1] >= 5){
		cowsenabled[C] = 1;
	};
};
function SPECIALISTS_(G){
	COSTS(G);
	SPEC_IMAGE(G);
	if(cowsenabled[G] == 1){
		if(Milk >= Specialists_Cost[G]){
			SPECIALISTS_DATA[G] = '<div class="tooltip"><button onmousedown="buySpecialist(' + G + ')" class="button_notgrey"><div class="left">Buy Specialist<br /><div style="font-weight:bold;">' + Arbitrary_addsuffix(Specialists_Cost[G]) + ' Milk</div> Specialists: ' + Arbitrary_addsuffix(Specialists[G]) + '<div>Power: ' + Arbitrary_addsuffix((Spec_Power[G] * (Spec_Level[G] * Spec_train_power_base[G]))) + '</div><br /></div><div class="right">' + spec_image[G] + '</div><span class="tooltiptext">Specialists Milk 1 cow every 0.5 seconds. They take priorety over milk maids.<br />' + Spec_names[G] + ' produces ' + Arbitrary_addsuffix(Spec_Milk_Value(G)) + ' Milk per tick (' + Arbitrary_addsuffix(Spec_Milk_Value(G)*2) + ' MpS)</span></button></div>';
		}
		else{
			SPECIALISTS_DATA[G] = '<div class="tooltip"><button onmousedown="buySpecialist(' + G + ')" class="button_grey"><div class="left">Buy Specialist<br /><div style="font-weight:bold;">' + Arbitrary_addsuffix(Specialists_Cost[G]) + ' Milk</div> Specialists: ' + Arbitrary_addsuffix(Specialists[G]) + '<div>Power: ' + Arbitrary_addsuffix((Spec_Power[G] * (Spec_Level[G] * Spec_train_power_base[G]))) + '</div><br /></div><div class="right">' + spec_image[G] + '</div><span class="tooltiptext">Specialists Milk 1 cow every 0.5 seconds. They take priorety over milk maids.<br />' + Spec_names[G] + ' produces ' + Arbitrary_addsuffix(Spec_Milk_Value(G)) + ' Milk per tick (' + Arbitrary_addsuffix(Spec_Milk_Value(G)*2) + ' MpS)</span></button></div>';
		};
		if(Milk >= (Specialists_Cost[G] * 10)){
			SPECIALISTS_DATA_xTEN[G] = '<div class="tooltip"><button onmousedown="buySpecialistxTEN(' + G + ')" class="button_notgrey" id="buy_mult2">Buy 10<span class="tooltiptext">Buy 10 Specialists for ' + Arbitrary_addsuffix((10 * Specialists_Cost[G])) + ' Milk</span></button></div>';
		}
		else{
			SPECIALISTS_DATA_xTEN[G] = '<div class="tooltip"><button onmousedown="buySpecialistxTEN(' + G + ')" class="button_grey" id="buy_mult2">Buy 10<span class="tooltiptext">Buy 10 Specialists for ' + Arbitrary_addsuffix((10 * Specialists_Cost[G])) + ' Milk</span></button></div>';
		};
		if(Milk >= (Specialists_Cost[G] * 100)){
			SPECIALISTS_DATA_x100[G] = '<div class="tooltip"><button onmousedown="buySpecialistx100(' + G + ')" class="button_notgrey" id="buy_mult2">Buy 100<span class="tooltiptext">Buy 100 Specialists for ' + Arbitrary_addsuffix((100 * Specialists_Cost[G])) + ' Milk</span></button></div>';
		}
		else{
			SPECIALISTS_DATA_x100[G] = '<div class="tooltip"><button onmousedown="buySpecialistx100(' + G + ')" class="button_grey" id="buy_mult2">Buy 100<span class="tooltiptext">Buy 100 Specialists for ' + Arbitrary_addsuffix((100 * Specialists_Cost[G])) + ' Milk</span></button></div>';
		};
		if(Milk >= ((Total_cows[G] - Specialists[G]) * Specialists_Cost[G])){
			SPECIALISTS_DATA_xALL[G] = '<div style="margin-bottom:2px;" class="tooltip"><button onmousedown="buySpecialistxALL(' + G + ')" class="button_notgrey" id="buy_mult2">Buy Max<span class="tooltiptext">Buy ' + Arbitrary_addsuffix((Total_cows[G] - Specialists[G])) + ' Specialists for ' + Arbitrary_addsuffix(((Total_cows[G] - Specialists[G]) * Specialists_Cost[G])) + ' Milk</span></button></div>';
		}
		else{
			SPECIALISTS_DATA_xALL[G] = '<div style="margin-bottom:2px;" class="tooltip"><button onmousedown="buySpecialistxALL(' + G + ')" class="button_grey" id="buy_mult2">Buy Max<span class="tooltiptext">Buy ' + Arbitrary_addsuffix((Total_cows[G] - Specialists[G])) + ' Specialists for ' + Arbitrary_addsuffix(((Total_cows[G] - Specialists[G]) * Specialists_Cost[G])) + ' Milk</span></button></div>';
		};
	}
	else{
		SPECIALISTS_DATA[G] = '';
		SPECIALISTS_DATA_x100[G] = '';
		SPECIALISTS_DATA_xTEN[G] = '';
		SPECIALISTS_DATA_xALL[G] = '';
	};
};
function SPEC_IMAGE(P){
	if(Spec_Level[P] <= 5){
		spec_image[P] = '<img src="pics/mk3_milkmaid2.png" id="imagesize">';
	}
	else if(Spec_Level[P] <= 139){
		spec_image[P] = '<img src="pics/mk3_milkmaid2_train_lvl' + Math.floor((Spec_Level[P] - 5) / 5) + '.png" id="imagesize">';
	}
	else{
		spec_image[P] = '<img src="pics/mk3_milkmaid2_train_lvl' + 26 + '.png" id="imagesize">';
	};
	
};
function Total_cows_(totalcowscounter){
	Total_cows[totalcowscounter] = cows[totalcowscounter] + boughtcows[totalcowscounter];
	Total_bulls[totalcowscounter] = bulls[totalcowscounter] + boughtbulls[totalcowscounter];
};
function total_cows(){
	for (var D = 0; D <= NumberofCOWS; D++){
		Total_cows_(D);
	};
};
var DoOnceLatch = 0;
var Spec_names = [];
window.setInterval(function COWS_update(){
	MILK_();
	total_cows();
	MILKMAID_();
	SpecialistxALL_ALL();
	UNMILKEDCOWS_();
	for(var E = 0; E <= NumberofCOWS; E++){
		COSTS(E);
		COWS_(E);
		BULLS_(E);
		SPECIALISTS_(E);
		SPEC_TRAINING(E);
		if(DoOnceLatch == 0){
			Spec_names[E] = Names(); 
		};
	}; 
	DoOnceLatch = 1;
	for(var F = 1; F <= NumberofCOWS; F++){
		COW_enable(F);
	};
	for(L = (NumberofCOWS + 1); L >= 0; L--){
		if(L == NumberofCOWS + 1){
			Total_ALL_cows = 0;
			Total_ALL_bulls = 0;
			Total_Specialists = 0;
			SPECIALISTS = '';
			SPECIALISTS_BUYMULT = '';
			BULLS = '';
			COWS = '';
			SPECIALIST_TRAINING = '';
			ALLSPEC_price = 0;
		}
		else{
			Total_ALL_cows = Total_ALL_cows + Total_cows[L];
			Total_ALL_bulls = Total_ALL_bulls + Total_bulls[L];
			Total_Specialists = Total_Specialists + Specialists[L];
			SPECIALISTS = SPECIALISTS + SPECIALISTS_DATA[L];
			SPECIALISTS_BUYMULT = SPECIALISTS_BUYMULT + SPECIALISTS_DATA_xTEN[L] + SPECIALISTS_DATA_x100[L] + SPECIALISTS_DATA_xALL[L];
			BULLS = BULLS + BULLS_DATA[L];
			COWS = COWS + COWS_DATA[L];
			SPECIALIST_TRAINING = SPECIALIST_TRAINING + SPECIALIST_TRAINING_DATA[L];
			ALLSPEC_price = ALLSPEC_price + ((Total_cows[L] - Specialists[L]) * Specialists_Cost[L]);
		};
	};
	MILKMAID = '<br />' + MILKMAID_DATA[0] + MILKMAID_DATA[1] + MILKMAID_DATA[2] + '<br />' + SpecialistxALL_ALL_DATA;
	SAVING = 	'<br /><br /><br /><div><button onmousedown="save_()">Save</button></div>' + '<div><button onmousedown="load()">Load</button></div><br /><br />' + AUTOSAVE_DATA + '<br /><br /><br /><div><button onmousedown="delsave()">Delete Save</button></div>';
	document.getElementById('MILKMAID').innerHTML = MILKMAID;
	document.getElementById('COWS').innerHTML = COWS;
	document.getElementById('BULLS').innerHTML = BULLS;
	document.getElementById('SPECIALISTS').innerHTML = SPECIALISTS;
	document.getElementById('SPECIALIST_TRAINING').innerHTML = SPECIALIST_TRAINING;
	document.getElementById('SPECIALISTS_BUYMULT').innerHTML = SPECIALISTS_BUYMULT;
	document.getElementById('SAVING').innerHTML = SAVING;
	UPGRADES_HTML();
}, 25);	
var MILKEDCOWS;
function UNMILKEDCOWS_(){
	var Milked_cows = 0;
	for(costsfor1 = 0; costsfor1 < NumberofCOWS; costsfor1++){
		if(costsfor1 == 0){
			unmilkedcows = 0;
			Milked_cows = 0;
		};
		if(Specialists[costsfor1] >= Total_cows[costsfor1]){
			unmilkedcows = unmilkedcows + 0;
			Milked_cows = Milked_cows + Total_cows[costsfor1];
		}
		else{
			Milked_cows = Milked_cows + Specialists[costsfor1];
			unmilkedcows = unmilkedcows + Total_cows[costsfor1] - Specialists[costsfor1];
		};
	};
	Milked_cows = Milked_cows;
	UNMILKEDCOWS = Arbitrary_addsuffix(unmilkedcows);
	MILKEDCOWS = Arbitrary_addsuffix(Milked_cows);
};
function MILKMAID_(){
	MM_IMG();
	if(Milk >= Milkmaidcost){
		MILKMAID_DATA[0] = '<div class="tooltip"><button onmousedown="buymilkmaids()" class="button_notgrey">Buy Milk Maids<br /><div style="font-weight:bold;">' + Arbitrary_addsuffix(Milkmaidcost) + ' Milk</div><div>Milk Maids: ' + Arbitrary_addsuffix(MilkMaids) + '<br />Power: ' + milkmaid_power_calc + '<br />Cowtput: ' + MILKMAID_OUTPUT + '</div>' + MM_img + '<span class="tooltiptext">Milk maids milk 1 free cow every 1 second.</span></button></div>';
	}
	else{
		MILKMAID_DATA[0] = '<div class="tooltip"><button onmousedown="buymilkmaids()" class="button_grey">Buy Milk Maids<br /><div style="font-weight:bold;">' + Arbitrary_addsuffix(Milkmaidcost) + ' Milk</div><div>Milk Maids: ' + Arbitrary_addsuffix(MilkMaids) + '<br />Power: ' + milkmaid_power_calc + '<br />Cowtput: ' + MILKMAID_OUTPUT + '</div>' + MM_img + '<span class="tooltiptext">Milk maids milk 1 free cow every 1 second.</span></button></div>';
	};
	if(Milk >= MM_COST_10){
		MILKMAID_DATA[1] = '<div><button onmousedown="buymilkmaids_10()" class="button_notgrey">Buy 10<br /><div style="font-weight:bold;">' + MM_COST_10_calc + Milk_bottle_icon + '</div></button></div>'
	}
	else{
		MILKMAID_DATA[1] = '<div><button onmousedown="buymilkmaids_10()"  class="button_grey">Buy 10<br /><div style="font-weight:bold;">' + MM_COST_10_calc + Milk_bottle_icon + '</div></button></div>'
	};
	if(Milk >= MM_COST_100){
		MILKMAID_DATA[2] = '<div><button onmousedown="buymilkmaids_100()" class="button_notgrey">Buy 100<br /><div style="font-weight:bold;">' + MM_COST_100_calc + Milk_bottle_icon + '</div></button></div>'
	}
	else{
		MILKMAID_DATA[2] = '<div><button onmousedown="buymilkmaids_100()" class="button_grey">Buy 100<br /><div style="font-weight:bold;">' + MM_COST_100_calc + Milk_bottle_icon + '</div></button></div>'
	};
};
var MM_COST_10 = 0;
var MM_COST_100 = 0;
var MM_img;
function MM_IMG(){
	if(MM_upgrade_level <= 19){
		MM_img = '<img src="pics/mk3_milkmaid_demon_lvl' + MM_upgrade_level + '.png" id="imagesize">';
	}
	else{
		MM_img = '<img src="pics/mk3_milkmaid_demon_lvl' + 19 + '.png" id="imagesize">';
	};
};
function MM_cost_10_(){
	var MM_TEMP = MilkMaids + 10;
	var MM_calc1 = Math.floor(BaseMilkmaidcost * (Math.pow(1.008,MilkMaids) / (1 - 1.008)));
	var MM_calc2 = Math.floor(BaseMilkmaidcost * (Math.pow(1.008,MM_TEMP) / (1 - 1.008)));
	MM_COST_10 = MM_calc1 - MM_calc2;
};
function MM_cost_100_(){
	var MM_TEMP = MilkMaids + 100;
	var MM_calc1 = Math.floor(BaseMilkmaidcost * (Math.pow(1.008,MilkMaids) / (1 - 1.008)));
	var MM_calc2 = Math.floor(BaseMilkmaidcost * (Math.pow(1.008,MM_TEMP) / (1 - 1.008)));
	MM_COST_100 = MM_calc1 - MM_calc2;
};
function Times_X_calculator(input_item_number, input_price_base, input_price_multiplyer, input_TIMES_X){
	var X_calc_temp = input_item_number + input_TIMES_X;
	var X_calc1 = Math.floor(input_price_base * (Math.pow(input_price_multiplyer,input_item_number) / (1 - input_price_multiplyer)));
	var X_calc2 = Math.floor(input_price_base * (Math.pow(input_price_multiplyer,X_calc_temp) / (1 - input_price_multiplyer)));
	return X_calc1 - X_calc2;
};
function buymilkmaids(){
	if(Milk >= Milkmaidcost){
		MilkMaids = MilkMaids + 1;
		Milk = Milk - Milkmaidcost;
	};
	MILK_();
	document.getElementById('MILKMAID').innerHTML = MILKMAID;
};
function buymilkmaids_10(){
	if(Milk >= MM_COST_10){
		MilkMaids = MilkMaids + 10;
		Milk = Milk - MM_COST_10;
	};
	MILK_();
	document.getElementById('MILKMAID').innerHTML = MILKMAID;
};
function buymilkmaids_100(){
	if(Milk >= MM_COST_100){
		MilkMaids = MilkMaids + 100;
		Milk = Milk - MM_COST_100;
	};
	MILK_();
	document.getElementById('MILKMAID').innerHTML = MILKMAID;
};
var MilkMaidBonus = 1;
var MILKMAID_OUTPUT = 0;
window.setInterval(function MilkMaid_Milking(){
	if((unmilkedcows) > 0){
		if(MilkMaids >= (unmilkedcows)){
			Milk = Milk + ((unmilkedcows) * MilkMaidBonus);
			MILKMAID_OUTPUT = milkmaid_output_calc1;
		}
		else{
			Milk = Milk + (MilkMaids * MilkMaidBonus);
			MILKMAID_OUTPUT = milkmaid_output_calc2;
		};
	}
	else{
		MILKMAID_OUTPUT = 0;
	};
	MILK_();
}, 1000);
window.setInterval(function Specialist_Milking(){
	total_cows();
	for(var H = 0; H <= NumberofCOWS; H++){
		Spec_Milk(H);
	};
	MILK_();
	document.getElementById('COWS').innerHTML = COWS;
}, 500);
function Spec_Milk(I){
		Milk = Milk + Spec_Milk_Value(I);
};
window.setInterval(function reproduction(){
	for(var K = 0; K <= NumberofCOWS; K++){
		Reproduction(K);
	};
}, 10000);
function Reproduction(J){
	if((Total_bulls[J] > 0) && (Total_cows[J] > 0)){
		var randomnumber = Math.random();
		if(randomnumber <= 0.95){
			cows[J] = cows[J] + Total_bulls[J];
		}
		else if(randomnumber >= 0.999){
			cows[J] = cows[J] + cows[J];
		}
		else{
			bulls[J] = bulls[J] + Math.ceil(Total_bulls[J] * 0.1);
			cows[J] = cows[J] + Total_bulls[J] - Math.ceil(Total_bulls[J] * 0.1);
		};
	};
};
function Spec_Milk_Value(SMV){
	if(Spec_Level[SMV] >= 50){
		Spec_train_power_base[SMV] = 1000;
	}
	else{
		Spec_train_power_base[SMV] = 1;
	};
	if(Specialists[SMV] >= Total_cows[SMV]){
		return (Total_cows[SMV] * Spec_Power[SMV] * (Spec_Level[SMV] * Spec_train_power_base[SMV]));
	}
	else{
		return (Specialists[SMV] * Spec_Power[SMV] * (Spec_Level[SMV] * Spec_train_power_base[SMV]));
	};
};
var BULL_COST_X10 = [];
var BULL_COST_X100 = [];
var BULL_COST_X1000 = [];
function BULLS_(B){	
	COSTS(B);
	BULL_COST_X10[B] = Times_X_calculator(boughtbulls[B], basebullcost[B], 1.1, 10);
	BULL_COST_X100[B] = Times_X_calculator(boughtbulls[B], basebullcost[B], 1.1, 100);
	BULL_COST_X1000[B] = Times_X_calculator(boughtbulls[B], basebullcost[B], 1.1, 1000);
	if(cowsenabled[B] == 1){
		BULLS_DATA[B] = '<div class="div-table"><div class="div-table-col4"><div class="tooltip"><button onmousedown="buybull(' + B + ")" + '" ';
		if (Milk >= bullcost[B]){
			BULLS_DATA[B] = BULLS_DATA[B] + 'class="button_background"';
		}
		else{
			BULLS_DATA[B] = BULLS_DATA[B] + 'class="button_background_grey"';
		};
		 BULLS_DATA[B] = BULLS_DATA[B] + 'id="' + CowInfo[B].Rarity + '" ><div class="left"><br />Buy Bulls<br /><div style="font-weight:bold;">' + bullcost_calc[B] + ' Milk</div>Bulls: ' + Arbitrary_addsuffix(Total_bulls[B]) + '<br /><br /></div><div class="right"><img src="pics/cow/' + CowInfo[B].Bull_image +'" id="imagesize"></div><span class="tooltiptext">Bulls create more cows every 10 seconds (requires at least 1 cow and 1 bull)</span></button></div>'
		BULLS_DATA[B] =BULLS_DATA[B] + '</div><div class="div-table-col3">';
		BULLS_DATA[B] = BULLS_DATA[B] + '<div class="tooltip"><button width="24%" onmousedown="buybullx10(' + B + ')' + '" '
		if (Milk >= BULL_COST_X10[B]){
			BULLS_DATA[B] = BULLS_DATA[B] + 'class="button_notgrey" '
		}
		else{
			BULLS_DATA[B] = BULLS_DATA[B] + 'class="button_grey" '
		};
		BULLS_DATA[B] = BULLS_DATA[B] + 'id="buy_mult4" >Buy 10<span class="tooltiptext">Buy 10 Cows for ' + Arbitrary_addsuffix(BULL_COST_X10[B]) + '</span></button></div>';
		BULLS_DATA[B] = BULLS_DATA[B] + '<div class="tooltip"><button width="24%" onmousedown="buybullx100(' + B + ')' + '" '
		if (Milk >= BULL_COST_X100[B]){
			BULLS_DATA[B] = BULLS_DATA[B] + 'class="button_notgrey"'
		}
		else{
			BULLS_DATA[B] = BULLS_DATA[B] + 'class="button_grey"'
		};
		BULLS_DATA[B] = BULLS_DATA[B] + 'id="buy_mult4" >Buy 100<span class="tooltiptext">Buy 100 Cows for ' + Arbitrary_addsuffix(BULL_COST_X100[B]) + '</span></button></div>';
		BULLS_DATA[B] = BULLS_DATA[B] + '<div class="tooltip"><button width="24%" onmousedown="buybullx100(' + B + ')' + '" '
		if (Milk >= BULL_COST_X1000[B]){
			BULLS_DATA[B] = BULLS_DATA[B] + 'class="button_notgrey"'
		}
		else{
			BULLS_DATA[B] = BULLS_DATA[B] + 'class="button_grey"'
		};
		BULLS_DATA[B] = BULLS_DATA[B] + 'id="buy_mult4" >Buy 1000<span class="tooltiptext">Buy 1000 Cows for ' + Arbitrary_addsuffix(BULL_COST_X1000[B]) + '</span></button></div>';
		BULLS_DATA[B] = BULLS_DATA[B] + '</div></div>';
	}
	else{
		BULLS_DATA[B] = '';
	};
};
function buybull(bullnumber){
		if (Milk >= bullcost[bullnumber]){
		boughtbulls[bullnumber] = boughtbulls[bullnumber] + 1;
		Milk = Milk - bullcost[bullnumber];
	};
	MILK_();
	document.getElementById('COWS').innerHTML = COWS;
};
function buybullx10(bullnumberx10){
		if (Milk >= BULL_COST_X10[bullnumberx10]){
		boughtbulls[bullnumberx10] = boughtbulls[bullnumberx10] + 10;
		Milk = Milk - BULL_COST_X10[bullnumberx10];
	};
	MILK_();
	document.getElementById('COWS').innerHTML = COWS;
};
function buybullx100(bullnumberx100){
		if (Milk >= BULL_COST_X100[bullnumberx100]){
		boughtbulls[bullnumberx100] = boughtbulls[bullnumberx100] + 100;
		Milk = Milk - BULL_COST_X100[bullnumberx100];
	};
	MILK_();
	document.getElementById('COWS').innerHTML = COWS;
};
function buybullx1000(bullnumberx1000){
		if (Milk >= BULL_COST_X1000[bullnumberx1000]){
		boughtbulls[bullnumberx1000] = boughtbulls[bullnumberx10] + 1000;
		Milk = Milk - BULL_COST_X1000[bullnumberx1000];
	};
	MILK_();
	document.getElementById('COWS').innerHTML = COWS;
};

function buySpecialist(Spec_Number){
	if((Milk >= Specialists_Cost[Spec_Number])){
		Specialists[Spec_Number] = Specialists[Spec_Number] + 1;
		Milk = Milk - Specialists_Cost[Spec_Number];
	};
	MILK_();
	document.getElementById('COWS').innerHTML = COWS;
};
function buySpecialistx100(Spec_NumberB){
	if(Milk >= (Specialists_Cost[Spec_NumberB] * 100)){ 
		Specialists[Spec_NumberB] = Specialists[Spec_NumberB] + 100;
		Milk = Milk - (100 * Specialists_Cost[Spec_NumberB]);
	}
	else{
		buySpecialistxALL(Spec_NumberB);
	};
	MILK_();
	document.getElementById('COWS').innerHTML = COWS;
};
function buySpecialistxTEN(Spec_Numberc){
	if(Milk >= (Specialists_Cost[Spec_Numberc] * 10)){ 
		Specialists[Spec_Numberc] = Specialists[Spec_Numberc] + 10;
		Milk = Milk - (10 * Specialists_Cost[Spec_Numberc]);
	}
	else{
		buySpecialistxALL(Spec_Numberc);
	};
	MILK_();
	document.getElementById('COWS').innerHTML = COWS;
};
function buySpecialistxALL(Spec_NumberD){
	if((Total_cows[Spec_NumberD] - Specialists[Spec_NumberD]) > 0){
		if(Milk >= ((Total_cows[Spec_NumberD] - Specialists[Spec_NumberD]) * Specialists_Cost[Spec_NumberD])){ 
			Specialists[Spec_NumberD] = Specialists[Spec_NumberD] + (Total_cows[Spec_NumberD] - Specialists[Spec_NumberD]);
			Milk = Milk - ((Total_cows[Spec_NumberD] - Specialists[Spec_NumberD]) * Specialists_Cost[Spec_NumberD]);
		};
	};
	MILK_();
	document.getElementById('COWS').innerHTML = COWS;
};
function buySpecialistxALL_ALL(){
	for(var ALL_Spec = 0; ALL_Spec <= NumberofCOWS; ALL_Spec++){
		buySpecialistxALL(ALL_Spec);
	};
};
function SpecialistxALL_ALL(){
	if(Total_Specialists >= 1000){
		if(Milk >= ALLSPEC_price){
			SpecialistxALL_ALL_DATA = '<div style="margin-bottom:2px;" class="tooltip"><button onmousedown="buySpecialistxALL_ALL()" class="button_notgrey">All Specialists<br />Buy Max<br />' + Arbitrary_addsuffix(unmilkedcows) + '<span class="tooltiptext">Buy ' + Arbitrary_addsuffix(unmilkedcows) + ' Specialists for ' + Arbitrary_addsuffix(ALLSPEC_price) + ' Milk</span></button></div>';
		}
		else{
			SpecialistxALL_ALL_DATA = '<div style="margin-bottom:2px;" class="tooltip"><button onmousedown="buySpecialistxALL_ALL()" class="button_grey">All Specialists<br />Buy Max<br />' + Arbitrary_addsuffix(unmilkedcows) + '<span class="tooltiptext">Buy ' + Arbitrary_addsuffix(unmilkedcows) + ' Specialists for ' + Arbitrary_addsuffix(ALLSPEC_price) + ' Milk</span></button></div>';
		};	
	}
	else{
		SpecialistxALL_ALL_DATA = '';
	};
};


