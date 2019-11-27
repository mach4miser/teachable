$(document).ready(function () {
    // DOM variables
    let languageDesktopButton = $('.extra-content__language'),
        hamburguerMenu = $('.menu'),
        languageMobileButton = $('.language'),
        languageSelector = '.extra-content__language-selector';

    languageDesktopButton.on('click', function () {
        $(this).toggleClass('is-open');

        toggleARIA($(this).find(languageSelector), 'aria-expanded');
        toggleARIA($(this).find(languageSelector), 'aria-hidden');
    });
    hamburguerMenu.on("click", function () {
        $(this).parent().parent().toggleClass('is-open');

        toggleARIA($(this).parent().parent(), 'aria-hidden');
    });

    languageMobileButton.on('click', function () {
        $(this).toggleClass('is-open');

        toggleARIA($(this), 'aria-expanded');
    });
});

// Toggle ARIA attributes
function toggleARIA(selector, ARIA) {
    selector.attr(ARIA, function (i, attr) {
        return attr == 'true' ? 'false' : 'true';
    });
}

var rn = Math.floor((Math.random() * 150) + 60);
var rs = Math.floor((Math.random() * 11) + 4);
	var t = new Trianglify({
 x_gradient: Trianglify.colorbrewer.Spectral[rs],
    noiseIntensity: 0,
    cellsize: rn
});
var pattern = t.generate(window.innerWidth, window.innerWidth+200);
document.body.setAttribute('style', 'background-image: '+pattern.dataUrl);
