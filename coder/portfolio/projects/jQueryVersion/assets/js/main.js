'use strict';

$(document).ready(function() {

		var $home = $('.homeSection');
		var $portfolio = $('.portfolioSection');
		var $skills = $('.skillsSection');
		var $resume = $('.resumeSection');
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
		$resume.hide();
		$about.hide();
  });
  $('.about').click(function() {
    onClickSelect($(this), $('.aboutSection'));
    $home.hide();
		$contact.hide();
		$portfolio.hide();
		$skills.hide();
		$resume.hide();
		$about.show();
  });
  $('.portfolio').click(function() {
    onClickSelect($(this), $('.portfolioSection'));
    $home.hide();
		$contact.hide();
		$portfolio.show();
		$skills.hide();
		$resume.hide();
		$about.hide();
  });
  $('.skills').click(function() {
    onClickSelect($(this), $('.skillsSection'));
    $home.hide();
		$contact.hide();
		$portfolio.hide();
		$skills.show();
		$resume.hide();
		$about.hide();
  });
	$('.resume').click(function() {
    onClickSelect($(this), $('.resumeSection'));
    $home.hide();
		$contact.hide();
		$portfolio.hide();
		$skills.hide();
		$resume.show();
		$about.hide();
  });
  $('.contact').click(function() {
    onClickSelect($(this), $('.contactSection'));
    $home.hide();
		$contact.show();
		$portfolio.hide();
		$skills.hide();
		$resume.hide();
		$about.hide();
  });


});
