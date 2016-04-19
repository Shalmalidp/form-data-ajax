import $ from 'jquery';

var url = 'http://json-data.herokuapp.com/forms';
var formArea = $('.formInner');


// Text Input Template
function input (obj) {
  return `
    <div class="formElement" id="${obj.id}">
      <input type="${obj.type}" placeholder="${obj.label}">
      <i class="fa ${obj.icon}"></i>
    </div>
  `;
}

// Textarea Template
function textarea (obj) {
  return `
    <div class="formElement" id="${obj.id}">
      <textarea placeholder="${obj.label}"></textarea>
      <i class="fa ${obj.icon}"></i>
    </div>
  `;
}

// Select Input Template
function select (obj) {

  var options = '';

  obj.options.forEach( function (option) {
    options += `<option value="${option.value}">${option.label}</option>`;
  });

  return  `
    <div class="formElement" id="${obj.id}">
      <select>
        <option>${obj.label}</option>
        ${options}
      </select>
    </div>
  `;
}


// Make My Request
// When it succedes, call my Build Form Function
var dataReq = $.getJSON(url);

dataReq.then( function (res) {

  var formArr = res;

  formArr.forEach( function (field) {

    if (field.type === 'textarea') {
      var html = textarea(field);
    } else if (field.type === 'select') {
      var html = select(field);
    } else {
      var html = input(field);
    }

    formArea.append(html);

  });


});
