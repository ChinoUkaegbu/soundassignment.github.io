


window.onload = function(argument) {
	let audioPlayer = document.getElementById('player');
	audioPlayer.loop = true;

	//Click anywhere to trigger the sound
	window.addEventListener('click', () => {
	  audioPlayer.play();
	});

	// var lyric = "i couldn't take it couldn't stand another minute couldn't bear another day without you in it";
	var lyric = "First Name Last Name Age Email Phone Michael Adams 22 m.adams@randatmail.com 268-6895-74 Henry Mitchell 24 h.mitchell@randatmail.com 410-7017-77 Lucy Richardson 25 l.richardson@randatmail.com 796-6973-00 Eric Hill 18 e.hill@randatmail.com 074-7493-97 Chelsea Nelson 25 c.nelson@randatmail.com 891-1585-70 Alberta Holmes 26 a.holmes@randatmail.com 209-6277-56 Olivia Hawkins 26 o.hawkins@randatmail.com 616-5674-39 Paige Ferguson 24 p.ferguson@randatmail.com 585-7939-83 Jacob Roberts 29 j.roberts@randatmail.com 483-5781-32 Sofia Rogers 29 s.rogers@randatmail.com 279-1065-47 Max Grant 18 m.grant@randatmail.com 803-4774-10 Edith Kelly 29 e.kelly@randatmail.com 226-0722-43 Brianna Cooper 19 b.cooper@randatmail.com 230-1440-76 Alissa Morris 23 a.morris@randatmail.com 771-3229-10 Belinda Perkins 23 b.perkins@randatmail.com 890-5000-86 Connie Dixon 24 c.dixon@randatmail.com 293-7052-32 Amber Morris 28 a.morris@randatmail.com 283-6579-67 Elian Douglas 25 e.douglas@randatmail.com 764-1442-63 Preston Cameron 25 p.cameron@randatmail.com 621-7412-44 Melanie Ellis 29 m.ellis@randatmail.com 813-8840-96 Paige Watson 18 p.watson@randatmail.com 028-7280-48 Belinda Spencer 28 b.spencer@randatmail.com 051-5894-18 Paige Farrell 30 p.farrell@randatmail.com 089-0575-41 Tess Turner 22 t.turner@randatmail.com 762-7464-16 Tess Scott 18 t.scott@randatmail.com 404-8321-60 Henry Warren 20 h.warren@randatmail.com 976-2493-73 Lilianna Douglas 25 l.douglas@randatmail.com 990-1844-44 Justin Payne 28 j.payne@randatmail.com 068-4138-84 Henry Holmes 19 h.holmes@randatmail.com 141-3330-89 Cadie West 20 c.west@randatmail.com 922-0849-13 Byron Payne 18 b.payne@randatmail.com 142-5512-39 Chelsea Harper 29 c.harper@randatmail.com 297-5563-95 Dale Thomas 27 d.thomas@randatmail.com 388-5611-87 Brad Harper 22 b.harper@randatmail.com 810-6086-96 Alford Murray 28 a.murray@randatmail.com 793-4099-60 Edgar Lloyd 29 e.lloyd@randatmail.com 823-4533-95 Carina Howard 30 c.howard@randatmail.com 786-8545-15 Maya Campbell 27 m.campbell@randatmail.com 939-2929-72 Julia Bailey 19 j.bailey@randatmail.com 844-1166-98 Lana Morrison 19 l.morrison@randatmail.com 673-9387-84 William Clark 18 w.clark@randatmail.com 499-7153-42 Miller Hawkins 22 m.hawkins@randatmail.com 324-3897-11 William Henderson 19 w.henderson@randatmail.com 799-7164-97 Anna Crawford 26 a.crawford@randatmail.com 169-9368-58 Roman Jones 30 r.jones@randatmail.com 791-7477-66 Garry Cunningham 27 g.cunningham@randatmail.com 040-3865-81 Steven Hill 29 s.hill@randatmail.com 503-7999-02 Olivia Cameron 20 o.cameron@randatmail.com 738-8708-23 Lyndon Stewart 21 l.stewart@randatmail.com 586-6642-54 Eleanor Cole 29 e.cole@randatmail.com 054-6604-02 Harold Hill 29 h.hill@randatmail.com 376-0061-47 Byron Cameron 25 b.cameron@randatmail.com 942-0662-50 Sofia Miller 27 s.miller@randatmail.com 814-1683-46 Dainton Ross 29 d.ross@randatmail.com 554-2776-73 Sabrina Holmes 18 s.holmes@randatmail.com 077-7663-23 Adrianna Holmes 28 a.holmes@randatmail.com 637-4718-05 Kirsten Spencer 20 k.spencer@randatmail.com 136-6038-13 Eric Wells 20 e.wells@randatmail.com 264-1611-04 Frederick Walker 26 f.walker@randatmail.com 167-5208-18 Adele Payne 19 a.payne@randatmail.com 587-6907-84 Grace Davis 23 g.davis@randatmail.com 859-3094-25 Elian Johnston 23 e.johnston@randatmail.com 587-9955-47 Ellia Mason 26 e.mason@randatmail.com 761-7060-48 Kristian Clark 23 k.clark@randatmail.com 177-5357-62 Charlie Robinson 22 c.robinson@randatmail.com 139-7561-50 Roman Hill 23 r.hill@randatmail.com 917-5477-04 Miller Fowler 19 m.fowler@randatmail.com 068-2328-19 Miley Parker 26 m.parker@randatmail.com 923-0391-05 David Howard 28 d.howard@randatmail.com 348-3130-19 Jessica Bailey 30 j.bailey@randatmail.com 308-6685-60 Lenny Fowler 18 l.fowler@randatmail.com 374-0812-46 Chloe Roberts 25 c.roberts@randatmail.com 616-0919-86 Dominik Reed 27 d.reed@randatmail.com 848-3702-16 Lucy Harper 27 l.harper@randatmail.com 918-2056-84 Ada Myers 30 a.myers@randatmail.com 438-0446-64 Lilianna Kelley 22 l.kelley@randatmail.com 083-6995-14 Vanessa Holmes 23 v.holmes@randatmail.com 012-3414-36 Maya Murray 22 m.murray@randatmail.com 009-9683-39 Tony Barrett 22 t.barrett@randatmail.com 049-8611-93 Carl Andrews 26 c.andrews@randatmail.com 953-8030-42 Elise Russell 28 e.russell@randatmail.com 173-5837-56 Eleanor Bailey 19 e.bailey@randatmail.com 789-4167-07 Jordan Johnston 20 j.johnston@randatmail.com 461-7204-59 Walter Mitchell 25 w.mitchell@randatmail.com 420-7348-97 Alissa Russell 23 a.russell@randatmail.com 076-3455-75 Elise Sullivan 19 e.sullivan@randatmail.com 313-1456-47 Michael Campbell 22 m.campbell@randatmail.com 006-4074-02 Daryl Davis 30 d.davis@randatmail.com 210-4530-76 Fiona Harrison 22 f.harrison@randatmail.com 036-3280-47 Myra Carter 28 m.carter@randatmail.com 744-5531-05 Ada Davis 20 a.davis@randatmail.com 273-6441-75 Alisa Holmes 27 a.holmes@randatmail.com 378-7291-12 Jessica Brown 23 j.brown@randatmail.com 074-8803-54 Lucas Warren 23 l.warren@randatmail.com 026-0121-75 Amanda Richards 18 a.richards@randatmail.com 419-7819-99 Tiana Richardson 26 t.richardson@randatmail.com 234-7540-01 Kimberly Gray 21 k.gray@randatmail.com 082-4891-09 Nicholas Hamilton 28 n.hamilton@randatmail.com 042-1519-03 Charlie Williams 22 c.williams@randatmail.com 796-7848-00 Lily Mitchell 20 l.mitchell@randatmail.com 513-1360-63";
	var words = {}; //dictionary to hold words
	var words_attr = [];
	string_handle(lyric);

	var canvas = document.getElementById('c');
	canvas.width = window.innerWidth;
	canvas.height = (window.innerHeight);

	if (canvas.getContext) {
		var c = canvas.getContext('2d'), // use to get access to the canvas tags 2D drawing functions
			w = canvas.width,
			h = canvas.height;

		c.strokeStyle = '#FFFFFF';
		c.fillStyle = '#00FF00';
		c.lineWidth = 5;

		// constructor
		Word = function(key) {
			this.text = key;
			this.x = Math.random() * w; //initializes x position to random point on screen
			this.y = Math.random() * h; //initializes y position to random point on screen
			this.font = words[key] * 10 + 'px courier';  //font size of word depends on how frequently it appears
			this.speed = (words[key])*5;  //speed of word depends on how frequently it appears
		}
		for (key in words) {
			words_attr.push(new Word(key));
		}
		console.log(words_attr.length); //error checking

		function animation() {
			for (var i = 0; i < words_attr.length; i++) {
				c.font = words_attr[i].font;
				c.fillText(words_attr[i].text, words_attr[i].x, words_attr[i].y);
				words_attr[i].width = c.measureText(words_attr[i].text).width;
				c.stroke();
			}
			move();
		}

		function move() {
			for (var i = 0; i < words_attr.length; i++) {
				if (words_attr[i].x > w) {
					words_attr[i].x = -words_attr[i].width;
					words_attr[i].y = Math.random()*h;
				}else{
					words_attr[i].x += words_attr[i].speed;
				}
			}
		}

		setInterval(function() {
			c.clearRect(0,0,w,h);
			animation();
		},24);

	}

	function string_handle(str) { //function to parse the data
		var split_str = str.split(" "); //split by spaces
		var word_array = [];
		var word_count = [];
		for (var i = 0; i < split_str.length; i++) {
			check = true;
			for (var j = 0; j <= word_array.length; j++) {
				if (split_str[i] == word_array[j]) {
					word_count[j]++;
					check = false;
					break;
				}
			}
			if (check) {
				word_array.push(split_str[i]);
				word_count.push(1);
			}
		}
		for (var i = 0; i < word_array.length; i++) {
			words[word_array[i]] = word_count[i];
		}
		return words;
	}

}

//Code reference: https://codepen.io/yoeven/pen/ZaYevv
