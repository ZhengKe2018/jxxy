$(function(){

		/*查看技能特长和荣誉获奖*/
	    $("div[aria-controls='MySkill']").click(function(){
	    			$("#skill_JN").html("");
	    			$("#skill_RY").html("");
	    			$.ajax({
                    type: 'get',
                    url:"checkSkill.php",
                    async:true,
                    success: function (data) {  
                    		var obj = JSON.parse(data);
                    		for(var index=0;index<obj.length;index++)
                    		{
                    			$("#skill_JN").html(obj[index]['JN']);
                    			$("#skill_RY").html(obj[index]['RY']);
                    		}                  		
               }
        });
                
      });

		/*添加技能特长和荣誉获奖*/
		$("#saveSkill").click(function(){
			var $JN = $("#skill_JN").val();
			var $RY = $("#skill_RY").val();

			if($JN.length == 0)
			{
				alert("技能特长不能为空");
				return false;
			}

			if($RY.length == 0)
			{
				alert("荣誉获奖不能为空");
				return false;
			}

			$.ajax({
                    type: 'get',
                    url:"saveSkill.php",
                    data:"JN="+$JN+"&RY="+$RY,
                    async:true,
                    success: function (data) {  
                    		var $ID =  parseInt(data);
                    		if($ID > 0)
                    			alert("提交成功");
                    		else
                    			alert("提交失败");                  		
               }
        });

		});
});