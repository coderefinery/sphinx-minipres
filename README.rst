Lightweight presentations out of any web page
=============================================

You want to give a presentation.  But you also want the material to be
available in a plain reading format.  In fact, you want to target the
"looks good when read" rather than the presentation mode.  And you
want the minimum work.

This extension transforms any page into an extension by hiding
unnecessary elements, increasing space between the sections, and
adding a scroll (using left and right arrow keys) between sections.



Usage
-----

Include the javascript file ``minipres.js``, or add this as a sphinx
extension.

* Add ``?slideshow`` to the URL to go into slideshow mode
* Add ``?plain`` to go into "plain" mode - no scrolling, but remove
  unnecessary elements from the page
* Add ``&h=3`` (or so on) to the URL to select the highest (or lowest
  actually) heading to use as each section

In the slideshow mode, you can use the left and right arrow keys to
navigate.


It can be loaded dynamically by
``x = $.getScript('/path/to//minipres.js')`` and
then started with ``minipres()``


Development status
------------------

Alpha and works.  However, it needs to be adapted to work for each
theme/page style, which will limit its usefulness.  Currently it works
on ``sphinx_rtd_theme``.



See also
--------
Please let me know if you know of other tools such as this.
