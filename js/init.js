"use strict";

var data = {};

var MINERAL= {
    type: "GET",
    url:"xml/mineral.xml",
    dataType: "xml",
    clickEvent: null,
    args: null
};

var HOSPITAL = {
    type: "GET",
    url:"json/hospital.json",
    dataType: "json",
    clickEvent: null,
    args: null
};

var MEMBER = {
    type: "GET",
    url:"json/members.json",
    dataType: "json",
    clickEvent: null,
    args: null
};

$(document).on("pagebeforeshow", "div[data-role = 'page']", initPageDetails);

function initPageDetails(ev) {

    switch (ev.currentTarget.id) {
        case "mineral-details":

            if (MINERAL.clickEvent) {
                saveXML(MINERAL.item);
                MINERAL.clickEvent(MINERAL.item);
            } else {
                initMineralDetails(loadXML());
            }

            break;
        case "hospital-details":

            if (HOSPITAL.clickEvent) {
                saveJSON(HOSPITAL.item);
                HOSPITAL.clickEvent(HOSPITAL.item);
            } else {
                initHospitalDetails(loadJSON());
            }

            break;
        case "member-details":

            if (MEMBER.clickEvent) {
                saveJSON(MEMBER.item);
                MEMBER.clickEvent(MEMBER.item);
            } else {
                initMemberDetails(loadJSON());
            }
            break;
    }
};

// load and save xml in local storage
function loadXML() {
    var item = localStorage.getItem("item");
    return item ? new DOMParser().parseFromString(item, "text/xml") : null;
}
function saveXML(xml) {
    localStorage.setItem("item", new XMLSerializer().serializeToString(xml));
}

// load and save JSON in local storage
function loadJSON() {
    var item = localStorage.getItem("item");
    return item ? item : null;
}

function saveJSON(json) {
    localStorage.setItem("item", JSON.stringify(json));
}



/**
 * Send GET HttpRequest.
 * When a html file is load, invoke function
 *
 * @param url a html file path
 * @param func function to invoke when it's loaded
 */

function loadHtml(url, func) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", func);
    xhr.overrideMimeType("text/html");

    // method, url, async : All file must be loaded before page is created
    xhr.open("GET", url, false);
    xhr.send();
}


function init() {

    console.log("init");

    // in case forEach() is not supported
    if (!NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (func, scope) {
            for (var i = 0, length = this.length; i < length; ++i) {
                func.call(scope, this[i], i, this);
            }
        }
    }

    // to include external html files in a partial page
    document.querySelectorAll("div[include]").forEach(function(dom) {
        loadHtml(dom.getAttribute("include"), function(ev) {
            if (this.status == 200)
                dom.innerHTML = this.response;
        });
    });

    // load data files
    $.ajax(MINERAL).done(initMineral);
    $.ajax(HOSPITAL).done(initHospital);
    $.ajax(MEMBER).done(initMember);
}

init();