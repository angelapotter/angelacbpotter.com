<?php
	$title='Old Person App';
	$body_id='oldPerson';
	$body_class='portfolioPage';
	include $_SERVER["DOCUMENT_ROOT"] . '/includes/header.php';
?>


<div class="item">
  <img src="images/oldperson_screenshots.png" />

  <div class="content whiteBG topMarg20">
    <h2><?php echo $title ?></h2>
    <div class="projectInfo">
      <div class="date">winter 2013</div>
      <div class="role">design &amp; layout</div>
    </div>

    <p>This is a mobile app I built (with one other person). We set out to build something simple for Android, and decided on a toolkit for the elderly. It combines a magnifying glass, flashlight, and large-print notebook. We wanted it to be extremely comprehendive even for people who aren't tech savvy.</p>
    <br />
    <div class="right">
      <!-- <span class="small inlineBlock">
        <a href="http://www.thirdlayersoftware.com/oldperson.php" title="Third Layer: Old Person App" target="_blank">
          Learn more</a>
      </span> -->
      <span class="small indented inlineBlock">
        <a href="https://play.google.com/store/apps/details?id=com.thirdlayer.oldperson&feature=search_result#?t=W251bGwsMSwxLDEsImNvbS50aGlyZGxheWVyLm9sZHBlcnNvbiJd"
           title="Google Play: Old Person App" target="_blank">Download Old Person App</a>
      </span>
    </div>
    <div class="clear"></div>
  </div>
</div>

<?php include $_SERVER["DOCUMENT_ROOT"] .  '/includes/footer.php'; ?>
