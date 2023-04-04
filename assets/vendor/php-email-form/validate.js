function php_email_form_submit(thisForm, action, formData) {
  fetch(action, {
      method: 'POST',
      body: formData,
      headers: {'X-Requested-With': 'XMLHttpRequest'}
  })
      .then(response => {
          return response.text();
      })
      .then(data => {
          thisForm.querySelector('.loading').classList.remove('d-block');
          if (data.trim() == 'OK') {
              thisForm.querySelector('.sent-message').classList.add('d-block');
              thisForm.querySelector('.thank-you-message').classList.add('d-block'); // add this line to show the thank you message
              thisForm.reset(); 
          } else {
              throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action); 
          }
      })
      .catch((error) => {
          displayError(thisForm, error);
      });
}
