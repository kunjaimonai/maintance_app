<!-- Your hamburger menu button should look like this -->
<button class="hamburger-menu" onclick="openNav()">
    <i class="fas fa-bars"></i>
</button>

<!-- Add this after the body tag -->
<div id="myNav" class="overlay">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <div class="overlay-content">
        <a href="index.php">Home</a>
        <a href="profile.php">Profile</a>
        <a href="matches.php">Matches</a>
        <a href="settings.php">Settings</a>
        <a href="logout.php">Logout</a>
    </div>
</div>