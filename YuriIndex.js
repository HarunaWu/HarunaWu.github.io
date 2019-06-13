// JavaScript Document
var BB = document.getElementById("Billboard");
BB.innerHTML = "Yagakimi";
BB.src = "Billboard Image/Yagakimi.jpg";

var BBTitle = document.getElementById("BBTitle");
BBTitle.innerHTML = "终将成为你"

var BBRank = document.getElementById("BBRank");
var rank = 5;
var starString = "";
for(var i=1;i<=rank;i++){
	starString += "★";
}
for (var j=rank+1;i<=5;i++){
	starString += "☆";
}
BBRank.innerHTML = starString;

var BBCaption = document.getElementById("BBCaption");
BBCaption.innerHTML = "<span class=\"heimu\">七海灯子出来挨打</span>";j