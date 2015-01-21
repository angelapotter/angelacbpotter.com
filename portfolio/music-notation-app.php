<?php
  $title='Music notation app mockup';
  $body_id='musicNotation';
  $body_class='portfolioPage';
  include $_SERVER["DOCUMENT_ROOT"] . '/includes/header.php';
?>

<div class="item">
  <img src="images/music-app-mockups.png" alt="<?php echo $title ?>" />

  <div class="content whiteBG topMarg20">
    <h2><?php echo $title ?></h2>
    <div class="projectInfo">
      <div class="date">winter 2014</div>
      <div class="role">design</div>
    </div>

    <p>This is a quick mockup I did for a music notation app for Android. There are several music notation mobile apps out
      there, but none with great design or usability. I majored in music in college, so this is an area of interest for me.</p>
    <p>I wanted to design it in a way that makes it really easy to
      jot down short musical ideas and phrases, while maintaining playback functionality within the app. Above is the main screen of the app,
      showing the keyboard for inputting and editing individual notes. The user has two other keyboards to use as well, one for editing
      phrases and one for playback.</p>
      <p>Below is my initial wireframe for the app.</p>
    <div class="clear"></div>
  </div>
  <img class="topMarg20" src="images/music-app-wireframe.png" alt="Music notation app wireframe" />
  <div class="clear"></div>
</div>

<?php include $_SERVER["DOCUMENT_ROOT"] .  '/includes/footer.php'; ?>
