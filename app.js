$(document).ready(function(){
  $("body").append("<h1>Insurance Covered</h1>")



var claim1 = new Claim("John Doe", "Specialist", 1100);

var claim2 = new Claim("Jane Doe", "Optical", 100);

var claim3 = new Claim("Joe Johnson", "Emergency", 31000);

var claim4 = new Claim("Sharon Smith", "Emergency", 1300);

var claim5 = new Claim("Steve Wright", "Primary Care", 770);

var claim6 = new Claim("Bill Shakespeare", "Optical", 25000);

var claim7 = new Claim("Robert Barker", "Primary Care", 12520);

var claim8 = new Claim("William Gates", "Emergency", 2200);

var claim9 = new Claim("Billy Joel", "Specialist", 7900);

var claim10 = new Claim("Dean Martin", "Optical", 1);

var initialList = [claim1, claim2, claim3, claim4, claim5]

var totalPayedOut = 0;

initialList.push(claim6, claim7, claim8, claim9, claim10)//adds new claims to initialList array

function Claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

function insuranceReturn(claimer){//determines the percentage per claim type
  var claimType = claimer.visitType;;
  var percentage = 0;

  switch(claimType){
    case "Optical":
      percentage = 0;
    break;
    case "Specialist":
      percentage = 10;
    break;
    case "Emergency":
      percentage = 100;
    break;
    case "Primary Care":
      percentage = 50;
    break;
  }
  return percentage;
}

function amount(claimer){
  var percentage = insuranceReturn(claimer);
 	var coveredAmount = Math.round(claimer.visitCost*(percentage/100));
  totalPayedOut += coveredAmount;

  $("body").append('Paid out $' + coveredAmount + ' for ' + claimer.patientName + '<br>');


}// this should put the string of paid out for each client and do the math to get that amount

for(var i = 0; i < initialList.length; i++){
  amount(initialList[i]);
}//this will run through the entire loop and result in each claim being shown

$("body").append('Total amount payed out: $' + totalPayedOut);//prints out the total amount paid...

});
