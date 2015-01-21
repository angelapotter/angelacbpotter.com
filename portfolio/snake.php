<?php
	$title='Snake';
	$body_id='snake';
	$body_class='portfolioPage';
	include $_SERVER["DOCUMENT_ROOT"] . '/includes/header.php';
?>


<div class="item">
  <div class="portfolioNav">
    <div class="prev"><a href="third-layer.php" title="previous project"></a></div>
    <h2>Snake</h2>
    <div class="next"><a href="biwc.php" title="next project"></a></div>
  </div>
  <!-- <a href="../snake.html" title="Snake" target="_blank"> -->
  	<img src="/portfolio/images/snake-screenshot.png" class="border" />
  <!-- </a> -->
    <div class="content whiteBG topMarg20">
		<h2>Snake</h2>
		<div class="projectInfo">
	      <div class="date">winter 2013</div>
	      <div class="role">solo project</div>
	    </div>
		<!-- <span class="date">(Aug 2012, updated Mar 2013)</span>

		<br />
		<p><strong>Solo project</strong></p>
		<br /> -->
		<p>I wanted to try out animation in HTML5, so I decided to create a JavaScript game. I made my own version of the classic snake game using the HTML5 canvas element.</p>
		<br />
		<span class="right small inlineBlock"><a href="/snake.html" title="Snake" target="_blank">Play Snake</a></span>
		<div class="clear"></div>
	</div>
</div>

<?php include $_SERVER["DOCUMENT_ROOT"] .  '/includes/footer.php'; ?>
