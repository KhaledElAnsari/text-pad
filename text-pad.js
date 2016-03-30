window.textpad = {
  // &nbsp; for html
  // \n for html & console
  // ' ' for console
  leftpad: function(str, value, renderFor){
    return this._pad('left',str, value, renderFor);
  },

  rightpad: function(str, value, renderFor){
    return this._pad('right',str, value, renderFor);
  },

  uppad: function(str, value, renderFor, selector){

    return this._pad('up',str, value, renderFor,selector);
  },

  downpad: function(str, value, renderFor, selector){
    
    return this._pad('down',str, value, renderFor,selector);
  },

  _checkRenderFor : function(r){
    return typeof r !== 'undefined' && r.constructor === String ? r : 'html';
  },

  _checkValue : function(v){
    return typeof v !== 'undefined' && v.constructor === Number ? v : 0;
  },

  _pad: function(dir,str, value, renderFor,selector){
    var selector = typeof selector !== 'undefined' && selector.constructor === String  ? selector : 'empty';

    var text = '';
    if(typeof str !== 'undefined' && str.constructor === String) {
      text = str;
    }
    else {
      throw new Error('String parameter is empty, textpad can\'t work without a string');
    }
    var renderFor = this._checkRenderFor(renderFor);
    var value     = this._checkValue(value);
    if(value === 0){
      console.warn('There will no space added because you didn\'t enter a value for the number of spaces');
    }


    if(dir == 'left' || dir == 'right'){
      dir = dir == 'left';
      if(renderFor == 'html') {
        var space = '&nbsp;';
        for (var i = 0; i < value; i++) {
          dir ? text = (space + text) : text = (text + space);
        }
      }
      else if(renderFor == 'console') {
        var space = ' ';
        for (var i = 0; i < value; i++) {
          dir ? text = (space + text) : text = (text + space);
        }
      }
    }
    if(dir == 'up' || dir == 'down'){
      dir = dir == 'down';
      var space = '\n';
      for (var i = 0; i < value; i++) {
        dir ? text = (text + space) : (space + text);
      }

      if(renderFor == 'html' && selector != 'empty'){
        document.querySelector(selector).style.whiteSpace = 'pre-line';
      }
      else {
        console.warn('You will not see the effect of uppad because you did not enter the selector of the html tag with which will contain the results');
      }
    }

    return text;
  }
}