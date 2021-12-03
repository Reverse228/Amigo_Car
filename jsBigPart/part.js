var menuBtn = document.getElementById('mov_vers_header_menu_btn');
var menuContent = document.getElementById('cont_for_menu_btn');
function menuBtnMobVers(){
  if (menuBtn.className == "menu_left") {
        menuBtn.classList.add("menu_right");
        menuContent.style.left = '-100%';
        menuContent.style.transition = "0.5s";
        menuContent.style.left = '0';
        menuBtn.classList.remove("menu_left");
  }
  else if(menuBtn.className == "menu_right") {
        menuBtn.classList.add("menu_left");
        menuContent.style.left = '0';
        menuContent.style.transition = "0.5s";
        menuContent.style.left = '-100%';
        menuBtn.classList.remove("menu_right");
  }
}


if ($('.lang_content').hasClass('lang_content_ru')) {
  $('.main_cont_lang').css({
    'justify-content' : 'flex-start'
  })
} else if ($('.lang_content').hasClass('lang_content_ro')) {
  $('.main_cont_lang').css({
    'justify-content' : 'flex-end'
  })
}
