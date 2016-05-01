'use strict';

$(document).ready(function() {

		var $home = $('.homeSection');
		var $portfolio = $('.portfolioSection');
		var $skills = $('.skillsSection');
		var $about = $('.aboutSection');
		var $contact = $('.contactSection');

  //On Click Functions for the li buttons to reveal content below

  function onClickSelect(button, section) {
    $('.button').removeClass('active');
    button.addClass('active');
  }


  $('.home').click(function() {
    onClickSelect($(this), $('.homeSection'));
    $home.show();
		$contact.hide();
		$portfolio.hide();
		$skills.hide();
		$about.hide();
  });
  $('.about').click(function() {
    onClickSelect($(this), $('.aboutSection'));
    $home.hide();
		$contact.hide();
		$portfolio.hide();
		$skills.hide();
		$about.show();
  });
  $('.portfolio').click(function() {
    onClickSelect($(this), $('.portfolioSection'));
    $home.hide();
		$contact.hide();
		$portfolio.show();
		$skills.hide();
		$about.hide();
  });
  $('.skills').click(function() {
    onClickSelect($(this), $('.skillsSection'));
    $home.hide();
		$contact.hide();
		$portfolio.hide();
		$skills.show();
		$about.hide();
  });
  $('.contact').click(function() {
    onClickSelect($(this), $('.contactSection'));
    $home.hide();
		$contact.show();
		$portfolio.hide();
		$skills.hide();
		$about.hide();
  });


});
