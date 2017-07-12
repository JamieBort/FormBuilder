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



//
// let input1 = document.createElement( "input" );
// document.appendChild(input1);
//
// input1.setAttribute("id", "text");

// -------- Your Code Goes Below this Line --------
let fields = document.getElementById("fields");

// <input type="text" id="user-first-name" placeholder="First Name">

for (var i = 0; i < formData.length; i++) {
  if (formData[i].type === "text") {

    let input = document.createElement("input");

    console.log(input);

    fields.appendChild(input);

    input.setAttribute("placeholder", "text");

  }

  else if (formData[i].type === "email") {
    input[i] = document.createElement("input");
    fields.appendChild(input[i]);
    input[i].setAttribute("type", "email");
  }

  else if (formData[i].type === "select") {
    input[i] = document.createElement("input");
    fields.appendChild(input[i]);
    input[i].setAttribute("type", "select");
  }

  else if (formData[i].type === "textarea") {
    input[i] = document.createElement("input");
    fields.appendChild(input[i]);
    input[i].setAttribute("type", "textarea");
  }

  else if (formData[i].type === "tel") {
    input[i] = document.createElement("input");
    fields.appendChild(input[i]);
    input[i].setAttribute("type", "tel");

  }
document.querySelector('input').setAttribute("placeholder", formData[i].label);

  document.querySelector('input').setAttribute("id", "user-first-name");
}

// let input2 = document.createElement( "input" );
// fields.appendChild(input2);
//
// let input3 = document.createElement( "input" );
// fields.appendChild(input3)

// let input1 = document.createElement("input");
// fields.appendChild(input1);
//
// input1.setAttribute("type", "select");
// input1.setAttribute("placeholder", "First Name");
// input1.setAttribute("id", "user-first-name");

for (var i = 0; i < formData.length; i++) {
  {generate the html tag};
  input[i] = document.createElement("input");
  {create first attribute};
  {create second attribute};
  {create third attribute};
}
