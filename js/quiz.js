$(document).ready(function(){
	$(".sameDiv").hide();
	$(".done").hide();
	$(".mainPage").show();
	$(".btnWrapper").hide();
	mainObj.initEvents();
	mainObj.showNextQuestion();
	mainObj.showPreviousQuestions();
	mainObj.cnt=1;
	mainObj.score=0;
	clearInterval(mainObj.clockInt);
});

var mainObj={};

mainObj.initEvents=function(){
	mainObj.clockCnt=10;
	$('.dispTime').text(mainObj.clockCnt);
	
	 mainObj.clockInt=setInterval(function(){
		mainObj.clockCnt--;
		$('.dispTime').text(mainObj.clockCnt);
		if(mainObj.clockCnt==0){
			$(".mainPage").hide();
			mainObj.showNextQuestion();
			mainObj.clockCnt=10;
		}
	},1000); 
	
	$(".start").click(function(){
		$("#div1").show();
		$(".btnWrapper").show();
		$(".mainPage").hide();
		mainObj.clockInt=setInterval(function(){
		mainObj.clockCnt--;
		$('.dispTime').text(mainObj.clockCnt);
		if(mainObj.clockCnt==0){
			$(".mainPage").hide();
			mainObj.showNextQuestion();
			mainObj.clockCnt=10;
		}
	},1000); 
	});
	$(".ans").click(function(){
		$(".ans").removeClass("selected");
		$(this).addClass("selected");
	});
	
	
	$("#previous").click(function(){
		mainObj.showPreviousQuestions();
		
	});
	$("#next").click(function(){
		mainObj.showNextQuestion();
	});
	$(".done").click(function(){
		window.close();
	});
	
};


mainObj.showNextQuestion= function(){
	mainObj.clockCnt=10;
	
	if($(".selected").hasClass("correct")){
		mainObj.score++;
	}
		mainObj.cnt++;
		$(".sameDiv").hide();
		$("#div"+mainObj.cnt).show();
	if(mainObj.cnt==11)
	{
		clearInterval(mainObj.clockInt); /* Here we clear the Interval */
		$(".finalAns").text("Your score is : "+mainObj.score);
		$("#next").hide();
		$("#previous").hide();
		$(".timer").hide();
		$(".done").show();
	}
};

mainObj.showPreviousQuestions = function(){
	mainObj.cnt--;
	$(".sameDiv").hide();
	$("#div"+mainObj.cnt).show();
};