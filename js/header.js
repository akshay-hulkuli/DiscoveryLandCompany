document.querySelector('#nav-bar').innerHTML = `
    <div class="nav-bar">
        <div class="logo">
            <img src="../assets/logo.png" alt="" onclick="window.location='../pages/homepage.html'">
            <div class="logo-name">
                <span class="logo-text1" onclick="window.location='../pages/homepage.html'">Discovery </span>
                <span class="logo-text2" onclick="window.location='../pages/homepage.html'">land company</span> 
            </div>
        </div>
        <nav class="nav">
            <ul class="options">
                <li><a href="#">About DLC</a></li>
                <li><a href="../pages/our_worlds.html">Our Worlds</a></li>
                <li><a href="#">Experiences</a></li>
                <li><a href="../pages/gallery.html">Gallery</a></li>
                <li><a href="#">Press</a></li>
            </ul>
            <img src="../assets/options.png" alt="">
        </nav>
    </div>
`;
