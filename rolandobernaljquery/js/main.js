var $main = $('#main');
var $portfolio = $('#portfolio');
var $skills = $('#skills');
var $about = $('#about');
var $aCollapsed = $('.aCollapsed');
var $welcome = $('#welcome');
var $contact = $('#contact');

$aCollapsed.hide();

 $('#hPortfolio').on('click', function(){
   $skills.hide();
   $aCollapsed.hide();
   $welcome.hide();
   $contact.hide();
   $about.hide();
   $portfolio.show();
 });

 $('#hSkills').on('click', function(){
   $aCollapsed.hide();
   $welcome.hide();
   $contact.hide();
   $portfolio.hide();
   $skills.show();
 });

 $('#hAbout').on('click', function(){
   $aCollapsed.hide();
   $welcome.hide();
   $contact.hide();
   $portfolio.hide();
   $skills.hide();
   $about.show();
 });

 $('#hContact').on('click', function(){
   $aCollapsed.hide();
   $welcome.hide();
   $portfolio.hide();
   $skills.hide();
   $about.hide();
   $contact.show();
 });

 $('#hContact').on('click', function(){
   $aCollapsed.hide();
   $welcome.hide();
   $portfolio.hide();
   $skills.hide();
   $about.hide();
   $contact.show();
 });

