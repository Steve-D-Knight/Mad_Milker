var Specialist_training_Cost = [];		
var Specialist_training_Cost_Base = [];
var Spec_Level = [];							
var Spec_train_power = [];
var Spec_train_power_base = [];

for (var upgrades_init_index = 0; upgrades_init_index < NumberofCOWS+1; upgrades_init_index++) {
	Specialist_training_Cost[upgrades_init_index] = 1;	
	Spec_Level[upgrades_init_index] = 1;	
	Spec_train_power[upgrades_init_index] = 1;	
	Spec_train_power_base[upgrades_init_index] = 1;	
	if(upgrades_init_index == 0){
		Specialist_training_Cost_Base[upgrades_init_index] = 100;	
	}
	else if(upgrades_init_index == 1){
		Specialist_training_Cost_Base[upgrades_init_index] = 500;	
	}
	else{
		Specialist_training_Cost_Base[upgrades_init_index] = Math.pow(10,(upgrades_init_index + 1));
	};
};

var UPGRADES;
var MMUPGRADES;
var WRISTTRAINING;

function SPEC_TRAINING(M){
	COSTS(M);
	if(cowsenabled[M] == 1){
		if(Milk >= Specialist_training_Cost[M]){
			SPECIALIST_TRAINING_DATA[M] = '<div><button onmousedown="trainSpec(' + M + ')" class="button_notgrey"><div class="left">Train Specialists<div style="font-weight:bold;">' + Arbitrary_addsuffix(Specialist_training_Cost[M]) + ' Milk</div>Level: ' + Spec_Level[M] + ' <br />Power Gain:<br />' + Arbitrary_addsuffix(Spec_Power[M]) + '<br /></div><div class="right"><img src="rank/rank(' + Spec_Level[M] + ').png" id="spec_lvl_imagesize"></div></button></div>';
		}
		else{
			SPECIALIST_TRAINING_DATA[M] = '<div><button onmousedown="trainSpec(' + M + ')" class="button_grey"><div class="left">Train Specialists<div style="font-weight:bold;">' + Arbitrary_addsuffix(Specialist_training_Cost[M]) + ' Milk</div>Level: ' + Spec_Level[M] + ' <br />Power Gain:<br />' + Arbitrary_addsuffix(Spec_Power[M]) + '<br /></div><div class="right"><img src="rank/rank(' + Spec_Level[M] + ').png" id="spec_lvl_imagesize"></div></button></div>';
		};
	}
	else{
		SPECIALIST_TRAINING_DATA[M] = '';
	};
};
function trainSpec(trainspec_number){
	if(Milk >= Specialist_training_Cost[trainspec_number]){
		Spec_Level[trainspec_number] = Spec_Level[trainspec_number] + 1;
		Milk = Milk - Specialist_training_Cost[trainspec_number];
	};
	MILK_();
	document.getElementById('COWS').innerHTML = COWS;
};
//cowcost[cost_num] = Math.floor(basecowcost[cost_num] * Math.pow(1.1,boughtcows[cost_num]));
var MM_upgrade_cost = 0;
var MM_upgrade_level = 0;
var Click_multiplyer;
var wrist_traingin_cost = 500;
function UPGRADES_HTML(){
	MM_upgrade_cost = Math.floor(1000 * Math.pow(3, MM_upgrade_level));
	MilkMaidBonus = Math.pow(2, MM_upgrade_level);
	wrist_traingin_cost = Math.floor(500 * Math.pow(3, wrist_training_lvl));
	MM_UPGRADE_IMG();
	
	if(MilkMaids >= 100){
		if(Milk >= MM_upgrade_cost){
			MMUPGRADES = '<div class="tooltip"><button onmousedown="MilkMaid_upgrade()" class="button_notgrey"><div class="left"><br />Power Up Milk Maids<div style="font-weight:bold;">' + Arbitrary_addsuffix(MM_upgrade_cost) + ' Milk</div>Level: ' + MM_upgrade_level + '<br /><br /></div><div class="right">' + MM_upgrade_img + '</div><span class="tooltiptext">Doubles Power of Milk Maids</span></button></div>';
		}
		else{
			MMUPGRADES = '<div class="tooltip"><button onmousedown="MilkMaid_upgrade()" class="button_grey"><div class="left"><br />Power Up Milk Maids<div style="font-weight:bold;">' + Arbitrary_addsuffix(MM_upgrade_cost) + ' Milk</div>Level: ' + MM_upgrade_level + '<br /><br /></div><div class="right">' + MM_upgrade_img + '</div><span class="tooltiptext">Doubles Power of Milk Maids</span></button></div>';
		};
	}
	else{
		MMUPGRADES = '';
	};
	if(wrist_training_lvl < 6){
		if(Total_clicks >= 100){
			if(Milk >= wrist_traingin_cost){
				WRISTTRAINING = '<div class="tooltip"><button onmousedown="Wrist_training()" class="button_notgrey"><div class="left"><br />Wrist Training<div style="font-weight:bold;">' + Arbitrary_addsuffix(wrist_traingin_cost) + ' Milk</div>Level: ' + Arbitrary_addsuffix(wrist_training_lvl + 1) + '<br /><br /></div><div class="right">' + '<img src="pics/arm_' + (wrist_training_lvl + 1) + '.png" id="imagesize">' + '</div><span class="tooltiptext">Doubles Milk per click</span></button></div>';
			}
			else{
				WRISTTRAINING = '<div class="tooltip"><button onmousedown="Wrist_training()" class="button_grey"><div class="left"><br />Wrist Training<div style="font-weight:bold;">' + Arbitrary_addsuffix(wrist_traingin_cost) + ' Milk</div>Level: ' + Arbitrary_addsuffix(wrist_training_lvl + 1) + '<br /><br /></div><div class="right">' + '<img src="pics/arm_' + (wrist_training_lvl + 1) + '.png" id="imagesize">' + '</div><span class="tooltiptext">Doubles Milk per click</span></button></div>';
			};
		}
		else{
			WRISTTRAINING = '';
		};
	}
	else{
		WRISTTRAINING = '';
	};
	UPGRADES = MMUPGRADES + WRISTTRAINING;
	document.getElementById('UPGRADES').innerHTML = UPGRADES;
};
var MM_upgrade_img = '<img src="pics/runes/rune(1).png" id="imagesize">';
function MM_UPGRADE_IMG(){
	if(MM_upgrade_level <= 104){
		MM_upgrade_img = '<img src="pics/runes/rune(' + MM_upgrade_level + ').png" id="imagesize">';
	}
	else{
		MM_upgrade_img = '<img src="pics/runes/rune(' + 104 + ').png" id="imagesize">';
	};
};
function MilkMaid_upgrade(){
	if(Milk >= MM_upgrade_cost){
		Milk = Milk - MM_upgrade_cost;
		MM_upgrade_level = MM_upgrade_level + 1;
	};
	MILK_();
	document.getElementById('UPGRADES').innerHTML = UPGRADES;
};
var wrist_training_lvl = 0;
var wrist_training_boost = 0;
function Wrist_training(){
	if(Milk >= wrist_traingin_cost){
		Milk = Milk - wrist_traingin_cost;
		wrist_training_lvl = wrist_training_lvl + 1;
	};
	MILK_();
	Wrist_training_power_calculator();
	document.getElementById('UPGRADES').innerHTML = UPGRADES;
};
function Wrist_training_power_calculator(){
	if(wrist_training_lvl > 0){
		ClickPower = Math.pow(2, wrist_training_lvl);
	}
	if(wrist_training_lvl > 3){
		ClickPower = Math.pow(2, wrist_training_lvl) + MPS_out * 0.01;
	}
	else{
		ClickPower = ClickPower;
	};
};

