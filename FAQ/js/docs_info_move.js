  var btn              = document.querySelectorAll('div.up_info_about_cont');
  var indexNr, indexMove;

$(document).ready(function(){
    for (var i = 0; i < btn.length; i++) {
            (function(index){
                btn[i].onclick = function(){
                      indexNr    = index;

                      $('.up_info_about_cont button').eq(indexNr).toggleClass('move stop');

                        function move(nrEl){
                            $('.name_of_info').eq(nrEl).css({ 'color' : '#00a5ff'})
                            $('.arrow_mov').eq(nrEl).css({ 'transform' : "rotate(225deg)",
                                                         'top' : "-5px"
                                                       })
                            if (screen.width > 500) {
                              $('.concret_info').eq(nrEl).css({ 'opacity' : '1',
                                                                'cursor'  : 'text'
                                                              })
                              $('.main_mini_cont_of_info').eq(nrEl).css({ 'height' : $('.up_info_about_cont').eq(nrEl).height() +
                                                                          $('.concret_info').eq(nrEl).height() + 20,
                                                                          'box-shadow' : '0px 0px 20px 5px rgba(153,153,153,0.4)',
                                                                          'border' : '1px solid transparent'
                                                                        })

                            } else {
                              $('.concret_info').eq(nrEl).css({ 'opacity' : '1'})
                              $('.main_mini_cont_of_info').eq(nrEl).css({ 'box-shadow' : '0px 0px 20px 5px rgba(153,153,153,0.4)',
                                                                          'border' : '1px solid transparent'
                                                                        })
                            }
                        }
                        function stopMove(nrEl){
                            $('.name_of_info').eq(nrEl).css({ 'color' : 'black'})
                            $('.arrow_mov').eq(nrEl).css({ 'transform' : "rotate(45deg)",
                                                           'top' : "0px"
                                                         })

                            if (screen.width > 500) {
                              $('.concret_info').eq(nrEl).css({ 'opacity' : '0',
                                                                'cursor'  : 'default'
                                                              })
                              $('.main_mini_cont_of_info').eq(nrEl).css({ 'height' : $('.up_info_about_cont').eq(nrEl).height(),
                                                                          'box-shadow' : '0px 0px 20px 5px rgba(255,255,255,1)',
                                                                          'border' : '1px solid #999999'
                                                                        })
                            } else {
                              $('.concret_info').eq(nrEl).css({ 'opacity' : '0.2'})
                              $('.main_mini_cont_of_info').eq(nrEl).css({ 'box-shadow' : '0px 0px 20px 5px rgba(255,255,255,1)',
                                                                          'border' : '1px solid #999999'
                                                                        })
                            }
                        }


                        if (indexNr != indexMove && $('.up_info_about_cont button').eq(indexNr).hasClass('move')) {
                            stopMove(indexMove);
                            $('.up_info_about_cont button').eq(indexMove).removeClass('move').addClass('stop')
                            indexMove = indexNr;
                        }


                        if ($('.up_info_about_cont button').eq(indexNr).hasClass('move')) {
                              move(indexNr);

                        } else if ($('.up_info_about_cont button').eq(indexNr).hasClass('stop')) {
                              stopMove(indexNr);
                        }
                }
                window.onload = function(){
                  $('.up_info_about_cont button').removeClass('move').addClass('stop');
                  if (screen.width > 500) {
                    $('.concret_info').css({ 'opacity' : '0',
                                             'cursor'  : 'default'
                                           })
                    for (var j = 0; j < btn.length; j++) {
                        $('.main_mini_cont_of_info').eq(j).css({ 'height' : $('.up_info_about_cont').eq(j).height(),
                                                                 'z-index' : j
                                                               })
                    }
                  } else {
                      $('.concret_info').css({ 'opacity' : '0.2' })
                  }
                }
            })(i);
    }
})
