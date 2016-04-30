  app.controller('quizCtrl', function($scope) {
    $scope.items = [
      {
        "question" : "abcd1",
        "type" : 2,
        "givenAnswer": 1
      },
      {
        "question" : "abcd2",
        "type" : 2,
        "givenAnswer": 1
      },
      {
        "question" : "abcd3",
        "type" : 2,
        "givenAnswer": 1
      },
      {
        "question" : "abcd4",
        "type" : 2,
        "givenAnswer": 1
      }
    ];

    $scope.currentItemIndex = 0;
    $scope.currentItem = $scope.items[0];

    $scope.currentAnswer = 0;


    $scope.results = [
        {
          "givenCount" : 0,
          "totalCount" : 0
        },
        {
          "givenCount" : 0,
          "totalCount" : 0
        },
        {
          "givenCount" : 0,
          "totalCount" : 0
        },
        {
          "givenCount" : 0,
          "totalCount" : 0
        },
        {
          "givenCount" : 0,
          "totalCount" : 0
        },
        {
          "givenCount" : 0,
          "totalCount" : 0
        }
    ];
    $scope.showResults = false;

    $scope.getResult = function() {
      for (var i = 0; i < $scope.items.length; i++) {
        $scope.results[$scope.items[i].type - 1].givenCount += $scope.items[i].givenAnswer;
        $scope.results[$scope.items[i].type - 1].totalCount++;
      }
      $scope.showResults = true;
    }

    $scope.nextItem = function() {
      if ($scope.currentItemIndex == $scope.items.length - 1) {
        $scope.getResult();
        return;
      }
      $scope.currentItemIndex = $scope.currentItemIndex + 1;
      $scope.currentItem = $scope.items[$scope.currentItemIndex];
    }

  });
