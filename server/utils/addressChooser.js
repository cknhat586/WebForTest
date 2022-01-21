const placeModel = require('../models/Places');

$(document).ready(function() {
    $("selectProvince").change(function() {
        let val = $(this).val();
        console.log(val);
    });
});

