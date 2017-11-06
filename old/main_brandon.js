// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [{
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];



for (let i = 0; i < formData.length; i++){
  if(formData[i].type === 'textarea'){
    // textarea things
    let comment_label = document.createElement('label');
    let comment_input = document.createElement('textarea');
    comment_label.innerHTML = formData[i].label;
    form.appendChild(comment_label);
    form.appendChild(comment_input);

  } else if(formData[i].type === 'select'){
    // select things
    let select_label = document.createElement('label');
    let select_input = document.createElement('select');
    select_label.innerHTML = formData[i].label;
    form.appendChild(select_label);
    form.appendChild(select_input);

  } else {

    let label = document.createElement('label');
    let input = document.createElement('input');
    label.innerHTML = formData[i].label;
    form.appendChild(label);
    form.appendChild(input);
  }
};
