"use strict";

// data object : data.member
function initMember(json) {

    data.member = json;
    console.log("init-member", json);
}

/**
 * Initialize member-details page When an item is clicked
 *
 * @param item used for member-details page
 */
function initMemberDetails(item) {
    console.log("init member-details", item);
}