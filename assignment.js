//Problem No.1 feetToMile

function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var result = feetToMile(5280);
console.log("Your Answer is =", result, "mile",);


// problem no.2 woodCalculator

function woodCalculator(chair, table, bed){
    var needForChair = chair * 1;
    var needForTable = table * 3;
    var needForBed = bed * 5;
    var totalWood = needForChair + needForTable + needForBed;
    return totalWood;
  }
  var woodResult = woodCalculator(1, 1, 1);
  console.log("Total wood needed = ", woodResult);


//   Problem No 4 tinyFriend

function tinyFriend(names){
    var smallName = names[0];
    for (var i = 0; i < names.length; i++){
        var currentName = names[i];
        if(currentName.length < smallName.length ){
            smallName = currentName;
        }
    }
    return smallName;
}
var result = tinyFriend(["saddam", "akmal","pio", "surovi", "jahangir", "kader"]);
console.log("The smallest Name is : ", result);
