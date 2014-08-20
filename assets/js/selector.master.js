(function($) {
$(document).ready(function() {
// BEGIN CODE
$(".txt-rotate").textrotator({
  animation: "dissolve",
  separator: ",",
  speed: 3500
});
$(".title.txt-res-sm").fitText(1, { minFontSize: '22px', maxFontSize: '45px' });
$(".title.txt-res-md").fitText(1, { minFontSize: '26px', maxFontSize: '55px' });
$(".title.txt-res-lg").fitText(1, { minFontSize: '28px', maxFontSize: '65px' });

$(".tagline.txt-res-sm").fitText(1.4, { minFontSize: '18px', maxFontSize: '32px' });
$(".tagline.txt-res-md").fitText(1.4, { minFontSize: '20px', maxFontSize: '38px' });
$(".tagline.txt-res-lg").fitText(1.4, { minFontSize: '24px', maxFontSize: '42px' });

$(".lead.txt-res-sm").fitText(1.3, { minFontSize: '16px', maxFontSize: '24px' });
$(".lead.txt-res-md").fitText(1.3, { minFontSize: '18px', maxFontSize: '26px' });
$(".lead.txt-res-lg").fitText(1.3, { minFontSize: '20px', maxFontSize: '28px' });

$(".focus.txt-res-sm").fitText(1.4, { minFontSize: '14px', maxFontSize: '18px' });
$(".focus.txt-res-md").fitText(1.4, { minFontSize: '16px', maxFontSize: '20px' });
$(".focus.txt-res-lg").fitText(1.4, { minFontSize: '18px', maxFontSize: '22px' });

$("#none").backstretch([
      "assets/images/bg/professional.jpg",
      "assets/images/bg/responsive.jpg",
      "assets/images/bg/modern.jpg",
      ], {
        fade: 750,
        duration: 4000
    });

$(".scribble").squiggle({
  intensity:50
});

$('.hero-text-write-first').typetype('I help businesses write stunning content, captivating copyedit and authentic brands with professional writing services that are unmatched.')

//END CODE
                    });
})(jQuery);