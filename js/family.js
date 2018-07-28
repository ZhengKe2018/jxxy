$(function(){

		/*查看家庭关系*/
	    $("div[aria-controls='MyFamily']").click(function(){
	    			$("#FamilyBody").html("");
	    			$.ajax({
                    type: 'get',
                    url:"checkFamily.php",
                    async:true,
                    success: function (data) {  
                    		var obj = JSON.parse(data);
                    		for(var index=0;index<obj.length;index++)
                    		{
	                    		var $new_family_list = '<div class="row FamilyDiv"  id='+obj[index]['id']+'><div class="col-xs-2">'+obj[index]['XM']+'</div><div class="col-xs-2">'+obj[index]['NL']+'</div><div class="col-xs-2">'+obj[index]['GZDW']+'</div><div class="col-xs-2">'+obj[index]['GX']+'</div><div class="col-xs-2">'+obj[index]['ZW']+'</div><div class="col-xs-2"><button class="btn btn-success btn-xs" data-id='+obj[index]['id']+' data-toggle="modal" data-target="#changeFamily"><span class="glyphicon glyphicon-pencil"></span>修改</button><button class="btn btn-danger btn-xs" data-id='+obj[index]['id']+' data-toggle="modal" data-target="#deleteFamily"><span class="glyphicon glyphicon-remove"></span>删除</button></div></div></div></div>';
	               				$("#FamilyBody").prepend($new_family_list);
                    		}                  		
               }
        });
                
      });

		/*新增家庭关系*/
		$("#saveFamily").click(function(){
		var $XM = $("#family_XM").val();
		var $NL = $("#family_NL").val();
		var $GZDW = $("#family_GZDW").val();
		var $GX = $("#family_GX").val();
		var $ZW = $("#family_ZW").val();

		if($XM.length == 0)
		{
			alert("起始日期不能为空");
			return false;
		}

		if($NL.length == 0)
		{
			alert("结束日期不能为空");
			return false;
		}

		if($GZDW.length == 0)
		{
			alert("学习院校不能为空");
			return false;
		}

		if($GX.length == 0)
		{
			alert("所学专业不能为空");
			return false;
		}
		if($ZW.length == 0)
		{
			alert("学历不能为空");
			return false;
		}

		$.ajax({
                    type: 'get',
                    url:"saveFamily.php",
                    data:"XM="+$XM+"&NL="+$NL+"&GZDW="+$GZDW+"&GX="+$GX+"&ZW="+$ZW,
                    async:true,
                    success: function (data) {  
                    		var $ID =  parseInt(data);
                    		if($ID > 0)
                    		{
                    			alert("提交成功");
	                    		var $new_family_list = '<div class="row FamilyDiv"  id='+$ID+'><div class="col-xs-2">'+$XM+'</div><div class="col-xs-2">'+$NL+'</div><div class="col-xs-2">'+$GZDW+'</div><div class="col-xs-2">'+$GX+'</div><div class="col-xs-2">'+$ZW+'</div><div class="col-xs-2"><button class="btn btn-success btn-xs"  data-id='+$ID+' data-toggle="modal" data-target="#changeFamily"><span class="glyphicon glyphicon-pencil"></span>修改</button><button class="btn btn-danger btn-xs"  data-id='+$ID+' data-toggle="modal" data-target="#deleteFamily"><span class="glyphicon glyphicon-remove"></span>删除</button></div></div></div></div>';
	               				$("#FamilyBody").prepend($new_family_list);
                    		} 
                    		else
                    			alert("提交失败");
                    		
               }
        });
	});


	/*更新家庭关系*/
	$("#updateFamilyBtn").click(function(){
		var $XM = $("#family_change_XM").val();
		var $NL = $("#family_change_NL").val();
		var $GZDW = $("#family_change_GZDW").val();
		var $GX = $("#family_change_GX").val();
		var $ZW = $("#family_change_ZW").val();
		var $ID = $("#family_change_ID").val();


		if($XM.length == 0)
		{
			alert("起始日期不能为空");
			return false;
		}

		if($NL.length == 0)
		{
			alert("结束日期不能为空");
			return false;
		}

		if($GZDW.length == 0)
		{
			alert("学习院校不能为空");
			return false;
		}

		if($GX.length == 0)
		{
			alert("所学专业不能为空");
			return false;
		}
		if($ZW.length == 0)
		{
			alert("学历不能为空");
			return false;
		}

		$.ajax({
                    type: 'get',
                    url:"updateFamily.php",
                    data:"XM="+$XM+"&NL="+$NL+"&GZDW="+$GZDW+"&GX="+$GX+"&ZW="+$ZW+"&ID="+$ID,
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

	/*删除家庭关系*/
		$("#deleteFamilyBtn").click(function(){
			var $ID = $("#delete_family_ID").val();
			
			$.ajax({
                    type: 'get',
                    url:"deleteFamily.php",
                    data:"ID="+$ID,
                    async:true,
                    success: function (data) {  
                    		var $ID =  parseInt(data);
                    		if($ID > 0)
                    		{
                    			$(".FamilyDiv").remove("#"+$ID);
                    			alert("删除成功");
                    		}
                    		else
                    			alert("删除失败");
                    		
               }
        });
	});

	/*传递id给更新家庭关系的模态框*/
	$('#changeFamily').on('show.bs.modal', function (event) {
                      var btnThis = $(event.relatedTarget); //触发事件的按钮
                      var modal = $(this);  //当前模态框
                      var modalId = btnThis.data('id');   //解析出data-id的内容
                      modal.find('.content').val(modalId);  

                      $("#family_change_XM").val($("div.FamilyDiv#"+modalId).children("div").eq(0).html());
                      $("#family_change_NL").val($("div.FamilyDiv#"+modalId).children("div").eq(1).html());
                      $("#family_change_GZDW").val($("div.FamilyDiv#"+modalId).children("div").eq(2).html());
                      $("#family_change_GX").val($("div.FamilyDiv#"+modalId).children("div").eq(3).html());
                      $("#family_change_ZW").val($("div.FamilyDiv#"+modalId).children("div").eq(4).html()); 
                });

	 /*传递id给删除家庭关系的模态框*/
    $('#deleteFamily').on('show.bs.modal', function (event) {
                      var btnThis = $(event.relatedTarget); //触发事件的按钮
                      var modal = $(this);  //当前模态框
                      var modalId = btnThis.data('id');   //解析出data-id的内容
                      modal.find('.content').val(modalId);         
                });
});