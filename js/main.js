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

// Create all of the needed HTML nodes

let wrapper = document.createElement("div");
let form = document.createElement("form");
let header = document.createElement("div");
let title = document.createElement("span");
let fields = document.createElement("div");



for (var i = 0; i < formData.length; i++) {
  //   let formData[i].id+Div = document.createElement( "div" );
  //   let formData[i].id+_i = document.createElement( "i" );
  // let formData[i].id = document.createElement( "input" );
}

// formData[ 0 ].id = user-first-name
let firstNameDiv = document.createElement("div");
let firstName_i = document.createElement("i");
let firstName = document.createElement("input");

// formData[ 1 ].id = user-last-name
let lastNameDiv = document.createElement("div");
let lastName_i = document.createElement("i");
let lastName = document.createElement("input");

// formData[ 2 ].id = email
let emailDiv = document.createElement("div");
let email_i = document.createElement("i");
let email = document.createElement("input");

// formData[ 3 ].id = user-website
let urlDiv = document.createElement("div");
let url_i = document.createElement("i");
let url = document.createElement("input");

// formData[ 4 ].id = user-language
let selectDiv = document.createElement("div");
let select_i = document.createElement("i");
let select = document.createElement("select");

// formData[ 4 ].options[ i ].label
let firstOption = document.createElement("Option");
let secondOption = document.createElement("Option");
let thirdOption = document.createElement("Option");
let forthOption = document.createElement("Option");
let fifthOption = document.createElement("Option");
let sixthOption = document.createElement("Option");

// formData[ 5 ].id = user-comment
let textAreaDiv = document.createElement("div");
let textArea_i = document.createElement("i");
let textArea = document.createElement("textarea");

// formData[ 6 ].id = mobile
let mobileDiv = document.createElement("div");
let mobile_i = document.createElement("i");
let mobile = document.createElement("input");

// formData[ 7 ].id = home
let homeDiv = document.createElement("div");
let home_i = document.createElement("i");
let home = document.createElement("input");

let footer = document.createElement("div"); // Nothing to iterate over.
let button = document.createElement("button"); // Nothing to iterate over.

// Create all of the text nodes
let spanText = document.createTextNode("Sign Up For My Web App"); // Nothing to iterate over.
let buttonText = document.createTextNode("Submit Form"); // Nothing to iterate over.

// Set any needed attribute values for the HTML nodes

wrapper.setAttribute('class', 'wrapper');
header.setAttribute('class', 'header');
title.setAttribute('class', 'title');
fields.setAttribute('class', 'fields');
fields.setAttribute('id', 'fields');
textArea.setAttribute('rows', '8'); // Nothing to iterate over.
textArea.setAttribute('cols', '80'); // Nothing to iterate over.
footer.setAttribute('class', 'footer'); // Nothing to iterate over.

// div_class iteration
firstNameDiv.setAttribute('class', 'div_class'); // Nothing to iterate over.
lastNameDiv.setAttribute('class', 'div_class'); // Nothing to iterate over.
emailDiv.setAttribute('class', 'div_class'); // Nothing to iterate over.
urlDiv.setAttribute('class', 'div_class'); // Nothing to iterate over.
selectDiv.setAttribute('class', 'div_class'); // Nothing to iterate over.
textAreaDiv.setAttribute('class', 'div_class'); // Nothing to iterate over.
mobileDiv.setAttribute('class', 'div_class'); // Nothing to iterate over.
homeDiv.setAttribute('class', 'div_class'); // Nothing to iterate over.

// type iteration
firstName.setAttribute('type', 'text'); // formData[ 0 ].type
lastName.setAttribute('type', 'text'); // formData[ 1 ].type
email.setAttribute('type', 'email'); // formData[ 2 ].type
url.setAttribute('type', 'text'); // formData[ 3 ].type
select.setAttribute('type', 'select'); // formData[ 4 ].type
textArea.setAttribute('type', 'textarea'); // formData[ 5 ].type
mobile.setAttribute('type', 'tel'); // formData[ 6 ].type
home.setAttribute('type', 'tel'); // formData[ 7 ].type

// id iteration
firstName.setAttribute('id', 'user-first-name'); // formData[ 0 ].id
lastName.setAttribute('id', 'user-last-name'); // formData[ 1 ].id
email.setAttribute('id', 'user-email'); // formData[ 2 ].id
url.setAttribute('id', 'user-website'); // formData[ 3 ].id
select.setAttribute('id', 'user-language'); // formData[ 4 ].id
textArea.setAttribute('id', 'user-comment'); // formData[ 5 ].id
mobile.setAttribute('id', 'user-mobile'); // formData[ 6 ].id
home.setAttribute('id', 'user-phone'); // formData[ 7 ].id

// input_class iteration
firstName.setAttribute('class', 'input_class'); // Nothing to iterate over.
lastName.setAttribute('class', 'input_class'); // Nothing to iterate over.
email.setAttribute('class', 'input_class'); // Nothing to iterate over.
url.setAttribute('class', 'input_class'); // Nothing to iterate over.
select.setAttribute('class', 'input_class'); // Nothing to iterate over.
textArea.setAttribute('class', 'input_class'); // Nothing to iterate over.
mobile.setAttribute('class', 'input_class'); // Nothing to iterate over.
home.setAttribute('class', 'input_class'); // Nothing to iterate over.

console.log(formData.length);
for (var i = 0; i < formData.length; i++) {
  if (formData[i].label === "First Name" ) {
    console.log("First Name");
    firstName_i.setAttribute('class', 'formData[ 0 ].icon'); // formData[ 0 ].icon
  } else if (formData[i].label === "Last Name" ) {
    console.log("Last Name");
  } else if (formData[i].label === "Email Address" ) {
    console.log("Email Address");
  } else if (formData[i].label === "Current Website URL" ) {
    console.log("Current Website URL");
  } else if (formData[i].label === "Select Language" ) {
    console.log("Select Language" );
  }  else if (formData[i].label === "Your Comment" ) {
    console.log("Your Comment" );
  } else if (formData[i].label === "Mobile Number" ) {
    console.log("Mobile Number" );
  } else {
    console.log("Home Number" );
  }
}


// .icon iteration
// firstName_i.setAttribute('class', 'fa fa-user'); // formData[ 0 ].icon
// lastName_i.setAttribute('class', 'fa fa-user'); // formData[ 1 ].icon
// email_i.setAttribute('class', 'fa fa-envelope'); // formData[ 2 ].icon
// url_i.setAttribute('class', 'fa fa-link'); // formData[ 3 ].icon
// select_i.setAttribute('class', 'fa fa-language'); // formData[ 4 ].icon
// textArea_i.setAttribute('class', 'fa fa-pencil'); // formData[ 5 ].icon
// mobile_i.setAttribute('class', 'fa fa-mobile-phone'); // formData[ 6 ].icon
// home_i.setAttribute('class', 'fa fa-phone'); // formData[ 7 ].icon

// .value iteration
firstOption.setAttribute('value', 'EN'); // formData[ 4 ].options[ 0 ].value
secondOption.setAttribute('value', 'FR'); // formData[ 4 ].options[ 1 ].value
thirdOption.setAttribute('value', 'SP'); // formData[ 4 ].options[ 2 ].value
fifthOption.setAttribute('value', 'CH'); // formData[ 4 ].options[ 3 ].value
sixthOption.setAttribute('value', 'JP'); // formData[ 4 ].options[ 4 ].value

// .label iteration
secondOption.setAttribute('placeholder', 'English'); // formData[ 4 ].options[ 0 ].label
thirdOption.setAttribute('placeholder', 'French'); // formData[ 4 ].options[ 1 ].label
forthOption.setAttribute('placeholder', 'Spanish'); // formData[ 4 ].options[ 2 ].label // "label": "Spanish"
fifthOption.setAttribute('placeholder', 'Chinese'); // formData[ 4 ].options[ 3 ].label
sixthOption.setAttribute('placeholder', 'Japanese'); // formData[ 4 ].options[ 4 ].label

let firstOptionText = document.createTextNode("Select Language"); // formData[ 4 ].label
let secondOptionText = document.createTextNode("English"); // formData[ 4 ].options[ 0 ].label
let thirdOptionText = document.createTextNode("French"); // formData[ 4 ].options[ 1 ].label
let forthOptionText = document.createTextNode("Spanish"); // formData[ 4 ].options[ 2 ].label
let fifthOptionText = document.createTextNode("Chinese"); // formData[ 4 ].options[ 3 ].label
let sixthOptionText = document.createTextNode("Japanese"); // formData[ 4 ].options[ 4 ].label


firstName.setAttribute('placeholder', 'First Name'); // Nothing to iterate over.
lastName.setAttribute('placeholder', 'Last Name'); // Nothing to iterate over.
email.setAttribute('placeholder', 'Email Address'); // Nothing to iterate over.
url.setAttribute('placeholder', 'Current Website URL'); // Nothing to iterate over.
select.setAttribute('placeholder', 'Select Language'); // "label": "Select Language"
textArea.setAttribute('placeholder', 'Your Comment'); // Nothing to iterate over.
mobile.setAttribute('placeholder', 'Mobile Number'); // Nothing to iterate over.
home.setAttribute('placeholder', 'Home Number'); // Nothing to iterate over.

firstName_i.setAttribute('aria-hidden', 'true'); // Nothing to iterate over.
lastName_i.setAttribute('aria-hidden', 'true'); // Nothing to iterate over.
email_i.setAttribute('aria-hidden', 'true'); // Nothing to iterate over.
url_i.setAttribute('aria-hidden', 'true'); // Nothing to iterate over.
select_i.setAttribute('aria-hidden', 'true'); // Nothing to iterate over.
textArea_i.setAttribute('aria-hidden', 'true'); // Nothing to iterate over.
mobile_i.setAttribute('aria-hidden', 'true'); // Nothing to iterate over.
home_i.setAttribute('aria-hidden', 'true'); // Nothing to iterate over.


// Build the node tree
document.body.appendChild(wrapper);
wrapper.appendChild(form);
form.appendChild(header);
header.appendChild(title);
form.appendChild(fields);

fields.appendChild(firstNameDiv);
fields.appendChild(lastNameDiv);
fields.appendChild(emailDiv);
fields.appendChild(urlDiv);
fields.appendChild(selectDiv);
fields.appendChild(textAreaDiv);
fields.appendChild(mobileDiv);
fields.appendChild(homeDiv);


firstNameDiv.appendChild(firstName_i);
firstNameDiv.appendChild(firstName);

lastNameDiv.appendChild(lastName_i);
lastNameDiv.appendChild(lastName);

emailDiv.appendChild(email_i);
emailDiv.appendChild(email);

urlDiv.appendChild(url_i);
urlDiv.appendChild(url);


selectDiv.appendChild(select_i);
selectDiv.appendChild(select);

select.appendChild(firstOption);
select.appendChild(secondOption);
select.appendChild(thirdOption);
select.appendChild(forthOption);
select.appendChild(fifthOption);
select.appendChild(sixthOption);

textAreaDiv.appendChild(textArea_i);
textAreaDiv.appendChild(textArea);

mobileDiv.appendChild(mobile_i);
mobileDiv.appendChild(mobile);

homeDiv.appendChild(home_i);
homeDiv.appendChild(home);

form.appendChild(footer); // Nothing to iterate over.
footer.appendChild(button); // Nothing to iterate over.

// Add all of the text to each element
title.appendChild(spanText);
button.appendChild(buttonText);
firstOption.appendChild(firstOptionText);
secondOption.appendChild(secondOptionText);
thirdOption.appendChild(thirdOptionText);
forthOption.appendChild(forthOptionText);
fifthOption.appendChild(fifthOptionText);
sixthOption.appendChild(sixthOptionText);
