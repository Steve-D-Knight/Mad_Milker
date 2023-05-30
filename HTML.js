var initialisation = 0;
var HTML = '<div id="HTML">Loading</div>';
var HEADER = '<div><button>test</button></div>'
var LEFTSTUFF = '<div>LEFTSTUFF test</div>'
var MAINSTUFF = '<div>MAINSTUFF test</div>'
var RIGHTSTUFF = '<div>RIGHTSTUFF test</div>'



window.setInterval(function HTML_REFRESH(){
    LEFTSTUFF = '<div id="LEFTSTUFF"><div id="LEFTSTUFF_inner">'+ MILK + MILKMAID + SAVING + '</div></div>';
    MAINSTUFF = '<div id="MAINSTUFF"><div id="MAINSTUFF_inner">';
    for(sloop = NumberofCOWS; sloop >= 0; sloop--){
        MAINSTUFF = MAINSTUFF + '<div id="MAINSTUFF_cell">' + COWS_DATA[sloop] + '</div>';
        MAINSTUFF = MAINSTUFF + '<div id="MAINSTUFF_cell">' + SPECIALISTS_DATA[sloop] + '</div>';
        MAINSTUFF = MAINSTUFF + '<div id="MAINSTUFF_cell">' + SPECIALIST_TRAINING_DATA[sloop] + '</div>';
        MAINSTUFF = MAINSTUFF + '<div id="MAINSTUFF_cell">' + '<div class="div-table-col2">' + SPECIALISTS_DATA_xTEN[sloop] + SPECIALISTS_DATA_x100[sloop] + SPECIALISTS_DATA_xALL[sloop] + '</div>' + '</div>';
        MAINSTUFF = MAINSTUFF + '<div id="MAINSTUFF_cell">' + BULLS_DATA[sloop] + '</div>';
    };
    MAINSTUFF = MAINSTUFF + '</div></div>'

    RIGHTSTUFF = UPGRADES;

    HTML = '<div id="HTML">';
    HTML = HTML + '<div id="HTML_cell">' + LEFTSTUFF + '</div>';
    HTML = HTML + '<div id="HTML_cell">' + MAINSTUFF + '</div>';
    HTML = HTML + '<div id="HTML_cell">' + RIGHTSTUFF + '</div>'+ '</div>';
    document.getElementById('HTML').innerHTML = HTML;
}, 15);

