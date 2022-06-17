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


// This is the function that adds the SI suffixes to any number.
var suffix = ['', 'k', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc', 'Ud', 'Dd', 'Td', 'Qad', 'Qid', 'Sxd', 'Spd', 'Ocd', 'Nod', 'Vg', 'Uvg', 'Dvg', 'Tvg', 'Qavg', 'Qivg', 'Sxvg', 'Spvg', 'Ocvg', 'Novg', 'Tg', 'Utg', 'Dtg', 'Qatg', 'Qitg', 'Sxtg', 'Sptg', 'Octg', 'Notg', 'G', 'Ug', 'Dg', 'Tg', 'Qag', 'Qig', 'Sxg', 'Spg', 'Ocg', 'Nog', 'Quite a lot'];
function Arbitrary_addsuffix(value){
	if(Number_suffix == 0){
		if(value < 1000){
			return Math.floor(value);
		}
		else{
			var tier0 = Math.log10(value) / 3 | 0;
			var suffix_symble0 = suffix[tier0];
			var scale0 = Math.pow(10, tier0 * 3);
			var scaled0 = value / scale0;
			return scaled0.toFixed(2) + suffix_symble0;
		};
	}
	else{
		if(value < 1000){
			return Math.floor(value);
		}
		else{
			return value.toExponential(2);
		};
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
};
