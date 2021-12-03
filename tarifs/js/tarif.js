var btn_time = document.querySelectorAll('div.menu_btn'),
    all_bars = document.querySelectorAll('div.into_part_cont'),
    barInfo = document.querySelectorAll('.move_info')

    // =================================================== Func for activate bars style ====================================================
function bars_activ(nrEl, box, textBox){
    if(screen.width > 500){
        $(box).eq(nrEl).css({'height' : $(textBox).eq(nrEl).height() + $('.move').eq(nrEl).height() + 30})
    } else {
        $(box).eq(nrEl).css({'height' : $(textBox).eq(nrEl).height() + $('.move').eq(nrEl).height() + 50})
    }
    $(textBox).eq(nrEl).css({
      'opacity' : '1',
      'top' : '0px'
    })
    if (box == '.tarif_bar_move') {
      $('.plus').eq(nrEl + barInfo.length).css({ 'transform' : 'rotate(90deg)'})
    } else {
        $('.plus').eq(nrEl).css({ 'transform' : 'rotate(90deg)'})
    }
}
    // ================================================== Func for inact bars style ============================================================
function bars_inact(nrEl, trasition_time, box, textBox){
    $(box).eq(nrEl).css({'height' : $('.move').eq(nrEl).height()})

    $(textBox).eq(nrEl).css({
      'transition' : trasition_time,
      'opacity' : '0',
      'top' : '-30px'
    })
    if (box == '.tarif_bar_move') {
        $('.plus').eq(nrEl + barInfo.length).css({'transform' : 'rotate(0deg)'})
    } else {
        $('.plus').eq(nrEl).css({'transform' : 'rotate(0deg)'})
    }
}
// --------------------------------------------------------- MAIN PROGRAM -----------------------------------------------------------------------
$(document).ready(function(){
  for (var i = 0; i < barInfo.length; i++){
        (function(index){
          $(barInfo[index]).click(function(){
              $(this).toggleClass('ac')
              if ($(this).hasClass('ac')) {
                  bars_activ(index, '.bar_info', '.text_bootom_part_info_part')
              } else {
                bars_inact(index, '0.3s' ,'.bar_info', '.text_bootom_part_info_part')
              }
          })
        })(i)
  }
  for (var i = 0; i < barInfo.length; i++) {
    bars_inact(i, '0.3s' ,'.bar_info', '.text_bootom_part_info_part')
  }
      // ============ TIME BTN CODE ==============
  var lang
  if ($('.lang_content').hasClass('lang_content_ro')){
    lang = 'ro'
  } else if ($('.lang_content').hasClass('lang_content_ru')){
    lang = 'ru'
  }
  for (var i = 0; i < btn_time.length; i++) {
            (function(index){
                btn_time[i].onclick = function(){
                      $('.tarif_bar_move').remove()
                      $.ajax("../../php/tarifs_ajax.php", {
                        method : "GET",
                        data : {indexBox : (index + 1), langNow : lang},
                        fail : function(){alert("PROBLEM")},
                        success : function(data){
                          $("#info_part_main_cont").append(data)
                        }
                      })

                      for (var i = 0; i < btn_time.length; i++) {
                        if (i == index){
                          $(btn_time[i]).css({
                            'background' : 'rgba(0,165,255,1)',
                            'box-shadow' : '0px 0px 15px 12px rgba(0,143,221,0.3)',
                            'color' : 'white',
                            'font-family' : 'BaufraDemiBold'
                          })
                        } else {
                          $(btn_time[i]).css({
                            'background' : 'rgba(255,255,255,1)',
                            'box-shadow' : 'none',
                            'color' : '#999999',
                            'font-family' : 'Baufra'
                          })
                        }
                      }
                      setTimeout(() => {
                        var tariBarCant = document.querySelectorAll('.tarif_bar_move')
                        for (var i = 0; i < tariBarCant.length; i++) {
                          (function(index){
                                $(tariBarCant[index]).hover(function(){
                                  $(this).toggleClass('ac')
                                  if ($(this).hasClass('ac')) {
                                      bars_activ(index, '.tarif_bar_move', '.text_bootom_part_info_part_tarif')
                                  } else {
                                     bars_inact(index, '0.3s' ,'.tarif_bar_move', '.text_bootom_part_info_part_tarif')
                                  }
                                })
                          })(i);
                        }
                        for (var i = 0; i < tariBarCant.length; i++) {
                          bars_inact(i, '0.3s' ,'.tarif_bar_move', '.text_bootom_part_info_part_tarif')
                        }
                      }, 200)
          }
      })(i);
  }
  setTimeout(()=>{
    btn_time[0].click()
  }, 500)
})
