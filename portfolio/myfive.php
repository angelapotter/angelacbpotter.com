<?php
	$title='myFIVE';
	$body_id='myfive';
	$body_class='portfolioPage';
	include $_SERVER["DOCUMENT_ROOT"] .  '/includes/header.php';
?>

<div class="item">
  <img src="images/myfive/tic1-newest.png" />

  <div class="content whiteBG topMarg20">
    <h2><?php echo $title ?></h2>
    <div class="projectInfo">
      <div class="date">summer 2013</div>
      <div class="role">wireframing, prototyping, and user testing</div>
    </div>

    <p>MyFIVE is a brand new referral tracking application that I worked on at my last job. It helps freelancers stay on top of the referrals they send and receive. Users can
      track their gigs, look at analytics, and get custom recommendations for thank you gifts to send to their referral sources. Right now we're in the user testing stage
      before our first release. I designed and implemented the user testing process, and I built the working prototypes that we used for user testing.</p>
    <p>Above is a screenshot of the last prototype I built for myFive.
      Below are some wireframes from the rest of the application.</p>
    <span class="right small inlineBlock topMarg20">
      <a href="/myfive-prototypes/prototype2/create-gig.php"
         title="MyFive live prototype" target="_blank">View live prototype</a></span>
    <div class="clear"></div>
  </div>
  <img class="topMarg20" src="images/myfive/g1-newest.png" />
  <img class="topMarg20" src="images/myfive/a1.png" />
  <div class="clear"></div>
</div>

<?php include $_SERVER["DOCUMENT_ROOT"] .  '/includes/footer.php'; ?>
