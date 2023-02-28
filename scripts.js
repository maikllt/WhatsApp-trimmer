function getPhoneNumber() {
    let phone = document.getElementById("WAphoneNumber").value;
    let code = document.getElementById("WAphoneCountryCode").value;
    if (!!code) {
        phone = code + phone;
    }
    //remove unsupported by WA API characters from phone number
    phone = phone.replace(/[ \-\+()]/g, "");
    return phone;
}
function getText() {
    let text = document.getElementById("WAtext").value;
    text = text.replace(/\n/g, "%0A");
    return !!text ? ("?text=" + text) : "";

}
function openWA() {
    let url = "https://wa.me/" + getPhoneNumber() + getText();
    window.open(url, "_blank");
    document.getElementById("WAphoneNumber").value = "";
}
function clearWAtext() {
    document.getElementById("WAtext").value = "";
    return;
}