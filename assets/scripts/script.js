// Assignment Code

function click_btn_generatePassword() {
    var li_password_Length = document.querySelector("#tx_length").value;
    if(li_password_Length==0){
        alert("You must select the lenght of the password.");
        document.querySelector("#tx_length").select();
        document.querySelector("#tx_length").focus();
        return;
    };

    if(li_password_Length>128){
        alert("Maximum length is 128 characters.");
        document.querySelector("#tx_length").focus();
        return;
    };

    var arr_password = [];
    var bl_lowercase = (document.querySelector("#cbx_lowercase").checked ? true : false);
    var bl_uppercase = (document.querySelector("#cbx_uppercase").checked ? true : false);
    var bl_numeric = (document.querySelector("#cbx_numeric").checked ? true : false);
    var bl_special = (document.querySelector("#cbx_special").checked ? true : false);

    var sl_lowercase = "";
    var sl_uppercase = "";
    var sl_numeric = "";
    var sl_special = "";

    if (bl_lowercase) sl_lowercase = "abcdefghijklmnopqrstuvwxyz";
    if (bl_uppercase) sl_uppercase = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
    if (bl_numeric) sl_numeric = "0123456789";
    if (bl_special) sl_special = "!”#$%&’()*+,-./:;<=>?@[\\]^_`{|}~";

    var sl_anycharacter = sl_lowercase + sl_uppercase + sl_numeric + sl_special;

    if(sl_anycharacter=="")alert("You must select an option");

    // cycles n times to find each time a new character for the new password
    for (var i = 0; i < li_password_Length; i++) {
        arr_password.push(sl_anycharacter.charAt(Math.floor(Math.random()*sl_anycharacter.length)));
    }
    // writes the content of the array into the password text area
    document.querySelector("#password").innerHTML = arr_password.join('');
}

