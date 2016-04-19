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

export default select;
