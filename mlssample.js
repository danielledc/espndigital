//weekday and month objects used to store data, for display in banner HTML
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

//team data, for display in banner HTML
var teamNames={
			"Atlanta":{long:"Atlanta United FC",abbrev:"ATL"},
			"Chicago":{long:"Chicago Fire",abbrev:"CHI"},
			"Colorado":{long:"Colorado Rapids",abbrev:"COL"},
			"Columbus":{long:"Columbus Crew SC",abbrev:"CLB"},
			"D.C. United":{long:"D.C. United",abbrev:"DC"},
			"FC Dallas":{long:"FC Dallas",abbrev:"DAL"},
			"Houston":{long:"Houston Dynamo",abbrev:"HOU"},
			"LA Galaxy":{long:"LA Galaxy",abbrev:"LA"},
			"Minnesota":{long:"Minnesota United FC",abbrev:"MIN"},
			"Montreal":{long:"Montreal Impact",abbrev:"MTL"},
			"New England":{long:"New England Revolution",abbrev:"NE"},
			"NYCFC":{long:"New York City FC",abbrev:"NYC"},
			"NY Red Bulls":{long:"New York Red Bulls",abbrev:"NYR"},
			"Orlando City":{long:"Orlando City SC",abbrev:"ORL"},
			"Philadelphia":{long:"Philadelphia Union",abbrev:"PHI"},
			"Portland":{long:"Portland Timbers",abbrev:"POR"},
			"Real Salt Lake":{long:"Real Salt Lake",abbrev:"RSL"},
			"San Jose":{long:"San Jose Earthquakes",abbrev:"SJ"},
			"Seattle": {long:"Seattle Sounders",abbrev:"SEA"},
			"Sporting KC": {long:"Sporting KC",abbrev:"SKC"},
			"Toronto FC": {long:"Toronto FC",abbrev:"TOR"},
			"Vancouver": {long:"Vancouver Whitecaps",abbrev:"VAN"}
			
}

//object where each banner size has several properties defining which image sizes to use, for team specific logo and background images. 
var imgSizes={
			"1280x100":{ logoBigSize:"1280x100", logoSmallSize:"1280x100",  teamDiagonalSize:"100",teamLogoBigSize:"100", teamLogoSmallSize:"95"},
			"728x90":{logoBigSize:"728x90", logoSmallSize:"728x90", teamDiagonalSize:"90",teamLogoBigSize:"90", teamLogoSmallSize:"90"},
			"1024x66":{logoBigSize:"970x66", logoSmallSize:"970x66", teamDiagonalSize:"66",teamLogoBigSize:"68", teamLogoSmallSize:"60"},
			"970x66":{logoBigSize:"970x66", logoSmallSize:"970x66", teamDiagonalSize:"66",teamLogoBigSize:"68", teamLogoSmallSize:"60"},
			"300x250":{logoBigSize:"300x250", logoSmallSize:"1280x100", teamDiagonalSize:"250", teamLogoBigSize:"422", teamLogoSmallSize:"90"},
			"320x50":{logoBigSize:"320x50", logoSmallSize:"970x66", teamDiagonalSize:"50",teamLogoBigSize:"50", teamLogoSmallSize:"43"},
			"320x120":{logoBigSize:"300x250", logoSmallSize:"970x66", teamDiagonalSize:"120",teamLogoBigSize:"360", teamLogoSmallSize:"50"}
}
			
var dfpAdID, cacheBust, adMacro,  offset=5.0, ctaDelay, showLive=false, num=0, showScheduleMessage, introText,   games=[];

//banner clickthrough link when game is not live
var defaultLink="http://www.espnfc.us/major-league-soccer/19/index";

//code to calculate date for today 
var now = new Date();

var nowTimestamp=now.getTime(); 

var theDay= now.getDay(); 
var theDate= now.getDate();
var theMonth=now.getMonth()+1;
var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
var nextweek = new Date(now.getFullYear(), now.getMonth(), now.getDate()+7);
nextweek=nextweek.getTime();
//daylight savings time begins change offset
if(nowTimestamp>=1489298400000){
		offset=4.0;
	}

//ajax request to json file containing game data
$.ajax({
  url: "js/games.json",	
  success: function(data) {
	  //parse through file, computing game start and end time. If a game has not ended, add it to games array
	 for(var x in data){
		 	var endTimeDate, endTimeMonth,  teamOne="", teamTwo="";
		    startTimeParts=data[x].startTime.trim().split(":");
			endTimeParts=data[x].endTime.trim().split(":");
			startTime=getTimeStamp(data[x].date.trim(), data[x].month.trim(), startTimeParts[0], startTimeParts[1]);
			if(endTimeParts[0]<startTimeParts[0]){
				endTime=getTimeStampTomorrow(data[x].date.trim(), data[x].month.trim(), endTimeParts[0], endTimeParts[1]);
			}
			else endTime=getTimeStamp(data[x].date.trim(), data[x].month.trim(), endTimeParts[0], endTimeParts[1]);	
			endTimeDate=new Date(endTime);
			endTimeDate=endTimeDate.getDate();
			endTimeMonth=new Date(endTime);
			endTimeMonth=endTimeMonth.getMonth()+1;
			
			liveLink=data[x].liveLink.trim();
			liveDeepLink=data[x].liveDeepLink.trim();
			
		  if(nowTimestamp<endTime){	 
		 	
			games.push(new game( data[x].month.trim(), data[x].date.trim(), startTime, endTime, startTimeParts[0], startTimeParts[1],  data[x].teamOne.trim(), data[x].teamTwo.trim(), data[x].network.trim(),data[x].deportes.trim(),liveLink, liveDeepLink )); 
		  }
	  
	 }
	 //sort the games array by game start time
	 games=games.sort(function(a,b) {
			return a.startTime - b.startTime;
		});
 },
  error: function() {
	console.log("error reading file");   
  },
  complete: function(data) {
	
        //after parsing through data, invoke function to display correct tune in message on banner, and animate banner
    	changeMessage(bannerSize);

  }
});

//function to compute timestamp for game time
function getTimeStamp(date, month, hours, minutes) {
       
    var dateNew= new Date( ((month ) + '/' + date + '/' + 2018 + " " + hours + ':'
                     + minutes + ':' + 0));
		
			 
	var utcTime = dateNew.getTime() - (now.getTimezoneOffset() * 60000);
	var showTimestamp=new Date(utcTime + (3600000*offset));
	return showTimestamp.getTime();
    
	
		
}

//function to compute timestamp for game that ends on the following day
function getTimeStampTomorrow(date, month, hours, minutes) {
       
    var dateNew= new Date( ((month ) + '/' + date + '/' + 2018 + " " + hours + ':'
                     + minutes + ':' + 0));
		
	dateNew.setDate(dateNew.getDate() + 1)		 
	var utcTime = dateNew.getTime() - (now.getTimezoneOffset() * 60000);
	var showTimestamp=new Date(utcTime + (3600000*offset));
	return showTimestamp.getTime();
		
}

//game class
function game( month, date, startTime, endTime, startTimeHours, startTimeMinutes,   teamOne, teamTwo, network, deportes,liveLink, liveDeepLink  ) {
    this.month=month;
	this.day=date;
	this.startTime = startTime;
	this.endTime = endTime;
	this.startTimeHours = startTimeHours;
	this.startTimeMinutes = startTimeMinutes;
	
	this.liveLink = liveLink;
	this.liveDeepLink = liveDeepLink;

	this.teamOne=teamOne;
	this.teamTwo=teamTwo;
	this.network=network;
	this.deportes=deportes;
}

//determine correct message to display on banner by comparing today's date with game date, update HTML, and animate the banner
function changeMessage(bannerSize){
	
	//game to promote will be the first game in the games array, which is copied to gameToPromote object
	var gameToPromote=Object.assign({},games[0]);
     
	var diffDays = Math.round(Math.abs((gameToPromote.startTime - nowTimestamp)/(oneDay)));
	var showDay=dayOfWeekLong= new Date((gameToPromote.startTime));
	
	showDay=showDay.getDay();
	var dayOfWeekShort=dayOfWeekLong;
	dayOfWeekLong=weekday[dayOfWeekLong.getDay()].full;
	dayOfWeekShort=weekday[dayOfWeekShort.getDay()].short;
		//game is either live, today/tonight, or tomorrow 
		if(diffDays==0){
			
			if(nowTimestamp>=gameToPromote.startTime){
				       //game is live
					showScheduleMessage="";
					if(gameToPromote.startTimeHours>=18){
						introText="Tonight";	
					}
					else introText="Today";
					showLive=true;
					
			}
			
			else{
				if(showDay==theDay){
					if(gameToPromote.startTimeHours>=18){
						showScheduleMessage=introText="Tonight";	
					}
					else showScheduleMessage=introText="Today";
				}
				else showScheduleMessage=introText="Tomorrow";	
			}
			
		}
	       //game is either today/tonight or tomorrow
		else if(diffDays>0&&diffDays<=1){
			if(theDay!=showDay)
				showScheduleMessage=introText="Tomorrow";	
			else{
				if(gameToPromote.startTimeHours>=18){
					showScheduleMessage=introText="Tonight";	
				}
				else showScheduleMessage=introText="Today";
					
			}
			
		}
	       //game is either tomorrow or this week (using day of week)
		else if(diffDays>1&&diffDays<7){
				if((theDay==showDay-1)||(theDay==6&&showDay==0))
					showScheduleMessage=introText="Tomorrow";	
				else{
					
					showScheduleMessage=dayOfWeekLong;	
					if(bannerSize!="300x250"&&bannerSize!="320x120") introText="This "+dayOfWeekLong;
					else introText="This<br/>"+dayOfWeekLong;
				}
		}
	        //game is more than a week away
		else if(diffDays>=7){
			showScheduleMessage=introText=dayOfWeekLong+" "+months[parseInt(gameToPromote.month,10)	].month+" "+parseInt(gameToPromote.day,10);
			if(bannerSize=="300x250"||bannerSize=="320x120") {
				introText=dayOfWeekLong+"<br/>"+months[parseInt(gameToPromote.month,10)	].month+" "+parseInt(gameToPromote.day,10);
			}
			else{
				showScheduleMessage=dayOfWeekShort+" "+months[parseInt(gameToPromote.month,10)	].month+" "+parseInt(gameToPromote.day,10);
			}
		}
		
		$("#text1").html(introText);
		if(dayOfWeekLong=="Sunday")
			$("#mlsLogo").addClass("soccerLogoSunday");
		else{
			$("#mlsLogo").addClass("soccerLogoOnly");	
		}
		if(gameToPromote.network=="ESPN") 
			$("#networks").addClass("espnWatchLogos");
		else{
			$("#networks").addClass("espn2WatchLogos");
		}
		if(gameToPromote.deportes=="yes") 
			$("#deportes").css("display","inline-block");
		
		$("#team1Bkgd").html("<img src='https://secure.espncdn.com/i/dynbanners/mls/2017/Season/images/17020014IB1_SOC_"+bannerSize+"_"+teamNames[gameToPromote.teamOne].abbrev+"_diagonal.png' height='"+imgSizes[bannerSize].teamDiagonalSize+"' />");
		$("#team1LogoBkgd").html("<img src='https://secure.espncdn.com/i/dynbanners/mls/2017/Season/images/17020014IB1_SOC_"+imgSizes[bannerSize].logoBigSize+"_"+teamNames[gameToPromote.teamOne].abbrev+"_bigLogo.jpg' height='"+imgSizes[bannerSize].teamLogoBigSize+"' />");
		if(imgSizes[bannerSize].logoBigSize=="300x250")
			$("#team1LogoBkgd").html("<img src='https://secure.espncdn.com/i/dynbanners/mls/2017/Season/images/17020014IB1_SOC_"+imgSizes[bannerSize].logoBigSize+"_"+teamNames[gameToPromote.teamOne].abbrev+"_bigLogo.png' height='"+imgSizes[bannerSize].teamLogoBigSize+"' />");
		
		$("#team1LogoSmall").html("<img src='https://secure.espncdn.com/i/dynbanners/mls/2017/Season/images/17020014IB1_SOC_"+imgSizes[bannerSize].logoSmallSize+"_"+teamNames[gameToPromote.teamOne].abbrev+"_smallLogo.png' height='"+imgSizes[bannerSize].teamLogoSmallSize+"' />");
		$("#team1Name").html(teamNames[gameToPromote.teamOne].long);
		if(bannerSize=="300x250"||bannerSize=="728x90"||bannerSize=="320x120") $("#team1Name").html(gameToPromote.teamOne);
		$("#team2Bkgd").html("<img src='https://secure.espncdn.com/i/dynbanners/mls/2017/Season/images/17020014IB1_SOC_"+bannerSize+"_"+teamNames[gameToPromote.teamTwo].abbrev+"_diagonal.png' height='"+imgSizes[bannerSize].teamDiagonalSize+"' />");
		if(bannerSize=="320x50") $("#team1Name").html(teamNames[gameToPromote.teamOne].abbrev);
		$("#team2LogoBkgd").html("<img src='https://secure.espncdn.com/i/dynbanners/mls/2017/Season/images/17020014IB1_SOC_"+imgSizes[bannerSize].logoBigSize+"_"+teamNames[gameToPromote.teamTwo].abbrev+"_bigLogo.jpg' height='"+imgSizes[bannerSize].teamLogoBigSize+"' />");
		if(imgSizes[bannerSize].logoBigSize=="300x250")
			$("#team2LogoBkgd").html("<img src='https://secure.espncdn.com/i/dynbanners/mls/2017/Season/images/17020014IB1_SOC_"+imgSizes[bannerSize].logoBigSize+"_"+teamNames[gameToPromote.teamTwo].abbrev+"_bigLogo.png' height='"+imgSizes[bannerSize].teamLogoBigSize+"' />");
		$("#team2LogoSmall").html("<img src='https://secure.espncdn.com/i/dynbanners/mls/2017/Season/images/17020014IB1_SOC_"+imgSizes[bannerSize].logoSmallSize+"_"+teamNames[gameToPromote.teamTwo].abbrev+"_smallLogo.png' height='"+imgSizes[bannerSize].teamLogoSmallSize+"' />");
		$("#team2Name").html(teamNames[gameToPromote.teamTwo].long);
		if(bannerSize=="300x250"||bannerSize=="728x90"||bannerSize=="320x120") $("#team2Name").html(gameToPromote.teamTwo);
		if(bannerSize=="320x50") $("#team2Name").html(teamNames[gameToPromote.teamTwo].abbrev);
		var timeOfDay="PM/ET";
		
		if(gameToPromote.startTimeHours<12) timeOfDay="AM/ET";
	        //if game doesn't start on the hour, display minutes, otherwise don't display minutes, i.e. display 7 not 7:00
		if(gameToPromote.startTimeMinutes!="00"){
			gameToPromote.startTimeMinutes=":"+gameToPromote.startTimeMinutes;
		}
		else{
			 gameToPromote.startTimeMinutes="";
			 
		}
	
		//convert military time
		if(gameToPromote.startTimeHours>12) gameToPromote.startTimeHours=gameToPromote.startTimeHours-12;
	        
		if(showLive==true){
			 $("#liveCTA").css("display","block");
			 if(bannerSize=="970x66"||bannerSize=="1024x66"){
					$("#tuneIn").css("margin","0px");
					 $("#networksDiv").css("margin-top","-4px"); 
			 }
			 if(bannerSize=="300x250"){
				 $("#networksDiv").css("margin-top","-2px"); 
			}
			if(bannerSize=="320x120"){
				 $("#networksDiv").css("margin-top","-7px"); 
			}
			 if(bannerSize=="1280x100"||bannerSize=="320x50"||bannerSize=="728x90"){
					
					 $("#networksDiv").css("margin-top","0px"); 
			 }
			//when show is live change the clickthrough to live link
			 var clickThrough=gameToPromote.liveLink;
					$('#socWrap').unbind( "click", defaultClick )
					$('#socWrap').bind("click",function(event){
							setClickThrough(adMacro+clickThrough);
						});
		}
		
		//change 12:00pm and 12:00am to display Noon and Midnight
		else if((gameToPromote.startTimeHours=="12"||gameToPromote.startTimeHours=="00")&&gameToPromote.startTimeMinutes==""){
					
					if(gameToPromote.startTimeHours=="12") {
							$("#showScheduleMessage").html(showScheduleMessage+" <span class='time'>Noon</span>");	
					}
					else{
						if(showScheduleMessage==dayOfWeekLong) showScheduleMessage=dayOfWeekShort;
							$("#time")=" <span class='time'>Midnight</span>";	
						
						 $("#showScheduleMessage").html(showScheduleMessage+" <span class='time'>Midnight</span>");	
					}
		}
	        
		else{	$("#showScheduleMessage").html(showScheduleMessage+" <span class='time'>"+gameToPromote.startTimeHours+gameToPromote.startTimeMinutes+"<span class='timeZone'>"+timeOfDay+"</span></span>");
					
		}
	 //start the animation after timeout to allow banner to load
	 window.setTimeout( function(){animate();},200);
			
	  

}
	//this function is used for detecting if in the app, which will change the way the clickthrough opens. Uses mraid
			
	function setClickThrough(url){
		
		if((navigator.userAgent.toLowerCase().indexOf('iphone') > -1 || navigator.userAgent.toLowerCase().indexOf('ipad') > -1 || navigator.userAgent.toLowerCase().indexOf('ipod') ) && typeof mraid !== 'undefined'  ){
			if (showLive==true){
				url=gameToPromote.liveDeepLink;
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
	
       //prepend dfp macro to clickthrough
	function defaultClick(){
		setClickThrough(adMacro+defaultLink);
			
	}
	
        //set ad parameters, most importantly dfp macro, and add event handler to banner div wrap
	function init(macro, adID, cacheBuster) {
		 
			if(adID) dfpAdID=adID;
			
			if(cacheBuster) cacheBust=cacheBuster;
			if(macro) adMacro=macro;
			if(adMacro=="%%CLICK_URL_UNESC%%") adMacro="";
		  
	         $('#socWrap').bind("click",defaultClick);			
	  		
      }
	  
 
