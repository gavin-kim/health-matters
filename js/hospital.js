"use strict";

//globals
var lngHosp;
var latHosp;
var mapDesc;
var mapHosp;
var mapOptions;
var map;
var myLoc;
var info;


var latTO;
var lngTO;


// data object : data.hospital

function initHospital(json) {

    // store json file in the global object
    data.hospital = json.hospital;
    HOSPITAL.clickEvent = initHospitalDetails;
    HOSPITAL.item = data.hospital;
}


/**
 * Initialize hospital-details page When an item is clicked
 *
 * @param hospital used for hospital-details page
 */
function initHospitalDetails(hospital) {

    //header
    $("#hospName").html(
        "<a href='" + hospital.url + "'>" +
        hospital.name +
        "</a>"
    );

    //hospital information
    $("#hospInfo").append(
        "City: " + hospital.city + "<br>"  +
        "Phone Number: " + hospital.mainPhoneNumber + "<br>" +
        "Longitude: " + hospital.longitude +
        "&nbsp; &nbsp; Latitude: " + hospital.latitude
    );


    //departments  summHosp
    var depart = hospital.departments;

    // reset html elements
    $("#summHosp").html("");

    for(var x=0; x < depart.length; x++){
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

// Google map must be loaded after the page is shown
function initMap() {

    // Check if google map already loaded
    if (map)
        return;

    /* Initialize the map */

    //map description
    $('#mapSection').show();

    //coordinates
    lngHosp = data.hospital.longitude;
    latHosp = data.hospital.latitude;

    //first step is to set center point
    mapHosp = new google.maps.LatLng(latHosp, lngHosp);

    //set map options
    mapOptions = {
        center: mapHosp,
        zoom:18,
        mapTypeId: google.maps.MapTypeId.HYBRID
        //other options are roadmap, salellite, terain
    };

    //draw map
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

    //marker
    myLoc = new google.maps.Marker({
        map: map,
        //icon: "_img/pushpin.gif",    //optional ... without will get default
        animation: google.maps.Animation.DROP,
        position: mapHosp
    });

    //info window content
    info = new google.maps.InfoWindow({
        content: 'test'
    });

    //add listener
    google.maps.event.addListener(myLoc, "click", function() {
        info.open(map, myLoc);
    });
}