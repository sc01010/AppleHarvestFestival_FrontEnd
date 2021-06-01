$("#feedBack").on("submit", function() {
  var formValid = true;

  // TODO: place all "check component validity snippets" here
  if( $("#name").prop("validity").valid ) {

    // TODO: snippet(s) for if component data is valid
    $("#nameFeedback").addClass("hidden");

  } else {

    // TODO: snippet(s) for if component data is NOT valid
    $("#nameFeedback").removeClass("hidden");
    formValid = false;
  }

  if( $("#email").prop("validity").valid ) {

    // TODO: snippet(s) for if component data is valid
    $("#emailFeedback").addClass("hidden");

  } else {

    // TODO: snippet(s) for if component data is NOT valid
    $("#emailFeedback").removeClass("hidden");
    formValid = false;
  }
    /* source: (Mudassar Ahmed Khan) http://www.jqueryfaqs.com/Articles/Validate-Check-HTML-Select-DropDownList-using-jQuery.aspx */
  var modeOfTransportation = $("#mode-of-transportation");
  if( modeOfTransportation.val() == "") {
    $("#transportationFeedback").removeClass("hidden");
    formValid = false;
  } else {
    $("#transportationFeedback").addClass("hidden");
  }

  if( $("#number-of-attendees").prop("validity").valid ) {

    // TODO: snippet(s) for if component data is valid
    $("#attendeeFeedback").addClass("hidden");

  } else {

    // TODO: snippet(s) for if component data is NOT valid
    $("#attendeeFeedback").removeClass("hidden");
    formValid = false;
  }

  /* source: https://stackoverflow.com/questions/4107404/jquery-detect-if-textarea-is-empty */
  var txt = $("#how-was-your-experience");
  if( txt.val().length != 0) {

    // TODO: snippet(s) for if component data is valid
    $("#experienceFeedback").addClass("hidden");
  } else {

    // TODO: snippet(s) for if component data is NOT valid
    $("#experienceFeedback").removeClass("hidden");
    formValid = false;
  }

  if( $("#activity-one").is(":checked") ||
    $("#activity-two").is(":checked") ||
    $("#activity-three").is(":checked") ||
    $("#activity-four").is(":checked") ) {

    // TODO: snippet(s) for when at least one checkbox is checked
    $("#activitiesFeedback").addClass("hidden");
  } else {

    // TODO: snippet(s) for when NO checkboxes are checked
    $("#activitiesFeedback").removeClass("hidden");
    formValid = false;
  }

  // this sends the form to the server
  return formValid;
});
