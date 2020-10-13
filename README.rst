Lightweight presentations out of any web page
=============================================

You want to give a presentation.  But you also want the material to be
available in a plain reading format.  In fact, you want to target the
"looks good when read" rather than the presentation mode.  And you
want the minimum work.

This extension transforms any HTML page into an presentation by hiding
unnecessary elements, increasing space between the sections, and
adding a direct scroll (using left and right arrow keys) between
sections.



Sphinx extension usage
----------------------

Install::

  pip install sphinx-minipres

Add to extensions::

  extensions = [
    'sphinx_ext_minipres',
  ]

In any rendered page:

* Add ``?pres`` to the URL to go into slideshow mode
* Add ``?plain`` to go into "plain" mode - no scrolling, but remove
  unnecessary elements from the page (most useful for sphinx_rtd_theme)
* Add ``&h=3`` (or so on) to the URL to select the highest (or lowest
  actually) heading to use as each section

In the slideshow mode, you can use the left and right arrow keys to
navigate.



Independent usage
-----------------

The sphinx extension simply copies ``minipres.js`` to the build and
includes it - there is not much Sphinx specific here.

On an unrelated website with it hard coded, minipres can be loaded
dynamically from the browser console ``x =
$.getScript('/path/to/minipres.js')`` and then started with
``minipres()``



Development status
------------------

Alpha and works.  However, it needs to be adapted to work for each
theme/page style, which will limit its usefulness.  Currently removes
unneeded elements on ``sphinx_rtd_theme`` but the core scrolling
probably works on others.



See also
--------
Please let me know if you know of other tools such as this.
