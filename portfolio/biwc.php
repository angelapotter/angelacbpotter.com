<?php
	$title='Before It Was Cool';
	$body_id='biwc';
	$body_class='portfolioPage';
	include $_SERVER["DOCUMENT_ROOT"] . '/includes/header.php';
?>

<div class="item">
  <div class="portfolioNav">
    <div class="prev"><a href="snake.php" title="previous project"></a></div>
    <h2>Before It Was Cool</h2>
    <div class="next" ><a href="ssa.php" title="next project"></a></div>
  </div>
  <img src="images/biwc_screenshots.png" />
  <div class="content whiteBG topMarg20">
    <h2>Before It Was Cool</h2>
    <div class="projectInfo">
      <div class="date">fall 2012</div>
      <div class="role">design &amp; front-end dev</div>
    </div>
    <!-- <span class="date">(May 2012, updated Oct 2012)</span>
    <br />
    <p><strong>Collaborators:</strong> <a href="www.linkedin.com/in/harrynoble" title="Harry Noble" target="_blank">Harry Noble</a></p>
    <p><strong>My role:</strong> design and front-end development</p>
    <br /> -->
    <p>This is a light-hearted Facebook app that calculates your hipster cred based on what media you like.</p>
    <div class="clear"></div>
  </div>
</div>

<?php include $_SERVER["DOCUMENT_ROOT"] . '/includes/footer.php'; ?>
