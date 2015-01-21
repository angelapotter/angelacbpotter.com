
<?php
	$title='portfolio';
	$body_id='portfolio';
	$body_class='portfolioPage';
	include $_SERVER["DOCUMENT_ROOT"] . '/includes/header.php';
?>
  <div class="filtersContainer">
    <div class="all active">
      <span>All</span>
    </div><!--
    --><div class="web">
      <span>Web</span>
    </div><!--
    --><div class="mobile">
      <span>Mobile</span>
    </div><!--
    --><div class="print">
      <span>Print</span>
    </div>
  </div>
  <h2 class="noPadTop botMarg20">Portfolio</h2>

  <div id="items" class="topMarg10">
    <div id="olsetWebsite" class="item web">
      <a class="itemLink" href="olset-website.php" title="OLSET">
        <div class="itemOverlay">
        </div>
        <div class="itemImage"></div>
        <div class="itemLabels">
          <div class="title">Olset.com</div>
          <div class="role">design &amp; front-end dev</div>
        </div>
      </a>
    </div>
    <div id="olsetAnydo" class="item mobile">
      <a class="itemLink" href="olset-anydo.php" title="Any.do travel powered by OLSET">
        <div class="itemOverlay">
          <div><strong>Any.do travel</strong>A white label of OLSET for the Any.do Android app</div>
        </div>
        <div class="itemImage"></div>
        <div class="itemLabels">
          <div class="title">Any.do travel</div>
          <div class="role">design &amp; front-end dev</div>
        </div>
      </a>
    </div>
    <div id="olsetBizCards" class="item print">
      <a class="itemLink" href="olset-biz-cards.php" title="OLSET business cards">
        <div class="itemOverlay"></div>
        <div class="itemImage"></div>
        <div class="itemLabels">
          <div class="title">OLSET business cards</div>
          <div class="role">design</div>
        </div>
      </a>
    </div>
    <div id="musicNotation" class="item mobile">
      <a class="itemLink" href="music-notation-app.php" title="Music notation app mockup">
        <div class="itemOverlay">
        </div>
        <div class="itemImage"></div>
        <div class="itemLabels">
          <div class="title">music notation app mockup</div>
          <div class="role">design</div>
        </div>
      </a>
    </div>
    <div id="myFive" class="item web">
      <a class="itemLink" href="myfive.php" title="myFIVE">
        <div class="itemOverlay">
          <div><strong>myFIVE</strong>A web app for freelancers to keep track of their referrals</div>
        </div>
        <div class="itemImage"></div>
        <div class="itemLabels">
          <div class="title">myFive</div>
          <div class="role">wireframing, prototyping, user testing</div>
        </div>
      </a>
		</div>
		<div id="oldPersonApp" class="item mobile">
      <a class="itemLink" href="old-person.php" title="Old Person App">
        <div class="itemOverlay">
          <div><strong>Old Person App</strong>An Android app with a flashlight, magnifying glass, and notebook</div>
        </div>
        <div class="itemImage"></div>
        <div class="itemLabels">
          <div class="title">Old Person App</div>
          <div class="role">design &amp; layout</div>
        </div>
      </a>
		</div>
    <!-- <div id="thirdLayerSoftware" class="item web">
			<a class="itemLink" href="third-layer.php" title="Third Layer Software">
        <div class="itemOverlay">
          <div><strong>Third Layer Software</strong>A responsive website for a mobile app company</div>
        </div>
        <div class="itemImage"></div>
        <div class="itemLabels">
          <div class="title">Third Layer Software</div>
          <div class="role">solo project</div>
        </div>
      </a>
		</div>    -->
    <div id="snake" class="item web">
      <a class="itemLink" href="snake.php" title="Snake">
        <div class="itemOverlay">
          <div><strong>Snake</strong>My version of the classic animated game</div>
        </div>
        <div class="itemImage"></div>
        <div class="itemLabels">
          <div class="title">Snake</div>
          <div class="role">solo project</div>
        </div>
      </a>
    </div>
    <div id="beforeItWasCool" class="item noMargTop web">
      <a class="itemLink" href="biwc.php" title="Before It Was Cool">
        <div class="itemOverlay">
          <div><strong>Before It Was Cool</strong>A Facebook app that measures your hipster cred</div>
        </div>
        <div class="itemImage"></div>
        <div class="itemLabels">
          <div class="title">Before it was cool</div>
          <div class="role">design &amp; front-end dev</div>
        </div>
      </a>
		</div>
    <div class="clear"></div>
	</div>
  <div class="clear"></div>

<?php include $_SERVER["DOCUMENT_ROOT"] . '/includes/footer.php'; ?>
