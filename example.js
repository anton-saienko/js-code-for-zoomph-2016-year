function () {
// START FROM HERE ----------------------------------------------
    $(this.elem).html(this.html);//musthave func for showing all content
    
    
    //-------------------------------------------------------------------------
    //-------------------GET ITEMS FROM ADMIN PANEL----------------------------
    //-------------------------------------------------------------------------
    var config = $.extend({
        zoomphAd: true
    }, this.config);
    
    //banner img
    $('.z-header-banner .banner1').html('<a href="'+ config.banner1link + '"><img src= '+ config.banner + ' alt=""/></a>');
    $('.z-header-banner .banner2').html('<a href="'+ config.banner2link + '"><img src= '+ config.banner2 + ' alt=""/></a>');
    $('.z-header-banner .banner3').html('<a href="'+ config.banner3link + '"><img src= '+ config.banner3 + ' alt=""/></a>');
    //white background img
    $('.z-shedule-main-wrapper').css({'background-image':'url('+ config.whitebg +')'});
    
    //VIDEO SETTINGS WHEN SWITCH ON
    if(config.videoSwitch == 'yes'){
        $('.z-iframe-wrapper').css('display', 'block').html('<div class="z-iframe-left-img"><img src= '+ config.videoLeftImg + ' alt=""/></div>' + config.embedVideo + '<div class="z-iframe-right-img"><img src= '+ config.videoRightImg + ' alt=""/></div>');
        $('.z-main-shadow').css('display', 'none');
        $('.z-main-info').css('display', 'none');
        $('.z-slider').css('display', 'none');
        $('.z-pager').css('display', 'none');
        $('.z-iframe-wrapper iframe').attr({
            'height': '400',
            'width': '725'
        });
    } else{
        $('.z-iframe-wrapper').css('display', 'none');
    }
    
    
    // SLIDER
  /* var IMAGES = [];
    if(config.images.length > 0){
        IMAGES = [];
        for(var i = 0; i < config.images.length; i++){
            if(config.images[i] != ''){
                IMAGES.push(config.images[i]);
            }
        }
    }
   for(var i = 0; i < IMAGES.length; i++){
        $('.z-slider').append(
            $('<div>',{
                'class':'z-slide'
            }).css({'background-image':'url('+IMAGES[i]+')'})
        );
    }
    $(".z-slide1").css({'background-image':'url('+IMAGES[0]+')'});*/
    
    $(".z-slide1").css({'background-image':'url('+config.slide1+')'});
    
    //SECOND SLIDE
    if (config.slide2.length > 0) {
        $('.z-slider').append(
            $('<div>',{
                'class':'z-slide'
            }).css({'background-image':'url('+config.slide2+')'})
            .append(
                $('<a>',{
                    'class':'z-slide-link',
                    'href':config.topStoryLink2
                }).append($('<div>', {
                    'class': 'z-main-shadow'}))
            ).append($('<div>', {
                'class': 'z-main-info'
            }).append($('<div>', {
                'class': 'z-top-story',
                'html': config.topStoryTitle2
            })).append($('<div>', {
                'class': 'z-top-title',
                'html':  config.topStory2
            })).append($('<div>', {
                'class': 'z-writer-namer',
                'html':  config.writerNamer2
            }))
                    )
        );
    }
    
    //THIRD SLIDE
    if (config.slide3.length > 0) {
        $('.z-slider').append(
            $('<div>',{
                'class':'z-slide'
            }).css({'background-image':'url('+config.slide3+')'})
            .append(
                $('<a>',{
                    'class':'z-slide-link',
                    'href':config.topStoryLink3
                }).append($('<div>', {
                    'class': 'z-main-shadow'}))
            ).append($('<div>', {
                'class': 'z-main-info'
            }).append($('<div>', {
                'class': 'z-top-story',
                'html': config.topStoryTitle3
            })).append($('<div>', {
                'class': 'z-top-title',
                'html':  config.topStory3
            })).append($('<div>', {
                'class': 'z-writer-namer',
                'html':  config.writerNamer3
            }))
                    )
        );
    }
    //init cycle sliders
    $(".z-slider").cycle();
    $(".z-header-banner").cycle();
    
    
    //TOP STORY TEXT SLIDE 1
    $('.z-slide-link1').attr('href', config.topStoryLink);
    var headerText = new Vue({el: ".z-top-story", data: {topStoryTitle: config.topStoryTitle}});
    var headerText2 = new Vue({el: ".z-top-title", data: {topStory: config.topStory}});
    var headerText3 = new Vue({el: ".z-writer-namer", data: {writerNamer: config.writerNamer}});
    
    
    //---------------------------TEAM LEADERS ----------------------------------
    //first player
    $('.z-player1').css({'background-image':'url('+config.firstPlayerPhoto+')'}); //first player photo
    var firstPlayerText1 = new Vue({el: ".z-player1-name", data: {firstPlayerName: config.firstPlayerName}});
    var firstPlayerText2 = new Vue({el: ".z-player-1-field-1", data: {firstPlayerField1: config.firstPlayerField1}});
    var firstPlayerText3 = new Vue({el: ".z-player-1-field-2", data: {firstPlayerField2: config.firstPlayerField2}});
    var firstPlayerText4 = new Vue({el: ".z-player-1-field-3", data: {firstPlayerField3: config.firstPlayerField3}});
    //second player
    $('.z-player2').css({'background-image':'url('+config.secondPlayerPhoto+')'}); //second player photo
    var secondPlayerText1 = new Vue({el: ".z-player2-name", data: {secondPlayerName: config.secondPlayerName}});
    var secondPlayerText2 = new Vue({el: ".z-player-2-field-1", data: {secondPlayerField1: config.secondPlayerField1}});
    var secondPlayerText3 = new Vue({el: ".z-player-2-field-2", data: {secondPlayerField2: config.secondPlayerField2}});
    var secondPlayerText4 = new Vue({el: ".z-player-2-field-3", data: {secondPlayerField3: config.secondPlayerField3}});
    //third player
    $('.z-player3').css({'background-image':'url('+config.thirdPlayerPhoto+')'}); //third player photo
    var thirdPlayerText1 = new Vue({el: ".z-player3-name", data: {thirdPlayerName: config.thirdPlayerName}});
    var thirdPlayerText2 = new Vue({el: ".z-player-3-field-1", data: {thirdPlayerField1: config.thirdPlayerField1}});
    var thirdPlayerText3 = new Vue({el: ".z-player-3-field-2", data: {thirdPlayerField2: config.thirdPlayerField2}});
    var thirdPlayerText4 = new Vue({el: ".z-player-3-field-3", data: {thirdPlayerField3: config.thirdPlayerField3}});

    //---------------------------SCORES! ----------------------------------
    var week1S = new Vue({el: ".week1_score", data: {week1Score: config.week1Score}});
    var week1R = new Vue({el: ".week1_result", data: {week1Result: config.week1Result}});
    var week2S = new Vue({el: ".week2_score", data: {week2Score: config.week2Score}});
    var week2R = new Vue({el: ".week2_result", data: {week2Result: config.week2Result}});
    var week3S = new Vue({el: ".week3_score", data: {week3Score: config.week3Score}});
    var week3R = new Vue({el: ".week3_result", data: {week3Result: config.week3Result}});
	var week4S = new Vue({el: ".week4_score", data: {week4Score: config.week4Score}});
    var week4R = new Vue({el: ".week4_result", data: {week4Result: config.week4Result}});
    var week5S = new Vue({el: ".week5_score", data: {week5Score: config.week5Score}});
    var week5R = new Vue({el: ".week5_result", data: {week5Result: config.week5Result}});
    var week6S = new Vue({el: ".week6_score", data: {week6Score: config.week6Score}});
    var week6R = new Vue({el: ".week6_result", data: {week6Result: config.week6Result}});
    var week7S = new Vue({el: ".week7_score", data: {week7Score: config.week7Score}});
    var week7R = new Vue({el: ".week7_result", data: {week7Result: config.week7Result}});
    
    var week9S = new Vue({el: ".week9_score", data: {week9Score: config.week9Score}});
    var week9R = new Vue({el: ".week9_result", data: {week9Result: config.week9Result}});
    var week10S = new Vue({el: ".week10_score", data: {week10Score: config.week10Score}});
    var week10R = new Vue({el: ".week10_result", data: {week10Result: config.week10Result}});
    var week11S = new Vue({el: ".week11_score", data: {week11Score: config.week11Score}});
    var week11R = new Vue({el: ".week11_result", data: {week11Result: config.week11Result}});
    var week12S = new Vue({el: ".week12_score", data: {week12Score: config.week12Score}});
    var week12R = new Vue({el: ".week12_result", data: {week12Result: config.week12Result}});
    var week13S = new Vue({el: ".week13_score", data: {week13Score: config.week13Score}});
    var week13R = new Vue({el: ".week13_result", data: {week13Result: config.week13Result}});
    var week14S = new Vue({el: ".week14_score", data: {week14Score: config.week14Score}});
    var week14R = new Vue({el: ".week14_result", data: {week14Result: config.week14Result}});
    var week15S = new Vue({el: ".week15_score", data: {week15Score: config.week15Score}});
    var week15R = new Vue({el: ".week15_result", data: {week15Result: config.week15Result}});
    var week16S = new Vue({el: ".week16_score", data: {week16Score: config.week16Score}});
    var week16R = new Vue({el: ".week16_result", data: {week16Result: config.week16Result}});
    var week17S = new Vue({el: ".week17_score", data: {week17Score: config.week17Score}});
    var week17R = new Vue({el: ".week17_result", data: {week17Result: config.week17Result}});
    
   
    //Tickets links
    $(".tickets1").attr("href", config.week1Link);
    $(".tickets2").attr("href", config.week2Link);
    $(".tickets3").attr("href", config.week3Link);
    $(".tickets4").attr("href", config.week4Link);
    $(".tickets5").attr("href", config.week5Link);
    $(".tickets6").attr("href", config.week6Link);
    $(".tickets7").attr("href", config.week7Link);
    
    $(".tickets9").attr("href", config.week9Link);
    $(".tickets10").attr("href", config.week10Link);
    $(".tickets11").attr("href", config.week11Link);
    $(".tickets12").attr("href", config.week12Link);
    $(".tickets13").attr("href", config.week13Link);
    $(".tickets14").attr("href", config.week14Link);
    $(".tickets15").attr("href", config.week15Link);
    $(".tickets16").attr("href", config.week16Link);
    $(".tickets17").attr("href", config.week17Link);


    // ---------------------------------------------------
    //--------------------DEVELOPMENT ---------------------------
    //-----------------------------------------------------

    //----------------------SHEDULE------------------------------------------
    $(".z-shedule__res:contains('W')").css( "color", "#f5973f" );
    $(".z-shedule__res:contains('w')").css( "color", "#f5973f" );
    
    var winRecord = $(".z-shedule__res:contains('W')").length + $(".z-shedule__res:contains('w')").length;
    var loseRecord = $(".z-shedule__res:contains('L')").length + $(".z-shedule__res:contains('l')").length;
    
    $(".win_record").html(winRecord);
    $(".lose_record").html(loseRecord);
    
    //if game already have score than hide tickets link
    $(".z-shedule__result__score").each(function(){
        if ($(this).text().trim().length) {
            $(this).parent().parent().find('.z-shedule__nextgame').hide();
            $(this).parent().parent().find('.z-shedule__tickets').hide();
        }
        if (!$(this).text().trim().length) {
            $(this).parent().hide();
        }
    });
    
    //--------------------------get XML ROSTER--------------------------
    $.ajax({
        type: "GET",
        url: "https://zoomph.com/dolphins/xml.php",
        dataType: "xml",
        success: xmlParser
    });

    function xmlParser(xml) {

        if ($(xml).find("position").length > 0) {
            
            var offencePositions = ['QB', 'RB', 'TE', 'C/G', 'C', 'G', 'WR', 'T', 'G/T'],
                defencePositions = ['DE', 'DT', 'LB', 'OL', 'S', 'CB'],
            	specialPositions = ['LS', 'K', 'P'],
                mass_positions = [offencePositions, defencePositions, specialPositions],
            	all_position = $(xml).find('position'), //got all positions tags from xml
            	position_mass = [],
                search;
            for(var i in mass_positions){ // init key in mass
                for(var j in mass_positions[i]){
                    position_mass[mass_positions[i][j]] = [];
                }
            }
            
            $(all_position).each(function(key, value){
                search = $(value).html();
               
                if($.inArray(search, offencePositions) >= 0) 		position_mass[search].push($(value).parent());
                else if($.inArray(search, defencePositions) >= 0) 	position_mass[search].push($(value).parent());
                else if($.inArray(search, specialPositions) >= 0) 	position_mass[search].push($(value).parent());
            });
            
            //console.log(position_mass);
            
            
            //------------------------OFFENCE TAB---------------------------------------
            createBlock(xml, offencePositions, position_mass, '.z-offence');
            //------------------------DEFENCE TAB---------------------------------------
            createBlock(xml, defencePositions, position_mass, '.z-defence');
            //------------------------SPECIAL POSITIONS TAB-----------------------------
            createBlock(xml, specialPositions, position_mass, '.z-special');

        }
    }
    
  
    // adding of ENDINGS for experience years of players
    function getDeclension(num){
        var check = Number(num);
    	if(!isNaN(check)){
            if (check === 1) return check+'ST YR';
            else if (check === 2) return check+'TH YR';
            else if (check === 3) return check+'RD YR';
            else return check+'TH YR';
        }
        else return num;
    }
    // adding full position name
    function getFullPosition(str){
        var pos = String(str);
    	
        if (pos === "QB") return 'Quarterback';
        if (pos === "RB") return 'Running Back';
        if (pos === "TE") return 'Tight End';
        if (pos === "C") return 'Center';
        if (pos === "G") return 'Guard';
        if (pos === "WR") return 'Wide Receiver';
        if (pos === "T") return 'Tackle';
        
        if (pos === "DE") return 'Defensive End';
        if (pos === "DT") return 'Defensive Tackle';
        if (pos === "LB") return 'Linebacker';
        if (pos === "OL") return 'Outside Linebacker';
        if (pos === "S") return 'Safety';
        if (pos === "CB") return 'Cornerback';
        
        if (pos === "LS") return 'Long Snapper';
        if (pos === "K") return 'Kicker';
        if (pos === "P") return 'Punter';
        
        else return str;
    }
   
    
    //convert birthday to age
    function countYears(year_birthday){
        var now = new Date().getTime(),
            birthday = new Date(year_birthday).getTime(),
            result = ((now - birthday)/(24 * 3600 * 365.25 * 1000));
        return Math.round(result);
    }
    
    function createBlock(xml, group_mass, position_mass, parent){
         var position,
             fullPosition,
             parent_mass,
             rosterBlock,
             blockTitle,
             blockPlayers,
             jersey,
             firstName,
             lastName,
             experience,
             headshot,
             age,
             height,
             weight,
             college;
    	for(var i = 0, len = group_mass.length; i < len; i++){
            position = group_mass[i];
            parent_mass = position_mass[position];
            if(parent_mass.length > 0){
                
                rosterBlock = $('.z-roster__block').first().clone().css('display', 'inline-block').html('').appendTo(parent+' .z-roster__wrapper');
                blockTitle = $('.z-roster__block__title').first().clone().html(position).appendTo(rosterBlock);
                blockPlayers = $('.z-roster__players').first().clone().html('').appendTo(rosterBlock);

                for(var key in parent_mass){
                    
					jersey = 	parent_mass[key].find("jersey").text();
                    height = 	parent_mass[key].find("height").text();
                    weight = 	parent_mass[key].find("weight").text();
                    age = 	parent_mass[key].find("birthdate").text().split('/');
                    firstName = parent_mass[key].find("firstName").text();
                    lastName = 	parent_mass[key].find("lastName").text();
                    headshot = 	parent_mass[key].find("headshot").text();
                    experience =getDeclension(parent_mass[key].find("experience").text());
                    fullPosition =getFullPosition(parent_mass[key].find("position").text());
                    college = 	parent_mass[key].find("college").text();
                    
                    console.log(headshot.length);
                    //------------------CREATING BLOCK according to position
                    blockPlayers.append(
                        $('<div>',{'class':'z-roster__player'})
                        .append(
                            $('<div>',{
                                'class':'z-roster__player__info'
                            }).append(
                                $('<div>',{
                                    'class':'z-roster__player__img',
                                    'html': '<img src="'+ headshot +'">'
                                })
                            ).append(
                                $('<div>',{
                                    'class':'z-roster__player__info-main'
                                }).append(
                                    $('<div>',{
                                        'class':'z-roster__player__jersey',
                                        'text': jersey
                                    })
                                ).append(
                                    $('<div>',{
                                        'class':'z-roster__player__fullpos',
                                        'text': fullPosition
                                    })
                                )
                            ).append(
                                $('<div>',{
                                    'class':'z-roster__player__other-info'
                                }).append(
                                    $('<div>',{
                                        'class':'z-roster__player__name',
                                        'text': firstName + ' ' + lastName
                                    })
                                ).append(
                                    $('<div>',{
                                        'text': college
                                    })
                                ).append('<span> Experience: ' + experience + '</span> | <span>Age: ' + countYears(age[2]+'-'+age[0]+'-'+age[1]) + '</span> | <span>H: ' + height + '</span> | <span>W: ' + weight + ' lbs</span>')
                            )
                        )
                        .append('<span>' + jersey + ' / ' + firstName + ' ' + lastName + ' / ' + experience + ' / ' + college + '</span>')
                    );
                    //new - hide image-wrapper if player have no picture
                    $(".z-roster__player__img").find("img[src='']").parent().next('.z-roster__player__info-main').css('margin-left', '0');
                    $(".z-roster__player__img").find("img[src='']").parent().hide();
                    //$('.z-roster__player__img').hide();
                }
            }
        }
    }
    


    
    
    // MAIN SLIDES APPEARING---------------------------
   /* $('.z-slider .z-slide:gt(0)').hide();
    setInterval(function(){
      $('.z-slider :first-child').fadeOut('slow')
         .next('.z-slide').fadeIn('slow')
         .end().appendTo('.z-slider');}, 
      5000); */
	
	//carousel for shedule --------------------------
	$(".next").click(function(){
		$('[data-item="first"]').attr("data-item" , '').next().attr('data-item', 'first').show();
		$('[data-item="last"]').attr("data-item" , '').next().attr('data-item', 'last').show();
		$('[data-item="last"]').nextAll().css( "display", "none" );
		$('[data-item="first"]').prevAll().css( "display", "none" );
		
		if ($('[data-item="first"]').data("firstitem") === 'veryfirst') {
			$('.prev').hide();
		} else{
			$('.prev').show();
		}
		
		if ($('[data-item="last"]').data("lastitem") === 'verylast') {
			$('.next').hide();
		} else{
			$('.next').show();
		}
	});

	$(".prev").click(function(){
		$('[data-item="first"]').attr("data-item" , '').prev().attr('data-item', 'first').show();
		$('[data-item="last"]').attr("data-item" , '').prev().attr('data-item', 'last').show();
		$('[data-item="last"]').nextAll().css( "display", "none" );
		$('[data-item="first"]').prevAll().css( "display", "none" );
		
		if ($('[data-item="first"]').data("firstitem") === 'veryfirst') {
			$('.prev').hide();
		} else{
			$('.prev').show();
		}
		
		if ($('[data-item="last"]').data("lastitem") === 'verylast') {
			$('.next').hide();
		} else{
			$('.next').show();
		}
	});
	//end of carousel for shedule
    
    //Sticky header ------------------
	$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var objectSelect = $(".z-header-changer");
    var objectPosition = objectSelect.offset().top;
    if (scroll > objectPosition) {
			$(".z-header").addClass("change");
			$(".z-header-changer").css('height', '100px');
    } else {
			$(".z-header").removeClass("change");
			$(".z-header-changer").css('height', '0');
    }
	});
    
    //TABS for ROSTER ---------------------------------------------
	$(".z-single-tab").not(":first").hide();//hide all but first

	$(".z-changer").click(function() {
		$(".z-changer").removeClass("active").eq($(this).index()).addClass("active");
		$(".z-single-tab").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
    
    
    // -----------------SOCIAL HUB DEVELOPMENT --------------
    //config
    var START_ROWS_COUNT = 3,
      	currentRightCounter = 0,
        currentLeftCounter = 0,
      	currentRightSource = 'news',
    	currentLeftSource = 'all',
        structureLeftBlock = [
            [0,1,0],
            [0,0,1],
            [1,0,0]
        ],
    
    	icons = ["twitter","facebook","instagram","rss","googleplus"],
    
    
    	//GET ZOOMPH DATA FROM FEED --------------------------------------------------------------------
    	rightBlocks = this.dataSources['dolphinsNews'].Zitems,
    	leftBlocks = this.dataSources['allContent'].Zitems,
    	rightBlocks2 = {
        	'news':this.dataSources['dolphinsNews'].Zitems,
        	'video':this.dataSources['dolphinsVideo'].Zitems,
        	'all':this.dataSources['allContent'].Zitems
    	},
    	leftBlocks2 = {
        	'facebook':this.dataSources['facebook'].Zitems,
        	'twitter':this.dataSources['twitter'].Zitems,
        	'all':this.dataSources['allContent'].Zitems
    	},
        
        Build = {
            counter : 0,
            
            //CREATE SMALL BLOCK LEFT PART
            smallBlock: function(source) {
                var image = source.ImageUrls.length > 0,
                    block = $('<div>',{'class':'z-widget__block counter_class'});
                
                if(image){
                    block.append(
                        $('<div>',{'class':'z-widget__top'})
                        .append(
                            $('<span>',{
                                'class':'z-widget__top__name',
                                'text':'@'+source.Author.DisplayName})
                        )
                        .append(
                            $('<span>',{'class':'z-widget__top__social'})
                            .append(
                                $('<a>',{'href':source.ContextUrl})
                                .append(
                                    $('<i>',{'class':'zicon zicon-'+getIcons(source.Service)})
                                )
                            )
                        )
                    )
                    .append(
                        $('<div>',{'class':'z-widget__img'}).css({'background-image':'url('+source.ImageUrls[0]+')'})
                    );

                }
                else{
                    block.append(
                        $('<div>',{'class':'z-widget__text'})
                        .append(
                            $('<div>',{'class':'z-widget__text__social'})
                            .append(
                                $('<a>',{'href':source.ContextUrl})
                                .append(
                                    $('<i>',{'class':'zicon zicon-'+getIcons(source.Service)})
                                )
                            )
                        )
                        .append(
                            $('<div>',{
                                'class':'z-widget__text__name',
                                'text':'@'+source.Author.DisplayName})
                        )
                        .append(
                            $('<div>',{
                                'class':'z-widget__text__desc',
                                'html':getMessage(source.Message)})
                        )
                        .append(
                            $('<div>',{
                                'class':'z-widget__text__time',
                                'text':getDate(source.Created)+' ago'})
                        )
                    );
                }
                return block;
            },
            //CREATE LONG BLOCK LEFT PART ------------------------------------------------------
            longBlock : function(source) {
                var image = source.ImageUrls.length > 0,
                    block = $('<div>',{'class':'z-widget-left__block-long  counter_class '+((image)?'with-image':'')});

                block.append(
                    $('<div>',{'class':'z-widget__text'})
                    .append(
                        $('<div>',{'class':'z-widget__text__social'})
                        .append(
                            $('<a>',{'href':source.ContextUrl})
                            .append(
                                $('<i>',{'class':'zicon zicon-'+getIcons(source.Service)})
                            )
                        )
                    )
                    .append(
                        $('<div>',{
                            'class':'z-widget__text__name',
                            'text':'@'+source.Author.DisplayName})
                    )
                    .append(
                        $('<div>',{
                            'class':'z-widget__text__desc',
                            'html': getMessage(source.Message)})
                    )
                    .append(
                        $('<div>',{
                            'class':'z-widget__text__time',
                            'text':getDate(source.Created)+' ago'})
                    )
                );
                if(image){
                    block.append(
                        $('<div>',{'class':'z-widget__img'}).css({'background-image':'url('+source.ImageUrls[0]+')'})
                    );
                }
                return block;
            },
            recursive : function (parent, data_structure, data_mass){
                if(data_structure.length > 0){
                    var object;
                    for(var i = 0, len = data_structure.length; i < len; i++){
                        object = Build.recursive(parent, data_structure[i], data_mass);
                        if(object){
                            ++Build.counter;
                            parent.append(object);
                        }
                    }
                    
                }
                else{
                    
                    if(data_mass[Build.counter] === undefined) return '';


                    if(data_structure)return Build.longBlock(data_mass[Build.counter]);
                    else return Build.smallBlock(data_mass[Build.counter]);
                    
                }

            },
            leftPanel : function(data_structure, data_mass, new_data){
                if(new_data) Build.counter = 0;
                Build.recursive($('.z-widget-left'),data_structure, data_mass);
            }

        };

        
    
	//COUNT MASS RECURSIVE-------------------------------------------------------------------------------
    function countMass(mass){
        var res = 0;
        if(mass.length > 0){
            for(var i = 0, len = mass.length; i < len; i++){
                res += countMass(mass[i]);
            }
            return res;
        }
        return 1;
    }
    
    
    // INIT FUNCTION FOR CREATING RIGHT BLOCKS AT START -------------------------------------------------
    function initRightBlocks(){
        for(var i = 0; i < START_ROWS_COUNT; i++){
            createRightBlock(rightBlocks2[currentRightSource][i]);
            currentRightCounter++;
        }
    }

    
    //get Message of post -------------------------------------------------------------------------------
    function getMessage(txt){
    	txt = twemoji.parse(txt); //smiles converting
    	return txt;
        
    }
    
    //getIcons func
    function getIcons(service){
        var icon = 'facebook';
        switch (service) {
            case 1: icon = 'twitter'; break;
            case 2: icon = 'facebook'; break;
            case 3: icon = 'instagram'; break;
            case 4: icon = 'googleplus'; break;
            case 7: icon = 'rss'; break;
            default : icon = icon;
        }
        return icon; 
    }
    
    //time converting function-------------------------------------------------
    function getDate(date) {
        date = new Date(date);

        var seconds = Math.floor((new Date() - date) / 1000);
        var interval = Math.floor(seconds / 31536000);

        if (interval > 1) {
            return interval + " years";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes";
        }
        return Math.floor(seconds) + " seconds";
	}
    
    
    // CREATE RIGHT SIDE BLOCKS -------------------------------------------------
    function createRightBlock(itemData){
        //console.log(itemData);
        //console.log(itemData.ImageUrls[0]);
        var image = itemData.ImageUrls.length > 0;												//check if post have image
    	var block = $('<a/>',{
            	'class':'z-widget__block-long'+(image ? ' with-image' : ''),					//if have then add class with-image
            	'href':itemData.ContextUrl
        	}) 	
        	.append(
				$("<div/>",{
					"class":"z-widget__text"
				})
				.append(
					$("<div/>",{
						"class":"z-widget__text__social"
					})
					/*.append(
						$("<a/>",{
							"href":"#"
						}) 
						.append(
							$("<i/>",{
								"class":"zicon zicon-"+getIcons(itemData.Service)
							})
						) 
					) */
				) 
				.append(
					$("<span/>",{
						"class":"z-widget__text__name",
						"text": "@"+itemData.Author.DisplayName
					})
				)
				.append(
					$("<div/>",{
						"class":"z-widget__text__desc",
						"html": getMessage(itemData.Message)
					})
				)
				.append(
					$("<div/>",{
						"class":"z-widget__text__time",
						"text": getDate(itemData.Created)+" ago"
					})
				)
			);
        // -----------------CHECK IF THERE IS AN IMAGE -- if have then add block with image ------------
        if(image){
            block.append(
            	$('<div>',{'class':'z-widget__img'}).css({'background-image':'url('+itemData.ImageUrls[0]+')'})
           	);
        }
       	$('.z-widget-right').append(block);				// append to the right-side
    }
    
    //SHOW HIDE BLOCK SEE MORE ------------------------------------------------------
    function showHideLoadMore(){
    	var left_length = leftBlocks2[currentLeftSource].length,
            right_length = rightBlocks2[currentRightSource].length,
        	length = 0,
            counter = 0;
        if(left_length > right_length){
            counter = Build.counter;
            length = left_length;
        }
        else{
            counter = currentRightCounter;
            length = right_length;
        }
        if(counter >= length) $('.loader').parent().hide();
        else $('.loader').parent().show();
    }
    
    
    
    //load more -------------------------------------------------
    function loadMore(){
    	for(var i = 0; i < START_ROWS_COUNT; i++){
            if(currentRightCounter < rightBlocks2[currentRightSource].length){
            	createRightBlock(rightBlocks2[currentRightSource][currentRightCounter]);
            	currentRightCounter++;
            }
        }
        Build.leftPanel(structureLeftBlock, leftBlocks2[currentLeftSource]);
        
        showHideLoadMore();
        
    }
    
    
    $('.loader').on('click',function(){
    	loadMore();
    })
    
    
    //ADD LEFT AND RIGHT PANEL ------------------------------------------------------
    function addLeftRightPanel(){
		currentRightCounter = 0;
        $('.z-widget__block-long').remove();		//clear html structure            
        initRightBlocks();							//start initialization function

        $('.counter_class').remove();
        Build.leftPanel(structureLeftBlock, leftBlocks2[currentLeftSource], true);

        showHideLoadMore();
    }
    
    // RIGHT TABS -------------------------------------------------
    $('.right-tab').on('click',function(){
        $('.z-widget-right__tabs .active').removeClass('active');
    	if($(this).data('source') && !(typeof rightBlocks2[$(this).data('source')] === 'undefined')){
            $(this).addClass('active');
            currentRightSource = $(this).data('source');
            
            addLeftRightPanel();
           
           
        }
    });
    
    //LEFT TABS ------------------------------------------------------
    $('.left-tab').on('click',function(){
        $('.z-widget-left__tabs .active').removeClass('active');
        var source = $(this).data('source'); 
        if(source && typeof(leftBlocks2[source]) !== undefined){
        	$(this).addClass('active');
            currentLeftSource = source;
            
            addLeftRightPanel();
        }
    });
   
    
    //SNAPCHAT tab
    $('#snapchat').on('click',function(){
        $('.z-snapchat-wrapper').css('display', 'block');
  
            addLeftRightPanel();
        
    });
    //close snapchat
    $('.z-snapchat-close').on('click',function(){
        $('.z-snapchat-wrapper').css('display', 'none');   
    });
    
    // INITIALIZATION AT THE START-------------------------------------------------
    $('.z-widget__block-long').remove();				
    initRightBlocks();
    $('.counter_class').remove();
	Build.leftPanel(structureLeftBlock, leftBlocks2[currentLeftSource]);
    showHideLoadMore();
    
    // get text from variables and put it in html -------------------------------------------------
   // for(var key in texts){
   // 	$('.'+key).html(texts[key]);
  //  }  
    
// the end  
}