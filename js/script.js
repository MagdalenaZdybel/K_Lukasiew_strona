$(document).ready(function () {

    $("#foto_kasia").click(function () {
        ukryj();
        $("#rozwijane_foto").show();
        $("#foto_kasia").hide();
        $("#kontakt").hide();
        $("#o_kancelarii").hide();
        $("#sentencja").hide();
    });

    $("#rozwijane_foto").click(function () {
        ukryj();
        $("#rozwijane_foto").hide();
        $("#foto_kasia").show();
        $("#kontakt").show();
        $("#o_kancelarii").show();
        $("#sentencja").show();
    });

    $("#kontakt").click(function () {
        ukryj();
        $("#rozwijane_kontakt").show();
        $("#foto_kasia").hide();
        $("#kontakt").hide();
        $("#o_kancelarii").hide();
        $("#sentencja").hide();
    });

    $("#rozwijane_kontakt").click(function () {
        ukryj();
        $("#rozwijane_kontakt").hide();
        $("#foto_kasia").show();
        $("#kontakt").show();
        $("#o_kancelarii").show();
        $("#sentencja").show();
    });

    $("#o_kancelarii").click(function () {
        ukryj();
        $("#rozwijany_o_kancelarii").show();
        $("#foto_kasia").hide();
        $("#kontakt").hide();
        $("#o_kancelarii").hide();
        $("#sentencja").hide();
        /*$("#klienci_biznesowi").hide();*/
    });

    $("#rozwijany_o_kancelarii").click(function () {
        ukryj();
        $("#rozwijany_o_kancelarii").hide();
        $("#foto_kasia").show();
        $("#kontakt").show();
        $("#o_kancelarii").show();
        $("#sentencja").show();
        /*$("#klienci_biznesowi").show();*/
    });

    $("#klienci_indywidualni").click(function () {
        ukryj();
        $("#rozwijany_klienci_indywidualni").show();
        $("#klienci_indywidualni").hide();
        $("#klienci_biznesowi").hide();
        /*$("#rozwody").hide();
        $("#biezace_problemy").hide();
        ("#it").hide();
        $("#prawo_budowlane").hide();*/
    });

    $("#rozwijany_klienci_indywidualni").click(function () {
        ukryj();
        $("#rozwijany_klienci_indywidualni").hide();
        $("#klienci_indywidualni").show();
        $("#klienci_biznesowi").show();
        /*$("#rozwody").show();
        $("#biezace_problemy").show();
        $("#it").show();
        $("#prawo_budowlane").show();*/
    });

    $("#klienci_biznesowi").click(function () {
        ukryj();
        $("#rozwijany_klienci_biznesowi").show();
        /*$("#klienci_indywidualni").hide();
        $("#klienci_biznesowi").hide();
        $("#rozwody").hide();
        $("#biezace_problemy").hide();
        $("#it").hide();
        $("#prawo_budowlane").hide();*/
    });

    $("#rozwijany_klienci_biznesowi").click(function () {
        ukryj();
        $("#rozwijany_klienci_biznesowi").hide();
        /*$("#klienci_indywidualni").show();
        $("#klienci_biznesowi").show();
        $("#rozwody").show();
        $("#biezace_problemy").show();
        $("#it").show();
        $("#prawo_budowlane").show();*/
    });

    $("#rozwody").click(function () {
        ukryj();
        $("#rozwijany_rozwody").show();
        $("#klienci_indywidualni").hide();
        $("#klienci_biznesowi").hide();
        $("#rozwody").hide();
        $("#biezace_problemy").hide();
        $("#it").hide();
        $("#prawo_budowlane").hide();
    });

    $("#rozwijany_rozwody").click(function () {
        ukryj();
        $("#rozwijany_rozwody").hide();
        $("#rozwody").show();
        $("#klienci_indywidualni").show();
        $("#klienci_biznesowi").show();
        $("#biezace_problemy").show();
        $("#it").show();
        $("#prawo_budowlane").show();
    });
    $("#biezace_problemy").click(function () {
        ukryj();
        $("#rozwijany_biezace_problemy").show();
        $("#klienci_indywidualni").hide();
        $("#klienci_biznesowi").hide();
        $("#rozwody").hide();
        $("#biezace_problemy").hide();
        $("#it").hide();
        $("#prawo_budowlane").hide();
    });

    $("#rozwijany_biezace_problemy").click(function () {
        ukryj();
        $("#rozwijany_biezace_problemy").hide();
        $("#rozwody").show();
        $("#klienci_indywidualni").show();
        $("#klienci_biznesowi").show();
        $("#biezace_problemy").show();
        $("#it").show();
        $("#prawo_budowlane").show();
    });
    
    $("#it").click(function () {
        ukryj();
        $("#rozwijany_it").show();
        $("#klienci_indywidualni").hide();
        $("#klienci_biznesowi").hide();
        $("#rozwody").hide();
        $("#biezace_problemy").hide();
        $("#it").hide();
        $("#prawo_budowlane").hide();
    });

    $("#rozwijany_it").click(function () {
        ukryj();
        $("#rozwijany_it").hide();
        $("#rozwody").show();
        $("#klienci_indywidualni").show();
        $("#klienci_biznesowi").show();
        $("#biezace_problemy").show();
        $("#it").show();
        $("#prawo_budowlane").show();
    });
    
    $("#prawo_budowlane").click(function () {
        ukryj();
        $("#rozwijany_prawo_budowlane").show();
        $("#klienci_indywidualni").hide();
        $("#klienci_biznesowi").hide();
        $("#rozwody").hide();
        $("#biezace_problemy").hide();
        $("#it").hide();
        $("#prawo_budowlane").hide();
    });

    $("#rozwijany_prawo_budowlane").click(function () {
        ukryj();
        $("#rozwijany_prawo_budowlane").hide();
        $("#rozwody").show();
        $("#klienci_indywidualni").show();
        $("#klienci_biznesowi").show();
        $("#biezace_problemy").show();
        $("#it").show();
        $("#prawo_budowlane").show();
    });

    $("#logo").click(function () {
        ukryj();
    });

});

function ukryj() {

    $("#rozwijane_foto").hide();
    $("#rozwijane_kontakt").hide();
    $("#rozwijany_o_kancelarii").hide();
    $("#rozwijany_klienci_indywidualni").hide();
    $("#rozwijany_klienci_biznesowi").hide();
    $("#rozwijany_rozwody").hide();
    $("#rozwijany_biezace_problemy").hide();
    $("#rozwijany_it").hide();
    $("#rozwijany_prawo_budowlane").hide();

    $("#foto_kasia").show();
    $("#kontakt").show();
    $("#o_kancelarii").show();
    $("#sentencja").show();
    $("#klienci_indywidualni").show();
    $("#klienci_biznesowi").show();
    $("#rozwody").show();
    $("#biezace_problemy").show();
    $("#it").show();
    $("#prawo_budowlane").show();

}