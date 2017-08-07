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

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
(function() {
  // Select the first element from the array
  let first = formData[0];
  // Log the first object
  console.log(first);
  // Log the string "First Name"
  console.log(first.label);
})();


// -------- Your Code Goes Below this Line --------

for (var i = 0; i < formData.length; i++) {
  let labelVariable =

    // create html element input tag for each key label
    document.createElement('input');
    console.log(labelVariable);

  console.log("This is the label variable: " + labelVariable);

  // apend labelVariable=input to div named 'fields'
  fields.appendChild(labelVariable);

  // add attributes to each input based on value of label
  let x = formData[i].label;
  console.log(x);

  let y = formData[i].type;
  console.log(y);

  let z = formData[i].id;
  console.log(z);


  labelVariable.setAttribute('placeholder', x);
  labelVariable.setAttribute('type', y);
  labelVariable.setAttribute('id', z);

  // console.log(formData[4].options);
  // console.log(formData[4].options[1].label);
  // console.log(formData[4].options[1].value);

  if (formData[i].type === "select") {

    console.log("the length of the origin array is " + formData[i].options.length);

    for (var n = 0; n < formData[i].options.length; n++) {

      // console.log(formData[i].options[n].label);
      // console.log(formData[i].options[n].value);
      // console.log("what is this? " + formData[i]);

      // console.log(formData[i].options[1].label);
      // console.log(formData[i].options[2].label);
      // console.log(formData[i].options[3].label);
      // console.log(formData[i].options[4].label);

      let w = formData[i].options[n];
      console.log(w);
      labelVariable.setAttribute('options', w);

      let section = document.createElement('section');

      labelVariable.appendChild(section);

      let option = document.createElement('option');

      section.appendChild(option);

      let t = formData[4]['options'][n]['label'];
      console.log(t);

      let s = formData[4]['options'][n]['value'];
      console.log(s);

      option.setAttribute('label', t);
      option.setAttribute('value', s);

      

      // options.setAttribute('label', formData[i]['options[n]']['label']);
      // options.setAttribute('label', s);
    }
  }
}
