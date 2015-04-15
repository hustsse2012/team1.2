var dateString = document.getElementById("date");
var now = new Date();
var month = now.getMonth() + 1;
var date = now.getDate();
var days = ["日","一","二","三","四","五","六"];
var day = days[now.getDay()];

dateString.innerHTML = month + "月" + date + "日,星期" +day; 