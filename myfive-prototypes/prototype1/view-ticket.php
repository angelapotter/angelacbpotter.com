<?php
$title='View Ticket &amp; Share';
$bodyId='viewTicket';
include 'header.php';
?>

<!--RIGHT NAV-->
<div id="rightFrame">
  <div class="notificationGreen">This gig has been published.</div>
  <div id="shareSidebar">
    <div class="item">
      <img class="left iconStartLine" src="images/profile-pic-40.png" />
      <div id="createdBy"><!-- fill created by --></div>
      <div id="creationDate"><?php echo date("n/j/y").' at '.date("h:ia"); ?> </div>
      <div class="clear"></div>
    </div>
    <div class="item topMarg20">
      <img src="images/pass.png" alt="(pass icon)" />
      <h2 id="shareHeading" class="inline teal">Share this gig!</h2>
      <div id="notSharedYet" class="small"><strong>This gig hasn't been shared yet.</strong> Select the participants you want to share with, then hit "Share now."</div>
    </div>
    <!-- share with RECIPIENT -->
    <div id="recipientShare" class="item sharePerson">
      <div class="shh"><img src="images/shh-black.png" /></div>
      <div class="mainLine">
        <div class="middle"><input class="clickToShare" type="checkbox" /></div>
        <div class="middle"><img src="images/recipient-icon-16.png" /></div>
        <div class="middle"><img src="images/profile-pic-26.png" /></div>
        <div class="middle">
          <div class="fullName"><!-- fill recipient name --></div>
          <div class="small onExpand emailForSharing"><!-- fill recipient email --></div>
        </div>
      </div>
      
      <?php include 'share-options.php'; ?>
      
    </div>
    <!-- share with CONNECTOR -->
    <div id="connectorShare" class="item sharePerson">
      <div class="shh"><img src="images/shh-black.png" /></div>
      <div class="mainLine">
        <div class="middle"><input class="clickToShare" type="checkbox" /></div>
        <div class="middle"><img src="images/connector-icon-16.png" /></div>
        <div class="middle"><img src="images/profile-pic-26.png" /></div>
        <div class="middle">
          <div class="fullName"><!-- fill connector name --></div>
          <div class="small onExpand emailForSharing"><!-- fill connector email --></div>
        </div>
      </div>
      
      <?php include 'share-options.php'; ?>
      
    </div>
    <!-- share with CLIENT -->
    <div id="clientShare" class="item sharePerson">
      <div class="shh"><img src="images/shh-black.png" /></div>
      <div class="mainLine">
        <div class="middle"><input class="clickToShare" type="checkbox" /></div>
        <div class="middle"><img src="images/client-icon-16.png" /></div>
        <div class="middle"><img src="images/profile-pic-26.png" /></div>
        <div class="middle">
          <div class="fullName"><!-- fill client name --></div>
          <div class="small onExpand emailForSharing"><!-- fill client email --></div>
        </div>
      </div>
      
      <?php include 'share-options.php'; ?>
      
    </div>
    <div class="item right">
      <button id="shareButton" class="tealButton" type="button"><div>Share now</div></button>
    </div>
    <div class="clear"></div>
    <hr />
    <div class="item">
      <div class="teal big">Gig permalink</div>
      <div class="darkGray small">Your guests can access the ticket with this link once you've shared with them.</div>
      <input id="gigLink" class="topMarg10" type="text" value="http://myfive.com/gigID" />
    </div>
  </div>
</div>
        
<!--LEFT BOX-->
<div class="mainContentFrame">
  <div class="grayHeader">
    <h2 id="gigTitle" class="left"><!-- fill title --></h2><div class="editLink indent15 left"><a href="#">edit</a></div>
    <div class="clear"></div>
  </div>
  <div class="mainContent">
    
    <?php include 'progress-bar.php'; ?>
    
    <h2 class="teal topMarg20 botMarg10">Description</h2>
    <div id="gigDescription" class="botMarg20 inlineBlock"><!-- fill description --></div><div class="editLink indent15"><a href="#">edit</a></div>

    <?php include 'contact-cards.php'; ?>
    <?php include 'group-discussion.php'; ?>
    
  </div>
</div>

<?php include 'for-your-eyes-only.php'; ?>

<!--PRIVATE MESSAGE LIGHTBOX-->
<div id="shhLB" class="lightbox" title="Send a Note">
  <img class="iconStartLine" src="images/your-eyes-only-black.png" alt="(reminder)" style="margin-bottom:-4px;" />
  <div class="thisIsPrivate"><!-- fill thisIsPrivate assurance --></div>
  <textarea id="pmField" rows="5" cols="74" placeholder="Your note here..."></textarea>
</div>

<?php include 'footer.php'; ?>