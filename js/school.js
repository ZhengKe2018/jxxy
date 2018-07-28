$(function(){

		/*查看学习经历*/
	    $("div[aria-controls='SchoolResume']").click(function(){
	    			$("#SchoolBody").html("");
	    			$.ajax({
                    type: 'get',
                    url:"checkSchool.php",
                    async:true,
                    success: function (data) {  
                    		var obj = JSON.parse(data);
                    		for(var index=0;index<obj.length;index++)
                    		{
	                    		var $new_school_list = '<div class="row SchoolDiv"  id='+obj[index]['id']+'><div class="col-xs-2">'+obj[index]['QSRQ']+'</div><div class="col-xs-2">'+obj[index]['JSRQ']+'</div><div class="col-xs-2">'+obj[index]['XXYX']+'</div><div class="col-xs-2">'+obj[index]['ZY']+'</div><div class="col-xs-2">'+obj[index]['XL']+'</div><div class="col-xs-2"><button class="btn btn-success btn-xs" data-id='+obj[index]['id']+' data-toggle="modal" data-target="#changeSchool"><span class="glyphicon glyphicon-pencil"></span>修改</button><button class="btn btn-danger btn-xs" data-id='+obj[index]['id']+' data-toggle="modal" data-target="#deleteSchool"><span class="glyphicon glyphicon-remove"></span>删除</button></div></div></div></div>';
	               				$("#SchoolBody").prepend($new_school_list);
                    		}                  		
               }
        });
                
      });

		/*新增学习经历*/
		$("#saveSchool").click(function(){
		var $QSRQ = $("#school_QSRQ").val();
		var $JSRQ = $("#school_JSRQ").val();
		var $XXYX = $("#school_XXYX").val();
		var $ZY = $("#school_ZY").val();
		var $XL = $("#school_XL").val();

		if($QSRQ.length == 0)
		{
			alert("起始日期不能为空");
			return false;
		}

		if($JSRQ.length == 0)
		{
			alert("结束日期不能为空");
			return false;
		}

		if($XXYX.length == 0)
		{
			alert("学习院校不能为空");
			return false;
		}

		if($ZY.length == 0)
		{
			alert("所学专业不能为空");
			return false;
		}
		if($XL.length == 0)
		{
			alert("学历不能为空");
			return false;
		}

		$.ajax({
                    type: 'get',
                    url:"saveSchool.php",
                    data:"QSRQ="+$QSRQ+"&JSRQ="+$JSRQ+"&XXYX="+$XXYX+"&ZY="+$ZY+"&XL="+$XL,
                    async:true,
                    success: function (data) {  
                    		var $ID =  parseInt(data);
                    		if($ID > 0)
                    		{
                    			alert("提交成功");
	                    		var $new_school_list = '<div class="row SchoolDiv"  id='+$ID+'><div class="col-xs-2">'+$QSRQ+'</div><div class="col-xs-2">'+$JSRQ+'</div><div class="col-xs-2">'+$XXYX+'</div><div class="col-xs-2">'+$ZY+'</div><div class="col-xs-2">'+$XL+'</div><div class="col-xs-2"><button class="btn btn-success btn-xs"  data-id='+$ID+' data-toggle="modal" data-target="#changeSchool"><span class="glyphicon glyphicon-pencil"></span>修改</button><button class="btn btn-danger btn-xs"  data-id='+$ID+' data-toggle="modal" data-target="#deleteSchool"><span class="glyphicon glyphicon-remove"></span>删除</button></div></div></div></div>';
	               				$("#SchoolBody").prepend($new_school_list);
                    		} 
                    		else
                    			alert("提交失败");
                    		
               }
        });
	});

	/*更新学习经历*/
	$("#updateSchoolBtn").click(function(){
		var $QSRQ = $("#school_change_QSRQ").val();
		var $JSRQ = $("#school_change_JSRQ").val();
		var $XXYX = $("#school_change_XXYX").val();
		var $ZY = $("#school_change_ZY").val();
		var $XL = $("#school_change_XL").val();
		var $ID = $("#school_change_ID").val();

		if($QSRQ.length == 0)
		{
			alert("起始日期不能为空");
			return false;
		}

		if($JSRQ.length == 0)
		{
			alert("结束日期不能为空");
			return false;
		}

		if($XXYX.length == 0)
		{
			alert("学习院校不能为空");
			return false;
		}

		if($ZY.length == 0)
		{
			alert("所学专业不能为空");
			return false;
		}
		if($XL.length == 0)
		{
			alert("学历不能为空");
			return false;
		}

		$.ajax({
                    type: 'get',
                    url:"updateSchool.php",
                    data:"QSRQ="+$QSRQ+"&JSRQ="+$JSRQ+"&XXYX="+$XXYX+"&ZY="+$ZY+"&XL="+$XL+"&ID="+$ID,
                    async:true,
                    success: function (data) {  
                    		var $ID =  parseInt(data);

                    		if($ID > 0)
                    		{
								alert("更新成功");
                    		} 
                    		else
                    			alert("更新失败");
                    		
               }
        });

		});


	/*删除学习经历*/
	$("#deleleSchool").click(function(){
			var $ID = $("#delete_school_ID").val();

					$.ajax({
                    type: 'get',
                    url:"deleteSchool.php",
                    data:"ID="+$ID,
                    async:true,
                    success: function (data) {  
                    		var $ID =  parseInt(data);
                    		if($ID > 0)
                    		{
                    			$(".SchoolDiv").remove("#"+$ID);
                    			alert("删除成功");
                    		}
                    		else
                    			alert("删除失败");
                    		
               }
        });
	});

	/*传递id给修改学习经历的模态框*/
    $('#changeSchool').on('show.bs.modal', function (event) {
                      var btnThis = $(event.relatedTarget); //触发事件的按钮
                      var modal = $(this);  //当前模态框
                      var modalId = btnThis.data('id');   //解析出data-id的内容
                      modal.find('.content').val(modalId);  

                      $("#school_change_QSRQ").val($("div.SchoolDiv#"+modalId).children("div").eq(0).html());
                      $("#school_change_JSRQ").val($("div.SchoolDiv#"+modalId).children("div").eq(1).html());
                      $("#school_change_XXYX").val($("div.SchoolDiv#"+modalId).children("div").eq(2).html());
                      $("#school_change_ZY").val($("div.SchoolDiv#"+modalId).children("div").eq(3).html());
                      $("#school_change_XL").val($("div.SchoolDiv#"+modalId).children("div").eq(4).html()); 
                });

	 /*传递id给删除学习经历的模态框*/
    $('#deleteSchool').on('show.bs.modal', function (event) {
                      var btnThis = $(event.relatedTarget); //触发事件的按钮
                      var modal = $(this);  //当前模态框
                      var modalId = btnThis.data('id');   //解析出data-id的内容
                      modal.find('.content').val(modalId);         
                });
});