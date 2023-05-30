var SAVING;
var save = 0;

function save_(){
	var date_at_save = new Date();
	var time_at_save = date_at_save.getTime();
	save = {
		Milk : Milk,
		MilkMaids : MilkMaids,
		cows : cows,
		cowsenabled: cowsenabled,
		bulls: bulls,
		boughtcows: boughtcows,
		boughtbulls: boughtbulls,
		Specialists: Specialists,
		played_seconds: played_seconds,
		Spec_Level : Spec_Level,
		MM_upgrade_level : MM_upgrade_level,
		Total_clicks : Total_clicks,
		wrist_training_lvl : wrist_training_lvl,
		ClickPower : ClickPower,
		Time2Cow_total : Time2Cow_total,
		Start_time : Start_time,
		Spec_names : Spec_names,
		Active_time : Active_time,
		Time2Cow_active : Time2Cow_active,
		MPS_out_calc : MPS_out_calc,
		time_at_save : time_at_save,
	};
	localStorage.setItem("save",JSON.stringify(save));
}
var savegame = 0;
var played_seconds = 0;
var played = 0;
var played_time = 0;
var date = new Date();
var Start_time = date.getTime();
var current_time = 0;
var Load_start_time = date.getTime();
var played_last_session = 0;
function load(){
	savegame = JSON.parse(localStorage.getItem("save"));
		if (typeof savegame.Milk !== "undefined") Milk = savegame.Milk;
		if (typeof savegame.MilkMaids !== "undefined") MilkMaids = savegame.MilkMaids;
		if (typeof savegame.cows !== "undefined") cows = savegame.cows;
		if (typeof savegame.cowsenabled !== "undefined") cowsenabled = savegame.cowsenabled;
		if (typeof savegame.bulls !== "undefined") bulls = savegame.bulls;
		if (typeof savegame.boughtcows !== "undefined") boughtcows = savegame.boughtcows;
		if (typeof savegame.boughtbulls !== "undefined") boughtbulls = savegame.boughtbulls;
		if (typeof savegame.Specialists !== "undefined") Specialists = savegame.Specialists;
		if (typeof savegame.played_seconds !== "undefined") played_seconds = savegame.played_seconds;
		if (typeof savegame.Spec_Level !== "undefined") Spec_Level = savegame.Spec_Level;
		if (typeof savegame.MM_upgrade_level !== "undefined") MM_upgrade_level = savegame.MM_upgrade_level;
		if (typeof savegame.Total_clicks !== "undefined") Total_clicks = savegame.Total_clicks;
		if (typeof savegame.wrist_training_lvl !== "undefined") wrist_training_lvl = savegame.wrist_training_lvl;
		if (typeof savegame.ClickPower !== "undefined") ClickPower = savegame.ClickPower;
		if (typeof savegame.Time2Cow_total !== "undefined") Time2Cow_total = savegame.Time2Cow_total;
		if (typeof savegame.Start_time !== "undefined") Start_time = savegame.Start_time;
		if (typeof savegame.Spec_names !== "undefined") Spec_names = savegame.Spec_names;
		if (typeof savegame.Active_time !== "undefined") Active_time = savegame.Active_time;
		if (typeof savegame.Time2Cow_active !== "undefined") Time2Cow_active = savegame.Time2Cow_active;
		if (typeof savegame.MPS_out_calc !== "undefined") MPS_out_calc = savegame.MPS_out_calc;
		if (typeof savegame.time_at_save !== "undefined") time_at_save = savegame.time_at_save;
	
	Load_start_time = date.getTime();
	Active_time_load = Active_time;
	initialisation = 1;
}
function delsave(){
	localStorage.removeItem("save")
}
var AUTOSAVE = 0;
var AUTOSAVE_DATA = '<div><button onmousedown="autosave()" class="button_grey">Turn Autosave on<br />(Currently off)<br />Autosaves<br />every 5s</button></div>';
function autosave(){
	save_();
	if(AUTOSAVE == 0){
		AUTOSAVE = 1;
		AUTOSAVE_DATA = '<div><button onmousedown="autosave()" class="button_notgrey">Turn Autosave off<br />(Currently on)<br />Autosaves<br />every 5s</button></div>';
	}
	else{
		AUTOSAVE = 0;
		AUTOSAVE_DATA = '<div><button onmousedown="autosave()" class="button_grey">Turn Autosave on<br />(Currently off)<br />Autosaves<br />every 5s</button></div>';
	};
};
window.setInterval(function reproduction(){
	if(AUTOSAVE == 1){
		save_();
	};
}, 5000);
var MPS_counter = 0;
var MPS_1 = 0;
var MPS_out = 0;
var MPS_out_calc;
window.setInterval(function MilkPS(){
	if(MPS_counter <= 0){
		MPS_1 = Milk;
		MPS_counter = MPS_counter + 1;
	}
	else if(MPS_counter >= 3){
		if((Milk - MPS_1) > 0){
		MPS_out = Milk - MPS_1;
		}else{
			MPS_out = 0;
		};
		MPS_counter = 0;
	}
	else{
		MPS_counter = MPS_counter + 1;
	};
	MPS_out_calc = Arbitrary_addsuffix(MPS_out);
	Wrist_training_power_calculator();
	MILK_();
}, 250);
var Time2Cow_total = [0];
var TimebtwnCow = [0];
var Time2Cow_active = [0];
var cowtimer = 0;
var cow2time = 0;
var Live_time = 0;
var Live_played = 0;
var Active_time = 0;
var Active_time_load = 0;
function Time_to_HTML(TIME){
	var a;
	if(Math.floor(TIME / (3600 * 24)) < 10){
		a = '&nbsp;&nbsp;' + Math.floor(TIME / (3600 * 24));
	}else{
		a = Math.floor(TIME / (3600 * 24));
	};
	var b;
	if(Math.floor(TIME % (3600 * 24) / 3600)< 10){
		b = '&nbsp;&nbsp;' + Math.floor(TIME % (3600 * 24) / 3600);
	}else{
		b = Math.floor(TIME % (3600 * 24) / 3600);
	};
	var c
	if(Math.floor(TIME % 3600 / 60)< 10){
		c = '&nbsp;&nbsp;' + Math.floor(TIME % 3600 / 60);
	}else{
		c = Math.floor(TIME % 3600 / 60);
	};
	var d;
	if(Math.floor(TIME % 60)< 10){
		d = '&nbsp;&nbsp;' + Math.floor(TIME % 60);
	}else{
		d = Math.floor(TIME % 60);
	};
	return  a + '&nbsp;d : ' + b + '&nbsp;h : ' + c + '&nbsp;m : ' + d + '&nbsp;s';
};
window.setInterval(function Stats(){
	var d = new Date();
	var n = d.getTime();
	for(i = 0; i < NumberofCOWS; i++){
		TimebtwnCow[i] = Time2Cow_active[i] - Time2Cow_active[i - 1];
		if (cowsenabled[i] == 0){
			cow2time = i;
			break;
		};
	};
	current_time = n - Start_time;
	played_seconds = current_time / 1000;
	Time2Cow_total[cow2time] = played_seconds;
	Live_time = (n - Load_start_time) / 1000;
	Active_time = Active_time_load + Live_time;
	Time2Cow_active[cow2time] = Active_time;
	STATS = '<table id="stats_table"><tbody><tr><td>Stats</td><td><button onmousedown="number_suffix_change()" class="SI_change_button">Change Number Suffix</button></td></tr><tr><td>Totals:</td></tr><tr><td>Clicks: </td><td>' + Arbitrary_addsuffix(Total_clicks) + '</td></tr><tr><td>Cows:</td><td>' + Arbitrary_addsuffix(Total_ALL_cows) + '</td></tr><tr><td>Bulls:</td><td>' + Arbitrary_addsuffix(Total_ALL_bulls) + '</td></tr><tr><td>Specialists:</td><td>' + Arbitrary_addsuffix(Total_Specialists) + '</td></tr><tr><td>Milked Cows:</td><td>' + MILKEDCOWS + '</td></tr><tr><td>Unmilked Cows:</td><td>' + UNMILKEDCOWS + '</td></tr><tr><td>Game Started:</td><td>' + Time_to_HTML(played_seconds) + ' Ago</td></tr><tr><td>Total Time Active:</td><td>' + Time_to_HTML(Active_time) + '</td></tr><tr><td>Played This Session:</td><td>' + Time_to_HTML(Live_time) + '</td></tr><tr><td>Time to unlock:</td><td>&nbsp;</td></tr>';
	var nextcowlatch = 0;
	for(k = NumberofCOWS; k >= 0; k--){
		if(cowsenabled[k] != 0){
			if(nextcowlatch == 0){
				STATS = STATS + '<tr><td>Cow ' + (k+1) + '/' + (NumberofCOWS + 1) + ': </td><td>--</td></tr>';
				nextcowlatch = 1;
			};
			if(k > 0){
				STATS = STATS + '<tr><td>' + CowInfo[k].Name + ':</td><td>Total: ' + Time_to_HTML(Time2Cow_total[k]) + '</td><td>&nbsp;&nbsp;/&nbsp;&nbsp;Active: ' + Time_to_HTML(Time2Cow_active[k]) + '</td><td>&nbsp;&nbsp;/&nbsp;&nbsp;Time between cows: ' + Time_to_HTML(TimebtwnCow[k]) + '</td></tr>';
			};
		}
	};
	STATS = STATS + '</tbody></table>';
	if(Visible_page == 0){
		STATS = '';
	}
	else{
		STATS = STATS;
	};
	// document.getElementById('STATS').innerHTML = STATS;
}, 50);

var Number_suffix = 0;
function number_suffix_change(){
	Number_suffix = !Number_suffix;
};


//This runs when the game is reset and means that the last save should be auto loaded and then auto save should be turned on.
load(); //loads the save game
autosave(); //Changes the state of the autosave, which should be off, so should now be on.