function showMoreOne() {
	let seeMore=document.getElementById("show");
	let hiddenP=document.getElementById("hidden-p");
		if (hiddenP.classList.contains("hidden")){
			hiddenP.classList.remove("hidden")
			seeMore.innerHTML="Show Less";
		}
		else {
			hiddenP.classList.add("hidden");
			seeMore.innerHTML="Show More";
		}
}
function showMoreTwo() {
	let seeMoreTwo=document.getElementById("show-two");
	let hiddenPTwo=document.getElementById("hidden-p-two");
		if (hiddenPTwo.classList.contains("hidden")){
			hiddenPTwo.classList.remove("hidden")
			seeMoreTwo.innerHTML="Show Less";
		}
		else {
			hiddenPTwo.classList.add("hidden");
			seeMoreTwo.innerHTML="Show More";
		}
}
function submitQuiz() {
	let submit=document.getElementById("submit");
	let qOne=document.getElementById("q-one").value;
	let qTwo=document.getElementById("q-two").value;
	let qThree=document.getElementById("q-three").value;
	let qFour=document.getElementById("q-four").value;
	
	let resultDiv=document.getElementById("quiz-results");
	let oneP=document.getElementById("one");
	let twoP=document.getElementById("two");
	let threeP=document.getElementById("three");
	let fourP=document.getElementById("four");
	let score=document.getElementById("score");
		let count=0;
	
	
	resultDiv.classList.remove("hidden");
	oneP.innerHTML= "Question One: " + qOne;
	twoP.innerHTML= "Question Two: " + qTwo;
	threeP.innerHTML= "Question Three: " + qThree;
	fourP.innerHTML= "Question Four: " + qFour;
	score.innerHTML= count + " /4";
	
	
	if (qOne==correct){
	count=+1
	}
	if (qTwo==correct){
		count=+1;
	}
	
	if (qThree==correct){
		count=+1;
	}
	
	
	if (qFour==correct){
		count=+1;
	}
	else {
		count=+0;
	}
	

}


	
var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

	var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

	var index = 0, time = 5000;
	slides[index].classList.add('active');

	setInterval( () => {
		slides[index].classList.remove('active');
		
		index++;
		if (index === slides.length) index = 0;

		slides[index].classList.add('active');

	}, time);
}




