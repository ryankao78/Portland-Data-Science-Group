technical.controller( 'agileCtrl', function( $scope ) {
	$scope.subject 	= "Agile";
	$scope.questions = [{ question: "Describe Kanban process.",
						  answer: ""
						},
						{ question: "What is the technical backlog?",
						  answer: ""
						},
						{ question: "What are story points?",
						  answer: ""
						},
						{ question: "What does a scrum master do?",
						  answer: ""
						},
						{ question: "What is a scrum?",
						  answer: "A scrum is all hands meeting on a periodic schedule (e.g. daily) throughout a sprint. It is generally short and is used " +
						          "to synchronize work by each person saying what their status is, what they plan to do, and what resources or help they need."
						},
						{ question: "What does a sprint consist of?",
						  answer: ""
						},
						{ question: "What is the product owner's role",
						  answer: ""
						}
					  ];
	$scope.random = pick3( $scope.questions );
	$scope.show = false;
})
.directive( "questionsAgile", function() {
	return {
		restrict: 'A',
		template: "<a name='agile'/>" +
				  "<h1 class='w3-container w3-teal' ng-click='show=!show' onclick='location.href=\"#agile\"'>{{subject}} &#x21f5;</h1>" +
				  "<hr/>" +
				  "<div style='font-size: 20px;' ng-show='show'>" +
				  "<ul>" +
				  "	<li ng-repeat='question in random'> {{question.question}}<br/><br/>" +
				  "	<span class='answer'>{{question.answer}}</span><br/>Correct <input class='agile-correct' type='checkbox'/><br/><br/>" +
				  "</ul>" +
				  "<button onclick='Tally( \"agile\")'>Score</button>" +
				  "</div>"
	}
});