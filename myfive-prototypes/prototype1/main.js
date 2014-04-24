// PERSON CLASS DEFINITIONS
var globalPersonArray = [];

function Person() {
  this.nickName = '';
  this.tile = '';
  this.contactInfo = '';
  this.role = '';
  this.dropped = false;
  globalPersonArray.push(this);
}
Person.prototype.setName = function (first,last) {
  this.nickName = first;
  this.firstName = first;
  this.lastName = last;
  this.fullName = first+' '+last;
}
function User() { // define User
  Person.call(this);
}
User.prototype = new Person(); //inherit Person

// USER
var user = new User();
user.setName('Test','User');
user.nickName = 'you';
user.tile = 'tileUser';
user.workEmail = 'your.work.email@yourdomain.com';
user.contactInfo = ' \
                  <img class="profile" src="images/profile-pic-80" draggable="false" /> \
                    <h3>Your Name</h3> \
                    <p class="jobTitle">Your Job Title</p> \
                    <img class="iconStartLine" src="images/org-icon-16.png" draggable="false" /> \
                    <p class="inline">Your Company</p> \
                    <div class="clear"></div> \
                    <!--contact info--> \
                    <div class="contactInfo"> \
                      <div> \
                        <span>your.work.email@yourdomain.com</span> \
                        <span class="infoType">work</span> \
                      </div> \
                      <div class="clear"> \
                        <span>your.home.email@gmail.com</span> \
                        <span class="infoType">home</span> \
                      </div> \
                      <div class="clear"> \
                        <span>555.555.5555</span> \
                        <span class="infoType">work</span> \
                      </div> \
                      <div class="clear"> \
                        <span>555.555.5555</span> \
                        <span class="infoType">mobile</span> \
                      </div> \
                      <div class="clear"> \
                        <span class="gray">www.twitter.com</span>/yourtwitterhandle \
                      </div> \
                    </div> \
                    ';

var globalContactArray = []; // store claire & joe
                    
function Contact(first) { //define Contact
  Person.call(this);
  this.added = false;
  //this.dropped = false; //in person
  globalContactArray.push(this);
  // add to gig
}
Contact.prototype = new Person();

// CLAIRE SMITH
var claire = new Contact();
claire.setName('Claire','Smith');
claire.tile = 'tileClaire';
claire.workEmail = 'claire@clairesmithwebdesign.com';
claire.contactInfo = ' \
                  <img class="profile" src="images/profile-pic-80" draggable="false" /> \
                    <h3>Claire Smith</h3> \
                    <p class="jobTitle">Web Designer</p> \
                    <img class="iconStartLine" src="images/org-icon-16.png" draggable="false" /> \
                    <p class="inline">Claire Smith Web Design</p> \
                    <div class="clear"></div> \
                    <!--contact info--> \
                    <div class="contactInfo"> \
                      <div> \
                        <span>claire@clairesmithwebdesign.com</span> \
                        <span class="infoType">work</span> \
                      </div> \
                      <div class="clear"> \
                        <span class="gray">www.linkedin.com</span>/clairesmith/555 \
                      </div> \
                    </div> \
                    ';

// JOE SCHMO
var joe = new Contact();
joe.setName('Joe','Schmo');
joe.tile = 'tileJoe';
joe.workEmail = 'joe@joeschmoaccounting.com';
joe.contactInfo = ' \
                  <img class="profile" src="images/profile-pic-80" draggable="false" /> \
                    <h3>Joe Schmo</h3> \
                    <p class="jobTitle">Certified Public Accountant</p> \
                    <img class="iconStartLine" src="images/org-icon-16.png" draggable="false" /> \
                    <p class="inline">Joe Schmo Accounting</p> \
                    <div class="clear"></div> \
                    <!--contact info--> \
                    <div class="contactInfo"> \
                      <div> \
                        <span>joe@joeschmoaccounting.com</span> \
                        <span class="infoType">work</span> \
                      </div> \
                      <div class="clear"> \
                        <span>joeschmo-theaccountant@gmail.com</span> \
                        <span class="infoType">home</span> \
                      </div> \
                      <div class="clear"> \
                        <span class="gray">www.linkedin.com</span>/joeschmo/555 \
                      </div> \
                      <div> \
                        <span class="gray">www.twitter.com</span>/accountantjoeschmo \
                      </div> \
                    </div> \
                    ';


// NON-CLASS GLOBAL VARIABLES

var hasOrHave = 'Has';

// RIGHT NAV
function setActiveStep(currentStep) {
  $('#'+currentStep+'Nav .step').addClass('stepNow');
  $('#'+currentStep+'Nav .step .number img').attr('src','images/'+currentStep+'-number-sel.png');
}

// STEP 1 - COOKIES

function setCookie (cName, value, expDays) {
  var expDate=new Date();
  expDate.setDate(expDate.getDate() + expDays);
  var cValue=escape(value) + ((expDays===null) ? "" : "; expires="+expDate.toUTCString());
  document.cookie = cName + "=" + cValue;
}
function getCookie(cName) {
  var i,x,y,cookiesArray = document.cookie.split(";");
  for (i = 0; i < cookiesArray.length; i++) {
    x = cookiesArray[i].substr(0,cookiesArray[i].indexOf("="));
    y = cookiesArray[i].substr(cookiesArray[i].indexOf("=")+1);
    x = x.replace(/^\s+|\s+$/g,"");
    if (x === cName) {
      return unescape(y);
    }
  }
}
function clearCookies() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

// STEP 1 - RESET GIG

function resetStep1() {
  $('#tileClaire, #tileJoe, .selectContactInfo').hide();
  $('#whoElseQ,#whatRolesQ,#whatRolesI').addClass('lightGray');
  $('#contactInput,#addToGig').prop('disabled', true);
  $('#addToGig').addClass('disabledButton');
  // console.log(getCookie('TestDropped'));
  if (getCookie('TestDropped') !== undefined) { // check if cookie exists
    user.dropped = getCookie('TestDropped');
  }
  if (user.dropped === 'true') {
    console.log('user has been dropped');
    afterUserDropped();
    for (var i = 0; i < globalContactArray.length; i++) {
      var contact = globalContactArray[i];
      if (getCookie(contact.firstName+'Added') !== undefined) {
        contact.added = getCookie(contact.firstName+'Added');
      }
      if (getCookie(contact.firstName+'Dropped') !== undefined) {
        contact.dropped = getCookie(contact.firstName+'Dropped');
      }
      console.log(contact.firstName+' added: '+contact.added);
      console.log(contact.firstName+' dropped: '+contact.dropped);
      if (contact.dropped === 'true') { // contact dropped
        console.log(contact.firstName+' has been dropped');
        $('#'+contact.tile).hide();
        $('#'+contact.role).droppable('destroy');
      } else {
        if (contact.added === 'true') {
          $('#'+contact.tile).show();
        }
      }
    }
  } 
}

// STEP 1 - DROPS

function afterUserDropped() {
  $('#yourRoleQ,#yourRoleI').addClass('lightGray');
  $('#whoElseQ,#whatRolesQ,#whatRolesI').removeClass('lightGray');
  $('#contactInput,#addToGig').prop('disabled', false);
  $('#addToGig').removeClass('disabledButton');
  $('#'+user.tile).hide();
}

// STEP 1 - SUBMIT CONTACT INPUT

function clearInput(inputID) {
  // document.getElementById(inputID).value = '';
  $('#'+inputID).val('');
}

function wrongInput(inputID,message) {
  $('#dialog').html(message).dialog('open');
  clearInput(inputID);
}

function addContact(inputID) {
  var inputValue = $('#'+inputID).val();
  var contactMatches = false;
  for (var i = 0; i < globalContactArray.length; ++i) {
    var contact = globalContactArray[i];
    if (inputValue === contact.fullName) {
      contactMatches = true;
      if (contact.added === false) { // not addded
        $('#'+contact.tile).fadeIn('fast');
        clearInput(inputID);
        contact.added = true;
        setCookie(contact.firstName+'Added',contact.added,1);
      } else { // added
        if (contact.dropped === false) { // added, not dropped
          wrongInput(inputID,"You've already added "+contact.fullName+". Drag the tile into one of the boxes below to assign "+contact.firstName+" a role in this gig.");
        } else { // added & dropped
          wrongInput(inputID,contact.fullName+" is already in this gig.");
        }
      }
    }
  }
  if (contactMatches === false) {
    wrongInput(inputID,"For the purposes of this test, you can only use \"Claire Smith\" and \"Joe Schmo.\"");
  }
}

// STEP 2 - RETRIEVE ROLE NAMES
function getInfoFromRole(role,infoType) {
  //var nameType = nameType;
  for (var i = 0; i < globalPersonArray.length; i++) {
    var person = globalPersonArray[i];
    //console.log(person.firstName); // OK
    person.role = getCookie(person.firstName+'Role');
    if (person.role === role) {
      if (infoType === 'fullName') {
        return person.fullName;
      } if (infoType === 'workEmail') {
        return person.workEmail;
      } else {
        return person.nickName;
      }
    }
  }
}

// STEP 2 - SAVE TEXT INPUTS
function titleNeedsUpdating(inputID) {
  var inputValue = $('#' + inputID).val();
  // var inputHTML = $('#' + inputID).html();
  if (inputValue === '' || inputValue === ' ' || (inputValue.indexOf('for') > -1 && inputValue.indexOf('re') > 3 && inputValue.indexOf('from') > 9)) {
    console.log('title needs updating');
    return true;
  }
}

function setDefaultTitle(inputID, fillerText) {
  var inputValue = $('#' + inputID).val();
  console.log(inputValue);
  if (titleNeedsUpdating(inputID)) { // second part checks if title is an old default
    $('#' + inputID).val(fillerText);
    $('#' + inputID).html(fillerText);
  }
}

// cookie name is the same as the inputID
function setField(cName, inputID) {
  var inputValue = $('#' + inputID).val();
  // if (inputValue !== undefined) {
    setCookie(cName, inputValue, 1);
    console.log(cName + ' set');
  //}
}
function getField(cName, inputID) {
  $('#' + inputID).html(getCookie(cName));
  $('#' + inputID).val(getCookie(cName));
  // change field to say "(field left blank)" and .editLink to say "add" if nothing was entered
  if ($('body').attr('id') !== 'step2' && (getCookie(cName) === '' || getCookie(cName) === ' ' || getCookie(cName) === undefined)) {
    $('#' + inputID).html('<span class="gray small"> (field left blank)</span>');
    $('#' + inputID + '+ .editLink a').html('add');
  }
}

// STEP 3 - REMINDER LIGHTBOX

function setReminder(lb, e) {
  e.preventDefault();
  $(lb).dialog('option', 'buttons', {
    Ok: function() {
      afterReminderLB('Contact');
      $(this).dialog('close');
    }
  });
  $(lb).dialog('open');
  $(lb).find('select').prop('selectedIndex', 1);
  var reminderDate = $('.reminderDate').parents('.reminderTypeFrame');
  var reminderTimeFrame = $('.reminderTimeFrame').parents('.reminderTypeFrame');
  $('.reminderTimeFrame').focus(function() {
    $(reminderDate).addClass('grayedOut');
    $(reminderTimeFrame).removeClass('grayedOut');
  });
  $('.reminderDate').focus(function() {
    $(reminderDate).removeClass('grayedOut');
    $(reminderTimeFrame).addClass('grayedOut');
  });
}
function afterReminderLB(step) {
  //$('#track'+step+' .question').addClass('grayedOut');
  $('.tracking').each(function() {
    if ($(this).attr('id') !== 'track'+step) {
      $(this).slideUp();
    }
  });
  $('#track'+step+' .when').addClass('inlineBlock').hide().html('<div class="alignR bold">Not yet.</div>').fadeIn();
  $('.resetPage').fadeIn();
}

// STEP 4
  
function editingOrNot() {
  if ($('body').attr('id') === 'step4' || $('body').attr('id') === 'viewTicket') {
    $('.editing').hide();
    $('.viewing').show();
  } else {
    $('.editing').show();
    $('.viewing').hide();
  }
}

// VIEW TICKET & SHARE
function gigIsShared() {
  $('#shareHeading').html('This gig is shared with:');
  $('#notSharedYet, #shareSidebar .onExpand, #shareButton, .clickToShare').fadeOut();
  // $('#shareSidebar .onExpand').hide();
  $('#shareSidebar .emailForSharing, .shh').fadeIn();
  $('.sharePerson').each(function() {
    if ($(this).hasClass('grayedOut')) {
      //console.log('detected gray out');
      $(this).fadeOut();
    }
  });
  $('.submitComment').prop('disabled', false).removeClass('disabledButton');
  $('#cantSubmit').fadeOut();
}

function openShhLB(role) {
  $('#shhLB').dialog('option', 'buttons', {
    Send: function() {
      $(this).dialog('close');
    }
  });
  $('#shhLB').dialog('option', 'title', 'Send a private note to '+getInfoFromRole(role));
  $('#shhLB').dialog('open');
  $('#shhLB .thisIsPrivate').html('This conversation is between you and <img class="iconInline" src="images/'+role+'-icon-16.png" />'+getInfoFromRole(role)+' only.');
}


// DOCUMENT READY

$(document).ready(function() {
  // ALL
  $('#alert').dialog({
    autoOpen: false,
    height: 'auto',
    modal: true,
    buttons: {
      Ok: function() {
        $(this).dialog('close');
      }
    }
  });
  $('.lightbox').dialog({
    autoOpen: false,
    height: 'auto',
    width: 500,
    modal: true,
    show: 'fade',
    buttons: {
      Ok: function() {
        $(this).dialog('close');
      }
    }
  });
  $('.date').datepicker({
    showOn: "button",
    buttonImage: "images/calendar.png",
    buttonImageOnly: true,
    dateFormat: 'm/d/y'
  });
  $('#resetGig').click(function() {
    clearCookies();
    location.reload();
    resetStep1();
  });
  $('.greeting').html('Hello, '+user.firstName);
  setActiveStep(bodyID);
  editingOrNot();
  // STEP 1
  resetStep1();
  if ($('body').attr('id') !== 'step4') {
    $('.previewContent').hide();
  }
  // create "add participants" suggestions
  $('#contactInput').autocomplete({
    source: ['Claire Smith', 'Joe Schmo'],
    minLength:0
  }).focus(function() {
    $(this).autocomplete('search');
  });
  // trigger "Add" on enter key -- dialogs not working
  $('#contactInput').keydown(function(e) {
    if (e.keyCode === 13) {
      e.preventDefault;
      $('#addToGig').trigger('click');
    }
  });
  $('.contactTile').draggable({
    revert: 'invalid',
    containment: 'window',
    scrollSpeed: 5,
    zIndex: 999999
  });
  $('.contactCard').droppable({
    hoverClass: 'dropHere',
    accept: '.contactTile',
    drop: function(event,ui) {
      var targetArea = $(this).find('div.contactContent');
      var assignedRole = $(this).attr('id');
      // hide tile
      ui.draggable.hide();
      // show link to edit what info appears with the gig
      $(this).find('.selectContactInfo').fadeIn();
      // iterate through participants
      for (var i = 0; i < globalPersonArray.length; i++) {
        var person = globalPersonArray[i];
        if (ui.draggable.attr('id') === person.tile) {
          // fill contact info
          $(targetArea).hide().html(person.contactInfo).fadeIn();
          person.role = assignedRole;
          // store assigned role as a cookie
          setCookie(person.firstName+'Role',person.role,1);
          person.dropped = true;
          // store whether the paricipant has been assigned as a cookie
          setCookie(person.firstName+'Dropped',person.dropped,1);
          // console.log(getCookie('ClaireDropped'));
        }
      }
      if (ui.draggable.attr('id') === user.tile) { // enable adding contacts
        afterUserDropped();
      }
      $(this).droppable('destroy');
    }
  });
  // prevent imgs from dragging
  $('img').bind('dragstart', function(e) {
    e.preventDefault();
  });
  $('.selectContactInfo a').click(function(e) {
    e.preventDefault();
    $('#alert').html("In the real application you'll be able to select how much of each participants' contact info appears with this gig. That way if you share the gig, you decide what information gets shared and what doesn't.");
    $('#alert').dialog('option','title',"This link doesn't work yet...");
    $('#alert').dialog('open');
  });
  
  // STEPS 2 & 4 - passing gig text inputs
  var defaultTitle = 'for '+getInfoFromRole('recipient')+' re '+getInfoFromRole('client')+' from '+getInfoFromRole('connector')+' '+dateInTitle; // has to be here to grab php from header.php
  getField('gigTitle', 'gigTitle');
  getField('gigDescription', 'gigDescription');
  getField('dollarValue', 'dollarValue');
  getField('noteToSelf', 'noteToSelf');
  // store inputs as cookies
  if ($('body').attr('id') === 'step2') {
    $('a').click(function() {
      setField('gigTitle', 'gigTitle');
      setField('gigDescription', 'gigDescription');
      setField('dollarValue', 'dollarValue');
      setField('noteToSelf', 'noteToSelf');
    });
  }
  if ($('body').attr('id') === 'step2' || $('body').attr('id') === 'step4') {
    setDefaultTitle('gigTitle', defaultTitle);
  }
  // STEP 3
  $('#noContact').click(function(e) {
    setReminder('#contactReminder', e);
  });
  if ($('body').attr('id') === 'step3') {
    if (getInfoFromRole('recipient') === user.nickName) { // conjugation in thankedQuestion
      hasOrHave = 'Have';
    } else {
      hasOrHave = 'Has';
    }
    $('#trackContact .question').html('Has <strong>contact</strong> been made between <img class="iconInline" src="images/recipient-icon-16.png" alt="(recipient)" />'+getInfoFromRole('recipient')+' and <img class="iconInline" src="images/client-icon-16.png" alt="(connector)" />'+getInfoFromRole('client')+'?');
    $('#trackThank .question').html('<span class="gray">Yes?</span> '+hasOrHave+' <img class="iconInline" src="images/recipient-icon-16.png" alt="(recipient)" />'+getInfoFromRole('recipient')+' <strong>thanked</strong> <img class="iconInline" src="images/connector-icon-16.png" alt="(recipient)" />'+getInfoFromRole('connector')+'?');
  }
  $('.resetPage').click(function() {
    location.reload();
  });
  // STEP 4
  $('.submitComment').prop('disabled', true).addClass('disabledButton');
  $('#cantSubmit').show(); // can't submit comments until shared
  if ($('body').attr('id') === 'step4') {
    $('.contactCard .hint').hide();
  }
  for (var i = 0; i < globalPersonArray.length; i++) { // get filled contact cards
    var person = globalPersonArray[i];
    person.role = getCookie(person.firstName+'Role');
    $('#'+person.role+' .contactContent').html(person.contactInfo);
    $('#'+person.role+' .hint').hide();
  }
  $('.editLink a').click(function(e) {
    e.preventDefault();
    $('#alert').html("This prototype doesn't support inline editing, but you'll be able to do it in the final version.");
    $('#alert').dialog('option','title','No inline edits yet...');
    $('#alert').dialog('open');
  });
  // VIEW TICKET & SHARE
  $('#createdBy').html('Created by '+user.nickName);
  $('#connectorShare .fullName').html(getInfoFromRole('connector','fullName'));
  $('#connectorShare .emailForSharing').html(getInfoFromRole('connector','workEmail'));
  $('#clientShare .fullName').html(getInfoFromRole('client','fullName'));
  $('#clientShare .emailForSharing').html(getInfoFromRole('client','workEmail'));
  $('#recipientShare .fullName').html(getInfoFromRole('recipient','fullName'));
  $('#recipientShare .emailForSharing').html(getInfoFromRole('recipient','workEmail'));
  if ($('body').attr('id') === 'viewTicket') {
    $('#instructions').hide();
  }
  // share expansions
  $('.onExpand, #'+user.role+'Share, .shh').hide();
  $('.sharePerson').addClass('grayedOut');
  $('.clickToShare').click(function() {
    var parentPerson = $(this).parents('.sharePerson').attr('id');
    $('#'+parentPerson+' .onExpand').slideToggle('fast');
    if ($('#'+parentPerson).hasClass('grayedOut')) {
      $('#'+parentPerson).removeClass('grayedOut');
    } else {
      $('#'+parentPerson).addClass('grayedOut');
    }
  });
  $('.preview a').click(function(ev) {
    ev.preventDefault();
    $('#dialog').html("This prototype doesn't support previews. In the real version you'll see a preview of the email that your guest will receive.");
    $('#dialog').dialog('option','title','No previews yet...');
    $('#dialog').dialog('open');
  });
  $('#shareButton').click(function() {
    gigIsShared();
  });
  $('#connectorShare .shh').click(function() {
    openShhLB('connector');
  });
  $('#clientShare .shh').click(function() {
    openShhLB('client');
  });
  $('#recipientShare .shh').click(function() {
    openShhLB('recipient');
  });
  $('.submitComment').click(function() {
    var commentField = $(this).parents('.disc').find('.commentField');
    var commentText = $(commentField).val();
    var userComment = '<div class="userCommentFrame"><div class="author"><img src="images/profile-pic-26.png" /><div>'+user.nickName+'</div></div><div class="userComment">'+commentText+'</div><div class="clear"></div></div>';
    if (commentText !== '' && commentText !== ' ') {
      $(commentField).before(userComment);
      $('.userCommentFrame').slideDown('slow');
      $(commentField).val('');
    }
  });
});