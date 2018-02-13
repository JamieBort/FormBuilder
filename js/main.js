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



// -------- Your Code Goes Below this Line --------

let form = document.querySelector(".fields");

for (let i = 0; i < formData.length; i++) {
  if (formData[i].type === 'text') {

    // The first name field
    let textarea_tag3 = document.createElement('textarea');
    textarea_tag3.placeholder = formData[i].label;
    textarea_tag3.id = formData[i].id;
    textarea_tag3.type = formData[i].type;
    form.appendChild(textarea_tag3);
}
    // The last name field

    // The email address field

    // The current website field

    // The current website field

    // The TextArea field
    else if (formData[i].type === 'textarea') {

   }    let textarea_tag = document.createElement('textarea');
    textarea_tag.placeholder = formData[i].label;
    textarea_tag.id = formData[i].id;
    textarea_tag.type = formData[i].type;
    form.appendChild(textarea_tag);

    // The mobile number field

    // The home number field

  }
}
