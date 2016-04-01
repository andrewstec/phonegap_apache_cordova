angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('CardDetailCtrl', function($scope, $stateParams, Cards) {
    var cardNum = $stateParams.cardNum;
    $scope.card = Cards.getCard(cardNum);
    console.log("hi");
    console.log("cardNum is: " + $scope.card.suit);
    // $scope.cards = Chats.allCards();
})

.controller('CardsCtrl', function($scope, Cards) {
    console.log("I am in CardsCtrl");
    $scope.cards = Cards.allCards();
})

.controller('FoodsCtrl', function($scope, Foods) {
  console.log("Here I am! FoodsCtrl");
  $scope.foods = Foods.allFoods();
})

.controller('FoodDetailCtrl', function($scope, $stateParams, Foods) {
  var foodSelection = $stateParams.mealType;
  $scope.food = Foods.getFood(foodSelection);
  $scope.mealTypes = Foods.getMealType(foodSelection);
  console.log("i made it to the food details view with: " + $scope.mealTypes);
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
