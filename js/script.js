        $(document).ready(function() {
                
            $("#foto_kasia").click(function() {
                $("#rozwijane_foto").show();
                $("#foto_kasia").hide();
                $("#kontakt").hide();
                $("#o_kancelarii").hide();
                $("#sentencja").hide();
            });
            
            $("#rozwijane_foto").click(function() {
                $("#rozwijane_foto").hide();
                $("#foto_kasia").show();
                $("#kontakt").show();
                $("#o_kancelarii").show();
                $("#sentencja").show();
            });
            
            $("#kontakt").click(function() {
                $("#rozwijane_kontakt").show();
                $("#foto_kasia").hide();
                $("#kontakt").hide();
                $("#o_kancelarii").hide();
                $("#sentencja").hide();
            });
            
            $("#rozwijane_kontakt").click(function() {
                $("#rozwijane_kontakt").hide();
                $("#foto_kasia").show();
                $("#kontakt").show();
                $("#o_kancelarii").show();
                $("#sentencja").show();
            });
            
            $("#o_kancelarii").click(function() {
                $("#rozwijany_o_kancelarii").show();
                $("#foto_kasia").hide();
                $("#kontakt").hide();
                $("#o_kancelarii").hide();
                $("#sentencja").hide();
                $("#klienci_biznesowi").hide();
            });
            
            $("#rozwijany_o_kancelarii").click(function() {
                $("#rozwijany_o_kancelarii").hide();
                $("#foto_kasia").show();
                $("#kontakt").show();
                $("#o_kancelarii").show();
                $("#sentencja").show();
                $("#klienci_biznesowi").show();
            });
            
            $("#klienci_indywidualni").click(function() {
                $("#rozwijany_klienci_indywidualni").show();
                $("#klienci_indywidualni").hide();
                $("#klienci_biznesowi").hide();
                $("#rozwody").hide();
                $("#biezace_problemy").hide();
                $("#it").hide();
                $("#prawo_budowlane").hide();
            });
            
            $("#rozwijany_klienci_indywidualni").click(function() {
                $("#rozwijany_klienci_indywidualni").hide();
                $("#klienci_indywidualni").show();
                $("#klienci_biznesowi").show();
                $("#rozwody").show();
                $("#biezace_problemy").show();
                $("#it").show();
                $("#prawo_budowlane").show();
            });
            
            $("#klienci_biznesowi").click(function() {
                $("#rozwijany_klienci_biznesowi").show();
                $("#klienci_indywidualni").hide();
                $("#klienci_biznesowi").hide();
                $("#rozwody").hide();
                $("#biezace_problemy").hide();
                $("#it").hide();
                $("#prawo_budowlane").hide();
            });
            
            $("#rozwijany_klienci_biznesowi").click(function() {
                $("#rozwijany_klienci_biznesowi").hide();
                $("#klienci_indywidualni").show();
                $("#klienci_biznesowi").show();
                $("#rozwody").show();
                $("#biezace_problemy").show();
                $("#it").show();
                $("#prawo_budowlane").show();
            });
            
            $("#rozwody").click(function() {
                $("#rozwijany_rozwody").show();
                $("#klienci_indywidualni").hide();
                $("#klienci_biznesowi").hide();
                $("#rozwody").hide();
                $("#biezace_problemy").hide();
                $("#it").hide();
                $("#prawo_budowlane").hide();
            });
            
            $("#rozwijany_rozwody").click(function() {
                $("#rozwijany_rozwody").hide();
                $("#rozwody").show();
                $("#klienci_indywidualni").show();
                $("#klienci_biznesowi").show();
                $("#biezace_problemy").show();
                $("#it").show();
                $("#prawo_budowlane").show();
            });
            $("#biezace_problemy").click(function() {
                $("#rozwijany_biezace_problemy").show();
                $("#klienci_indywidualni").hide();
                $("#klienci_biznesowi").hide();
                $("#rozwody").hide();
                $("#biezace_problemy").hide();
                $("#it").hide();
                $("#prawo_budowlane").hide();
            });
            
            $("#rozwijany_biezace_problemy").click(function() {
                $("#rozwijany_biezace_problemy").hide();
                $("#rozwody").show();
                $("#klienci_indywidualni").show();
                $("#klienci_biznesowi").show();
                $("#biezace_problemy").show();
                $("#it").show();
                $("#prawo_budowlane").show();
            });
             $("#it").click(function() {
                $("#rozwijany_it").show();
                $("#klienci_indywidualni").hide();
                $("#klienci_biznesowi").hide();
                $("#rozwody").hide();
                $("#biezace_problemy").hide();
                $("#it").hide();
                $("#prawo_budowlane").hide();
            });
            
            $("#rozwijany_it").click(function() {
                $("#rozwijany_it").hide();
                $("#rozwody").show();
                $("#klienci_indywidualni").show();
                $("#klienci_biznesowi").show();
                $("#biezace_problemy").show();
                $("#it").show();
                $("#prawo_budowlane").show();
            });
            $("#prawo_budowlane").click(function() {
                $("#rozwijany_prawo_budowlane").show();
                $("#klienci_indywidualni").hide();
                $("#klienci_biznesowi").hide();
                $("#rozwody").hide();
                $("#biezace_problemy").hide();
                $("#it").hide();
                $("#prawo_budowlane").hide();
            });
            
            $("#rozwijany_prawo_budowlane").click(function() {
                $("#rozwijany_prawo_budowlane").hide();
                $("#rozwody").show();
                $("#klienci_indywidualni").show();
                $("#klienci_biznesowi").show();
                $("#biezace_problemy").show();
                $("#it").show();
                $("#prawo_budowlane").show();
            });
            
        });