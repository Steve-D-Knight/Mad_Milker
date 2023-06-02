// this file is to move a bunch of stuff out of main.js

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
var cows = 			[]; // NEEDS to be saved (is saved)
var cowsenabled = 	[];	// NEEDS to be saved (is saved)
var bulls = 		[]; // NEEDS to be saved (is saved)
var cowcost = 		[]; // don't save (calculation)
var basecowcost = 	[]; // don't save (won't change)
var boughtcows = 	[];	// NEEDS to be saved (is saved)
var bullcost = []; // don't save (calculation)
var basebullcost = []; // don't save (won't change)
var boughtbulls = 	[];	// NEEDS to be saved (is saved)
var Total_cows = []; // don't save (calculation)
var Total_ALL_cows = 1;// don't save (calculation)			
var Total_bulls = 	[]; // don't save (calculation)
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
var Specialists = []; // NEEDS to be saved (is saved)
var Specialists_Cost = []; // don't save (calculation)
var Specialists_Cost_Base = []; // don't save (won't change)
var Specialist_Level = []; // NEEDS to be saved (is saved)
var Specialist_training_Unlock = 1; // NEEDS to be saved (is saved)
var Total_Specialists = 0; // don't save (calculation)
var Spec_Power = [];

// this for loop initializes all of the variables that need an array the same length as the number of cows
for (var spec_power_index = 0; spec_power_index < NumberofCOWS+1; spec_power_index++) {
	Spec_Power[spec_power_index] = Math.pow(5, spec_power_index);	
	Specialists_Cost[spec_power_index] = (spec_power_index + 1) * 100;
	Specialists_Cost_Base[spec_power_index] = (spec_power_index + 1) * 100;
	Specialists[spec_power_index] = 0;
	Total_bulls[spec_power_index] = 0;
	Total_cows[spec_power_index] = 0;
	boughtbulls[spec_power_index] = 0;
	boughtcows[spec_power_index] = 0;
	bulls[spec_power_index] = 0;
	if(spec_power_index == 0){
		cows[spec_power_index] = 1;
		cowsenabled[spec_power_index] = 1;
		cowcost[spec_power_index] = 55;
		basecowcost[spec_power_index] = 55;
		bullcost[spec_power_index] = 500;
		basebullcost[spec_power_index] = 500;
	}
	else if(spec_power_index == 1){
		cows[spec_power_index] = 0;
		cowsenabled[spec_power_index] = 0;
		cowcost[spec_power_index] = (spec_power_index) * 100;
		basecowcost[spec_power_index] = (spec_power_index) * 100;
		bullcost[spec_power_index] = 2e3;
		basebullcost[spec_power_index] = 2e3;
	}
	else{
		cows[spec_power_index] = 0;
		cowsenabled[spec_power_index] = 0;
		cowcost[spec_power_index] = (spec_power_index) * 100;
		basecowcost[spec_power_index] = (spec_power_index) * 100;
		bullcost[spec_power_index] = Math.pow(10,(spec_power_index + 2));
		basebullcost[spec_power_index] = Math.pow(10,(spec_power_index + 2));
	};
};

