

$(document).ready(function(){
		  
		 	  
		  $(".login").click(function(){
			$(".login_panel").show("slow");
		  });
		  
		   $(".register").click(function(){
			$(".register_panel").show("slow");
		  });
		  
		  $(".reg_link").click(function(){		
			$(".login_panel").hide("first");
			$(".register_panel").show("first");
		  });
		  
		    $(".hide").click(function(){		
			$(".login_panel").hide("first");
			$(".register_panel").hide("first");
		  });
		  
		   
});