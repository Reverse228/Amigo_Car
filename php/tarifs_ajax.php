<?php
include "function.php";
$a = getData("indexBox");
$langNow = getData("langNow");

foreach (getValSqlWhere('tarifs__', 'id', 'id_tarif_cat', $a) as $key => $value) { ?>
    <div class="into_part_cont tarif_bar_move amigo_close">
      <div id="div_tarif_plus_1" class="move move_down">
        <div class="left_part_of_info_part  ">
          <div class="plus_minus  "> <div class="plus"></div> <div class="minus"></div> </div>
          <h3 class="name_of_tarif"><?= getValSqlWhere('tarifs__', 'time_name', 'id_tarif_cat', $a)[$key] ." ". getValSqlWhere('tarifs__', "name_$langNow", 'id_tarif_cat', $a)[$key] ?></h3>
        </div>
        <div class="right_part_og_info_part right_part_of_tarif_plus">
            <h3 class="right_part_og_info_part_cost"><?= getValSqlWhere('tarifs__', 'price', 'id_tarif_cat', $a)[$key] . " " . getValSqlWhere('tarifs__', 'valut', 'id_tarif_cat', $a)[$key]?></h3>
        </div>
      </div>
      <p class="text_bootom_part_info_part text_bootom_part_info_part_tarif" style="opacity: 0">
        <?= getValSqlWhere('tarifs__', "text_$langNow", 'id_tarif_cat', $a)[$key] ?>
      </p>
    </div>
<?php } ?>
