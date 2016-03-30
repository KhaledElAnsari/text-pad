# Text-Pad
Text-Pad is a tiny solution for string padding with javascript, it was inspired by the left-pad project.

# Examples
To see Text-Pad in action go to [Here](http://khaledelansari.com/textpad/)

# Installation
Like any other javascript file just include it within the script tag
```javascript
<script type="text/javascript" src="text-pad.js"></script>
```

# Usage
Text-Pad got 4 kinds of padding, here's how to use them
```javascript
// textpad will return the value to you so it can be easy to save it in a variable

// leftpad() & rightpad(): these two functions takes 3 parameters
// first parameter is for your wanted text
// second one is for the number of spaces wanted
// third one is determine the type of spacing and there's two options 'html' & 'console'
// here's how to use them
var padleft  = textpad.leftpad('test', 10, 'html');
var padright = textpad.rightpad('تجربة', 10, 'html');

// uppad() & paddown(): these two functions work the same as the two above but with a forth parameter for the html tag
// this parameter will a css property to make sure the new line effect works
// please enter a unique css selector since Text-Pad is using querySelector
var padup    = textpad.uppad('test', 10, 'html', '#test3');
var paddown  = textpad.downpad('test', 10, 'html', '#test4');
```

# License
This project is under the MIT license
