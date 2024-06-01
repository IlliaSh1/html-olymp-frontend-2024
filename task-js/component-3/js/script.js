(function() {
  /* Код компонента пишите здесь */

  function validatePhoneNumber(phoneNumber) {
    const regex = /^\+7[-. (]*\d{3}[-. )]*\d{3}[-. ]*\d{2}[-. ]*\d{2}$/;
    return regex.test(phoneNumber);
  }

  function getDateFromStr(dateStr) {
    const dateRegexF1 = /^\d{4}-\d{2}-\d{2}$/;
    const dateRegexF2 = /^\d{2}\.\d{2}\.\d{4}$/;

    let dateIsValid = false;
    if (dateRegexF1.test(dateStr)) {
      dateIsValid = true;
    }
    if (dateIsValid === false && dateRegexF2.test(dateStr)) {
      dateIsValid = true;
      dateStr = dateStr.split('.').reverse().join('-');
    }
    if(dateIsValid === false) {
      return false;
    }

    const date = new Date(dateStr);
    return date;
  }
  function validateDate(inDateStr, outDateStr) {
    const inDate = getDateFromStr(inDateStr);
    const outDate = getDateFromStr(outDateStr);
    if (!inDate || !outDate) {
      return false;
    }

    inDate.setDate(inDate.getDate() + 4);
    return inDate <= outDate;
  }

  function validateBooking(adults, children, roomType) {
    if (adults < 1 || children > adults) {
      return false;
    }
    if (adults > 1 && roomType === 'single') {
      return false;
    }
    if ((adults < 2 || children < 1) && roomType === 'family') {
      return false;
    }
    return true;

  }


  const submitBtn = document.querySelector('.submit-btn');
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Phone
    const phoneInput = document.querySelector('#phone');
    const phoneNumber = phoneInput.value;
    const isPhoneValid = validatePhoneNumber(phoneNumber);
    if(isPhoneValid) {
      phoneInput.classList.remove('field-error');
      phoneInput.classList.add('field-correct');
    } else {
      phoneInput.classList.remove('field-correct');
      phoneInput.classList.add('field-error');
    }

    // Dates
    const dateInInput = document.querySelector('#checkin-date');
    const dateOutInput = document.querySelector('#checkout-date');
    const dateIn = dateInInput.value;
    const dateOut = dateOutInput.value;
    const isDatesValid = validateDate(dateIn, dateOut);
    if(isDatesValid) {
      dateInInput.classList.remove('field-error');
      dateInInput.classList.add('field-correct');
      dateOutInput.classList.remove('field-error');
      dateOutInput.classList.add('field-correct');
    } else {
      dateInInput.classList.remove('field-correct');
      dateInInput.classList.add('field-error');
      dateOutInput.classList.remove('field-correct');
      dateOutInput.classList.add('field-error');
    }
    // Booking
    const adultsInput = document.querySelector('#adults');
    const childrenInput = document.querySelector('#children');
    function getCheckedValue(groupName) {
      const radios = document.getElementsByName(groupName);
      for(let i = 0; i < radios.length;i++) {
        if(radios[i].checked) {
          return radios[i].value;
        }
      }
      return null;
    }
    const roomType = getCheckedValue('room-type');
    const adults = adultsInput.value;
    const children = childrenInput.value;

    const isBookingValid = validateBooking(adults, children, roomType);
    if(isBookingValid) {
      adultsInput.classList.remove('field-error');
      adultsInput.classList.add('field-correct');
      childrenInput.classList.remove('field-error');
      childrenInput.classList.add('field-correct');
    } else {
      adultsInput.classList.remove('field-correct');
      adultsInput.classList.add('field-error');
      childrenInput.classList.remove('field-correct');
      childrenInput.classList.add('field-error');
    }

  });
})();
