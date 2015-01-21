<?php
	$title='olset.com';
	$body_id='olsetWebsite';
	$body_class='portfolioPage';
	include $_SERVER["DOCUMENT_ROOT"] . '/includes/header.php';
?>

<div class="item">
  <div class="portfolioNav">
    <div class="invisible prev"><a href="olset-anydo.php" title="previous project"></a></div>
    <h2>olset.com</h2>
    <div class="next"><a href="olset-anydo.php" title="next project"></a></div>
  </div>
  <!-- <a href="https://www.olset.com" title="OLSET: Get personalized hotel recommendations in seconds" target="_blank"> -->
    <img src="images/olset/landing-page.png" alt="OLSET landing page screenshot" />
  <!-- </a> -->
  <div class="content whiteBG topMarg20">
    <h2>olset.com</h2>
    <div class="projectInfo">
      <div class="date">spring 2014</div>
      <div class="role">design &amp; front-end dev</div>
    </div>
<!--     <span class="date">(ongoing)</span>
    <br />
    <p><strong>Collaborators:</strong>
      <a href="https://www.olset.com/ux/pages/about" title="OLSET About Us" target="_blank">the OLSET team</a>
    </p> -->
    <!-- <p><strong>My role:</strong> design &amp; front-end development</p> -->
    <!-- <br /> -->
    <p>This is the website for my current company, OLSET. OLSET is a travel company that uses big data to personalized hotel bookings.
      Our patented algorithm analyzes user reviews and can tell what travelers are saying about specific aspects of each hotel. We then come up with a customized match
      rating for each of our users based on what features are important to them.</p>
    <p>Here are some of the design changes I made since joining the OLSET team 10 months ago.</p><br />
    <!-- <p>Changes based on intuition / general usability principles:</p>  -->
    <p>Major changes I made to the site:</p>
    <ul>
      <li><strong>Removing the registration barrier.</strong> When I started at OLSET, users had to sign up before they could do anything on the site.
        I changed this so the user can search for hotels, customize their preferences, and get all the way up to the checkout page before requiring registration.
        This allows users to see the value of the site before asking them to commit to anything.</li>
      <li><strong>Putting preferences on the same page as the hotel search results.</strong> One of OLSET's value propositions is that you only have to build your
        profile once, and after that we'll know what kind of hotels you want and you won't have to spend time tweaking search filters. However, users generally want
        to see the results of a search before refining it. This way they can use an iterative process to narrow down the results, e.g. "I like these results, except
        they're too expensive. I'll lower my price point."</li>
    <!-- </ul><br /> -->
    <!-- <p>Changes based on user testing:</p> -->
    <!-- <ul> -->
      <li><strong>Adding default preferences based on 4 traveler types.</strong> We allow the user to control the weightings of
        their preferences so they can truly find that perfect hotel &mdash; e.g. they can say that WiFi is mandatory, but continental breakfast is a nice-to-have. Although users liked all these controls in
        theory, in practice they found them overwhelming. We added four different traveler profiles that set default preferences based on our hypotheses about those groups. After that, users are free
        to edit preferences in detail, but this gives them somewhere to start. (See initial sketches of this feature below.)</li>
      <li><strong>Showing more than 3 results.</strong> Originally we only showed the top 3 hotel recommendations for a given search by default. Our whole value is that we have such a great recommendation
        algorithm that you shouldn't need to look through a bunch of hotels to find the perfect one. Although we still gave the option for users to view more hotels from their search,
        we found in testing that users' first reaction was to assume that that's all the results we found. Users have such a strong schema for how travel
        booking usually works, that they're extremely thrown off when we deviate from the normal flow found on sites like Expedia and Priceline. We also found that users don't trust us from
        the beginning, and in order to build that trust we need to let them investigate and see for themselves that we really recommended the right hotel.</li>
      <li><strong>Adding a map view.</strong> We all knew that we'd want to add this eventually, but had no idea how important it was until we got requests from almost every user we tested
        to add it. Users love map views! It really helps them orient them, especially if they're unfamiliar with the city they're traveling to.</li>
    </ul>
    <!-- <p>MyFIVE is a brand new referral tracking application that we're working on. It keeps independent business owners on top of the referrals they send and receive. Users can track their gigs, look at analytics, and get custom recommendations for thank you gifts to send to their referral sources. Right now we're in the user testing stage before our first release. I designed and implemented much of the testing process, and I built the working prototypes that we're testing users on.</p>
    <p>Above is a sample of the most recent prototype of myFIVE. Right now we're testing the process the user goes through to record a new job opportunity into the application. Below are some wireframes of the rest of the application.</p> -->
    <span class="right small inlineBlock topMarg20"><a href="https://www.olset.com" title="olset.com">View live site</a></span>
    <div class="clear"></div>
  </div>
  <img class="topMarg20" src="images/olset/hotel-results.png" alt="OLSET hotel results screenshot" />
  <img class="topMarg20" src="images/olset/mobile-screenshots.png" alt="mobile OLSET screenshots" />

  <!-- <div class="topMarg50">Below is a sample of what the site looked like when I joined the team.</div>
  <img class="topMarg20" src="images/olset/old-preferences-page.png" alt="old OLSET screenshot" /> -->
  <div class="clear"></div>
</div>

<?php include $_SERVER["DOCUMENT_ROOT"] .  '/includes/footer.php'; ?>
