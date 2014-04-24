<?php
$title='Step 1: Add Participants';
$bodyId='step1';
include 'header.php';
?>

<!--RIGHT NAV-->
<div id="rightFrame">
  <?php include 'right-nav.php'; ?>
  <div class="nextStepFrame">
    <a class="inheritColor" href="step2.php">
      <div class="nextStep"><div>Step 2</div></div>
    </a>
  </div>
  
</div>
        
<!--LEFT BOX-->
<div class="mainContentFrame">
  <div class="grayHeader">
    <h2 class="left">Add Participants</h2>
    <p class="gray right"><i>All changes saved in Drafts.</i></p>
    <div class="clear"></div>
  </div>
  <div class="mainContent">
    <h3 id="yourRoleQ">What role are you playing in this gig?</h3>
    <div id="yourRoleI" class="small">Drag &amp; drop yourself into one of the boxes below.</div>
    <!-- YOU tile -->
    <div id ="tileUser" class="contactTile" draggable="true">
      <div><img class="profile" src="images/profile-pic-16.png" draggable="false" /></div>
      <div class="sidePad" style="padding-left:0;">you</div>
    </div>
    <br />
    <h3 id="whoElseQ" class="topMarg10 lightGray">Who else is participating in this gig?</h3>
    <div id="addContact">
      <input id="contactInput" type="text" />
      <button id="addToGig" class="submitButton" type="button" onclick="addContact('contactInput')"><span>Add</span></button>
    </div>
    <!-- Claire tile -->
    <div id ="tileClaire" class="contactTile" draggable="true">
      <div><img class="profile" src="images/profile-pic-16.png" draggable="false" /></div>
      <div class="sidePad" style="padding-left:0;"><?php echo $claire->get_fullName(); ?></div>
    </div>
    <!-- Joe tile -->
    <div id ="tileJoe" class="contactTile" draggable="true">
      <div><img class="profile" src="images/profile-pic-16.png" draggable="false" /></div>
      <div class="sidePad" style="padding-left:0;"><?php echo $joe->get_fullName(); ?></div>
    </div>
    <br />
    <h3 id="whatRolesQ" class="topMarg10 lightGray">What roles do they each play?</h3>
    <div id="whatRolesI" class="lightGray small">Drag &amp; drop into the boxes below.</div>

    <?php include 'contact-cards.php'; ?>  <!--contact cards here-->

    <div class="clear"></div>
  </div>
</div>

<?php include 'footer.php'; ?>