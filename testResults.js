const maxPoints = 120;
const passingPoints = 70;
const samPoints = 84;
const alexPoints = 75; // Updated from 45 to 75
const jessiePoints = 99;
const didAlexPass = false;

// Displaying the Points they scored
const samPointsDisplay =
  "Sam earned " + samPoints + " points out of " + maxPoints;
console.log(samPointsDisplay);
// Output: Sam earned 84 points out of 120
const alexPointsDisplay =
  "Alex earned " + alexPoints + " points out of " + maxPoints;
console.log(alexPointsDisplay);
// Output: Alex earned 45 points out of 120
const jessiePointsDisplay =
  "Jessie earned " + jessiePoints + " points out of " + maxPoints;
console.log(jessiePointsDisplay);
// Output: Jessie earned 99 points out of 120

// Test Percentage Section
const samPercentage = samPoints / maxPoints * 100;
const samPercentDisplay = "Sam scored " + samPercentage;
console.log(samPercentDisplay + "%");
// Output: Sam scored 70%
const alexPercentage = alexPoints / maxPoints * 100;
const alexPercentDisplay = "Alex scored " + alexPercentage;
console.log(alexPercentDisplay + "%");
// Output: Alex scored 37.5%
const jessiePercentage = jessiePoints / maxPoints * 100;
const jessiePercentDisplay = "Jessie scored " + jessiePercentage;
console.log(jessiePercentDisplay + "%");
// Output: Jessie scored 82.5%

// Missed Points Section
const samMissedPoints = maxPoints - samPoints;
const alexMissedPoints = maxPoints - alexPoints;
const jessieMissedPoints = maxPoints - jessiePoints;

const samMissedPointsDisplay = "Sam missed " + samMissedPoints + " point(s)";
console.log(samMissedPointsDisplay);
// Output: Sam missed 36 point(s).
const alexMissedPointsDisplay = "Alex missed " + alexMissedPoints + " point(s).";
console.log(alexMissedPointsDisplay);
// Output: Alex missed 75 point(s).
const jessieMissedPointsDisplay = "Jessie missed " + jessieMissedPoints + " point(s).";
console.log(jessieMissedPointsDisplay);
// Output: Jessie missed 21 point(s).

// Class Average Section
const classAveragePoints = (samPoints + alexPoints + jessiePoints) / 3;
const classAveragePercent = (classAveragePoints / maxPoints) * 100;
const classAvgDisplay = "The class average was " + classAveragePoints + " or " + classAveragePercent + ".";
console.log(classAvgDisplay);
// Output: The class average was 76 or 63.33333333333333.

// Updated scores
const alexPointsUpdated = "Alex failed initially but did extra credit. Their new score is " + alexPoints + " out of " + maxPoints;
console.log(alexPointsUpdated);
// Output: Alex failed initially but did extra credit. Their new score is 75 out of 120

const listItemArray = document.querySelectorAll("li");
listItemArray[0].innerHTML = "Raw Points:";
listItemArray[4].innerHTML = "Percentages:";
listItemArray[8].innerHTML = "Missed Points:";
listItemArray[12].innerHTML = "Final Notes:";
listItemArray[1].innerHTML = samPointsDisplay;
listItemArray[2].innerHTML = alexPointsDisplay;
listItemArray[3].innerHTML = jessiePointsDisplay;
listItemArray[5].innerHTML = samPercentDisplay;
listItemArray[6].innerHTML = alexPercentDisplay;
listItemArray[7].innerHTML = jessiePercentDisplay;
listItemArray[9].innerHTML = samMissedPointsDisplay;
listItemArray[10].innerHTML = alexMissedPointsDisplay;
listItemArray[11].innerHTML = jessieMissedPointsDisplay;
listItemArray[13].innerHTML = classAvgDisplay;
listItemArray[14].innerHTML = alexPointsUpdated;