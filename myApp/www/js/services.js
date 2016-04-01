angular.module('starter.services', [])

.factory('Cards', function() {

         var cards =  [
                       { "number": "2", "suit": "Hearts", "numOrd": 2 },
                       { "number": "10", "suit": "Spades", "numOrd": 10 },
                       { "number": "5", "suit": "Spades", "numOrd": 5 },
                       { "number": "Q", "suit": "Hearts", "numOrd": 12 }
                       ];
         return {
getCard: function(cardVal) {
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].number == cardVal) {
            return cards[i];
        }
    }
    return null;    
}, 

         allCards: function() {
         return cards;  
         },
         
         }
 
        })

.factory('Foods', function() {

      var foods = [
      { "mealType": "Drinks" },
      { "mealType": "Dinner" }
      ];

      var drinks = [
      { "selection":"tea" },
      { "selection":"coffee"}
      ];

      var dinners = 
      [
      { "selection":"fruit"},
      { "selection":"vegetables"}, 
      { "selection":"dessert"}
      ];

      return {
        getFood: function(mealType) {
          for (var i = 0; i < foods.length; i++) {
            if (foods[i].mealType == mealType ) {
              return foods[i];
            }
          }
          return null
        }, 
        allFoods: function() {
          return foods;
        },
        getMealType: function(mealType) {
          if (mealType == foods[0].mealType) {
            return drinks;
          }
          if (mealType == foods[1].mealType) {
            return dinners;
          }
        },


      }
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Food', function() {
  var foods = [{
    
  }]
})
;
