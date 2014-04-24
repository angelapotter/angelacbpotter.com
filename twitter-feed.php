<?php
  $title='Twitter feed';
  $bodyId='twitterFeed';
  include $_SERVER["DOCUMENT_ROOT"] . '/includes/header.php';
?>

<div class="content whiteBG">
  <div>
    <h2 class="noPadTop botMarg20">twitter feed</h2>

	<a class="twitter-timeline" href="https://twitter.com/takehypotenuses" data-widget-id="443854785758756865" data-tweet-limit="20">Tweets by @takehypotenuses</a>
	<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>

	</div>
</div>


<?php include $_SERVER["DOCUMENT_ROOT"] . '/includes/footer.php'; ?>


