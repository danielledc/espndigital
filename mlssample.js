var weekday={"0":{ full:"Sunday", short:"Sun"},
			"1":{ full:"Monday",short:"Mon"},
			"2":{ full:"Tuesday", short:"Tues"},
			"3":{ full:"Wednesday", short:"Wed"},
			"4":{ full:"Thursday", short:"Thurs"},
			"5":{ full:"Friday", short:"Fri"},
			"6":{ full:"Saturday", short:"Sat"}
};

var months={"1": {month:"Jan"},
			"2": {month:"Feb"},
			"3": {month:"Mar"},
			"4": {month:"Apr"},
			"5": {month:"May"},
			"6": {month:"Jun"},
			"7": {month:"Jul"},
			"8": {month:"Aug"},
			"9": {month:"Sept"},
			"10": {month:"Oct"},
			"11": {month:"Nov"},
			"12": {month:"Dec"}
};

var teamAbbreviations=
			{"Chicago": {abbrev:"CHI"},
			"Colorado": {abbrev:"COL"},
			"Columbus": {abbrev:"CLB"},
			"D.C. United": {abbrev:"DC"},
			"FC Dallas": {abbrev:"DAL"},
			"Houston": {abbrev:"HOU"},
			"LA Galaxy": {abbrev:"LA"},
			"Montreal": {abbrev:"MTL"},
			"New England": {abbrev:"NE"},
			"NYCFC": {abbrev:"NYC"},
			"NY Red Bulls": {abbrev:"NYR"},
			"Orlando City": {abbrev:"ORL"},
			"Philadelphia": {abbrev:"PHI"},
			"Portland": {abbrev:"POR"},
			"Real Salt Lake": {abbrev:"RSL"},
			"San Jose": {abbrev:"SJ"},
			"Seattle": {abbrev:"SEA"},
			"Sporting KC": {abbrev:"SKC"},
			"Toronto FC": {abbrev:"TOR"},
			"Vancouver": {abbrev:"VAN"}
};

var networks={"FOX": {size1280x100Small:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_foxSportsLogo.png' height=22 style='vertical-align:-10%' class='foxLogo' />",
					size1280x100Large:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_foxSportsLogo.png' height=22 style='vertical-align:-10%' class='foxLogo' />",
					size970x66Small:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_foxSportsLogo.png' height=17 style='vertical-align:-12%' class='foxLogo' />",
					size970x66Large:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_foxSportsLogo.png' height=22 style='vertical-align:-10%' class='foxLogo' />" ,
					size728x90Small:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_foxSportsLogo.png' height=17 style='vertical-align:-12%' class='foxLogo' />",
					size728x90Large:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_foxSportsLogo.png' height=22 style='vertical-align:-10%' class='foxLogo' />" ,
					size300x250Small:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_foxSportsLogo.png' height=20 style='vertical-align:-10%' class='foxLogo' />",
					size320x250Large:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_foxSportsLogo.png' height=22 style='vertical-align:-10%' class='foxLogo' />",
					size320x50Small:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_320x50_foxSportsLogo.png' height=15 style='vertical-align:-18%' class='foxLogo' />",
					size320x50Large:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_320x50_foxSportsLogo.png' height=22 style='vertical-align:-10%' class='foxLogo' />"  },
			  "FS1": {size1280x100Small:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_fs1Logo.png' height=17 style='vertical-align:-4%' class='fs1Logo' />",
			          size1280x100Large:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_fs1Logo.png' height=17 style='vertical-align:text-middle' class='fs1Logo'  />",
					  size970x66Small:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_fs1Logo.png' height=14 style='vertical-align:-5%' class='fs1Logo' />",
			          size970x66Large:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_fs1Logo.png' height=17 style='vertical-align:text-middle' class='fs1Logo'  />",
					  size728x90Small:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_fs1Logo.png' height=14 style='vertical-align:-5%' class='fs1Logo' />",
			          size728x90Large:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_fs1Logo.png' height=17 style='vertical-align:text-middle' class='fs1Logo'  />",
					  size300x250Small:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_fs1Logo.png' height=16 style='vertical-align:-4%' class='fs1Logo'  />",
			         size300x250Large:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_fs1Logo.png' height=17 style='vertical-align:text-middle' class='fs1Logo'  />",
					 size320x50Small:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_320x50_fs1Logo.png' height=10 style='vertical-align:-3%' class='fs1Logo'  />",
			         size320x50Large:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_320x50_fs1Logo.png' height=17 style='vertical-align:text-middle' class='fs1Logo'  />"},
			  "ESPN":{size1280x100Small:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_espnLogo.png' height=17 style='vertical-align:-5%' class='espnLogo' />",
			          size1280x100Large:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_espnLogo.png' height=23 style='vertical-align:-5%' class='espnLogo' />",
					  size970x66Small:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_espnLogo.png' height=14 style='vertical-align:-5%' class='espnLogo' />",
			          size970x66Large:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_espnLogo.png' height=18 style='vertical-align:-8%' class='espnLogo' />",
					  size728x90Small:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_espnLogo.png' height=14 style='vertical-align:-5%' class='espnLogo' />",
			          size728x90Large:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_espnLogo.png' height=18 style='vertical-align:-8%' class='espnLogo' />",
					  size300x250Small:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_espnLogo.png' height=15 style='vertical-align:-5%' class='espnLogo' />",
			          size300x250Large:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_espnLogo.png' height=17 style='vertical-align:-7%' class='espnLogo' />",
					   size320x50Small:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_320x50_espnLogo.png' height=10 style='vertical-align:-3%' class='espnLogo' />",
			          size320x50Large:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_320x50_espnLogo.png' height=13 style='vertical-align:-7%' class='espnLogo' />"},
			  "ESPN2":{size1280x100Small:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_espn2Logo.png' height=16 style='vertical-align:-5%' class='espn2Logo' />",
			          size1280x100Large:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_espn2Logo.png' height=23 style='vertical-align:-5%' class='espn2Logo'/>",
					  size970x66Small:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_espn2Logo.png' height=13 style='vertical-align:-5%' class='espn2Logo' />",
			          size970x66Large:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_espn2Logo.png' height=17 style='vertical-align:-8%' class='espn2Logo'/>",
					  size728x90Small:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_espn2Logo.png' height=13 style='vertical-align:-5%' class='espn2Logo' />",
			          size728x90Large:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_espn2Logo.png' height=17 style='vertical-align:-8%' class='espn2Logo'/>",
					  size300x250Small:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_espn2Logo.png' height=15 style='vertical-align:-5%' class='espn2Logo' />",
			          size300x250Large:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_1280x100_espn2Logo.png' height=17 style='vertical-align:-7%' class='espn2Logo' />",
					  size320x50Small:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_320x50_espn2Logo.png' height=8 style='vertical-align:-3%' class='espn2Logo' />",
			          size320x50Large:"<img src='https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/images/16022759IB1_SOC_320x50_espn2Logo.png' height=13 style='vertical-align:-7%' class='espn2Logo' />"
					  }
};
			
var dfpAdID, cacheBust, adMacro, bannerSize, offset=5.0, ctaDelay, showLive=false, num=0, tuneInMessage, rivalryWeek=0,  games=[], gamesSorted=[], gamesSortedToPromote=[];



var now = new Date();

var nowTimestamp=now.getTime(); 
//change offset after daylight savings begins on 3/13/2016
if(nowTimestamp>=1457852400000){
		offset=4.0;
}
var theDay= now.getDay(); 
var theDate= now.getDate();
var theMonth=now.getMonth()+1;
var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
var nextweek = new Date(now.getFullYear(), now.getMonth(), now.getDate()+7);
nextweek=nextweek.getTime();


$.ajax({
  url: "https://cdn.secure.espn.go.com/i/dynbanners/mls/2016/Season/js/games.json",
  success: function(data) {
     for(var x in data){
	
		  if((parseInt(data[x].date,10)==theDate&&parseInt(data[x].month,10)==theMonth)||(parseInt(data[x].month,10)==theMonth&&parseInt(data[x].date,10)>theDate)||(parseInt(data[x].month,10)>theMonth)){	 
		 	startTimeParts=data[x].startTime.split(":");
			endTimeParts=data[x].endTime.split(":");
			startTime=getTimeStamp(data[x].date, data[x].month, startTimeParts[0], startTimeParts[1]);
			endTime=getTimeStamp(data[x].date, data[x].month, endTimeParts[0], endTimeParts[1]);
			games.push(new game(data[x].teamOne, data[x].teamTwo, data[x].month, data[x].date, startTime, endTime, startTimeParts[0], startTimeParts[1],  data[x].rivalryWeek, data[x].liveLink, data[x].liveDeepLink,  data[x].network)); 
		  }
	  
	 }
	 gamesSorted = games.slice(0);
	 gamesSorted.sort(function(a,b) {
			return a.startTime - b.startTime;
		});
 },
  error: function() {
  },
  complete: function() {
    	changeMessage(bannerSize);
		
  }
});



function getTimeStamp(date, month, hours, minutes) {
       
    var dateNew= new Date( ((month ) + '/' + date + '/' + 2016 + " " + hours + ':'
                     + minutes + ':' + 0));
		
			 
	var utcTime = dateNew.getTime() - (now.getTimezoneOffset() * 60000);
	var gameTimestamp=new Date(utcTime + (3600000*offset));
	return gameTimestamp.getTime();
    
	
		
}


function game(teamOne, teamTwo, month, date, startTime, endTime, startTimeHours, startTimeMinutes, rivalryWeek, liveLink, liveDeepLink, network) {
    this.teamOne = teamOne;
    this.teamTwo = teamTwo;
	this.month=month;
	this.day=date;
	this.startTime = startTime;
	this.endTime = endTime;
	this.startTimeHours = startTimeHours;
	this.startTimeMinutes = startTimeMinutes;
	this.rivalryWeek = rivalryWeek;
	this.liveLink = liveLink;
	this.liveDeepLink = liveDeepLink;
	this.network= network.toUpperCase();
  
}

function searchforFoxOnly( obj ){
	var foxCount=0;
	
	for (x in obj) {
		 if (obj[x].network=="FOX"||obj[x].network=="FS1")
		  foxCount++;
	}
	return foxCount;

}

function changeMessage(size){
	var numFoxGames=0;
	var dateToPromote=gamesSorted[0].day;
	var monthToPromote=gamesSorted[0].month;
  if(nowTimestamp<=gamesSorted[0].endTime){
	   gamesSortedToPromote.push(new game(gamesSorted[0].teamOne, gamesSorted[0].teamTwo, gamesSorted[0].month, gamesSorted[0].day, gamesSorted[0].startTime, gamesSorted[0].endTime,gamesSorted[0].startTimeHours, gamesSorted[0].startTimeMinutes, gamesSorted[0].rivalryWeek,gamesSorted[0].liveLink, gamesSorted[0].liveDeepLink, gamesSorted[0].network))
	}
	
	var i=dateToPromote;
	var j=monthToPromote;
	for(var	k=1;k<gamesSorted.length;k++){
			i=gamesSorted[k].day;
			j=gamesSorted[k].month;
		 	if((i==dateToPromote&&j==monthToPromote)&&nowTimestamp<=gamesSorted[k].endTime){
				gamesSortedToPromote.push(new game(gamesSorted[k].teamOne, gamesSorted[k].teamTwo, gamesSorted[k].month, gamesSorted[k].day, gamesSorted[k].startTime, gamesSorted[k].endTime,gamesSorted[k].startTimeHours, gamesSorted[k].startTimeMinutes,gamesSorted[k].rivalryWeek,gamesSorted[k].liveLink, gamesSorted[k].liveDeepLink,gamesSorted[k].network)) 
			}
			else if((i==dateToPromote&&j==monthToPromote)&&nowTimestamp>=gamesSorted[k].endTime){
				//do nothing
			}
			else{
				
				numFoxGames=searchforFoxOnly(gamesSortedToPromote);
				if(gamesSortedToPromote.length==0||(numFoxGames==Object.keys(gamesSortedToPromote).length&&numFoxGames>=1)){
					dateToPromote=gamesSorted[k].day;
					monthToPromote=gamesSorted[k].month;
					while(numFoxGames>0){
						gamesSortedToPromote.pop();
						numFoxGames--;
					}
					
					gamesSortedToPromote.push(new game(gamesSorted[k].teamOne, gamesSorted[k].teamTwo, gamesSorted[k].month, gamesSorted[k].day, gamesSorted[k].startTime, gamesSorted[k].endTime,gamesSorted[k].startTimeHours, gamesSorted[k].startTimeMinutes,gamesSorted[k].rivalryWeek,gamesSorted[k].liveLink, gamesSorted[k].liveDeepLink,gamesSorted[k].network)) 
				}
				else break;
				
			}
			
		}
	
	var diffDays = Math.round(Math.abs((gamesSortedToPromote[0].startTime - nowTimestamp)/(oneDay)));
	var dayOfWeekLong = new Date((gamesSortedToPromote[0].startTime));
	
	var dayOfWeekShort=dayOfWeekLong;
	dayOfWeekLong=weekday[dayOfWeekLong.getDay()].full;
	dayOfWeekShort=weekday[dayOfWeekShort.getDay()].short;
	if(diffDays==0){
		if(nowTimestamp>=gamesSortedToPromote[0].startTime){
			
			tuneInMessage="Live Now";
			
		}
	
		else{
			 tuneInMessage="Today";
		}
	
	}
	else if(diffDays==1){
				tuneInMessage="Tomorrow";	
	}
	else if(diffDays>1&&diffDays<=6){
			tuneInMessage=dayOfWeekLong;	
	}
	else if(diffDays>=7&&diffDays<14){
			tuneInMessage="Next "+dayOfWeekShort;	
	}
	else if(diffDays>=14){
			tuneInMessage=months[parseInt(gamesSortedToPromote[0].month,10)	].month+" "+gamesSortedToPromote[0].day;
	}
	
	if(Object.keys(gamesSortedToPromote).length==1){
		if(size=="1280x100"||size=="970x66")
		$( "#tuneInMessage" ).addClass( "tuneInMessageLarge" );
		else $( "#tuneInMessage" ).addClass( "tuneInMessage" );	
		
	}
	else{
		$( "#tuneInMessage" ).addClass( "tuneInMessage" );	
	}
	
	if(dayOfWeekLong=="Sunday"){
		$( "#soccerLogo" ).addClass( "soccerLogoSunday" );
		$( "#leftDiagonal" ).addClass( "leftDiagonal" );
		$( "#topDiagonal" ).addClass( "topDiagonal" );
	}
	else{
		$( "#soccerLogo" ).addClass( "soccerLogoOnly" );
		$( "#leftDiagonal" ).addClass( "leftDiagonalSaturday" );
		$( "#topDiagonal" ).addClass( "topDiagonalSaturday" );
		if(size=="1280x100"){
			$("#colCenter").css("left","170px");
		}
		if(size=="970x66"){
			$("#colCenter").css("left","135px");	
		}
		if(size=="300x250"&&Object.keys(gamesSortedToPromote).length==1){
			$( "#tuneInMessage" ).css( "top","98px" );
			$( "#soccerLogo" ).css("margin-top","10px");
		}
		
	}
	if(gamesSortedToPromote[0].rivalryWeek=="true"){
		rivalryWeek=1;
		if(size!="320x50"){
		$( "#soccerLogo" ).addClass( "soccerLogoRivalry" );	
		}
	}
	$("#tuneInMessage").html(tuneInMessage);
	
	for(var a=0; a<Object.keys(gamesSortedToPromote).length;a++){
		var timeOfDay="PM/ET";
		var networkSize;
	    if(bannerSize=="320x50"){
					gamesSortedToPromote[a].teamOne=teamAbbreviations[gamesSortedToPromote[a].teamOne].abbrev;
					gamesSortedToPromote[a].teamTwo=teamAbbreviations[gamesSortedToPromote[a].teamTwo].abbrev;
					
		}
		if(gamesSortedToPromote[a].startTimeHours<12) timeOfDay="AM/ET";
		if(gamesSortedToPromote[a].startTimeMinutes=="0"||gamesSortedToPromote[a].startTimeMinutes=="00") gamesSortedToPromote[a].startTimeMinutes="";
		else gamesSortedToPromote[a].startTimeMinutes=":"+gamesSortedToPromote[a].startTimeMinutes;
		if(Object.keys(gamesSortedToPromote).length>1) {networkSize="size"+size+"Small"} else  networkSize="size"+size+"Large"
		if(gamesSortedToPromote[a].startTimeHours>12) gamesSortedToPromote[a].startTimeHours=gamesSortedToPromote[a].startTimeHours-12;
		if(nowTimestamp>=gamesSortedToPromote[a].startTime){
			if(gamesSortedToPromote[a].network=="ESPN"||gamesSortedToPromote[a].network=="ESPN2"){
				 showLive=true;
				 var clickThrough=gamesSortedToPromote[a].liveLink;
				$('#socWrap').unbind( "click", defaultClick )
				$('#socWrap').bind("click",function(event){
					  	setClickThrough(adMacro+clickThrough,a);
					});
				
			}
		}
		if(Object.keys(gamesSortedToPromote).length>2){
			ctaDelay=3.6;
			if(bannerSize=="300x250"){
					gamesSortedToPromote[a].teamOne=teamAbbreviations[gamesSortedToPromote[a].teamOne].abbrev;
					gamesSortedToPromote[a].teamTwo=teamAbbreviations[gamesSortedToPromote[a].teamTwo].abbrev;
					
			}
			
			if(nowTimestamp>=gamesSortedToPromote[a].startTime){
				if(bannerSize=="1280x100"||bannerSize=="970x66"){
				$("#scheduleMessage").append("<div class='table2'>"+gamesSortedToPromote[a].teamOne+" <div class='vs' style='margin-top:-1px'>vs</div>"+gamesSortedToPromote[a].teamTwo+" <div id='tuneInTime'><span class='time'>LIVE</span>&nbsp;"+networks[gamesSortedToPromote[a].network][networkSize]+"</div></div>");
				}
				if(bannerSize=="728x90"||bannerSize=="320x50"){
				$("#scheduleMessage").append("<div class='table1' style='line-height:1.4em'>"+gamesSortedToPromote[a].teamOne+" <span class='vs'>vs</span> "+gamesSortedToPromote[a].teamTwo+"<span class='time'>&nbsp;LIVE</span>&nbsp;&nbsp;"+networks[gamesSortedToPromote[a].network][networkSize]+"</div>");
				}
				if(bannerSize=="300x250"){
					$("#scheduleMessage").append("<div class='table2'>"+gamesSortedToPromote[a].teamOne+" <span class='vs' >vs</span> "+gamesSortedToPromote[a].teamTwo+" <span class='time' style='display:table-cell;padding:5px;text-align:right'>LIVE</span></span>&nbsp;"+networks[gamesSortedToPromote[a].network][networkSize]+"</div>");
				}
					
			}
			else{
				if(bannerSize=="1280x100"||bannerSize=="970x66"){
				$("#scheduleMessage").append("<div class='table2'>"+gamesSortedToPromote[a].teamOne+" <div class='vs' style='margin-top:-1px'>vs</div>"+gamesSortedToPromote[a].teamTwo+" <div id='tuneInTime'><span class='time'>"+gamesSortedToPromote[a].startTimeHours+gamesSortedToPromote[a].startTimeMinutes+"<span class='timeZone'>"+timeOfDay+"</span></span>&nbsp;"+networks[gamesSortedToPromote[a].network][networkSize]+"</div></div>");
				}
				if(bannerSize=="728x90"||bannerSize=="320x50"){
					if(bannerSize=="728x90"){
						$('.table1').css("line-height","1.4em");		
					}
					$("#scheduleMessage").append("<div class='table1' >"+gamesSortedToPromote[a].teamOne+" <span class='vs'>vs</span> "+gamesSortedToPromote[a].teamTwo+"<span class='time'>&nbsp;"+gamesSortedToPromote[a].startTimeHours+gamesSortedToPromote[a].startTimeMinutes+"<span class='timeZone'>"+timeOfDay+"</span></span>&nbsp;&nbsp;"+networks[gamesSortedToPromote[a].network][networkSize]+"</div>");
					
				}
				if(bannerSize=="300x250"){
					
					$("#scheduleMessage").append("<div class='table2'>"+gamesSortedToPromote[a].teamOne+" <span class='vs' >vs</span> "+gamesSortedToPromote[a].teamTwo+" <span class='time' style='display:table-cell;padding:5px;text-align:right'>&nbsp;&nbsp;"+gamesSortedToPromote[a].startTimeHours+gamesSortedToPromote[a].startTimeMinutes+"<span class='timeZone2'>"+timeOfDay+"</span></span>&nbsp;"+networks[gamesSortedToPromote[a].network][networkSize]+"</div>");
				}
			}
			if(bannerSize=="1280x100"){
				$("#scheduleMessage").css("fontSize","1.2em");
				$('.time').css("font-size","20px");	
			}
			if(bannerSize=="300x250"){
				$('.espnLogo,.espn2Logo,.fs1Logo').css("height","14px");
				$('.espnLogo,#espn2Logo').css("vertical-align","-8%");
				$('.fs1Logo').css("vertical-align","-10%");
				$('.time').css("font-size","16px");	
				$("#scheduleMessage").css({
    						  "font-size": "0.9em",
     					  	  "top": "118px",
	  						  "width":"auto"});
	  		}
			if(bannerSize=="970x66"){
				$("#scheduleMessage").css("fontSize","0.9em");	
				$(".timeZone").css("fontSize","10px");	
				$('.espnLogo,.espn2Logo,.fs1Logo').css("height","12px");
				$('.foxLogo').css("height","14px");
				$('.espnLogo,.espn2Logo').css("vertical-align","-6%");
				$('.fs1Logo,.foxLogo').css("vertical-align","-8%");
			}
			
		}
		if(Object.keys(gamesSortedToPromote).length==2){
			ctaDelay=3.3;
			if(nowTimestamp>=gamesSortedToPromote[a].startTime){
				if(bannerSize!="300x250"){
				$("#scheduleMessage").append("<div class='table1' style='line-height:1.4em'>"+gamesSortedToPromote[a].teamOne+" <span class='vs'>vs</span> "+gamesSortedToPromote[a].teamTwo+"<span class='time'>&nbsp;LIVE</span>&nbsp;&nbsp;"+networks[gamesSortedToPromote[a].network][networkSize]+"</div>");
				}
				else{
					$("#scheduleMessage").append("<div class='table1' >"+gamesSortedToPromote[a].teamOne+" <span class='vs'>vs</span> "+gamesSortedToPromote[a].teamTwo+"<br/><span class='time'>&nbsp;LIVE</span>&nbsp;&nbsp;"+networks[gamesSortedToPromote[a].network][networkSize]+"</div>");
				}
			}
			else{
				if(bannerSize!="300x250"){
					$("#scheduleMessage").append("<div class='table1' style='line-height:1.4em'>"+gamesSortedToPromote[a].teamOne+" <span class='vs'>vs</span> "+gamesSortedToPromote[a].teamTwo+"<span class='time'>&nbsp;"+gamesSortedToPromote[a].startTimeHours+gamesSortedToPromote[a].startTimeMinutes+"<span class='timeZone'>"+timeOfDay+"</span></span>&nbsp;&nbsp;"+networks[gamesSortedToPromote[a].network][networkSize]+"</div>");
				}
				else{
						$("#scheduleMessage").append("<div class='table1' >"+gamesSortedToPromote[a].teamOne+" <span class='vs'>vs</span> "+gamesSortedToPromote[a].teamTwo+"<br/><span class='time'>&nbsp;"+gamesSortedToPromote[a].startTimeHours+gamesSortedToPromote[a].startTimeMinutes+"<span class='timeZone'>"+timeOfDay+"</span></span>&nbsp;&nbsp;"+networks[gamesSortedToPromote[a].network][networkSize]+"</div>");
						
				}
			}
			
			
		}
		if(Object.keys(gamesSortedToPromote).length==1){
			ctaDelay=3;
			if(size=="1280x100"){
				$(".vs").css("font-size","20px");	
			}
			if(nowTimestamp>=gamesSortedToPromote[a].startTime){
				$("#scheduleMessage").append("<div class='table1'>"+gamesSortedToPromote[a].teamOne+" <span class='vs' >vs</span> "+gamesSortedToPromote[a].teamTwo+"<br/> <span class='time'>LIVE</span>&nbsp;"+networks[gamesSortedToPromote[a].network][networkSize]+"</div>");
				
			}
			else{
				
				$("#scheduleMessage").append("<div class='table1'>"+gamesSortedToPromote[a].teamOne+" <span class='vs' >vs</span> "+gamesSortedToPromote[a].teamTwo+"<br/> <span class='time'>"+gamesSortedToPromote[a].startTimeHours+gamesSortedToPromote[a].startTimeMinutes+"<span class='timeZone1'>"+timeOfDay+"</span></span>&nbsp;"+networks[gamesSortedToPromote[a].network][networkSize]+"</div>");
				
				
			}
			if(bannerSize=="1280x100"){
				$("#scheduleMessage").css("fontSize","1.7em");
				$('.time').css("font-size","1.1em");	
			}
			if(bannerSize=="970x66"){
				$("#scheduleMessage").css("fontSize","1.3em");
				$('.time').css("font-size","0.9em");	
			}
			if(bannerSize=="728x90"){
				$("#scheduleMessage").css("fontSize","1.4em");
				$('.time').css("font-size","1em");	
			}
			if(bannerSize=="300x250"){
				$("#scheduleMessage").css({"font-size":"1.2em","top":"35px"});
				$("#ctaBtn").css("top","205px");
					
			}
			if(bannerSize=="320x50"){
					$("#scheduleMessage").css("fontSize","1em");
					$('#colCenter').css("left","50px");	
					$('.table1').css("text-align","center");	
									
			}
		}
	
	}
	if(tuneInMessage=="Live Now"&&showLive==true){
		$( "#ctaBtn" ).addClass( "ctaLiveBtn" );
		
	}
	else{
		$( "#ctaBtn" ).addClass( "ctaScheduleBtn" );
	}
	window.setTimeout(function(){animate();}, 100);
}
	
			
	function setClickThrough(url,num){
		if((navigator.userAgent.toLowerCase().indexOf('iphone') > -1 || navigator.userAgent.toLowerCase().indexOf('ipad') > -1 || navigator.userAgent.toLowerCase().indexOf('ipod') ) && typeof mraid !== 'undefined'  ){
			if (showLive==true){
				url=gamesSortedToPromote[num].liveDeepLink;
			}
		}
		if(typeof window.parent.app === 'object'){
					event.preventDefault();
					if(dfpAdID !== undefined){
									if(navigator.userAgent.toLowerCase().indexOf('android') > -1){
													window.parent.app.ads.clickThrough(url+'?ord='+cacheBust,dfpAdID);
									} else {
													window.parent.app.ads.clickThrough(url,dfpAdID);
									}
					} else {
									if(navigator.userAgent.toLowerCase().indexOf('android') > -1){
													window.parent.app.ads.clickThrough(url+'?ord='+cacheBust);
									} else {
													window.parent.app.ads.clickThrough(url);
									}
					}
		} 
		else if(typeof mraid !== 'undefined'){
				mraid.open(url);
		}
		else {
			window.open(url, "_blank");
		}
				
	}
	function defaultClick(){
		setClickThrough(adMacro+"http://bit.ly/1DYsiff",0);
			
	}
		
	function init(size, macro, adID, cacheBuster) {
			if(adID) dfpAdID=adID;
			bannerSize=size;
			if(cacheBuster) cacheBust=cacheBuster;
			if(macro) adMacro=macro;
			if(adMacro=="%%CLICK_URL_UNESC%%") adMacro="";
	         $('#socWrap').bind("click",defaultClick);

			
      }
	  
