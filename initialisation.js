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
var Cow_science_cost = [];
// this for loop initializes all of the variables that need an array the same length as the number of cows
for (var i = 0; i < NumberofCOWS + 1; i++) {
	Spec_Power[i] = Math.pow(5, i);	
	Specialists_Cost[i] = (i + 1) * 100;
	Specialists_Cost_Base[i] = (i + 1) * 100;
	Specialists[i] = 0;
	Total_bulls[i] = 0;
	Total_cows[i] = 0;
	boughtbulls[i] = 0;
	boughtcows[i] = 0;
	bulls[i] = 0;
	if(i == 0){
		cows[i] = 1;
		cowsenabled[i] = 1;
		cowcost[i] = 55;
		basecowcost[i] = 55;
		bullcost[i] = 500;
		basebullcost[i] = 500;
		Cow_science_cost[i] = 0;
	}
	else if(i == 1){
		cows[i] = 0;
		cowsenabled[i] = 0;
		cowcost[i] = (i) * 100;
		basecowcost[i] = (i) * 100;
		bullcost[i] = 2e3;
		basebullcost[i] = 2e3;
		Cow_science_cost[i] = 10;
	}
	else{
		cows[i] = 0;
		cowsenabled[i] = 0;
		cowcost[i] = (i) * 100;
		basecowcost[i] = (i) * 100;
		bullcost[i] = Math.pow(10,(i + 2));
		basebullcost[i] = Math.pow(10,(i + 2));
		Cow_science_cost[i] = 10;
	};
};

