SASS mixins for CSS3 (vendorprefixes / filters)
===============================================

About
-----

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

License
-------

The code is free to use under the terms of the MIT license.

Contributors
------------

[VoQn](https://github.com/VoQn) (enchanged linear-gradient support), [PhilT](https://github.com/PhilT) (border-radius improvements) [justmarkup](https://github.com) (scale, IE10 prefixes, cleanup)
