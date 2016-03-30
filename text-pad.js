var textpad = {
  // &nbsp; for html
  // \n for html & console
  // ' ' for console
  leftpad: function(str, value, renderfor){
    var text = '';
    if(typeof str !== 'undefined' && str.constructor === String) {
      text = str;
    }
    else {
      throw new Error('String parameter is empty, textpad can\'t work without a string');
    }
    var renderfor = typeof renderfor !== 'undefined' && renderfor.constructor === String  ? renderfor : 'html';
    var value     = typeof value     !== 'undefined' && value.constructor     === Number  ? value     : 0;
    if(value === 0){
      console.warn('There will no space added because you didn\'t enter a value for the number of spaces');
    }

    if(renderfor == 'html') {
      var space = '&nbsp;';
      for (var i = 0; i < value; i++) {
        text = space + text;
      }
    }
    else if(renderfor == 'console') {
      var space = ' ';
      for (var i = 0; i < value; i++) {
        text = space + text;
      }
    }

    return text;
  },

  rightpad: function(str, value, renderfor){
    var text = '';
    if(typeof str !== 'undefined' && str.constructor === String) {
      text = str;
    }
    else {
      throw new Error('String parameter is empty, textpad can\'t work without a string');
    }
    var renderfor = typeof renderfor !== 'undefined' && renderfor.constructor === String  ? renderfor : 'html';
    var value     = typeof value     !== 'undefined' && value.constructor     === Number  ? value     : 0;
    if(value === 0){
      console.warn('There will no space added because you didn\'t enter a value for the number of spaces');
    }

    if(renderfor == 'html') {
      var space = '&nbsp;';
      for (var i = 0; i < value; i++) {
        text = text + space;
      }
    }
    else if(renderfor == 'console') {
      var space = ' ';
      for (var i = 0; i < value; i++) {
        text = text + space;
      }
    }

    return text;
  },

  uppad: function(str, value, renderfor, selector){
    var text = '';
    if(typeof str !== 'undefined' && str.constructor === String) {
      text = str;
    }
    else {
      throw new Error('String parameter is empty, textpad can\'t work without a string');
    }
    var renderfor = typeof renderfor !== 'undefined' && renderfor.constructor === String  ? renderfor : 'html';
    var value     = typeof value     !== 'undefined' && value.constructor     === Number  ? value     : 0;
    if(value === 0){
      console.warn('There will no space added because you didn\'t enter a value for the number of spaces');
    }
    var selector = typeof selector !== 'undefined' && selector.constructor === String  ? selector : 'empty';

    var space = '\n';
    for (var i = 0; i < value; i++) {
      text = space + text;
    }

    if(renderfor == 'html' && selector != 'empty'){
      document.querySelector(selector).style.whiteSpace = 'pre-line';
    }
    else {
      console.warn('You will not see the effect of uppad because you did not enter the selector of the html tag with which will contain the results');
    }

    return text;
  },

  downpad: function(str, value, renderfor, selector){
    var text = '';
    if(typeof str !== 'undefined' && str.constructor === String) {
      text = str;
    }
    else {
      throw new Error('String parameter is empty, textpad can\'t work without a string');
    }
    var renderfor = typeof renderfor !== 'undefined' && renderfor.constructor === String  ? renderfor : 'html';
    var value     = typeof value     !== 'undefined' && value.constructor     === Number  ? value     : 0;
    if(value === 0){
      console.warn('There will no space added because you didn\'t enter a value for the number of spaces');
    }
    var selector = typeof selector !== 'undefined' && selector.constructor === String  ? selector : 'empty';

    var space = '\n';
    for (var i = 0; i < value; i++) {
      text = text + space;
    }

    if(renderfor == 'html' && selector != 'empty'){
      document.querySelector(selector).style.whiteSpace = 'pre-line';
    }
    else {
      console.warn('You will not see the effect of uppad because you did not enter the selector of the html tag with which will contain the results');
    }

    return text;
  }
}
