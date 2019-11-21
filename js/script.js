// Use strict mode to reduce development errors.
// @link http://www.nczonline.net/blog/2012/03/13/its-time-to-start-using-javascript-strict-mode/
"use strict";

$(function() {
	// ativa o atributo placeholder para browsers antigos
	if(!Modernizr.input.placeholder){

		$('[placeholder]').focus(function() {
		  var input = $(this);
		  if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		  }
		}).blur(function() {
		  var input = $(this);
		  if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		  }
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
		  $(this).find('[placeholder]').each(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
			  input.val('');
			}
		  })
		});
	}
	$('#slider').nivoSlider();

	//função que aplica classe impar para implementar estilo de 'zebra' em tabelas
		//inserir a classe .zebra na tag <tbody>
	zebra($('.zebra'));
});