// (function (){
//     const wealth = JSON.parse(localStorage.getItem('wealth')) || []
//     const fame = JSON.parse(localStorage.getItem('fame')) || []
//     const health = JSON.parse(localStorage.getItem('health')) || []
//     const sea = JSON.parse(localStorage.getItem('sea')) || []
//     const film = JSON.parse(localStorage.getItem('film')) || []
//     const mine = JSON.parse(localStorage.getItem('mine')) || []
//     const public = JSON.parse(localStorage.getItem('public')) || []
//     const farm = JSON.parse(localStorage.getItem('farm')) || []
//     const space = JSON.parse(localStorage.getItem('space')) || []
//     const company = JSON.parse(localStorage.getItem('company')) || []
//     const law = JSON.parse(localStorage.getItem('law')) || []
//     const medicine = JSON.parse(localStorage.getItem('medicine')) || []
//     const engineer = JSON.parse(localStorage.getItem('engineer')) || []
//     const science = JSON.parse(localStorage.getItem('science')) || []
//     const normal = JSON.parse(localStorage.getItem('normal')) || []
//     const salary = JSON.parse(localStorage.getItem('salary')) || []
//     const hasWealth = JSON.parse(localStorage.getItem('hasWealth')) || []
//     const hasHealth = JSON.parse(localStorage.getItem('hasHealth')) || []

    
    
//     function updateLocalStorage() {
//         //store the list back to localStorage
//         var wealth1 = document.getElementById("wealth").value;  
//         alert(wealth1);
//         localStorage.setItem('wealth', JSON.stringify(wealth1))
//         localStorage.setItem('fame', JSON.stringify(fame))
//         localStorage.setItem('health', JSON.stringify(health))
//         localStorage.setItem('sea', JSON.stringify(sea))
//         localStorage.setItem('film', JSON.stringify(film))
//         localStorage.setItem('mine', JSON.stringify(mine))
//         localStorage.setItem('public', JSON.stringify(public))
//         localStorage.setItem('farm', JSON.stringify(farm))
//         localStorage.setItem('space', JSON.stringify(space))
//         localStorage.setItem('company', JSON.stringify(company))
//         localStorage.setItem('law', JSON.stringify(law))
//         localStorage.setItem('medicine', JSON.stringify(medicine))
//         localStorage.setItem('engineer', JSON.stringify(engineer))
//         localStorage.setItem('science', JSON.stringify(science))
//         localStorage.setItem('normal', JSON.stringify(normal))
//         localStorage.setItem('salary', JSON.stringify(salary))
//         localStorage.setItem('hasWealth', JSON.stringify(hasWealth))
//         localStorage.setItem('hasHealth', JSON.stringify(hasHealth))

//     }
// })

// const updateLocalStorage = function (prices, first_buy, previous_pattern) {
//     try {
//       if (prices.length !== 14) throw "The data array needs exactly 14 elements to be valid";
//       localStorage.setItem("sell_prices", JSON.stringify(prices));
//       localStorage.setItem("first_buy", JSON.stringify(first_buy));
//       localStorage.setItem("previous_pattern", JSON.stringify(previous_pattern));
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   const getFirstBuyStateFromLocalstorage = function () {
//     return JSON.parse(localStorage.getItem('first_buy'));
//   };
  
//   const getPreviousPatternStateFromLocalstorage = function () {
//     return JSON.parse(localStorage.getItem('previous_pattern'));
//   };

//   const getPricesFromLocalstorage = function () {
//     try {
//       const sell_prices = JSON.parse(localStorage.getItem("sell_prices"));
  
//       if (!Array.isArray(sell_prices) || sell_prices.length !== 14) {
//         return null;
//       }
  
//       return sell_prices;
//     } catch (e) {
//       return null;
//     }
//   };

//   const getPreviousFromLocalstorage = function () {
//     return [
//       getFirstBuyStateFromLocalstorage(),
//       getPreviousPatternStateFromLocalstorage(),
//       getPricesFromLocalstorage()
//     ];
//   };

//   const getPrevious = function () {
//     return getPreviousFromQuery() || getPreviousFromLocalstorage();
//   };

//   const info = parseInt(buy_input.val());
//   const info=[]