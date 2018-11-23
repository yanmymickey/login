<?php
header('Content-Type:text/html; charset=utf-8;');
function ride(){
    $NineNine = array("十","一","二","三","四","五","六","七","八","九");
        for ($i=1;$i<=9;$i++){
            for ($b=1;$b<($i+1);$b++){
                $s=$b*$i;
                if($s<10)
                    echo "<div style='background-color: #$b$b$b$b$b$b;color: #f0fff0; float: left;width: 170px;' >{$NineNine[$b]}&nbsp;乘以&nbsp;{$NineNine[$i]}&nbsp;等于&nbsp;{$NineNine[$s]}&nbsp;&nbsp;</div>";
                else{
                    if ($s%10==0)
                        echo "<div style='background-color: #$b$b$b$b$b$b;color: #f0fff0;float: left;width: 170px;' >{$NineNine[$b]}&nbsp;乘以&nbsp;{$NineNine[$i]}&nbsp;等于&nbsp;{$NineNine[intval($s/10)]}{$NineNine[$s%10]}&nbsp;</div>";
                    else
                    echo "<div style='background-color: #$b$b$b$b$b$b;color: #f0fff0;float: left;width: 170px;'>{$NineNine[$b]}&nbsp;乘以&nbsp;{$NineNine[$i]}&nbsp;等于&nbsp;{$NineNine[intval($s/10)]}十{$NineNine[$s%10]}&nbsp;</div>";
                }
            }
            echo "<br/>";
        }
}
    ride();
