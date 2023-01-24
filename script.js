const additionalFields = document.querySelectorAll('.additional');
const radioFields = document.querySelectorAll('.radioField');

if (additionalFields && additionalFields.length > 0) {
    [...additionalFields].forEach((additionalField) => {
        additionalField.hidden = true;
    });
}

if (radioFields && radioFields.length > 0) {
    [...radioFields].forEach((radioField) => {
        radioField.setAttribute('aria-expanded', false);
        radioField.setAttribute('aria-controls', radioField.dataset.controls);

        radioField.addEventListener('click', (event) => {
            const additionalField = document.getElementById(event.target.getAttribute('aria-controls'));
            let isChecked = event.target.checked;

            [...additionalFields].forEach((additionalField) => {
                additionalField.hidden = true;
            });

            if (isChecked) {
                event.target.setAttribute('aria-expanded', true);
                additionalField.hidden = false;
            } else {
                event.target.setAttribute('aria-expanded', false);
                additionalField.hidden = true;
            }
        });
    });
}