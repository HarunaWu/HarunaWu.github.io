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
var TableInnerHTML = "<tr><td width=\"10%\"></td>";
for(i=0;i<TagList.length;i++){
	TableInnerHTML += "<td><p class=\"tag\">"+TagList[i]+"</p></td>";
}
BBTable.innerHTML = TableInnerHTML + "</tr>";

var BBGetRoute = document.getElementById("Get-Route");
var Route = ["Bilibili观看（目前下线）":"https://www.bilibili.com","百度网盘":"https://pan.baidu.com","日本亚马逊购买":"https://amazon.co.jp"]
var GetRouteInnerHTML = "";
for(i=0;i<Route.length;i++){
	GetRouteInnerHTML += "<a href=" + Route.values[i] + ">" + "<button class=\"JumpBtn\">" + Route.keys[i] + "</button></a>";
}
BBGetRoute.innerHTML = GetRouteInnerHTML;
