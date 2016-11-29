"use strict";

// data object : data.hospital

function initHospital(json) {

    // store json file in the global object
    data.hospital = json;
    
    //header
    $("#hospName").html(
      "<a href='" + json.hospital.url + "'>" +
        json.hospital.name +
      "</a>"
    );
   
    //hospital information
    $("#hospInfo").append(
      "City: " + json.hospital.city + "<br>"  +
      "Phone Number: " + json.hospital.mainPhoneNumber + "<br>" +
      "Longitude: " + json.hospital.longitude +
      "&nbsp; &nbsp; Latitude: " + json.hospital.latitude
    );
    
    //departments  summHosp
    var depart = json.hospital.departments;
    
    for(var x=0; x < depart.length; x++){
        console.log(depart[x].departmentName );
        $("#summHosp").append(
            "<section id='summDepart" + x +"' data-role='collapsible'>" +
                "<h3>" + depart[x].departmentName + "</h3>" +
                "<p> Description: " + depart[x].description + "</p>" +
                "<div>" +
                    depart[x].fact2 +
                "</div><br>" +
                "<div>" +
                    depart[x].fact1 +
                "</div>" +
            "</section>"
        );
        
        $("#summDepart"+x+"").collapsible();
    }

}

/**
 * Initialize hospital-details page When an item is clicked
 *
 * @param item used for hospital-details page
 */
function initHospitalDetails(item) {

   // console.log("init-hospital-details", item);
   console.log("test ------" + item);
    //$("#hospName").html(item.name);
}