var TJDashboardNumbercardbox = {
	renderData: function(method,sourceData)
	{
		this[method](sourceData);
	},
	tjdashnumbercardbox: function(sourceData)
	{
		var renderData = JSON.parse(sourceData.data);
		console.log(sourceData);
		//console.log("here");
		if(renderData.data.icon){
			var icon=renderData.data.icon;
		}
		else{
			var icon = "fa-book";
		}
		var content = "<div><div><div class=\"panel-body\"><div class=\"col-xs-4 \"><i class=\"fa fa-4x "+icon+"\"></i></div><div class=\"col-xs-8\"><div class=\"huge\">"+renderData.data.count+"</div><div>"+renderData.data.title+"</div></div></div><a href=\"/administrator/index.php?option=com_tjlms&amp;view=courses&amp;filter[state]=1\"><div class=\"panel-footer\"><span class=\"pull-left\">View details									</span><span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span><div class=\"clearfix\"></div></div></a></div></div></div>";
		jQuery("#"+sourceData.element).html(content);
	}
}
