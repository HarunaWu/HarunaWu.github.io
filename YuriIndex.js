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
BBCaption.innerHTML = "\"无法喜欢上他人\"有这样想法的<span class=\"heimu\">小天使</span>小糸侑就这样升入了高中，而在高中的学生会室，侑遇见了似乎有着同样想法<span class=\"heimu\">出来挨打</span>的七海灯子，于是两位少女互相救赎的故事便拉开了序幕<span class=\"heimu\">其实是侑天使单方向拯救灯子</span>";

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

var YETable = document.getElementById("YuriExpress");
var YESrc = ["Watatenn.jpg","Kiminaru.jpg","Nyuge.jpg","Gochiusa.jpg","Kinnmoza.jpg",""]
for(i=0;i<YESrc.length;i++){
	var YETableRow = YETable.insertRow();
	var YETableCell = YETableRow.insertCell();
	YETableCell.innerHTML = "<div class=\"videoTag\"><img src=\"YuriExpress/"+YESrc[i]
}


