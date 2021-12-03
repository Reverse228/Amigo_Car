$(document).ready(function(){
    var all_btn = document.querySelectorAll('button.etap_of_work_blue_cont')
    var btn_index, btn_index_last = 0
    var btn_nr = $('.etap_of_work_blue_cont')

    function btn_active(indexNr){
      btn_nr.eq(indexNr).css({
        'background-color' : '#00a5ff',
        'color' : 'white',
        'box-shadow' : '18px -1px 50px 6px rgba(0,143,221,0.8)',
        'border' : 'none'
      })
    }

    function btn_inact(indexNr){
      btn_nr.eq(indexNr).css({
        'background-color' : 'transparent',
        'color' : 'black',
        'box-shadow' : 'none',
        'border' : '1px solid #999999'
      })
    }

    function translate_text(lang_name, lang_des, lang_bot, indexLang){
      $('#info_about_registration_name').text(lang_name[indexLang])
      $('#info_about_registration_top_part').text(lang_des[indexLang])
      $('#info_about_registration_bottom_part').text(lang_bot[indexLang])
      if ($('.lang_content').hasClass('lang_content_ru')) {
      if (indexLang == 3) {
        $('#second_part_of_main_main_header_part_need_for_mob_vers').append('<div class="dop_info"> <p>с помощью банковской карты - через приложение, а также - терминалов  <a href="https://paynet.md/home/topup#panel1" target="_blank"><b id="dop_info_orange_color">pay</b><b id="dop_info_gray_color">net</b></a></p> </div>')
      } else {
        $('#second_part_of_main_main_header_part_need_for_mob_vers .dop_info').remove()
      }} else if($('.lang_content').hasClass('lang_content_ro')){
        if (indexLang == 3) {
          $('#second_part_of_main_main_header_part_need_for_mob_vers').append('<div class="dop_info"> <p>supliniți bilanțul contului în dependență de tariful ales, cu ajutorul cadrului bancar - prin aplicație, sau - terminalele <a href="https://paynet.md/home/topup#panel1" target="_blank"><b id="dop_info_orange_color">pay</b><b id="dop_info_gray_color">net</b></a></p> </div>')
        } else {
          $('#second_part_of_main_main_header_part_need_for_mob_vers .dop_info').remove()
        }
      }
    }

    function text_btn(indexNr){
      var btn_text_name_ru = ['Регистрация',  'Верификация',  'Выбор тарифа', 'Пополнение баланса', 'Начните пользоваться',
      ]
      var btn_text_desc_ru = ['Скачайте мобильное приложение. Подготовьте необходимые документы и пройдите регистрацию',

      'В течение одного рабочего дня мы проверим документы и активируем аккаунт',

      'Выберите подходящий под вас тариф, сейчас они отличаются финансовой ответственностью',

      'Пополните баланс аккаунта исходя из желаемого тарифа',

      'После этих шагов, вы можете смело арендовать ближайший автомобиль amiGO'
      ]
      var btn_text_desc_bot_ru = [ 'Весь процесс займет не более 5 минут', ' ', ' ', ' ', ' ']


      var btn_text_name_ro = ['Înregistrarea',  'Verificarea Datelor',  'Alegerea Tarifului', 'Suplinirea Contului', 'Începeți utilizarea',
      ]
      var btn_text_desc_ro = ['Descărcați aplicația mobilă. Pregătiți actele necesare și înregistrați-vă',

      'În decursul unei zile lucrătoare, verificăm și activăm profilul Dvs',

      'Alegeți tariful care vi se potrivește, tarifele diferă în dependență de responsabilitatea financiară',

      'Supliniți balanța contului în dependență de tariful ales',

      'După parcurgerea tuturor etapelor de înregistrare, închiriați ușor cel mai apropiat automobil amiGO'
      ]
      var btn_text_desc_bot_ro = [ 'Întregul proces va dura cel mult 5 minute', ' ', ' ', ' ', ' ']

      if ($('.lang_content').hasClass('lang_content_ru')) {
        translate_text(btn_text_name_ru, btn_text_desc_ru, btn_text_desc_bot_ru, indexNr)
      } else if($('.lang_content').hasClass('lang_content_ro')){
        translate_text(btn_text_name_ro, btn_text_desc_ro, btn_text_desc_bot_ro, indexNr)
      }

    }

    for (var i = 0; i < all_btn.length; i++) {
          (function(index){
              all_btn[i].onclick = function(){
                 btn_index = index


                 for(var j = 0; j < all_btn.length; j++){
                   if (j == btn_index){
                     btn_active(j)
                     text_btn(j)
                   } else {
                     btn_inact(j)
                   }
                 }
                 // btn_nr.eq(btn_index).removeClass('inact').toggleClass('act')
                 //
                 // if (btn_nr.eq(btn_index).hasClass('act')) {
                 //   btn_active(btn_index)
                 //   text_btn(btn_index)
                 // } else if(btn_nr.eq(btn_index).hasClass('inact')){
                 //   btn_inact(btn_index)
                 // }
                 //
                 // if (btn_index != btn_index_last && btn_nr.eq(btn_index).hasClass('act')){
                 //     btn_inact(btn_index_last)
                 //     btn_nr.eq(btn_index_last).removeClass('act').addClass('inact')
                 //     btn_index_last = btn_index;
                 // }
              }
          })(i)
  }


function mobVerMIonfo(arr){
  for (var i = 0; i < 3; i++) {
      $('.rent_offer_info h1').eq(i).text(arr[i])
  }
}

var textMobVersRu = ['2.5 MDL/мин', '320 MDL/12 часа', '70 MDL/час']

var textMobVersRo = ['2.5 MDL/min', '320 MDL/12 ore', '70 MDL/ora']



  if (screen.width <= 600) {
      if($('.lang_content').hasClass('lang_content_ru')){
        mobVerMIonfo(textMobVersRu)
      } else if ($('.lang_content').hasClass('lang_content_ro')) {
        mobVerMIonfo(textMobVersRo)
      }

  }

    window.onload = function(){
      btn_nr.removeClass('act').addClass('inact')

      for (var i = 1; i < all_btn.length; i++) {
        btn_inact(i)
      }
      btn_active(0)
      text_btn(0)
    }

})
