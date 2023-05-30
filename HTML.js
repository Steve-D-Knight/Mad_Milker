var initialisation = 0;
var HTML = '<div id="HTML">Loading</div>';
var HEADER = '<div><button>test</button></div>'
var LEFTSTUFF = '<div>LEFTSTUFF test</div>'
var MAINSTUFF = '<div>MAINSTUFF test</div>'
var RIGHTSTUFF = '<div>RIGHTSTUFF test</div>'



window.setInterval(function HTML_REFRESH(){
    LEFTSTUFF = '<div id="LEFTSTUFF"><div id="LEFTSTUFF_inner">'+ MILK + MILKMAID + SAVING + '</div></div>';

    HEADER = '' 
    if(Visible_page == 0){
        HEADER = HEADER + '<button onmousedown="change_tab_button(1)" class="button_grey" id="HTML_cell">Statistics</button>';
        HEADER = HEADER + '<button onmousedown="change_tab_button(2)" class="button_grey" id="HTML_cell">Achievments</button>';
        MAINSTUFF = '<div id="MAINSTUFF"><div id="MAINSTUFF_inner">';
        for(sloop = NumberofCOWS; sloop >= 0; sloop--){
            MAINSTUFF = MAINSTUFF + '<div id="MAINSTUFF_cell">' + COWS_DATA[sloop] + '</div>';
            MAINSTUFF = MAINSTUFF + '<div id="MAINSTUFF_cell">' + SPECIALISTS_DATA[sloop] + '</div>';
            MAINSTUFF = MAINSTUFF + '<div id="MAINSTUFF_cell">' + '<div class="div-table-col2">' + SPECIALISTS_DATA_xTEN[sloop] + SPECIALISTS_DATA_x100[sloop] + SPECIALISTS_DATA_xALL[sloop] + '</div>' + '</div>';
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
    HTML = HTML + '<div id="HTML_cell">' + RIGHTSTUFF + '</div>'+ '</div>';
    document.getElementById('HTML').innerHTML = HTML;
}, 15);

