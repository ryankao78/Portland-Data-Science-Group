technical.controller( 'questionsCtrl', function( $scope ) {
	$scope.subject 	= "Subject";
	$scope.questions = [{ question: "",
						  answer: ""
						},
						{ question: "",
						  answer: ""
						},
						{ question: "",
						  answer: ""
						}
					  ];
	$scope.random = pick3( $scope.questions );
	$scope.show = false;
})
.directive( "questions", function() {
	return {
		restrict: 'A',
		template: "<h1 style='text-align: center' ng-click='show=!show'>{{subject}} &#x21f5;</h1>" +
				  "<hr/>" +
				  "<div style='font-size: 20px;' ng-show='show'>" +
				  "<ul>" +
				  "	<li ng-repeat='question in random'> {{question.question}}<br/><br/>" +
				  "	<span class='answer'>{{question.answer}}</span><br/>Correct <input class='correct' type='checkbox'/><br/><br/>" +
				  "</ul>" +
				  "</div>"
	}
});