technical.controller( 'interviewCtrl', function( $scope ) {
})
.directive( "interview", function() {
	return {
		restrict: 'A',
		template: "<div style='text-align: center'>" +
				  "<div style='font-size: 24pt; font-weight: bold;'>The Technical Interview</div>" +
				  //"<h2>Portland Data Science Group</h2>" +
				  "</div>" +
				  "<div style='font-size: 16pt;'>" +
				  "<p>For those wanting to prepare for an in-person technical interview, see our <button id='guide' class='w3-btn w3-green'>Guide</button></p>" +
				  "</div>" +
				  "<div style='width: 600px; float: left;'>" +
				  "<h3>Preparing for a Technical Phone Screen</h3>" +
				  "<p>Use our question/answer section below to practice a phone screen with another person. " +
				  "Each category will display three randomly selected questions.</p>" +
				  "<ol>" +
				  "	<li>The interviewee (you) tells the interviewer (other person) categories to be tested on.</li>" +
				  "	<li>For each selected category, the interviewer clicks on the category, which will display three random questions and suggested answers, ranked consecutively harder (easy, moderate, hard).</li>" +
				  "	<li>The interviewer will ask each question.</li>" +
				  "	<li>If the interviewer feels the answer was sufficient, then the interviewer checks the Correct box.</li>" +
				  "	<li>When a category is done, the interviewer selects the Score button in the category.</li>" +
				  " <li>When completed, the interviewer selects the Final Score button at the bottom of the page.</li>" +
				  "</ol>" +
				  "</div>" +
				  "<div style='float: right; margin-right: 20px;'>" +
				  "<h3>Crowdsourcing the Dataset of Questions</h3>" +
				  "<p>Help us crowdsource of datasets of questions and answers.</p>" +
				  "<ul>" +
				  "	<li>Next to each answer, you can suggest a better answer.</li>" +
				  "	<li>At the bottom of the category, you can suggest new questions/answers.</li>" +
				  "	<li>Hover over and click on Rank to suggest a better ranking for a question.</li>" +
				  "</ul>" +
				  "</div>" +
				  "<div style='clear:both;'/>"
	}
});