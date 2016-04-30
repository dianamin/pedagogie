app.controller('quizCtrl', function($scope) {
  $scope.items = [
    {
      "question" : "abcd1",
      "tip" : 2,
      "given_answer": 1
    },
    {
      "question" : "abcd2",
      "tip" : 2,
      "given_answer": 1
    },
    {
      "question" : "abcd3",
      "tip" : 2,
      "given_answer": 1
    },
    {
      "question" : "abcd4",
      "tip" : 2,
      "given_answer": 1
    }
  ];

  $scope.currentItemIndex = 0;
  $scope.currentItem = $scope.items[0];

  $scope.currentAnswer = 0;

  $scope.nextItem = function() {
    if ($scope.currentItemIndex == $scope.items.length - 1) {
      alert("sfarsit");
      return;
    }
    $scope.currentItemIndex = $scope.currentItemIndex + 1;
    $scope.currentItem = $scope.items[$scope.currentItemIndex];
  }

  $scope.result;
});
