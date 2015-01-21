<?php
$title='Step 3: Begin Tracking';
$body_id='step3';
include 'header.php';
?>

<!--RIGHT NAV-->
<div id="rightFrame">

  <?php include 'right-nav.php'; ?>

  <div class="nextStepFrame">
    <a class="inheritColor" href="step4.php">
      <div class="nextStep"><div>Step 4</div></div>
    </a>
  </div>

</div>

<!--LEFT BOX-->
<div class="mainContentFrame">
  <div class="grayHeader">
    <h2 class="left">Begin Tracking</h2>
    <p id="allChanges">All changes saved in Drafts.</p>
    <div class="clear"></div>
  </div>
  <div class="mainContent step3Content">

    <?php include 'progress-bar.php'; ?>

    <div id="trackContact" class="tracking">
      <h3 class="question" class="topMarg20"><!-- fill "contact?" --></h3>
      <div class="when">
        <div>When?</div>
        <div><input class="date" type="text" /></div>
        <div><button class="submitButton" type="button"><span>Enter</span></button></div>
        <div id="noContact" class="notYet"><a href="#">Not yet</a></div>
      </div>
    </div>
    <div id="trackClose" class="tracking">
      <h3 class="question" class="topMarg20"><span class="gray">Yes?</span> Has business <strong>closed</strong> for this gig?</h3>
      <div class="when">
        <div>When?</div>
        <div><input class="date" type="text" /></div>
        <div><button class="submitButton" type="button"><span>Enter</span></button></div>
        <div class="notYet"><a href="#">Not yet</a></div>
      </div>
    </div>
    <div id="trackThank" class="tracking">
      <h3 class="question" class="topMarg20"><!-- fill "thanked?" --></h3>
      <div class="when">
        <div>When?</div>
        <div><input class="date" type="text" /></div>
        <div><button class="submitButton" type="button"><span>Enter</span></button></div>
        <div class="notYet"><a href="#">Not yet</a></div>
      </div>
    </div>
    <div class="resetPage"><a href="#">Reset page</a></div>

    </div>
  </div>
  <div class="clear"></div>
</div>

<!--REMINDER LIGHTBOX-->
<div id="contactReminder" class="lightbox" title="Set Reminder">
  <div class="topMarg20">
    <div class="reminderTypeFrame">
      <img class="iconStartLine" src="images/reminder.png" alt="(reminder)" />
      <div class="inlineBlock botMarg20">
        You will be reminded about <strong>contact</strong>
        <select class="reminderTimeFrame">
          <option value="24hrs">24 hours</option>
          <option value="48hrs">48 hours</option>
          <option value="4days">4 days</option>
          <option value="1wk">1 week</option>
          <option value="2wks">2 weeks</option>
          <option value="1mo">1 month</option>
          <option value="3mo">3 months</option>
          <option value="6mo">6 months</option>
        </select>
        after the <strong>open</strong> date.
      </div>
    </div>
    <hr />
    <div class="inlineBlock topMarg20 reminderTypeFrame">
      <strong>Or</strong> pick your reminder date here: <div class="inlineBlock indent10"><input class="date reminderDate" type="text" /></div>
    </div>
  </div>
</div>

<?php include 'footer.php'; ?>
