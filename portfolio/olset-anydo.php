<?php
	$title='Any.do travel';
	$bodyId='olsetAnydo';
	$bodyClass='portfolioPage';
	include $_SERVER["DOCUMENT_ROOT"] . '/includes/header.php';
?>

<div class="item">
  <div class="portfolioNav">
    <div class="prev"><a href="olset-website.php" title="previous project"></a></div>
    <h2>Any.do travel</h2>
    <div class="next"><a href="olset-biz-cards.php" title="next project"></a></div>
  </div>
  <!-- <a href="https://play.google.com/store/apps/details?id=com.anydo" title="Any.do To-Do List for Android" target="_blank"> -->
    <img src="images/anydo-screenshots.png" />
  <!-- </a> -->
  <div class="content whiteBG topMarg20">
    <h2>Any.do travel</h2>
    <!-- <span class="date">(ongoing)</span> -->
    <!-- <br /> -->
    <!-- <p><strong>Collaborators:</strong> 
      <a href="https://www.olset.com/ux/pages/about" title="OLSET About Us" target="_blank">the OLSET team</a>, 
      <a href="http://www.any.do" title="Any.do website" target="_blank">the Any.do team</a>
    </p> -->
    <div class="projectInfo">
      <div class="date">spring 2014</div>
      <div class="role">design &amp; front-end dev</div>
    </div>
    <br />
    <p>This is a partnership between my current company, OLSET, and popular to-do list app Any.do. We're managing travel booking on their Android app by proactively suggesting hotels to their users.</p>
    <p>Here's how it works: An Any.do user enters a hotel-related task (e.g. "Book a hotel for NY") and a green icon appears next to the task. Clicking on this icon opens up a webview with hotel recommendations, where the user can customize their preferences, search for hotels, and make a reservation right within the app.</p>
    <p>The webview is a white label of <a href="olset-website.php" title="OLSET.com project">the OLSET.com site</a>, customized to appear as though it is part of the Any.do mobile app. One of the biggest changes from the website was to break up the pages into multiple screens, to avoid long scrolling. All the pages are done with AJAX navigation with slide animations for page transitions.</p><br />
    <p>Below is one of my initial wireframes for the Any.do hotel booking webview.</p>
    <div class="right topMarg20">
      <span class="small inlineBlock"><a href="http://www.any.do" title="Any.do website" target="_blank">Learn more</a></span>
      <span class="small indented inlineBlock">
        <a href="https://play.google.com/store/apps/details?id=com.anydo" 
           title="Google Play: Any.do" target="_blank">Download Any.do</a>
      </span>
    </div>
    <div class="clear"></div>
  </div>
  <img class="topMarg20" src="images/anydo-mockups-1.png" style="max-width: 100%;"/>  
  <div class="clear"></div>
</div>

<?php include $_SERVER["DOCUMENT_ROOT"] .  '/includes/footer.php'; ?>