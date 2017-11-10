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

let firstNameDiv = document.createElement( "div" );
let firstName_i = document.createElement( "i" );
let firstName = document.createElement( "input" );

let lastNameDiv = document.createElement( "div" );
let lastName_i = document.createElement( "i" );
let lastName = document.createElement( "input" );

let emailDiv = document.createElement( "div" );
let email_i = document.createElement( "i" );
let email = document.createElement( "input" );

let urlDiv = document.createElement( "div" );
let url_i = document.createElement( "i" );
let url = document.createElement( "input" );

let selectDiv = document.createElement( "div" );
let select_i = document.createElement( "i" );
// let select = document.createElement( "input" );
let select = document.createElement( "select" );

let firstOption = document.createElement( "Option" );
let secondOption = document.createElement( "Option" );
let thirdOption = document.createElement( "Option" );
let forthOption = document.createElement( "Option" );
let fifthOption = document.createElement( "Option" );
let sixthOption = document.createElement( "Option" );

let textAreaDiv = document.createElement( "div" );
let textArea_i = document.createElement( "i" );
let textArea = document.createElement( "textarea" );

let mobileDiv = document.createElement( "div" );
let mobile_i = document.createElement( "i" );
let mobile = document.createElement( "input" );

let homeDiv = document.createElement( "div" );
let home_i = document.createElement( "i" );
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

firstNameDiv.setAttribute('class', 'div_class');
firstName.setAttribute( 'type', 'text' );
firstName.setAttribute( 'id', 'user-first-name' );
firstName.setAttribute('class', 'input_class');
firstName.setAttribute( 'placeholder', 'First Name' );
firstName_i.setAttribute('class', 'fa fa-envelope');
firstName_i.setAttribute('aria-hidden', 'true');

lastNameDiv.setAttribute('class', 'div_class');
lastName.setAttribute( 'type', 'text' );
lastName.setAttribute( 'id', 'user-last-name' );
lastName.setAttribute('class', 'input_class');
lastName.setAttribute( 'placeholder', 'Last Name' );
lastName_i.setAttribute('class', 'fa fa-envelope');
lastName_i.setAttribute('aria-hidden', 'true');

emailDiv.setAttribute('class', 'div_class');
email.setAttribute( 'type', 'email' );
email.setAttribute( 'id', 'user-email' );
email.setAttribute( 'placeholder', 'Email Address' );
email_i.setAttribute('class', 'fa fa-envelope');
email_i.setAttribute('aria-hidden', 'true');

urlDiv.setAttribute('class', 'div_class');
url.setAttribute( 'type', 'text' );
url.setAttribute( 'id', 'user-website' );
url.setAttribute( 'placeholder', 'Current Website URL' );
url_i.setAttribute('class', 'fa fa-envelope');
url_i.setAttribute('aria-hidden', 'true');

selectDiv.setAttribute('class', 'div_class');
select.setAttribute( 'type', 'select' );
select.setAttribute( 'id', 'user-language' );
select.setAttribute( 'placeholder', 'Select Language' );
select_i.setAttribute('class', 'fa fa-envelope');
select_i.setAttribute('aria-hidden', 'true');

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

textAreaDiv.setAttribute('class', 'div_class');
textArea.setAttribute( 'type', 'textarea' );
textArea.setAttribute( 'rows', '8' );
textArea.setAttribute( 'cols', '80' );
textArea.setAttribute( 'id', 'user-comment' );
textArea.setAttribute( 'placeholder', 'Your Comment' );
textArea_i.setAttribute('class', 'fa fa-envelope');
textArea_i.setAttribute('aria-hidden', 'true');

homeDiv.setAttribute('class', 'div_class');
mobile.setAttribute( 'type', 'tel' );
mobile.setAttribute( 'id', 'user-mobile' );
mobile.setAttribute( 'placeholder', 'Mobile Number' );
mobile_i.setAttribute('class', 'fa fa-envelope');
mobile_i.setAttribute('aria-hidden', 'true');

homeDiv.setAttribute('class', 'div_class');
home.setAttribute( 'type', 'tel' );
home.setAttribute( 'id', 'user-phone' );
home.setAttribute( 'placeholder', 'Home Number' );
home_i.setAttribute('class', 'fa fa-envelope');
home_i.setAttribute('aria-hidden', 'true');

footer.setAttribute('class', 'footer');



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
