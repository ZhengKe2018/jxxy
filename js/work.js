$(function(){

		/*查看工作经历*/
	    $("div[aria-controls='WorkResume']").click(function(){
	    			$("#WorkBody").html("");
	    			$.ajax({
                    type: 'get',
                    url:"checkWork.php",
                    async:true,
                    success: function (data) {  
                    		var obj = JSON.parse(data);
                    		for(var index=0;index<obj.length;index++)
                    		{
	                    		var $new_work_list = '<div class="row WorkDiv"  id='+obj[index]['id']+'><div class="col-xs-2">'+obj[index]['QSRQ']+'</div><div class="col-xs-2">'+obj[index]['JSRQ']+'</div><div class="col-xs-2">'+obj[index]['GZDW']+'</div><div class="col-xs-2">'+obj[index]['GW']+'</div><div class="col-xs-2">'+obj[index]['ZC']+'</div><div class="col-xs-2"><button class="btn btn-success btn-xs" data-id='+obj[index]['id']+' data-toggle="modal" data-target="#changeWork"><span class="glyphicon glyphicon-pencil"></span>修改</button><button class="btn btn-danger btn-xs" data-id='+obj[index]['id']+' data-toggle="modal" data-target="#deleteWork"><span class="glyphicon glyphicon-remove"></span>删除</button></div></div></div></div>';
	               				$("#WorkBody").append($new_work_list);
                    		}              		
               }
             });
        });

		/*新增工作经历*/
		$("#saveWork").click(function(){
		var $QSRQ = $("#work_QSRQ").val();
		var $JSRQ = $("#work_JSRQ").val();
		var $GZDW = $("#work_GZDW").val();
		var $GW = $("#work_GW").val();
		var $ZC = $("#work_ZC").val();

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

		if($GZDW.length == 0)
		{
			alert("学习院校不能为空");
			return false;
		}

		if($GW.length == 0)
		{
			alert("所学专业不能为空");
			return false;
		}
		if($ZC.length == 0)
		{
			alert("学历不能为空");
			return false;
		}

		$.ajax({
                    type: 'get',
                    url:"saveWork.php",
                    data:"QSRQ="+$QSRQ+"&JSRQ="+$JSRQ+"&GZDW="+$GZDW+"&GW="+$GW+"&ZC="+$ZC,
                    async:true,
                    success: function (data) {  
                    		var $ID =  parseInt(data);
                    		if($ID > 0)
                    		{
                    			alert("提交成功");
	                    		var $new_work_list = '<div class="row WorkDiv"  id='+$ID+'><div class="col-xs-2">'+$QSRQ+'</div><div class="col-xs-2">'+$JSRQ+'</div><div class="col-xs-2">'+$GZDW+'</div><div class="col-xs-2">'+$GW+'</div><div class="col-xs-2">'+$ZC+'</div><div class="col-xs-2"><button class="btn btn-success btn-xs"  data-id='+$ID+' data-toggle="modal" data-target="#changeWork"><span class="glyphicon glyphicon-pencil"></span>修改</button><button class="btn btn-danger btn-xs"  data-id='+$ID+' data-toggle="modal" data-target="#deleteWork"><span class="glyphicon glyphicon-remove"></span>删除</button></div></div></div></div>';
	               				$("#WorkBody").prepend($new_work_list);
                    		} 
                    		else
                    			alert("提交失败");
                    		
               }
        });
	});

	/*更新工作经历*/
	$("#updateWorkBtn").click(function(){
		var $QSRQ = $("#work_change_QSRQ").val();
		var $JSRQ = $("#work_change_JSRQ").val();
		var $GZDW = $("#work_change_GZDW").val();
		var $GW = $("#work_change_GW").val();
		var $ZC = $("#work_change_ZC").val();
		var $ID = $("#work_change_ID").val();


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

		if($GZDW.length == 0)
		{
			alert("学习院校不能为空");
			return false;
		}

		if($GW.length == 0)
		{
			alert("所学专业不能为空");
			return false;
		}
		if($ZC.length == 0)
		{
			alert("学历不能为空");
			return false;
		}


		$.ajax({
                    type: 'get',
                    url:"updateWork.php",
                    data:"QSRQ="+$QSRQ+"&JSRQ="+$JSRQ+"&GZDW="+$GZDW+"&GW="+$GW+"&ZC="+$ZC+"&ID="+$ID,
                    async:true,
                    success: function (data) {  
                    		var $ID =  parseInt(data);
                    		if($ID > 0)
								alert("更新成功");
                    		else
                    			alert("更新失败");
                    		
               }
        });

		});

	/*删除工作经历*/
		$("#deleteWorkBtn").click(function(){
			var $ID = $("#delete_work_ID").val();
			
			$.ajax({
                    type: 'get',
                    url:"deleteWork.php",
                    data:"ID="+$ID,
                    async:true,
                    success: function (data) {  
                    		var $ID =  parseInt(data);
                    		if($ID > 0)
                    		{
                    			$(".WorkDiv").remove("#"+$ID);
                    			alert("删除成功");
                    		}
                    		else
                    			alert("删除失败");
                    		
               }
        });
	});

	/*传递id给修改工作经历的模态框*/
    $('#changeWork').on('show.bs.modal', function (event) {
                      var btnThis = $(event.relatedTarget); //触发事件的按钮
                      var modal = $(this);  //当前模态框
                      var modalId = btnThis.data('id');   //解析出data-id的内容
                      modal.find('.content').val(modalId);  

                      $("#work_change_QSRQ").val($("div.WorkDiv#"+modalId).children("div").eq(0).html());
                      $("#work_change_JSRQ").val($("div.WorkDiv#"+modalId).children("div").eq(1).html());
                      $("#work_change_GZDW").val($("div.WorkDiv#"+modalId).children("div").eq(2).html());
                      $("#work_change_GW").val($("div.WorkDiv#"+modalId).children("div").eq(3).html());
                      $("#work_change_ZC").val($("div.WorkDiv#"+modalId).children("div").eq(4).html());   
                });

	 /*传递id给删除学习经历的模态框*/
    $('#deleteWork').on('show.bs.modal', function (event) {
                      var btnThis = $(event.relatedTarget); //触发事件的按钮
                      var modal = $(this);  //当前模态框
                      var modalId = btnThis.data('id');   //解析出data-id的内容
                      modal.find('.content').val(modalId);         
                });
});