$(".Pagina-TaskMore").on("click",function(){
	$(this).toggleClass("Active")
	var padre = $(this).parents(".Pagina-TaskPadre");
	$(".Pagina-ContSubTask",padre).toggleClass("Hide");
});



$(window).scroll(function(){

	var scroll = $(window).scrollTop();
	var posicion = $("#AreaConocimiento").offset().top;
	if(scroll >= (posicion)-200)
	{
		$(".Pagina-Linea,.Pagina-TaskPadre").addClass("Active");

	}
	else{
		$(".Pagina-Linea,.Pagina-TaskPadre").removeClass("Active");
		
	}

	var posicion2 = $(".Pagina-Principal").offset().top;

	if(scroll >= (posicion2)+100)
	{
		$(".Pagina-Liston").addClass("Active");

	}
	else{
		$(".Pagina-Liston").removeClass("Active");
		
	}



});


