/*
  Given a time in AM/PM format as a string, convert it to military (24-hour) time as a string.
*/

function militaryTime(time) { 
  const military = Number(time.slice(0, 1));
  const spread = Array.from(time)
  console.log(spread);

  if (time.includes("AM") || time.includes("am")) {
    return military;
  }

  if (time.includes("PM") || time.includes("pm")) {
    return 2 + military;
  }
}


console.log(militaryTime("1:00 AM"));
console.log(militaryTime("3:00 am"));
console.log(militaryTime("3:00 PM"));
console.log(militaryTime("10:00 pm"));
