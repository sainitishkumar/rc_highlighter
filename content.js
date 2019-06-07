let links = document.getElementsByClassName("mw-category-group");
chrome.storage.sync.get(["data"],function(res){
	data = res.data;
	console.log(data);
	let response = data.split("|");
	if(response!=undefined && response!=null && response!=[]) {
		console.log(response);
		for(let i=0;i<links.length;i++) {
			let ele = links[i];
			ele = ele.getElementsByTagName('a');
			for(let j=0;j<ele.length;j++)
			{
				let temp = ele[j].innerText.replace(/ /gi,"_");
				let temp1 = "http://www.rosettacode.org/wiki/"+temp+"__lightgreen";
				let temp2 = "http://www.rosettacode.org/wiki/"+temp+"__lightblue";
				let temp3 = temp+"__lightgreen";
				let temp4 = temp+"__lightblue";
				if(response.includes(temp1) || response.includes(temp3))
				{
					let color = temp1.split("_");
					color = color[color.length-1]
					ele[j].style['backgroundColor'] = color;
				}
				else if(response.includes(temp2)||response.includes(temp4))
				{
					let color = temp2.split("_");
					color = color[color.length-1]
					ele[j].style['backgroundColor'] = color;
				}
			}
		}
	}
});