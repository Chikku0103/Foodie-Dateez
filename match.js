function findMatch() {
    const location = document.getElementById('location').value;
    const interests = document.getElementById('interests').value;
    const matchType = document.getElementById('matchType').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const profilePic = document.getElementById('profilePic').files[0];

    // Simulate match finding logic
    const resultMessage = `Looking for a ${matchType} in ${location} who shares an interest in ${interests} and is ${gender}.`;

    // Display the results
    document.getElementById('results').innerText = resultMessage;
}
