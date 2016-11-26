"use strict";
var num;

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
	$(".nav-member").click(function(){
		num = $(this).attr("value");
		$("#sName").html(data.member.member[num].fullName);
		$("#sLog").html(data.member.member[num].studentLogin);
		$("#sNum").html(data.member.member[num].studentNumber);
		$("#memberPic").html("<img src='" +  data.member.member[num].studentPicture + "' height='50%' width='50%'>");			
	});   
    console.log("init member-details", item);
}
