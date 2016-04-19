// Text Input Template
function input (obj) {
  return `
    <div class="formElement" id="${obj.id}">
      <input type="${obj.type}" placeholder="${obj.label}">
      <i class="fa ${obj.icon}"></i>
    </div>
  `;
}

export default input;
