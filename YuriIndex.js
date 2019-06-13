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
for (var j=rank+1;j<=5;j++){
	starString += "☆";
}
BBRank.innerHTML = starString;

var BBCaption = document.getElementById("BBCaption");
BBCaption.innerHTML = "<span class=\"heimu\">七海灯子出来挨打</span>";

var BBTable = document.getElementById("Tags-Table");
var TagList = ["T社","一迅社","少女百合","愿天堂没有碍国者"];
console.log(TagList);
var TableInnerHTML = "<tr>";
for(i=0;i<TagList.length;i++){
	TableInnerHTML += "<td><p class=\"tag\">"+TagList[i]+"</p></td>";
	console.log(TableInnerHTML);
}
BBTable.innerHTML = TableInnerHTML + "</tr>";
