function addField() {
  const fieldType = document.getElementById("fieldType").value;
  const fieldLabel = document.getElementById("fieldLabel").value.trim();
  const preview = document.getElementById("formPreview").value;

  if (fieldLabel === "") {
    alert(`Please enter a field label`);
    return;
  }

  const fieldContainer = document.createElement("div");
  fieldContainer.className = "space-y-1";

  const label = document.createElement("label");
  label.innerText = fieldLabel;
  label.className = `block font-medium`;

  let input;
  if (fieldType === "text") {
    input = document.createElement("input");
    input.type = "text";
    input.className = `border border-gray-300 rounded px-3 py-2 w-full`;
  } else if (fieldType === "checkbox") {
    input = document.createElement("input");
    input.type = "checkbox";
    input.className = "mr-2";
  } else if (fieldType === "radio") {
    input = document.createElement("input");
    input.type = "radio";
    input.name = "radioGroup"; // all radio buttons bellong to same group
    input.className = "mr-2";
  }

  fieldContainer.appendChild(label);
  fieldContainer.appendChild(input);

  if (fieldType != "text") {
    const span = document.createElement("span");
    span.innerText = ` ${fieldLabel}`;
    fieldContainer.appendChild(span);
  }

  preview.appendChild(fieldContainer);

  // reset label input
  document.getElementById("fieldLabel").value = "";
}
