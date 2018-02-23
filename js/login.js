/*
function password() {

    var testV = 1;
    var pass1 = prompt('请输入密码:','');
    while (testV < 3) {
        if (!pass1)
            history.go(-1);
        if (pass1 == "123") {
            alert('密码正确!');

            break;
        }
        testV+=1;
        var pass1 =
            prompt('密码错误!请重新输入:');
    }
    if (pass1!="password" & testV ==3)
        close();
    history.go(-1);
    return " ";
}
document.write(password());
*/




(function( $ ) {
    // constants
    var SHOW_CLASS = 'show',
        HIDE_CLASS = 'hide',
        ACTIVE_CLASS = 'active';

    $( '.tabs' ).on( 'click', 'li a', function(e){
        e.preventDefault();
        var $tab = $( this ),
            href = $tab.attr( 'href' );

        $( '.active' ).removeClass( ACTIVE_CLASS );
        $tab.addClass( ACTIVE_CLASS );

        $( '.show' )
            .removeClass( SHOW_CLASS )
            .addClass( HIDE_CLASS )
            .hide();

        $(href)
            .removeClass( HIDE_CLASS )
            .addClass( SHOW_CLASS )
            .hide()
            .fadeIn( 550 );
    });
})( jQuery );

/*$(document).ready(function () {
   $(".loginbutton").click(function () {
       $("div[id='login_main']").hide()
   });
});*/

function adlogin() {
    var adname = document.getElementById("adminusername");
    var adpw = document.getElementById("adminpassword");
    if (adname.value == "123"&&adpw.value == "123"){
        $("#login_main").hide();
        $("#layerListDom").css({"visibility":"visible"});
    }
    else {
        $("#dispwarn").css({"visibility":"visible"});
    }
}

$(document).ready(function () {
    $("#touristbrowse").click(function () {
        $("#login_main").hide()
    });
});