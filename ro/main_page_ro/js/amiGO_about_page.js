
function movTextPress(btn_1, textName_, text_1, text_2, btn_2, btn_3, btn_4, btn_5){
  var btn1              = document.getElementById(btn_1);
  var textName          = document.getElementById(textName_);
  var text1             = document.getElementById(text_1);
  var text2             = document.getElementById(text_2);
  var btn2              = document.getElementById(btn_2);
  var btn3              = document.getElementById(btn_3);
  var btn4              = document.getElementById(btn_4);
  var btn5              = document.getElementById(btn_5);

  var btnArr = [btn2, btn3, btn4, btn5];

  if (btn1) {
    btn1.style.backgroundColor    = '#00a5ff';
    btn1.style.color              = 'white';
    btn1.style.boxShadow          = '18px -1px 50px 6px rgba(0,143,221,0.8)';
    btn1.style.border             = 'none';


    if (btn_1 == "btn_etap_of_work_blue_cont_1")
    {
      textName.innerHTML    = 'Înregistrarea';
      text1.innerHTML       = 'Descărcați aplicația mobilă. Pregătiți actele necesare și înregistrați-vă.';
      text2.innerHTML       = 'Întregul proces va dura cel mult 5 minute';
    }   else if (btn_1 == "btn_etap_of_work_blue_cont_2")
    {
      textName.innerHTML    = 'Verificarea Datelor ';
      text1.innerHTML       = 'În decursul unei zile lucrătoare, verificăm și activăm profilul Dvs';
      text2.innerHTML       = ' ';
    }   else if (btn_1 == "btn_etap_of_work_blue_cont_3")
    {
      textName.innerHTML    = 'Alegerea Tarifului ';
      text1.innerHTML       = 'Alegeți tariful care vi se potrivește, tarifele diferă în dependență de responsabilitatea financiară';
      text2.innerHTML       = ' ';
    }   else if (btn_1 == "btn_etap_of_work_blue_cont_4")
    {
      textName.innerHTML    = 'Suplinirea Contului ';
      text1.innerHTML       = 'Supliniți balanța contului în dependență de tariful ales';
      text2.innerHTML       = ' ';
    }   else if (btn_1 == "btn_etap_of_work_blue_cont_5")
    {
      textName.innerHTML    = 'Începeți utilizarea';
      text1.innerHTML       = 'După parcurgerea tuturor etapelor de înregistrare, închiriați ușor cel mai apropiat automobil amiGO';
      text2.innerHTML       = ' ';
    }

    for (var i = 0; i < 4; i++) {
      btnArr[i].style.backgroundColor     = "transparent";
      btnArr[i].style.color               = 'black';
      btnArr[i].style.boxShadow           = 'none';
      btnArr[i].style.border              = '1px solid #999999';
    }
  }
}

window.onload = function(){
    movTextPress('btn_etap_of_work_blue_cont_1', 'info_about_registration_name', 'info_about_registration_top_part', 'info_about_registration_bottom_part', 'btn_etap_of_work_blue_cont_2', 'btn_etap_of_work_blue_cont_3', 'btn_etap_of_work_blue_cont_4', 'btn_etap_of_work_blue_cont_5');
}
