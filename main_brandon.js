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
