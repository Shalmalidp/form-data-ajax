// Textarea Template
function textarea (obj) {
  return `
    <div class="formElement" id="${obj.id}">
      <textarea placeholder="${obj.label}"></textarea>
      <i class="fa ${obj.icon}"></i>
    </div>
  `;
}

export default textarea;
