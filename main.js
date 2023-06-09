
var Milk_bottle_icon = ' <img src="pics/Milk_bottle.png" id="Teeny">';
var spec_image = [];
var SpecialistxALL_ALL_DATA;
var UNMILKEDCOWS;
var Total_clicks = 0;
function MilkClick(){ // ----button function---- !! don't delete !!
	Milk = Milk + ClickPower;
	Total_clicks = Total_clicks + 1;
	MILK_();
};
function MILK_(){
	MILK = '<div class="div-table"><div class="div-table-col-milk"><button onmousedown="MilkClick()"><div class="left">Milk Cow<br />Milk per click:<br />' + Arbitrary_addsuffix(ClickPower) + ' </div><div class="right"><img src="pics/milkbucket.png"></div></button></div><div>Milk: ' + Arbitrary_addsuffix(Milk) + ' litres </div>' + '<div>MpS: ' + MPS_out_calc + '</div></div>'
};

function buycow(cownumber){ // ----button function---- !! don't delete !!
	if (Milk >= cowcost[cownumber]){
		boughtcows[cownumber] = boughtcows[cownumber] + 1;
		Milk = Milk - cowcost[cownumber];
	};
	MILK_();
};
function buycowx10(cownumberx10){ // ----button function---- !! don't delete !!
	if (Milk >= COW_COST_X10[cownumberx10]){
		boughtcows[cownumberx10] = boughtcows[cownumberx10] + 10;
		Milk = Milk - COW_COST_X10[cownumberx10];
	};
	MILK_();
};
function buycowx100(cownumberx100){ // ----button function---- !! don't delete !!
	if (Milk >= COW_COST_X100[cownumberx100]){
		boughtcows[cownumberx100] = boughtcows[cownumberx100] + 100;
		Milk = Milk - COW_COST_X100[cownumberx100];
	};
	MILK_();
};
function buycowx1000(cownumberx1000){ // ----button function---- !! don't delete !!
	if (Milk >= COW_COST_X1000[cownumberx1000]){
		boughtcows[cownumberx1000] = boughtcows[cownumberx1000] + 1000;
		Milk = Milk - COW_COST_X1000[cownumberx1000];
	};
	MILK_();
};

function SPEC_IMAGE(P){
	if(Spec_Level[P] < 5){
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
	for(var i = 0; i <= NumberofCOWS; i++){
		Total_cows_(i);
	};
};

var Spec_names = [];
for(i = 0; i <= NumberofCOWS; i++){
	Spec_names[i] = Names(); 
};

window.setInterval(function COWS_update(){
	MILK_();
	total_cows();
	MILKMAID_();
	SpecialistxALL_ALL();
	UNMILKEDCOWS_();
	for(i = 0; i <= NumberofCOWS; i++){
		COSTS(i);
		COWS_(i);
		BULLS_(i);
		SPECIALISTS_(i);
		SPEC_TRAINING(i);
	}; 
	// for(i = 1; i <= NumberofCOWS; i++){
	// 	COW_enable(i);
	// };
	for(i = (NumberofCOWS + 1); i >= 0; i--){
		if(i == NumberofCOWS + 1){
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
			Total_ALL_cows = Total_ALL_cows + Total_cows[i];
			Total_ALL_bulls = Total_ALL_bulls + Total_bulls[i];
			Total_Specialists = Total_Specialists + Specialists[i];

			if(Visible_page == 0){
				SPECIALISTS = SPECIALISTS + SPECIALISTS_DATA[i];
				SPECIALISTS_BUYMULT = SPECIALISTS_BUYMULT + '<div class="div-table-col2">' + SPECIALISTS_DATA_xTEN[i] + SPECIALISTS_DATA_x100[i] + SPECIALISTS_DATA_xALL[i] + '</div>';
				BULLS = BULLS + BULLS_DATA[i];
				COWS = COWS + COWS_DATA[i];
				SPECIALIST_TRAINING = SPECIALIST_TRAINING + SPECIALIST_TRAINING_DATA[i];
			}
			else{
				SPECIALISTS = SPECIALISTS + '';
				SPECIALISTS_BUYMULT = SPECIALISTS_BUYMULT + '';
				BULLS = BULLS + '';
				COWS = COWS + '';
				SPECIALIST_TRAINING = SPECIALIST_TRAINING + '';
			};
			ALLSPEC_price = ALLSPEC_price + ((Total_cows[i] - Specialists[i]) * Specialists_Cost[i]);
		};
	};

	MILKMAID = '<br />' + MILKMAID_DATA[0] + MILKMAID_DATA[1] + MILKMAID_DATA[2] + MILKMAID_DATA[3] + '<br />' + SpecialistxALL_ALL_DATA;
	SAVING = 	'<br /><br /><br /><div><button onmousedown="save_()">Save</button></div>' + '<div><button onmousedown="load()">Load</button></div><br /><br />' + AUTOSAVE_DATA + '<br /><br /><br /><div><button onmousedown="delsave()">Delete Save</button></div>';
	UPGRADES_HTML();
}, 25);	

var MILKEDCOWS;
function UNMILKEDCOWS_(){
	var Milked_cows = 0;
	for(i = 0; i < NumberofCOWS; i++){
		if(i == 0){
			unmilkedcows = 0;
			Milked_cows = 0;
		};
		if(Specialists[i] >= Total_cows[i]){
			unmilkedcows = unmilkedcows + 0;
			Milked_cows = Milked_cows + Total_cows[i];
		}
		else{
			Milked_cows = Milked_cows + Specialists[i];
			unmilkedcows = unmilkedcows + Total_cows[i] - Specialists[i];
		};
	};
	Milked_cows = Milked_cows;
	UNMILKEDCOWS = Arbitrary_addsuffix(unmilkedcows);
	MILKEDCOWS = Arbitrary_addsuffix(Milked_cows);
};

function MILKMAID_(){
	if(Milk >= Milkmaidcost){
		MILKMAID_DATA[0] = '<div class="tooltip"><button onmousedown="buymilkmaids()" class="button_notgrey">Buy Milk Maids<br /><div style="font-weight:bold;">' + Arbitrary_addsuffix(Milkmaidcost) + ' Milk</div><div>Milk Maids: ' + Arbitrary_addsuffix(MilkMaids) + '<br />Power: ' + Arbitrary_addsuffix(MilkMaidBonus) + '<br />Cowtput: ' + MILKMAID_OUTPUT + '</div>' + MM_IMG() + '<span class="tooltiptext">Milk maids milk 1 free cow every 1 second.</span></button></div>';
	}
	else{
		MILKMAID_DATA[0] = '<div class="tooltip"><button onmousedown="buymilkmaids()" class="button_grey">Buy Milk Maids<br /><div style="font-weight:bold;">' + Arbitrary_addsuffix(Milkmaidcost) + ' Milk</div><div>Milk Maids: ' + Arbitrary_addsuffix(MilkMaids) + '<br />Power: ' + Arbitrary_addsuffix(MilkMaidBonus) + '<br />Cowtput: ' + MILKMAID_OUTPUT + '</div>' + MM_IMG() + '<span class="tooltiptext">Milk maids milk 1 free cow every 1 second.</span></button></div>';
	};
	if(Milk >= MM_COST_10){
		MILKMAID_DATA[1] = '<div><button onmousedown="buymilkmaids_10()" class="button_notgrey">Buy 10<br /><div style="font-weight:bold;">' + Arbitrary_addsuffix(MM_COST_10) + Milk_bottle_icon + '</div></button></div>'
	}
	else{
		MILKMAID_DATA[1] = '<div><button onmousedown="buymilkmaids_10()"  class="button_grey">Buy 10<br /><div style="font-weight:bold;">' + Arbitrary_addsuffix(MM_COST_10) + Milk_bottle_icon + '</div></button></div>'
	};
	if(Milk >= MM_COST_100){
		MILKMAID_DATA[2] = '<div><button onmousedown="buymilkmaids_100()" class="button_notgrey">Buy 100<br /><div style="font-weight:bold;">' + Arbitrary_addsuffix(MM_COST_100) + Milk_bottle_icon + '</div></button></div>'
	}
	else{
		MILKMAID_DATA[2] = '<div><button onmousedown="buymilkmaids_100()" class="button_grey">Buy 100<br /><div style="font-weight:bold;">' + Arbitrary_addsuffix(MM_COST_100) + Milk_bottle_icon + '</div></button></div>'
	};
	if(Milk >= Milkmaidcost){
		MILKMAID_DATA[3] = '<div><button onmousedown="Buy_MAX_MM()" class="button_notgrey">Buy Max (' + Arbitrary_addsuffix(Buy_MAX_MM_calculator(1)) + ')<br /><div style="font-weight:bold;">' + Arbitrary_addsuffix(Buy_MAX_MM_calculator(0)) + Milk_bottle_icon + '</div></button></div>';
	}
	else{
		MILKMAID_DATA[3] = '<div><button onmousedown="Buy_MAX_MM()" class="button_grey">Buy Max (' + Arbitrary_addsuffix(Buy_MAX_MM_calculator(1)) + ')<br /><div style="font-weight:bold;">' + Arbitrary_addsuffix(Buy_MAX_MM_calculator(0)) + Milk_bottle_icon + '</div></button></div>';
	};
};

var MM_COST_10 = 0;
var MM_COST_100 = 0;
function MM_IMG(){
	if(MM_upgrade_level <= 19){
		return '<img src="pics/mk3_milkmaid_demon_lvl' + MM_upgrade_level + '.png" id="imagesize">';
	}
	else{
		return '<img src="pics/mk3_milkmaid_demon_lvl' + 19 + '.png" id="imagesize">';
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

function buymilkmaids(){ // ----button function---- !! don't delete !!
	if(Milk >= Milkmaidcost){
		MilkMaids = MilkMaids + 1;
		Milk = Milk - Milkmaidcost;
	};
	MILK_();
};
var MM_cost_MAX = 0;
var MM_cost_index = 0;
function Buy_MAX_MM_calculator(show_num){
	MM_cost_MAX = 0;
	var buy_max_loop = 1;
	while(1){
		MM_cost_MAX = MM_cost_MAX + Math.floor(BaseMilkmaidcost * Math.pow(1.008,(MilkMaids + buy_max_loop)));
		MM_cost_index = buy_max_loop;
		if((MM_cost_MAX + Math.floor(BaseMilkmaidcost * Math.pow(1.008,(MilkMaids + buy_max_loop)))) > Milk){
			break;
		};
		buy_max_loop++;
	};
	if(show_num == 0){
		return MM_cost_MAX;
	}
	else{
		return MM_cost_index;
	};
};
function Buy_MAX_MM(){ // ----button function---- !! don't delete !!
	if(Milk >= MM_cost_MAX){
		MilkMaids = MilkMaids + MM_cost_index ;
		Milk = Milk - MM_cost_MAX;
	};
	MILK_();
};
function buymilkmaids_10(){ // ----button function---- !! don't delete !!
	if(Milk >= MM_COST_10){
		MilkMaids = MilkMaids + 10;
		Milk = Milk - MM_COST_10;
	};
	MILK_();
};
function buymilkmaids_100(){// ----button function---- !! don't delete !!
	if(Milk >= MM_COST_100){
		MilkMaids = MilkMaids + 100;
		Milk = Milk - MM_COST_100;
	};
	MILK_();
};

var MilkMaidBonus = 1;
var MILKMAID_OUTPUT = 0;
window.setInterval(function MilkMaid_Milking(){
	if((unmilkedcows) > 0){
		if(MilkMaids >= (unmilkedcows)){
			Milk = Milk + ((unmilkedcows) * MilkMaidBonus);
			MILKMAID_OUTPUT = Arbitrary_addsuffix((unmilkedcows) * MilkMaidBonus);
		}
		else{
			Milk = Milk + (MilkMaids * MilkMaidBonus);
			MILKMAID_OUTPUT = Arbitrary_addsuffix(MilkMaids * MilkMaidBonus);
		};
	}
	else{
		MILKMAID_OUTPUT = 0;
	};
	MILK_();
}, 1000);

window.setInterval(function Specialist_Milking(){
	total_cows();
	for(i = 0; i <= NumberofCOWS; i++){
		Spec_Milk(i);
	};
	MILK_();
}, 500);

function Spec_Milk(K){
	Milk = Milk + Spec_Milk_Value(K);
};

window.setInterval(function reproduction(){
	for(i = 0; i <= NumberofCOWS; i++){
		Reproduction(i);
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
function Spec_power_value(SPV){
	return (Spec_Power[SPV] * (Spec_Level[SPV] * Spec_train_power_base[SPV]));
};
function Spec_Milk_Value(SMV){
	Spec_train_power_base[SMV] = Math.pow(2, (Math.floor(Spec_Level[SMV] / 5)));
	if(Specialists[SMV] >= Total_cows[SMV]){
		return (Total_cows[SMV] * Spec_power_value(SMV));
	}
	else{
		return (Specialists[SMV] * Spec_power_value(SMV));
	};
};

function buybull(bullnumber){ // ----button function---- !! don't delete !!
		if (Milk >= bullcost[bullnumber]){
		boughtbulls[bullnumber] = boughtbulls[bullnumber] + 1;
		Milk = Milk - bullcost[bullnumber];
	};
	MILK_();
};
function buybullx10(bullnumberx10){ // ----button function---- !! don't delete !!
		if (Milk >= BULL_COST_X10[bullnumberx10]){
		boughtbulls[bullnumberx10] = boughtbulls[bullnumberx10] + 10;
		Milk = Milk - BULL_COST_X10[bullnumberx10];
	};
	MILK_();
};
function buybullx100(bullnumberx100){ // ----button function---- !! don't delete !!
		if (Milk >= BULL_COST_X100[bullnumberx100]){
		boughtbulls[bullnumberx100] = boughtbulls[bullnumberx100] + 100;
		Milk = Milk - BULL_COST_X100[bullnumberx100];
	};
	MILK_();
};
function buybullx1000(bullnumberx1000){ // ----button function---- !! don't delete !!
		if (Milk >= BULL_COST_X1000[bullnumberx1000]){
		boughtbulls[bullnumberx1000] = boughtbulls[bullnumberx10] + 1000;
		Milk = Milk - BULL_COST_X1000[bullnumberx1000];
	};
	MILK_();
};

function buySpecialist(Spec_Number){ // ----button function---- !! don't delete !!
	if((Milk >= Specialists_Cost[Spec_Number])){
		Specialists[Spec_Number] = Specialists[Spec_Number] + 1;
		Milk = Milk - Specialists_Cost[Spec_Number];
	};
	MILK_();
};
function buySpecialistx100(Spec_NumberB){ // ----button function---- !! don't delete !!
	if(Milk >= (Specialists_Cost[Spec_NumberB] * 100)){ 
		Specialists[Spec_NumberB] = Specialists[Spec_NumberB] + 100;
		Milk = Milk - (100 * Specialists_Cost[Spec_NumberB]);
	}
	else{
		buySpecialistxALL(Spec_NumberB);
	};
	MILK_();
};
function buySpecialistxTEN(Spec_Numberc){ // ----button function---- !! don't delete !!
	if(Milk >= (Specialists_Cost[Spec_Numberc] * 10)){ 
		Specialists[Spec_Numberc] = Specialists[Spec_Numberc] + 10;
		Milk = Milk - (10 * Specialists_Cost[Spec_Numberc]);
	}
	else{
		buySpecialistxALL(Spec_Numberc);
	};
	MILK_();
};
function buySpecialistxALL(Spec_NumberD){ // ----button function---- !! don't delete !!
	if((Total_cows[Spec_NumberD] - Specialists[Spec_NumberD]) > 0){
		if(Milk >= ((Total_cows[Spec_NumberD] - Specialists[Spec_NumberD]) * Specialists_Cost[Spec_NumberD])){ 
			Specialists[Spec_NumberD] = Specialists[Spec_NumberD] + (Total_cows[Spec_NumberD] - Specialists[Spec_NumberD]);
			Milk = Milk - ((Total_cows[Spec_NumberD] - Specialists[Spec_NumberD]) * Specialists_Cost[Spec_NumberD]);
		};
	};
	MILK_();
};
function buySpecialistxALL_ALL(){ // ----button function---- !! don't delete !!
	// this function is the one below the milkmaids that allows you to buy all of the avaliable specilists for all cows at once
	for(i = 0; i <= NumberofCOWS; i++){
		buySpecialistxALL(i);
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

var Visible_page = 0;
function change_tab_button(tab_number){
	Visible_page = tab_number;
};