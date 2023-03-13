function hasClass(obj)
{
	var result = false;
	if (obj.getAttributeNode("class") != null)
	{
		result = obj.getAttributeNode("class").value;
	}
	return result;
}   

function stripe(id)
{
	var even = false;
  
    var evenColor = arguments[1] ? arguments[1] : "#000";
    var oddColor = arguments[2] ? arguments[2] : "#333";
  
    var table = document.getElementById(id);
    if (!table) { return; }
    
    var tbodies = table.getElementsByTagName("tbody");

    for (var h = 0; h < tbodies.length; h++)
	{
		var trs = tbodies[h].getElementsByTagName("tr");
      
		for (var i = 0; i < trs.length; i++)
		{
			var thistr = trs[i];
			if (!hasClass(thistr) && !thistr.style.backgroundColor) { thistr.style.backgroundColor = even ? evenColor : oddColor; }
			even =  !even;
		}
	}
}