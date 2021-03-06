<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>myFIVE prototype - <?php echo $title; ?></title>
    <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.1/themes/base/jquery-ui.css" />
    <link rel="stylesheet" href="main.css" />
    <link rel="stylesheet" href="generics.css" />
    <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
    <script src="http://code.jquery.com/ui/1.10.1/jquery-ui.js"></script>
    <script src="http://html5demos.com/h5utils.js"></script>
    <script src="main.js"></script>
    <?php include 'class-lib.php'; ?>
  </head>
  <body id="<?php echo $body_id; ?>">
    <?php

      $dateInTitle = date("dMy");
      $user = new Person("Test","User");
      // $user->set_jobTitle("Your Job Title");
      // $user->set_orgName("Your Company");
      // $user->set_workEmail("you@yourcompany.com");
      // $user->set_linkedIn("yourname/555");
      // $user->set_linkedIn("yourtwitterhandle");

      $claire = new Person("Claire","Smith");
      // $claire->set_jobTitle("Web Designer");
      // $claire->set_orgName("Claire Smith Web Design");
      // $claire->set_workEmail("claire@clairesmithwebdesign.com");
      // $claire->set_linkedIn("clairesmith/555");
      // $claire->set_linkedIn("designerclairesmith");

      $joe = new Person("Joe","Schmo");
      // $joe->set_jobTitle("Certified Public Accountant");
      // $joe->set_orgName("Joe Schmo Accounting");
      // $joe->set_workEmail("joe@joeschmoaccounting.com");
      // $joe->set_linkedIn("joeschmo/555");
      // $joe->set_linkedIn("accountantjoeschmo");

    ?>
    <script type="text/javascript"> // have to put php variables here to pass to js
      var dateInTitle = '<?php echo $dateInTitle; ?>';
      var bodyID = '<?php echo $body_id; ?>';
    </script>
    <!--dialog-->
    <div id="alert" title="Oops!" style="max-height: 100px !important;"></div>
    <!-- PAGE -->
    <div id="grayBar">
      <div class="left">About myFIVE</div>
      <div class="greeting right" style="margin-left:0;"><!-- fill greeting --></div>
      <div class="right" style="margin-right:0;"><img class="profile iconInline" src="images/profile-pic-16.png" /></div>
    </div>
    <div id="main">
      <div id="navBar">
        <div id="elephant" class="tab"><img src="images/maynard-40h.png" /></div>
        <div class="tab">My Gigs</div>
        <div class="tab">Analytics</div>
        <div class="tab">Contacts</div>
        <div class="tab">Thank You Labs</div>
        <div id="track" class="tab">TRACK A NEW GIG >></div>
      </div>
      <div id="content">
        <div id="instructions">
          <h1>New Gig</h1>
          <p class="gray">Fill in the details, then begin tracking. You can always edit the gig info later. Once you publish the gig, you'll have the option to share it with others. Participants you share the gig with can add more information and keep you up to date on the progress. But don't worry &mdash; everything will be private unless you decide to share.</p>
        </div>
