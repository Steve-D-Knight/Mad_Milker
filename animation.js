var Sprite_animation = 0;




function SPRITE_animation(i){
	if(CowInfo[i].Is_Sprite == 'NO'){
		return '<img src="pics/cow/cow/' + CowInfo[i].Cow_image +'" id="imagesize">';
	}
	else{
		Sprite_animation++;
        var animation_length = 20;
        if(Sprite_animation >= animation_length){
			Sprite_animation = 0;
			return '<div id="sprite_container"><div id="Sprite1"><img src="pics/cow/' + CowInfo[i].Cow_image +'" id="imagesize"></div></div>';
		}
		else if(Sprite_animation >= (animation_length/2)){
			return '<div id="sprite_container"><div id="Sprite1"><img src="pics/cow/' + CowInfo[i].Cow_image +'" id="imagesize"></div></div>';
		}
		else if(Sprite_animation >= 0){
			return '<div id="sprite_container"><div id="Sprite2"><img src="pics/cow/' + CowInfo[i].Cow_image +'" id="imagesize"></div></div>';
		};
	};

};


