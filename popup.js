
var url_main;

function insertTODO(){
	let temp = url_main;
	//var data = {"user1":{"password":"password1","data":[temp,"lightgreen"]}};
	//database.ref().update(data);
	let data = chrome.storage.sync.get(["data"],function(res){
		data = res.data;
		data = data+"|"+temp+"__lightblue";
		chrome.storage.sync.set({"data":data},function(){
			window.alert("added to TODO");
		});
	});
}
function insertFIN(){
	let temp = url_main;
	//var data = {"user1":{"password":"password1","data":[temp,"lightgreen"]}};
	//database.ref().update(data);
	let data = chrome.storage.sync.get(["data"],function(res){
		data = res.data;
		data = data+"|"+temp+"__lightgreen";
		chrome.storage.sync.set({"data":data},function(){
			window.alert("added to FINISHED");
		});
	});
}

var allow = false;

window.addEventListener('DOMContentLoaded', function(){
	var fin = document.getElementById('fin');
	var todo = document.getElementById('todo');
	todo.onclick = insertTODO;
	fin.onclick  = insertFIN;
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    	var url = tabs[0].url;
    	console.log(url,url.includes("rosettacode.org"));
		main_url = "http://rosettacode.org/wiki/Category:Programming_Tasks"
    	if(url!=main_url && url.includes("rosettacode.org")) {
			console.log("INSIDE")
    		url_main = url;
    		fin.disabled = false;
    		todo.disabled = false;
    	}
	});
});


