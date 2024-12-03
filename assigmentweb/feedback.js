document.getElementById('submitFeedback').addEventListener('click', function () {
    const username = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const comment = document.getElementById('comment').value.trim();

    if (!username || !email || !comment) {
        alert('Please fill in all fields.');
        return;
    }

    const feedback = {
        username: username,
        email: email,
        comment: comment,
        
    };

    const feedbackList = JSON.parse(localStorage.getItem('feedback')) || [];
    feedbackList.push(feedback);
    localStorage.setItem('feedback', JSON.stringify(feedbackList));

    alert('Submit successful!');

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('comment').value = '';
});