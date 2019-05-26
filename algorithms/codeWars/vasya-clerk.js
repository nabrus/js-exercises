/* eslint-disable */

/*
The new "Avengers" movie has just been released! There are a lot of people
 at the cinema box office standing in a huge line. Each of them has a single
100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every
single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has
no money and sells the tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change with
the bills he has at hand at that moment. Otherwise return NO.
*/
  
// 1.
function tickets(peopleInLine){
  let quarter = 0; 
  let fidy = 0;
    
    for (let i = 0; i < peopleInLine.length; i++) {
        switch(peopleInLine[i]){
            case 25:
                quarter++;
                break;
            case 50:
                quarter > 0 ? quarter-- : quarter = -1;
                fidy++;
                break;
            case 100:
                quarter > 0 && fidy > 0 ? fidy-- : (quarter > 2 ? quarter -= 2 : quarter = -1);
                quarter--;
                break;
        }
       if(quarter<0){
          return "NO";
       }
    }
    return "YES";
}

// 2.
function tickets(peopleInLine){
  let [c25,c50,c100] = [0,0,0];
  for(let v of peopleInLine) {
    if (v === 25) c25++;
    if (v === 50) { c50++; c25--; }
    if (v === 100) { c25--; c50 > 0 ? c50-- : c25 -= 2; }
    if (c25 < 0 || c50 < 0) return "NO"
  }
  return "YES"
}

tickets([25, 25, 50, 50]);
tickets([25, 100]);
tickets([100, 50, 25]);

// 3.
function tickets(peopleInLine){
  var bills = [100, 50, 25], canSell = "YES", bank = {"100": 0, "50": 0, "25": 0}, change;
  peopleInLine.forEach(function(person){
    bank[person]++;
    change = person - 25;
    bills.forEach(function(bill){
      while (bank[bill] && change > 0 && change >= bill) {
        change = change - bill;
        bank[bill]--;
      }
    });
    if (change > 0) canSell = "NO";
  });
  return canSell;
}

// 4.
function tickets(peopleInLine){
  var count25=0,count50=0,count100=0;
  for (var i=0;i<peopleInLine.length;i++){
    switch (peopleInLine[i]){
      case 25:
        count25++;
        break;
      case 50:
        if (count25<1) {return "NO"} else {count25--;count50++};
        break;
      case 100:
        if(count50>0&&count25>0) {count100++;count50--;count25--}
        else if(count50<1&&count25>2) {count100++;count25-=3} 
        else {return "NO"};
        break;
    }
  }
  return "YES";
}

// 5.
function tickets(peopleInLine){
  // ...
  var twentyfive = 0;
  var fifty = 0;
  for (var i=0; i<peopleInLine.length; i++) {
    if (peopleInLine[i] === 25)
      twentyfive++;
    else if (peopleInLine[i] === 50) {
      twentyfive--;
      fifty++;
      }
    else {
      if (fifty > 0) {
        fifty--;
        twentyfive--;
      }
      else
        twentyfive -= 3;
    }
    if (twentyfive < 0)
      return "NO";
  }
      return "YES";
}
