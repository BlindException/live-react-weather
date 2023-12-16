export function dateFormatter(dateString) {
let date = new Date(dateString);
const monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
const day = date.getDate();
let daySuffix;
if (day >= 11 && day <= 13) {
daySuffix = 'th';
} else {
switch (day % 10) {
case 1: daySuffix = "st"; break;
case 2: daySuffix = "nd"; break;
case 3: daySuffix = "rd"; break;
default: daySuffix = "th";
}
}
const formattedDate = `${monthNames[date.getMonth()]} ${day}${daySuffix} ${date.getFullYear()}`;
let formattedTime = date.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' }); // "9:46 PM"
return formattedDate+' '+formattedTime;
}