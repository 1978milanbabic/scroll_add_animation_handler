# Add animations on scroll handler
## Adds css animation class on scroll (intro css based animations)

Example:


HTML:
```html
<div class="someclass1 anim a-classtoadd"></div>
<div class="someclass1 anim a-classtoadd" data-astart="1"></div>
<div class="someclass2 anim a-classtoadd" data-adelay="100"></div>
<div class="someclassX anim a-classtoadd" data-astart="3" data-adelay="300"></div>
```

 - All elements that is going to be animated have "anim" initiation class.
 - Class "a-something" is only data for the class that is going to be added (something)
 - data-astart (default = 0) is the height of that element (in 1/6th of elements height) - adding class is going to happen only when element is that much scrolled into screen (visible - from bottom) 
 - data-adelay is timeout in ms for action to start

Best practice is to assign opacity: 0 to "anim" class in css

```css
.anim {
    opacity: 0;
}
```

Check out some of the cool intro animations in docs folder