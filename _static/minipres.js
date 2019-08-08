// Add goTo method to elements
// http://stackoverflow.com/questions/4801655/how-to-go-to-a-specific-element-on-page
(function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top //+ 'px'
        }, 'fast');
        return this; // for chaining...
    }
})(jQuery);

// NO good way to do this!.  Copy a hack from here
// https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getQueryParam(name) {
    if (location.search.indexOf(name+'=') == -1)
	return null;
    var half = location.search.split(name+"=")[1];
    return half !== undefined ? decodeURIComponent(half.split('&')[0]) : null;

}

// Select heading levels
var maxHeading = getQueryParam('h')
if (maxHeading === undefined) maxHeading = 2
var headingLevels = [];
for (h=2 ; h<maxHeading+1 ; h++)
    headingLevels.push("h"+h);
var sectionSelector = headingLevels.join(", ");


function do_scroll(delta) {
    // scroll `delta` sections forward or backwards

    //var sections = $(".title, .section");
    //function section_from_element(section) { return section; }
    var sections = $(sectionSelector);
    console.log(sections);
    function section_from_element(section) { return section.parentNode; }

    var curPos = -10;
    for(i=0; i<sections.length; i++) {
	//if ( window.pageYOffset < sections[i].getBoundingClientRect()["top"] ) {
        //console.log(sections[i], sections[i].getBoundingClientRect()["top"])
	screen_center = window.innerHeight/2;
	element_top = sections[i].getBoundingClientRect()["top"]
	element_bottom = sections[i].getBoundingClientRect()["bottom"]
        if ( element_top < screen_center ) {
            continue;
        }
        //console.info(sections[i], sections[i].getBoundingClientRect()["top"]);
        curPos = i-1;
        //console.info(sections[curPos])
        break;
    }
    console.log("cur=", curPos);

    // We didn't find anything - we would scroll off the bottom.
    if (curPos == -10) {
	curPos = sections.length - 1;
    }

    // Target element we want to scroll to
    var targetPos = curPos + delta;
    console.log("target=", targetPos);

    // If we ask for -1, go directly to the top
    if ( targetPos == -1 ) {
	var targetSection = $("body")
    } else if ( targetPos < 0 || targetPos > (sections.length-1) ) {
    // if we would scroll past bottom, or above top, do nothing
        return;
    } else {
	console.log('xxxxxx');
	var targetSection = sections[targetPos];
	var targetSection = section_from_element(targetSection);
    }
    console.log(targetSection, typeof(targetSection));

    //var top = targetSection.getBoundingClientRect()["y"];
    var top = $(targetSection).offset()["top"];
    if (targetSection.getBoundingClientRect)
	var height = targetSection.getBoundingClientRect()["height"] || 0;
    else
	var height = 0;
    var win_height = window.innerHeight;
    //console.info(top, height, win_height)

    var scroll_to = 0;
    if (height >= win_height) {
        scroll_to = top;
    } else {
        scroll_to = top - (win_height-height)/3.;
    }
    //console.info(top, height, win_height, scroll_to)

    $('html, body').animate({
        scrollTop: scroll_to //+ 'px'
    }, 'fast');

}


function minipres() {
    /* Enable the minipres mode:
       - call the hide() function
       - set up the scrolling listener
     */
    document.addEventListener('keydown', function (event) {
        switch(event.which) {
        case 37: // left
            do_scroll(-1);
            event.preventDefault();
            return false;
    	    break;
        //case 38: // up
        case 39: // right
            do_scroll(+1);
            event.preventDefault();
            return false;
    	    break;
        //case 40: // down
        default:
    	    return; // exit this handler for other keys
        }
    }, true)

    hide()

    // Increase space between sections
    //$("div .section").css('margin-bottom', '50%');
    $(sectionSelector).css('margin-top', '50%');
}

function hide() {
    /* Hide all non-essential elements on the page
     */

    // This is for sphinx_rst_theme and readthedocs
    $(".wy-nav-side").remove();
    $(".wy-nav-content-wrap").css('margin-left', 0);
    $('.rst-versions').remove();  // readthedocs version selector

    // Add other formats here.
}


var slideshow = minipres;

if (window.location.search.indexOf('minipres')  != -1 ||
    window.location.search.indexOf('slideshow') != -1 ) {
    //minipres()
    window.addEventListener("load", minipres);
} else if (window.location.search.indexOf('plain')) {
    window.addEventListener("load", hide);
}
