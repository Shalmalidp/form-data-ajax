import $ from 'jquery';

import inputTemplate from './templates/input-template';
import textareaTemplate from './templates/textarea-template';
import selectTemplate from './templates/select-template';


var url = 'http://json-data.herokuapp.com/forms';
var formArea = $('.formInner');


// Make My Request
// When it succedes, call my Build Form Function
var dataReq = $.getJSON(url);

dataReq.then( function (res) {

  var formArr = res;

  formArr.forEach( function (field) {

    if (field.type === 'textarea') {
      var html = textareaTemplate(field);
    } else if (field.type === 'select') {
      var html = selectTemplate(field);
    } else {
      var html = inputTemplate(field);
    }

    formArea.append(html);

  });


});
