SASS mixins for CSS3 (vendorprefixes / filters)
===============================================

Changelog
---------

**Current version in development**: None, just maintenance and QA
* **0.1.0** (May 20, 2011)
   * Nothing more has been done so it is time to release this.
   * Thanks to [VoQn](https://github.com/VoQn), the linear-gradient syntax for Opera 11 and Chrome 11 is added to the library. Awesome!
   
* **0.1.0-alpha3** (January 28, 2011)
   * Last alpha! 
   * Basic QA in all mixins.
   * syntax change in transitions (must handle commas in properties).
   * hexdec will be available in sass 3.1, until then the rgba mixin will not be accurate in opacity in IE.
   * Rotate is not possible in IE since COS is required to do the degree math. COS is implemented in Compass and may come to sass one day, but that is not sure.
* **0.1.0-alpha2** (November 26, 2010) 
   * Complete rewrite, now collected in two files easy to use together with @import.
   * simplification of border-radius.
   * added: box-shadow, font-face, linear-gradient (vertical), rgba, rotate and transition. 
 * **0.1.0-alpha1** (April 21, 2010) 
   * First commit, border-radius only.

About
------

Similar to [CSS3 Please!](http://css3please.com), this repo will try to make it easier to use css3
in our daily projects. CSS3 Please works fine if you are using vanilla CSS, but for those of us
who are using SASS (or SCSS) it is not enough. With the power of mixins and variables in our hands,
it would be silly to dishonor our addiction to the DRY principle. 

This util is for minimalistics only. A way more feature-rich and qualified way of dealing with CSS3 is to use [Compass](http://compasstyle.org).

Usage & examples
----------------

Clone the git repo in your SASS/SCSS project. Use @import to make it available in your files.

    git clone http://git@github.com:madr/css3-sass-mixins.git
    
    // scss:
    @import 'css3-sass-mixins/all';

Below you see all available mixins in action. 

    // scss:
    #foo {
      @include border-radius(2px 2px 0);
      @include box-shadow(2px, 2px, 4px, #000);
      @include linear-gradient(#333, #555);
      @include rgba(#000, .6);
      @include rotate(-7);
      @include transition(all 0.3s ease-out);
    }
    
    // sass (old style):
    #foo
      +border-radius(2px 2px 0)
      +box-shadow(2px, 2px, 4px, #000)
      +linear-gradient(#333, #555)
      +rgba(#000, .6)
      +rotate(-7)
      +transition(all 0.3s ease-out)

IE Filters are optional
-----------------------

Where possible, the mixins contains a filter for making IE behave. However, it is not couraged
to use Filters due to performance issues. The mixins are therefore configured to skip filters by default. This is done by the `$useIEFilters` variable in the top section of the files.

To use or skip using IE-filters without affecting the global configuration, passing an extra argument to your mixin with the value 0 or 1 will override `$useIEFilters`.

    // use linear gradient in IE too!
    @include linear-gradient(#333, #555, 0);
    +linear-gradient(#333, #555, 0)

Contributors
------------

[VoQn](https://github.com/VoQn) (enchanged linear-gradient support), [PhilT](https://github.com/PhilT) (border-radius improvements)