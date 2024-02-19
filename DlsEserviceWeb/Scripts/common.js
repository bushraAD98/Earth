
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode < 48 || charCode > 57)
        return false;

    return true;
}

function checkInt(e) {
    var val = $(e).val();
    if (isInt(val)) return;

    $(e).val("");
}

function isInt(value) {
    var x;
    if (isNaN(value)) {
        return false;
    }
    x = parseInt(value);
    return (x | 0) === x;
}

function isDecimalKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode < 48 && charCode != 46) || charCode > 57)
        return false;

    return true;
}