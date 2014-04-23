<?php
	$title='Snake';
	$bodyId='snake';
	$bodyClass='portfolioPage';
	include $_SERVER["DOCUMENT_ROOT"] . '/includes/header.php';
?>


<div class="item">
  <div class="portfolioNav">
    <div class="prev"><a href="third-layer.php" title="previous project"></a></div>
    <div class="next"><a href="biwc.php" title="next project"></a></div>
  </div>
  <a href="../snake.html" title="Snake" target="_blank"><img src="images/snake_screenshot.png" /></a>
    <div class="content whiteBG topMarg20">
		<h4>Snake</h4>
		<span class="date">(Aug 2012, updated Mar 2013)</span>
		
		<br />
		<p><strong>Solo project</strong></p>
		<br />
		<p>I wanted to try out animation in HTML5, so I decided to create a JavaScript game. I made my own version of the classic snake game using the HTML5 canvas element.</p>
		<br />
		<span class="right small inlineBlock"><a href="../snake.html" title="Snake" target="_blank">Play Snake</a></span>
		<div class="clear"></div>
	</div>
</div>

<?php include $_SERVER["DOCUMENT_ROOT"] .  '/includes/footer.php'; ?>