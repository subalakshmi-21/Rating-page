const submitButton = document.querySelector('.submit-btn');
const ratingPage = document.querySelector('.container');
const thankYouPage = document.querySelector('.thankyou-state');
const thankYouMessage = document.querySelector('.output span');
const ratings = document.querySelectorAll('input[name="rating"]');

submitButton.addEventListener('click', () => {
    const selectedRating = document.querySelector('input[name="rating"]:checked');

    if (selectedRating) {
        const ratingValue = selectedRating.value;
        thankYouMessage.textContent = `${ratingValue}`;
        ratingPage.style.display = 'none';
        thankYouPage.style.display = 'block';
    } else {
        alert('Please select a rating before submitting.');
    }
});

