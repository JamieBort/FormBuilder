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
    "options": [
      {
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
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();

console.log(formData[ 0 ].type);
console.log(formData[ 0 ].id);

console.log(formData[ 1 ]);
console.log(formData[ 1 ].id);

console.log(formData[ 2 ]);
console.log(formData[ 2 ].id);

console.log(formData[ 3 ]);
console.log(formData[ 3 ].label);
console.log(formData[ 3 ].id);

console.log(formData[ 4 ]);
console.log(formData[ 4 ].label);
console.log(formData[ 4 ].id);
console.log(formData[ 4 ].options);
console.log("what is this");
console.log(formData[ 4 ].options[ 0 ]);
console.log("what is this?");
console.log(formData[ 4 ].options[ 0 ].label);
console.log(formData[ 4 ].options[ 1 ].label);
console.log(formData[ 4 ].options[ 4 ].label);

console.log(formData[ 5 ].id);

console.log(formData[ 6 ].id);
console.log(formData[ 6 ].icon);

console.log(formData[ 7 ].id);
console.log(formData[ 7 ].icon);

// -------- Your Code Goes Below this Line --------

// Create all of the needed HTML nodes

let wrapper = document.createElement( "div" );
let form = document.createElement( "form" );
let header = document.createElement( "div" );
let title = document.createElement( "span" );
let fields = document.createElement( "div" );



for (var i = 0; i < formData.length; i++) {
//   let formData[i].id+Div = document.createElement( "div" );
//   let formData[i].id+_i = document.createElement( "i" );
  // let formData[i].id = document.createElement( "input" );
}

// formData[ 0 ].id = user-first-name
let firstNameDiv = document.createElement( "div" );
let firstName_i = document.createElement( "i" );
let firstName = document.createElement( "input" );

// formData[ 1 ].id = user-last-name
let lastNameDiv = document.createElement( "div" );
let lastName_i = document.createElement( "i" );
let lastName = document.createElement( "input" );

// formData[ 2 ].id = email
let emailDiv = document.createElement( "div" );
let email_i = document.createElement( "i" );
let email = document.createElement( "input" );

// formData[ 3 ].id = user-website
let urlDiv = document.createElement( "div" );
let url_i = document.createElement( "i" );
let url = document.createElement( "input" );

// formData[ 4 ].id = user-language
let selectDiv = document.createElement( "div" );
let select_i = document.createElement( "i" );
let select = document.createElement( "select" );

// formData[ 4 ].options[ i ].label
let firstOption = document.createElement( "Option" );
let secondOption = document.createElement( "Option" );
let thirdOption = document.createElement( "Option" );
let forthOption = document.createElement( "Option" );
let fifthOption = document.createElement( "Option" );
let sixthOption = document.createElement( "Option" );

// formData[ 5 ].id = user-comment
let textAreaDiv = document.createElement( "div" );
let textArea_i = document.createElement( "i" );
let textArea = document.createElement( "textarea" );

// formData[ 6 ].id = mobile
let mobileDiv = document.createElement( "div" );
let mobile_i = document.createElement( "i" );
let mobile = document.createElement( "input" );

// formData[ 7 ].id = home
let homeDiv = document.createElement( "div" );
let home_i = document.createElement( "i" );
let home = document.createElement( "input" );

let footer = document.createElement( "div" ); // Nothing to iterate over.
let button = document.createElement( "button" ); // Nothing to iterate over.

// Create all of the text nodes
let spanText = document.createTextNode( "Sign Up For My Web App" ); // Nothing to iterate over.
let buttonText = document.createTextNode( "Submit Form" ); // Nothing to iterate over.
let firstOptionText = document.createTextNode( "Select Language" ); // formData[ 4 ].label
let secondOptionText = document.createTextNode( "English" ); // formData[ 4 ].options[ 0 ].label
let thirdOptionText = document.createTextNode( "French" ); // formData[ 4 ].options[ 1 ].label
let forthOptionText = document.createTextNode( "Spanish" ); // formData[ 4 ].options[ 2 ].label
let fifthOptionText = document.createTextNode( "Chinese" ); // formData[ 4 ].options[ 3 ].label
let sixthOptionText = document.createTextNode( "Japanese" ); // formData[ 4 ].options[ 4 ].label

// Set any needed attribute values for the HTML nodes

// wrapper.setAttribute('class', 'wrapper');
// header.setAttribute('class', 'header');
// title.setAttribute('class', 'title');
// fields.setAttribute('class', 'fields');
// fields.setAttribute('id', 'fields');

firstNameDiv.setAttribute('class', 'div_class'); // Nothing to iterate over.
firstName.setAttribute( 'type', 'text' ); // formData[ 0 ].type
firstName.setAttribute( 'id', 'user-first-name' ); // formData[ 0 ].id
firstName.setAttribute('class', 'input_class'); // Nothing to iterate over.
firstName.setAttribute( 'placeholder', 'First Name' ); // Nothing to iterate over.
firstName_i.setAttribute('class', 'fa fa-user'); // formData[ 0 ].icon
firstName_i.setAttribute('aria-hidden', 'true'); // Nothing to iterate over.

lastNameDiv.setAttribute('class', 'div_class'); // Nothing to iterate over.
lastName.setAttribute( 'type', 'text' ); // formData[ 1 ].type
lastName.setAttribute( 'id', 'user-last-name' ); // formData[ 1 ].id
lastName.setAttribute('class', 'input_class'); // Nothing to iterate over.
lastName.setAttribute( 'placeholder', 'Last Name' ); // Nothing to iterate over.
lastName_i.setAttribute('class', 'fa fa-user'); // formData[ 1 ].icon
lastName_i.setAttribute('aria-hidden', 'true'); // Nothing to iterate over.

emailDiv.setAttribute('class', 'div_class'); // Nothing to iterate over.
email.setAttribute( 'type', 'email' ); // formData[ 2 ].type
email.setAttribute( 'id', 'user-email' ); // formData[ 2 ].id
email.setAttribute('class', 'input_class'); // Nothing to iterate over.
email.setAttribute( 'placeholder', 'Email Address' ); // Nothing to iterate over.
email_i.setAttribute('class', 'fa fa-envelope'); // formData[ 2 ].icon
email_i.setAttribute('aria-hidden', 'true'); // Nothing to iterate over.

urlDiv.setAttribute('class', 'div_class'); // Nothing to iterate over.
url.setAttribute( 'type', 'text' ); // formData[ 3 ].type
url.setAttribute( 'id', 'user-website' ); // formData[ 3 ].id
url.setAttribute('class', 'input_class'); // Nothing to iterate over.
url.setAttribute( 'placeholder', 'Current Website URL' ); // Nothing to iterate over.
url_i.setAttribute('class', 'fa fa-link'); // formData[ 3 ].icon
url_i.setAttribute('aria-hidden', 'true'); // Nothing to iterate over.

selectDiv.setAttribute('class', 'div_class'); // Nothing to iterate over.
select.setAttribute( 'type', 'select' ); // formData[ 4 ].type
select.setAttribute( 'id', 'user-language' ); // formData[ 4 ].id
select.setAttribute('class', 'input_class'); // Nothing to iterate over.
select.setAttribute( 'placeholder', 'Select Language' ); // "label": "Select Language"
select_i.setAttribute('class', 'fa fa-language'); // formData[ 4 ].icon
select_i.setAttribute('aria-hidden', 'true'); // Nothing to iterate over.

firstOption.setAttribute( 'value', 'EN' ); // formData[ 4 ].options[ 0 ].value
secondOption.setAttribute( 'placeholder', 'English' ); // formData[ 4 ].options[ 0 ].label
secondOption.setAttribute( 'value', 'FR' ); // formData[ 4 ].options[ 1 ].value
thirdOption.setAttribute( 'placeholder', 'French' ); // formData[ 4 ].options[ 1 ].label
thirdOption.setAttribute( 'value', 'SP' ); // formData[ 4 ].options[ 2 ].value
forthOption.setAttribute( 'placeholder', 'Spanish' ); // formData[ 4 ].options[ 2 ].label // "label": "Spanish"
fifthOption.setAttribute( 'value', 'CH' ); // formData[ 4 ].options[ 3 ].value
fifthOption.setAttribute( 'placeholder', 'Chinese' ); // formData[ 4 ].options[ 3 ].label
sixthOption.setAttribute( 'value', 'JP' ); // formData[ 4 ].options[ 4 ].value
sixthOption.setAttribute( 'placeholder', 'Japanese' ); // formData[ 4 ].options[ 4 ].label

textAreaDiv.setAttribute('class', 'div_class'); // Nothing to iterate over.
textArea.setAttribute( 'type', 'textarea' ); // formData[ 5 ].type
textArea.setAttribute( 'rows', '8' ); // Nothing to iterate over.
textArea.setAttribute( 'cols', '80' ); // Nothing to iterate over.
textArea.setAttribute( 'id', 'user-comment' ); // formData[ 5 ].id
textArea.setAttribute('class', 'input_class'); // Nothing to iterate over.
textArea.setAttribute( 'placeholder', 'Your Comment' ); // Nothing to iterate over.
textArea_i.setAttribute('class', 'fa fa-pencil'); // formData[ 5 ].icon
textArea_i.setAttribute('aria-hidden', 'true'); // Nothing to iterate over.

mobileDiv.setAttribute('class', 'div_class'); // Nothing to iterate over.
mobile.setAttribute( 'type', 'tel' ); // formData[ 6 ].type
mobile.setAttribute( 'id', 'user-mobile' ); // formData[ 6 ].id
mobile.setAttribute('class', 'input_class'); // Nothing to iterate over.
mobile.setAttribute( 'placeholder', 'Mobile Number' ); // Nothing to iterate over.
mobile_i.setAttribute('class', 'fa fa-mobile-phone'); // formData[ 6 ].icon
mobile_i.setAttribute('aria-hidden', 'true'); // Nothing to iterate over.

homeDiv.setAttribute('class', 'div_class'); // Nothing to iterate over.
home.setAttribute( 'type', 'tel' ); // formData[ 7 ].type
home.setAttribute( 'id', 'user-phone' ); // formData[ 7 ].id
home.setAttribute('class', 'input_class'); // Nothing to iterate over.
home.setAttribute( 'placeholder', 'Home Number' ); // Nothing to iterate over.
home_i.setAttribute('class', 'fa fa-phone'); // formData[ 7 ].icon
home_i.setAttribute('aria-hidden', 'true'); // Nothing to iterate over.

footer.setAttribute('class', 'footer'); // Nothing to iterate over.



// Build the node tree
document.body.appendChild( wrapper );
wrapper.appendChild( form );
form.appendChild( header );
header.appendChild( title );
form.appendChild( fields );

fields.appendChild( firstNameDiv );
fields.appendChild( lastNameDiv );
fields.appendChild( emailDiv );
fields.appendChild( urlDiv );
fields.appendChild( textAreaDiv );
fields.appendChild( mobileDiv );
fields.appendChild( homeDiv );
fields.appendChild( selectDiv );

firstNameDiv.appendChild( firstName_i );
firstNameDiv.appendChild( firstName );

lastNameDiv.appendChild( lastName_i );
lastNameDiv.appendChild( lastName );

emailDiv.appendChild( email_i );
emailDiv.appendChild( email );

urlDiv.appendChild( url_i );
urlDiv.appendChild( url );


selectDiv.appendChild( select_i );
selectDiv.appendChild( select );

select.appendChild( firstOption );
select.appendChild( secondOption );
select.appendChild( thirdOption );
select.appendChild( forthOption );
select.appendChild( fifthOption );
select.appendChild( sixthOption );

textAreaDiv.appendChild( textArea_i );
textAreaDiv.appendChild( textArea );

mobileDiv.appendChild( mobile_i );
mobileDiv.appendChild( mobile );

homeDiv.appendChild( home_i );
homeDiv.appendChild( home );

form.appendChild( footer ); // Nothing to iterate over.
footer.appendChild( button ); // Nothing to iterate over.

// Add all of the text to each element
title.appendChild( spanText );
button.appendChild( buttonText );
firstOption.appendChild( firstOptionText );
secondOption.appendChild( secondOptionText );
thirdOption.appendChild( thirdOptionText );
forthOption.appendChild( forthOptionText );
fifthOption.appendChild( fifthOptionText );
sixthOption.appendChild( sixthOptionText );
