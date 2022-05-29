var cowcost_calc = [];
var bullcost_calc = [];
var Specialists_Cost_calc = [];
var Spec_Power_calc = [];
var Spec_Power_calc2 = [];
var Milkmaidcost_calc = 0;
var MM_COST_10_calc = 0;
var MM_COST_100_calc = 0;
var Specialist_training_Cost_calc = [];
var unmilkedcows = 0;
var unmilkedcows_calc = 0;
var milkmaid_output_calc1 = 0;
var milkmaid_output_calc2 = 0;
var milkmaid_power_calc = 0;
var MM_upgrade_cost_calc = 0;

function Arbitrary_addsuffix(value){
	if(value < 1000){
		return Math.floor(value);
	}
	else{
		var tier0 = Math.log10(value) / 3 | 0;
		var suffix_symble0 = suffix[tier0];
		var scale0 = Math.pow(10, tier0 * 3);
		var scaled0 = value / scale0;
		return scaled0.toFixed(3) + suffix_symble0;
	};
};


function COSTS(cost_num){
	cowcost[cost_num] = Math.floor(basecowcost[cost_num] * Math.pow(1.1,boughtcows[cost_num]));
	bullcost[cost_num] = Math.floor(basebullcost[cost_num] * Math.pow(1.1,boughtbulls[cost_num]));
	//Specialists_Cost[cost_num] = Math.floor(Specialists_Cost_Base[cost_num] * Math.pow(1.1,Specialists[cost_num]));
	Milkmaidcost = Math.floor(BaseMilkmaidcost * Math.pow(1.008,MilkMaids));
	Specialist_training_Cost[cost_num] = Math.floor(Specialist_training_Cost_Base[cost_num] * Math.pow(1.5,Spec_Level[cost_num]));
	MM_cost_10_();
	MM_cost_100_();
	addsuffix(cost_num);
};
function addsuffix(cost_num_suffix){		
	var tier0 = Math.log10(cowcost[cost_num_suffix]) / 3 | 0;
	var tier1 = Math.log10(bullcost[cost_num_suffix]) / 3 | 0;
	var tier2 = Math.log10(Specialists_Cost[cost_num_suffix]) / 3 | 0;
	var tier3 = Math.log10(Spec_Power[cost_num_suffix] * (Spec_Level[cost_num_suffix] * Spec_train_power_base[cost_num_suffix])) / 3 | 0;
	var tier4 = Math.log10(Milkmaidcost) / 3 | 0;
	var tier5 = Math.log10(MM_COST_10) / 3 | 0;
	var tier6 = Math.log10(MM_COST_100) / 3 | 0;
	var tier7 = Math.log10(Specialist_training_Cost[cost_num_suffix]) / 3 | 0;
	var tier8 = Math.log10(Spec_Power[cost_num_suffix]) / 3 | 0;
	var tier9 = Math.log10(unmilkedcows - MilkMaids) / 3 | 0;
	var tier10 = Math.log10((unmilkedcows) * MilkMaidBonus) / 3 | 0;
	var tier11 = Math.log10(MilkMaids * MilkMaidBonus) / 3 | 0;
	var tier12 = Math.log10(MilkMaidBonus) / 3 | 0;
	var tier13 = Math.log10(MM_upgrade_cost) / 3 | 0;
	var suffix_symble0 = suffix[tier0];
	var suffix_symble1 = suffix[tier1];
	var suffix_symble2 = suffix[tier2];
	var suffix_symble3 = suffix[tier3];
	var suffix_symble4 = suffix[tier4];
	var suffix_symble5 = suffix[tier5];
	var suffix_symble6 = suffix[tier6];
	var suffix_symble7 = suffix[tier7];
	var suffix_symble8 = suffix[tier8];
	var suffix_symble9 = suffix[tier9];
	var suffix_symble10 = suffix[tier10];
	var suffix_symble11 = suffix[tier11];
	var suffix_symble12 = suffix[tier12];
	var suffix_symble13 = suffix[tier13];
	var scale0 = Math.pow(10, tier0 * 3);
	var scale1 = Math.pow(10, tier1 * 3);
	var scale2 = Math.pow(10, tier2 * 3);
	var scale3 = Math.pow(10, tier3 * 3);
	var scale4 = Math.pow(10, tier4 * 3);
	var scale5 = Math.pow(10, tier5 * 3);
	var scale6 = Math.pow(10, tier6 * 3);
	var scale7 = Math.pow(10, tier7 * 3);
	var scale8 = Math.pow(10, tier8 * 3);
	var scale9 = Math.pow(10, tier9 * 3);
	var scale10 = Math.pow(10, tier10 * 3);
	var scale11 = Math.pow(10, tier11 * 3);
	var scale12 = Math.pow(10, tier12 * 3);
	var scale13 = Math.pow(10, tier13 * 3);
	var scaled0 = cowcost[cost_num_suffix] / scale0;
	var scaled1 = bullcost[cost_num_suffix] / scale1;
	var scaled2 = Specialists_Cost[cost_num_suffix] / scale2;
	var scaled3 = (Spec_Power[cost_num_suffix] * (Spec_Level[cost_num_suffix] * Spec_train_power_base[cost_num_suffix])) / scale3;
	var scaled4 = Milkmaidcost / scale4;
	var scaled5 = MM_COST_10 / scale5;
	var scaled6 = MM_COST_100 / scale6;
	var scaled7 = Specialist_training_Cost[cost_num_suffix] / scale7;
	var scaled8 = Spec_Power[cost_num_suffix] / scale8;
	var scaled9 = (unmilkedcows - MilkMaids) / scale9;
	var scaled10 = (unmilkedcows) * MilkMaidBonus / scale10;
	var scaled11 = (MilkMaids * MilkMaidBonus) / scale11;
	var scaled12 = (MilkMaidBonus) / scale12;
	var scaled13 = (MM_upgrade_cost) / scale13
	if(cowcost[cost_num_suffix] >= 1000){
		cowcost_calc[cost_num_suffix] = scaled0.toFixed(3) + suffix_symble0;
	}
	else{
		cowcost_calc[cost_num_suffix] = cowcost[cost_num_suffix];
	};
	if(bullcost[cost_num_suffix] >= 1000){
		bullcost_calc[cost_num_suffix] = scaled1.toFixed(3) + suffix_symble1;
	}
	else{
		bullcost_calc[cost_num_suffix] = bullcost[cost_num_suffix];
	};
	if(Specialists_Cost[cost_num_suffix] >= 1000){
		Specialists_Cost_calc[cost_num_suffix] = scaled2.toFixed(1) + suffix_symble2;	
	}
	else{
		Specialists_Cost_calc[cost_num_suffix] = Specialists_Cost[cost_num_suffix];	
	};
	if((Spec_Power[cost_num_suffix] * (Spec_Level[cost_num_suffix] * Spec_train_power_base[cost_num_suffix])) >= 1000){
		Spec_Power_calc[cost_num_suffix] = scaled3.toFixed(2) + suffix_symble3;	
	}
	else{
		Spec_Power_calc[cost_num_suffix] = (Spec_Power[cost_num_suffix] * (Spec_Level[cost_num_suffix] * Spec_train_power_base[cost_num_suffix]));	
	};
	if(Milkmaidcost >= 1000){
		Milkmaidcost_calc = scaled4.toFixed(3) + suffix_symble4;	
	}
	else{
		Milkmaidcost_calc = Milkmaidcost;	
	};
	if(MM_COST_10 >= 1000){
		MM_COST_10_calc = scaled5.toFixed(2) + suffix_symble5;	
	}
	else{
		MM_COST_10_calc = MM_COST_10;	
	};
	if(MM_COST_100 >= 1000){
		MM_COST_100_calc = scaled6.toFixed(2) + suffix_symble6;	
	}
	else{
		MM_COST_100_calc = MM_COST_100;	
	};	
	if(Specialist_training_Cost[cost_num_suffix] >= 1000){
		Specialist_training_Cost_calc[cost_num_suffix] = scaled7.toFixed(3) + suffix_symble7;	
	}
	else{
		Specialist_training_Cost_calc[cost_num_suffix] = Specialist_training_Cost[cost_num_suffix];
	};		
	Spec_Power_calc2[cost_num_suffix] = scaled8.toFixed(3) + suffix_symble8;			
	if((unmilkedcows - MilkMaids) >= 1000){
		unmilkedcows_calc = scaled9.toFixed(1) + suffix_symble9;	
	}
	else{
		unmilkedcows_calc = (unmilkedcows - MilkMaids);
	};
	if(((unmilkedcows) * MilkMaidBonus) >= 1000){
		milkmaid_output_calc1 = scaled10.toFixed(1) + suffix_symble10;	
	}
	else{
		milkmaid_output_calc1 = (unmilkedcows) * MilkMaidBonus;
	};
	if((MilkMaids * MilkMaidBonus) >= 1000){
		milkmaid_output_calc2 = scaled11.toFixed(2) + suffix_symble11;	
	}
	else{
		milkmaid_output_calc2 = (MilkMaids * MilkMaidBonus);
	};
	if((MilkMaidBonus) >= 1000){
		milkmaid_power_calc = scaled12.toFixed(2) + suffix_symble12;	
	}
	else{
		milkmaid_power_calc = MilkMaidBonus;
	};
	if((MM_upgrade_cost) >= 1000){
		MM_upgrade_cost_calc = scaled13.toFixed(2) + suffix_symble13;	
	}
	else{
		MM_upgrade_cost_calc = MM_upgrade_cost;
	};

	
	
	
	
	
	
	
	
	
	
	
	
	
};