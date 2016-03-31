//this file includes code to change the tune in messaging on the banner based on client date/time, as well as change the link the 
//banner clicks through to, also based on client date/time

var clickThroughs= {
			"default": "http://xgames.espn.go.com/xgames/",
			"afterShow":"http://xgames.espn.go.com/xgames/events/2016/aspen/schedule/tv",
			"duringShow1":"http://es.pn/1Un7R5l",
			"duringShowDeepLink1":"sportscenter://x-callback-url/showWatch?playID=2698744",
			"duringShow2":"http://es.pn/1JzhiOO",
			"duringShowDeepLink2":"sportscenter://x-callback-url/showWatch?playID=2712602",
			"duringShow3":"http://es.pn/1SHlY7U",
			"duringShowDeepLink3":"sportscenter://x-callback-url/showWatch?playID=2698761",
			"duringShow4":"http://es.pn/1SHlYou",
			"duringShowDeepLink4":"sportscenter://x-callback-url/showWatch?playID=2698772",
			}
			
		
var dfpAdID, cacheBust, adMacro, liveNow=false, num="1";


var tuneInMessage = {
	      "WeekBefore":{timeStamp: 1453525200000, date:23,showMessage:'<span id="smallerMessage"><span id="small">Starts</span> Friday 7<span id="timeZone">PM/ET</span></span>'},
	      "DayBefore":{timeStamp: 1453957200000, date:28,showMessage:'<span id="smallerMessage"><span id="small">Starts</span> Tomorrow 7<span id="timeZone">PM/ET</span></span>'},
		  "Day1Show" :{ "BeforeShow":  {timeStamp: 1454043600000, date:29, showMessage:'<span id="smallerMessage"><span id="small">Starts</span> Tonight 7<span id="timeZone">PM/ET</span></span>' },
						"DuringShow":  {timeStamp: 1454112000000, showMessage:'LIVE NOW'},
						"AfterShow":   {timeStamp: 1454126400000, showMessage:'<span id="smallerMessage"><span id="small">Continues</span> Tomorrow 1<span id="timeZone">PM/ET</span></span>'  }
					 },
		  "Day2Show" :{ "BeforeShow1":  {timeStamp: 1454130000000, date:30, showMessage:'<span id="smallerMessage"><span id="small">Continues</span> Today 1<span id="timeZone">PM/ET</span></span>' },
						"DuringShow1": {timeStamp: 1454176800000, showMessage:'LIVE NOW'},
						"BeforeShow2":  {timeStamp: 1454194800000, showMessage:'<span id="smallerMessage"><span id="small">Continues</span> Tonight 9<span id="timeZone">PM/ET</span></span>'},
						"DuringShow2": {timeStamp: 1454205600000, showMessage:'LIVE NOW'},
						"AfterShow":{timeStamp: 1454212800000, showMessage:'<span id="smallerMessage"><span id="small">Continues</span> Tomorrow 12<span id="timeZone">PM/ET</span></span>'   }
					 },
		  "Day3Show" :{ "BeforeShow":  {timeStamp: 1454216400000, date:31, showMessage:'<span id="smallerMessage"><span id="small">Continues</span> Today 12<span id="timeZone">PM/ET</span></span>'  },
						"DuringShow": {timeStamp: 1454259600000, showMessage:'LIVE NOW'}
					 }		 
						 
			
};


function changeMessage(size){
		 var now = new Date();
		var nowTimestamp=now.getTime(); 
		
		 if (nowTimestamp>=tuneInMessage["WeekBefore"].timeStamp&&nowTimestamp<tuneInMessage["DayBefore"].timeStamp){
			if (tuneInMessage["WeekBefore"].date>now.getDate()){
				document.getElementById("showScheduleMessage").innerHTML="January 29-31";
				document.getElementById("getReady").style.display="inline-block";
				
			}
			else{
				document.getElementById("showScheduleMessage").innerHTML=tuneInMessage["WeekBefore"].showMessage;
				document.getElementById("abcLogo").style.display="none";
				document.getElementById("getReady").style.display="inline-block";
			}
		
		}
	   else if (nowTimestamp>=tuneInMessage["DayBefore"].timeStamp&&nowTimestamp<tuneInMessage["Day1Show"].BeforeShow.timeStamp){
		  document.getElementById("abcLogo").style.display="none";
			if (tuneInMessage["DayBefore"].date>now.getDate()){
				document.getElementById("showScheduleMessage").innerHTML=tuneInMessage["WeekBefore"].showMessage;
				document.getElementById("getReady").style.display="inline-block";
				
			}
			else{
				document.getElementById("showScheduleMessage").innerHTML=tuneInMessage["DayBefore"].showMessage;
				document.getElementById("seeSchedule").style.display="inline-block";
			}
		
		}
		else if (nowTimestamp>=tuneInMessage["Day1Show"].BeforeShow.timeStamp&&nowTimestamp<tuneInMessage["Day1Show"].DuringShow.timeStamp){
			document.getElementById("abcLogo").style.display="none";
			if (tuneInMessage["Day1Show"].BeforeShow.date>now.getDate()){
				document.getElementById("showScheduleMessage").innerHTML=tuneInMessage["DayBefore"].showMessage;
				document.getElementById("getReady").style.display="inline-block";
			}
			else{
				document.getElementById("showScheduleMessage").innerHTML=tuneInMessage["Day1Show"].BeforeShow.showMessage;
				document.getElementById('xgWrap').onclick=function(){
					setClickThrough(clickThroughs["afterShow"]);
				}
				document.getElementById("seeSchedule").style.display="inline-block";
				
			}
			
		}
		else if (nowTimestamp>=tuneInMessage["Day1Show"].DuringShow.timeStamp&&nowTimestamp<tuneInMessage["Day1Show"].AfterShow.timeStamp){
			
				document.getElementById("showScheduleMessage").innerHTML=tuneInMessage["Day1Show"].DuringShow.showMessage;
				document.getElementById('xgWrap').onclick=function(){
					setClickThrough(clickThroughs["duringShow1"]);
				}
				document.getElementById("on").style.display="inline-block";
			  	document.getElementById("abcLogo").style.display="none";
				document.getElementById("live").style.display="inline-block";
			
		}
		else if (nowTimestamp>=tuneInMessage["Day1Show"].AfterShow.timeStamp&&nowTimestamp<tuneInMessage["Day2Show"].BeforeShow1.timeStamp){
			
				document.getElementById("showScheduleMessage").innerHTML=tuneInMessage["Day1Show"].AfterShow.showMessage;
				document.getElementById("seeSchedule").style.display="inline-block";
				document.getElementById('xgWrap').onclick=function(){
					setClickThrough(clickThroughs["afterShow"]);
				}
			
		}
		else if (nowTimestamp>=tuneInMessage["Day2Show"].BeforeShow1.timeStamp&&nowTimestamp<tuneInMessage["Day2Show"].DuringShow1.timeStamp){
			document.getElementById('xgWrap').onclick=function(){
					setClickThrough(clickThroughs["afterShow"]);
			}
			if (tuneInMessage["Day2Show"].BeforeShow1.date>now.getDate()){
				document.getElementById("showScheduleMessage").innerHTML=tuneInMessage["Day1Show"].AfterShow.showMessage;
				document.getElementById("seeSchedule").style.display="inline-block";
			}
			else{
				document.getElementById("showScheduleMessage").innerHTML=tuneInMessage["Day2Show"].BeforeShow1.showMessage;
				document.getElementById("espnLogo").style.display="none";
				document.getElementById("seeSchedule").style.display="inline-block";
				
			}
			
		}
		else if (nowTimestamp>=tuneInMessage["Day2Show"].DuringShow1.timeStamp&&nowTimestamp<tuneInMessage["Day2Show"].BeforeShow2.timeStamp){
			
				document.getElementById("showScheduleMessage").innerHTML=tuneInMessage["Day2Show"].DuringShow1.showMessage;
				document.getElementById('xgWrap').onclick=function(){
					setClickThrough(clickThroughs["duringShow2"]);
				}
				num="2";
				document.getElementById("on").style.display="inline-block";
			   document.getElementById("espnLogo").style.display="none";
				document.getElementById("live").style.display="inline-block";
				
		}
		
		else if (nowTimestamp>=tuneInMessage["Day2Show"].BeforeShow2.timeStamp&&nowTimestamp<tuneInMessage["Day2Show"].DuringShow2.timeStamp){
				document.getElementById('xgWrap').onclick=function(){
					setClickThrough(clickThroughs["afterShow"]);
				}
				document.getElementById("showScheduleMessage").innerHTML=tuneInMessage["Day2Show"].BeforeShow2.showMessage;
			  document.getElementById("abcLogo").style.display="none";
				document.getElementById("seeSchedule").style.display="inline-block";
			
		}
		else if (nowTimestamp>=tuneInMessage["Day2Show"].DuringShow2.timeStamp&&nowTimestamp<tuneInMessage["Day2Show"].AfterShow.timeStamp){
			
				document.getElementById("showScheduleMessage").innerHTML=tuneInMessage["Day2Show"].DuringShow2.showMessage;
				document.getElementById('xgWrap').onclick=function(){
					setClickThrough(clickThroughs["duringShow3"]);
				}
				num="3";
				document.getElementById("on").style.display="inline-block";
			  document.getElementById("abcLogo").style.display="none";
				document.getElementById("live").style.display="inline-block";
			
		}
		else if (nowTimestamp>=tuneInMessage["Day2Show"].AfterShow.timeStamp&&nowTimestamp<tuneInMessage["Day3Show"].BeforeShow.timeStamp){
			
				document.getElementById("showScheduleMessage").innerHTML=tuneInMessage["Day2Show"].AfterShow.showMessage;
				document.getElementById('xgWrap').onclick=function(){
					setClickThrough(clickThroughs["afterShow"]);
				}
			    	document.getElementById("abcLogo").style.display="none";
				document.getElementById("seeSchedule").style.display="inline-block";
			
		}
		else if (nowTimestamp>=tuneInMessage["Day3Show"].BeforeShow.timeStamp&&nowTimestamp<tuneInMessage["Day3Show"].DuringShow.timeStamp){
			document.getElementById("abcLogo").style.display="none";
			document.getElementById("seeSchedule").style.display="inline-block";
			document.getElementById('xgWrap').onclick=function(){
					setClickThrough(clickThroughs["afterShow"]);
				}
			if (tuneInMessage["Day3Show"].BeforeShow.date>now.getDate()){
				document.getElementById("showScheduleMessage").innerHTML=tuneInMessage["Day2Show"].AfterShow.showMessage;			
				
			}
			else{
				document.getElementById("showScheduleMessage").innerHTML=tuneInMessage["Day3Show"].BeforeShow.showMessage;
			}
			
		}
		else if (nowTimestamp>=tuneInMessage["Day3Show"].DuringShow.timeStamp){
			document.getElementById("abcLogo").style.display="none";
			document.getElementById("showScheduleMessage").innerHTML=tuneInMessage["Day3Show"].DuringShow.showMessage;
			document.getElementById("live").style.display="inline-block";
			document.getElementById('xgWrap').onclick=function(){
					setClickThrough(clickThroughs["duringShow4"]);
			}
			num="4";
			document.getElementById("on").style.display="inline-block";
			   
		}
		
		else{
			document.getElementById("showScheduleMessage").innerHTML="January 29-31";
			document.getElementById("getReady").style.display="inline-block";
		}
		 if(size=="320x50"){
			 if(document.getElementById("showScheduleMessage").innerHTML.indexOf("Continues")>-1||document.getElementById("showScheduleMessage").innerHTML.indexOf("Starts")>-1){
				 if(document.getElementById("showScheduleMessage").innerHTML.indexOf("Friday")==-1){
					 document.getElementById("showScheduleMessage").innerHTML="All Weekend Long<br/>";
					 document.getElementById("tuneIn").style.left="-6px";
					 document.getElementById("tuneIn").style.fontSize="0.9em";
				 }
				 else{
					 document.getElementById("showScheduleMessage").innerHTML="January 29-31";
				 }
				 if(nowTimestamp<tuneInMessage["Day2Show"].BeforeShow2.timeStamp){
					 document.getElementById("espnLogo").style.display="inline-block";
					 document.getElementById("abcLogo").style.display="inline-block";
				 }
			 }
			 
			 if(document.getElementById("showScheduleMessage").innerHTML.indexOf("LIVE")>-1){
			 	document.getElementById("tuneIn").style.left="10px";
			 }
			document.getElementById("networks").style.display="block";	 
		 }
		 if (size=="300x250"||size=="728x90"){
			 if(document.getElementById("showScheduleMessage").innerHTML.indexOf("LIVE")==-1&&document.getElementById("showScheduleMessage").innerHTML.indexOf("29-31")==-1){
				 if(size=="300x250"){
				  document.getElementById("tuneIn").style.fontSize="1.5em";
				  document.getElementById("tuneIn").style.top="93px";
				 }
				 else{
					 document.getElementById("tuneIn").style.paddingTop="0px"; 
					 document.getElementById("tuneIn").style.marginTop="-5px"; 
					
				 }
			 }
 			 document.getElementById("showScheduleMessage").innerHTML= document.getElementById("showScheduleMessage").innerHTML.replace("Starts","Starts<br/>");
			 document.getElementById("showScheduleMessage").innerHTML=document.getElementById("showScheduleMessage").innerHTML.replace("Continues","Continues<br/>");
			 if(size=="728x90"){
				 if(document.getElementById("showScheduleMessage").innerHTML.indexOf("LIVE")>-1){
			 		document.getElementById("tuneIn").style.left="15px";
				 }
				 document.getElementById("networks").style.display="block";
				 
			 }
		 }
		  if (size=="1280x100"||size=="970x66"){
			 if(document.getElementById("showScheduleMessage").innerHTML.indexOf("LIVE")==-1&&document.getElementById("showScheduleMessage").innerHTML.indexOf("29-31")==-1){
				  
				  if(size=="1280x100"){
				  	document.getElementById("tuneIn").style.paddingTop="16px";
					document.getElementById("tuneIn").style.fontSize="2em";
				  }
				  else{
					 document.getElementById("tuneIn").style.paddingTop="0px"; 
					 document.getElementById("tuneIn").style.fontSize="1.9em";					
				  }
				  document.getElementById("networks").style.display="block";				
				  
			 }
			 if(document.getElementById("showScheduleMessage").innerHTML.indexOf("29-31")>-1){
				 document.getElementById("showScheduleMessage").innerHTML+="&nbsp;";
			 }
			 
 		 }
	}
			
	function setClickThrough(url){
		if((navigator.userAgent.toLowerCase().indexOf('iphone') > -1 || navigator.userAgent.toLowerCase().indexOf('ipad') > -1 || navigator.userAgent.toLowerCase().indexOf('ipod') ) && typeof mraid !== 'undefined'  ){
			if (liveNow==true){
				url=clickThroughs["duringShowDeepLink"+num];
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
	
	function randomizeSponsor(size){
		

		var randomNumber = Math.random() ;
		if(randomNumber>=0&&randomNumber<=0.11)	
			document.getElementById("logo1").style.display="inline-block";
		else if(randomNumber>0.11&&randomNumber<=0.22)
			document.getElementById("logo2").style.display="inline-block";
		else if(randomNumber>0.22&&randomNumber<=0.33)
			document.getElementById("logo3").style.display="inline-block";
		else if(randomNumber>0.33&&randomNumber<=0.44)
			document.getElementById("logo4").style.display="inline-block";
		else if(randomNumber>0.44&&randomNumber<=0.55){
			document.getElementById("logo5").style.display="inline-block";
		}
		else if(randomNumber>0.55&&randomNumber<=0.66)	
			document.getElementById("logo6").style.display="inline-block";
		else if(randomNumber>0.66&&randomNumber<=0.77)
			document.getElementById("logo7").style.display="inline-block";
		else if(randomNumber>0.77&&randomNumber<=0.88)
			document.getElementById("logo8").style.display="inline-block";
		else if(randomNumber>0.88&&randomNumber<=1){
			
			document.getElementById("logo9").style.display="inline-block";
			document.getElementById("sponsor").innerHTML=document.getElementById("sponsor").innerHTML.replace("SPONSORED BY","BROUGHT TO YOU BY");
			if(size=="1280x100"){
					 document.getElementById("presentedBy").style.marginLeft="-10px";					
			 }
			
		}
	}
	//On load, this function attaches default onclick functionality to the wrapper div, and calls the changeMessage function
		
	function init(size,macro, adID, cacheBuster) {
			if(adID) dfpAdID=adID;
			if(cacheBuster) cacheBust=cacheBuster;
			if(macro) adMacro=macro;
			if(adMacro=="%%CLICK_URL_UNESC%%") adMacro="";
	        document.getElementById('xgWrap').onclick=function(){
				setClickThrough(adMacro+clickThroughs["default"]);
			}
			if(size!="320x50"){
				randomizeSponsor(size);
			}
			changeMessage(size);
			window.setTimeout(function(){animate();}, 100);
			
			
				
			
      }
	  
