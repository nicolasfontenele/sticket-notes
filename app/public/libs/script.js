$(document).ready(function(){

	// Listening for keyup events on fields of the "Add a note" form:
	$('.pr-body,.pr-author').on('keyup',function(e){

		if(!this.preview)
			this.preview=$('#previewNote');

		// Setting the text of the preview to the contents of the input field, and stripping all the HTML tags: 
		this.preview.find($(this).attr('class').replace('pr-','.')).html($(this).val().replace(/<[^>]+>/ig,''));
	});

	/* Changing the color of the preview note: */
	$('.color').on('click',function(){
		$('#previewNote').removeClass('yellow green blue').addClass($(this).attr('class').replace('color',''));
		$('#postit-color').val($('#previewNote').attr('class').replace("note ",""));
	});

	/* The submit button: */

	$('#note-submit').on('click',function(e){

		if($('.pr-body').val().length<4)
		{
			alert("The note text is too short!")
			return false;
		}

		if($('.pr-author').val().length<1)
		{
			alert("You haven't entered your name!")
			return false;
		}
	})
});