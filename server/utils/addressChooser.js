const placeModel = require('../models/Places');

$(document).ready(function() {
    $(#selectProvince).change(function() {
            let province = $(this).val();
            console.log(province);
            let districtList = placeModel.getDistrictByProvince(province);
            let districtListHTML = "";
            for (let i = 0; i < districtList.length; i++) {
                districtListHTML.concat("<option value=");
                districtListHTML.concat(districtList[i]);
                districtListHTML.concat(">");
                districtListHTML.concat(districtList[i]);
                districtListHTML.concat("></option>");
            }
            console.log(districtListHTML);
    });
});