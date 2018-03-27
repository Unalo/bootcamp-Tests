var mostProfitableDay = function(list) {
  //console.log(list)
  var day1 = 0;
  var day2 = 0;
  var day3 = 0;
  var day4 = 0;
  var day5 = 0;

var week = [];
 var i = 0;
  while (i<list.length )
  {
    for (var u=0;u<list.length; u++) {
     if (list[u].day === "Monday") {
      day1 += list[u].sales;
    }
     else if (list[u].day === "Tuesday") {
       day2 += list[u].sales;
     }
      else if (list[u].day === "Wednesday") {
        day3 += list[u].sales;
  	 }
      else if (list[u].day === "Thursday") {
        day4 += list[u].sales;
     }
       else if (list[u].day === "Friday") {
         day5 += list[u].sales;
     }
    }
  week.push(day1);
  week.push(day2);
  week.push(day3);
  week.push(day4);
  week.push(day5);
  break;
  }
var max = Math.max.apply(null, week)
var position = week.indexOf(max)
  switch(position)
      {
     case 0:
     	return 'Monday';
     case 1:
      	return 'Tuesday';
     case 2:
      	return 'Wednesday';
     case 3:
      	return 'Thursday';
     case 4:
       return 'Friday';
  }
 }
