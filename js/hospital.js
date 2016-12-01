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
    

    $('#mapSection').show();

    //map description
    $('#mapSection').show();

    //coordinates
    lngHosp = json.hospital.longitude;
    latHosp = json.hospital.latitude;
    
    //first step is to set center point
    mapHosp = new google.maps.LatLng(latHosp, lngHosp);
    
    //set map options
    mapOptions = {
        center: mapHosp, 
        zoom:18,
        mapTypeId: google.maps.MapTypeId.HYBRID
        //other options are roadmap, salellite, terain
    }
    
    //draw map
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
                        
    //marker
    myLoc = new google.maps.Marker({
        map: map,
        icon: "_img/pushpin.gif",    //optional ... without will get default
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

    
    
    
    //departments  summHosp
    var depart = json.hospital.departments;
    
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


/**
 * Initialize hospital-details page When an item is clicked
 *
 * @param item used for hospital-details page
 */
function initHospitalDetails(item) {

    //$("#hospName").html(item.name);
}