"use strict";

// data object : data.hospital

function initHospital(json) {

    // store json file in the global object
    data.hospital = json;
    console.log("init-hospital",json);

}

/**
 * Initialize hospital-details page When an item is clicked
 *
 * @param item used for hospital-details page
 */
function initHospitalDetails(item) {

    console.log("init-hospital-details", item);
}