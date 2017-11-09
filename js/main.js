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


// -------- Your Code Goes Below this Line --------

// Create all of the needed HTML nodes

let wrapper = document.createElement( "div" );
let form = document.createElement( "form" );
let header = document.createElement( "div" );
let title = document.createElement( "span" );
let fields = document.createElement( "div" );
let firstname = document.createElement( "input" );
let lastname = document.createElement( "input" );
let email = document.createElement( "input" );
let url = document.createElement( "input" );
let select = document.createElement( "select" );
let firstOption = document.createElement( "Option" );
let secondOption = document.createElement( "Option" );
let thirdOption = document.createElement( "Option" );
let forthOption = document.createElement( "Option" );
let fifthOption = document.createElement( "Option" );
let sixthOption = document.createElement( "Option" );
let textArea = document.createElement( "textarea" );
let mobile = document.createElement( "input" );
let home = document.createElement( "input" );
let footer = document.createElement( "div" );
let button = document.createElement( "button" );

// Create all of the text nodes
let spanText = document.createTextNode( "Sign Up For My Web App" );
let buttonText = document.createTextNode( "Submit Form" );
let firstOptionText = document.createTextNode( "Select Language" );
let secondOptionText = document.createTextNode( "English" );
let thirdOptionText = document.createTextNode( "French" );
let forthOptionText = document.createTextNode( "Spanish" );
let fifthOptionText = document.createTextNode( "Chinese" );
let sixthOptionText = document.createTextNode( "Japanese" );

// Set any needed attribute values for the HTML nodes
wrapper.setAttribute('class', 'wrapper');
header.setAttribute('class', 'header');
title.setAttribute('class', 'title');
fields.setAttribute('class', 'fields');
fields.setAttribute('id', 'fields');
firstname.setAttribute( 'type', 'text' );
firstname.setAttribute( 'id', 'user-first-name' );
firstname.setAttribute( 'placeholder', 'First Name' );
lastname.setAttribute( 'type', 'text' );
lastname.setAttribute( 'id', 'user-last-name' );
lastname.setAttribute( 'placeholder', 'Last Name' );
email.setAttribute( 'type', 'email' );
email.setAttribute( 'id', 'user-email' );
email.setAttribute( 'placeholder', 'Email Address' );
url.setAttribute( 'type', 'text' );
url.setAttribute( 'id', 'user-website' );
url.setAttribute( 'placeholder', 'Current Website URL' );
select.setAttribute( 'type', 'select' );
select.setAttribute( 'id', 'user-language' );
select.setAttribute( 'placeholder', 'Select Language' );
firstOption.setAttribute( 'value', 'EN' );
secondOption.setAttribute( 'placeholder', 'English' );
secondOption.setAttribute( 'value', 'FR' );
thirdOption.setAttribute( 'placeholder', 'French' );
thirdOption.setAttribute( 'value', 'SP' );
forthOption.setAttribute( 'placeholder', 'Spanish' );
fifthOption.setAttribute( 'value', 'CH' );
fifthOption.setAttribute( 'placeholder', 'Chinese' );
sixthOption.setAttribute( 'value', 'JP' );
sixthOption.setAttribute( 'placeholder', 'Japanese' );
textArea.setAttribute( 'type', 'textarea' );
textArea.setAttribute( 'rows', '8' );
textArea.setAttribute( 'cols', '80' );
textArea.setAttribute( 'id', 'user-comment' );
textArea.setAttribute( 'placeholder', 'Your Comment' );
mobile.setAttribute( 'type', 'tel' );
mobile.setAttribute( 'id', 'user-mobile' );
mobile.setAttribute( 'placeholder', 'Mobile Number' );
home.setAttribute( 'type', 'tel' );
home.setAttribute( 'id', 'user-phone' );
home.setAttribute( 'placeholder', 'Home Number' );
footer.setAttribute('class', 'footer');

// Build the node tree
document.body.appendChild( wrapper );
wrapper.appendChild( form );
form.appendChild( header );
header.appendChild( title );
form.appendChild( fields );
fields.appendChild( firstname );
fields.appendChild( lastname );
fields.appendChild( email );
fields.appendChild( url );
fields.appendChild( select );
select.appendChild( firstOption );
select.appendChild( secondOption );
select.appendChild( thirdOption );
select.appendChild( forthOption );
select.appendChild( fifthOption );
select.appendChild( sixthOption );
fields.appendChild( textArea );
fields.appendChild( mobile );
fields.appendChild( home );
form.appendChild( footer );
footer.appendChild( button );

// Add all of the text to each element
title.appendChild( spanText );
button.appendChild( buttonText );
firstOption.appendChild( firstOptionText );
secondOption.appendChild( secondOptionText );
thirdOption.appendChild( thirdOptionText );
forthOption.appendChild( forthOptionText );
fifthOption.appendChild( fifthOptionText );
sixthOption.appendChild( sixthOptionText );
