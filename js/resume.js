$(function(){
	$("div[aria-controls='checkResume']").click(function(){

			$.ajax({
                    type: 'get',
                    url:"checkInfo.php",
                    async:true,
                    success: function (data) {  
                    		var obj = JSON.parse(data);

                    		$("table#showInfo").children("tbody").children("tr").eq(0).children("td").eq(1).html(obj[0]['XM']);
							$("table#showInfo").children("tbody").children("tr").eq(0).children("td").eq(3).html(obj[0]['XB']);
							$("table#showInfo").children("tbody").children("tr").eq(0).children("td").eq(5).html(obj[0]['MZ']);

							$("table#showInfo").children("tbody").children("tr").eq(1).children("td").eq(1).html(obj[0]['SFZH']);
							$("table#showInfo").children("tbody").children("tr").eq(1).children("td").eq(3).html(obj[0]['JG']);
							$("table#showInfo").children("tbody").children("tr").eq(1).children("td").eq(5).html(obj[0]['HJSZD']);

							$("table#showInfo").children("tbody").children("tr").eq(2).children("td").eq(1).html(obj[0]['BYYX']);
							$("table#showInfo").children("tbody").children("tr").eq(2).children("td").eq(3).html(obj[0]['ZGXL']);
							$("table#showInfo").children("tbody").children("tr").eq(2).children("td").eq(5).html(obj[0]['ZGXW']);

							$("table#showInfo").children("tbody").children("tr").eq(3).children("td").eq(1).html(obj[0]['LX']);
							$("table#showInfo").children("tbody").children("tr").eq(3).children("td").eq(3).html(obj[0]['ZZMM']);
							$("table#showInfo").children("tbody").children("tr").eq(3).children("td").eq(5).html(obj[0]['HF']);

							$("table#showInfo").children("tbody").children("tr").eq(4).children("td").eq(1).html(obj[0]['SXZY']);
							$("table#showInfo").children("tbody").children("tr").eq(4).children("td").eq(3).html(obj[0]['ZYZW']);
							$("table#showInfo").children("tbody").children("tr").eq(4).children("td").eq(5).html(obj[0]['ZGZS']);

							$("table#showInfo").children("tbody").children("tr").eq(5).children("td").eq(1).html(obj[0]['GZDW']);
							$("table#showInfo").children("tbody").children("tr").eq(5).children("td").eq(3).html(obj[0]['ZW']);
							$("table#showInfo").children("tbody").children("tr").eq(5).children("td").eq(5).html(obj[0]['LXSJ']);

							$("table#showInfo").children("tbody").children("tr").eq(6).children("td").eq(1).html(obj[0]['CSNY']);
							$("table#showInfo").children("tbody").children("tr").eq(6).children("td").eq(3).html(obj[0]['BYSJ']);
							$("table#showInfo").children("tbody").children("tr").eq(6).children("td").eq(5).html(obj[0]['YX']);
               }
        	});	

        	$.ajax({
                    type: 'get',
                    url:"checkSchool.php",
                    async:true,
                    success: function (data) {  
                    		$("table#showSchool").children("tbody").html("");
                    		var obj = JSON.parse(data);
                    		for(var index=0;index<obj.length;index++)
                    		{
	               				var $new_school_list = '<tr><td>'+obj[index]['QSRQ']+'</td><td>'+obj[index]['JSRQ']+'</td><td>'+obj[index]['XXYX']+'</td><td>'+obj[index]['ZY']+'</td><td>'+obj[index]['XL']+'</td></tr>';
	               				$("table#showSchool").children("tbody").append($new_school_list);
                    		}                  		
               }
        });

        $.ajax({
                    type: 'get',
                    url:"checkWork.php",
                    async:true,
                    success: function (data) {  
                    		$("table#showWork").children("tbody").html("");
                    		var obj = JSON.parse(data);
                    		for(var index=0;index<obj.length;index++)
                    		{
	               				var $new_work_list = '<tr><td>'+obj[index]['QSRQ']+'</td><td>'+obj[index]['JSRQ']+'</td><td>'+obj[index]['GZDW']+'</td><td>'+obj[index]['GW']+'</td><td>'+obj[index]['ZC']+'</td></tr>';
	               				$("table#showWork").children("tbody").append($new_work_list);
                    		}                  		
               }
        });

        $.ajax({
                    type: 'get',
                    url:"checkFamily.php",
                    async:true,
                    success: function (data) {  
                    		$("table#showFamily").children("tbody").html("");
                    		var obj = JSON.parse(data);
                    		for(var index=0;index<obj.length;index++)
                    		{
	               				var $new_family_list = '<tr><td>'+obj[index]['XM']+'</td><td>'+obj[index]['NL']+'</td><td>'+obj[index]['GZDW']+'</td><td>'+obj[index]['GX']+'</td><td>'+obj[index]['ZW']+'</td></tr>';
	               				$("table#showFamily").children("tbody").append($new_family_list);
                    		}                  		
               }
        });

        $("#showJN").html("");
	    $("#showRY").html("");
	    $.ajax({
                    type: 'get',
                    url:"checkSkill.php",
                    async:true,
                    success: function (data) {  
                    		var obj = JSON.parse(data);
                    		for(var index=0;index<obj.length;index++)
                    		{
                    			$("#showJN").html(obj[index]['JN']);
                    			$("#showRY").html(obj[index]['RY']);
                    		}                  		
               }
        }); 
	});
});