window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "UA-176844392-3");

// About page
$.getScript("js/modernizr.js", function () {});
$.getScript("js/function.js", function () {});
$.getScript("js/jquery-3.2.1.min.js", function () {});
$.getScript("js/plugins.js", function () {});
$.getScript("js/main.js", function () {});
$.getScript("js/function.js", function () {});

// Faq page
// No need to load again. It's already loaded.
{/* <script src="js/modernizr.js"></script>
<script src="./js/function.js"></script>
<script src="./js/jquery-3.2.1.min.js"></script>
<script src="./js/plugins.js"></script>
<script src="./js/main.js"></script> */}