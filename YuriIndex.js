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
var Route = ["动画 - Bilibili观看（目前下线）","动画 - 百度网盘","动画 - 日本亚马逊购买","漫画 - 百度网盘","漫画 - 日本亚马逊购买","相关视频"];
var Routrl = ["https://bilibili.com","https://pan.baidu.com","https://www.amazon.co.jp","https://pan.baidu.com","https://www.amazon.co.jp","https://harunawu.github.io"];
var GetRouteInnerHTML = "";
for(i=0;i<Route.length;i++){
	GetRouteInnerHTML += "<a href=" + Routrl[i] + ">" + "<button class=\"JumpBtn\">" + Route[i] + "</button></a>";
}
BBGetRoute.innerHTML = GetRouteInnerHTML;
