const tableBody = document.getElementById('tweetsBody');

    tweets.forEach((tweet) => {
        const row = document.createElement('tr');
        const usernameCell = document.createElement('td');
        const tweetCell = document.createElement('td');

        usernameCell.textContent = tweet.user.screen_name;
        tweetCell.textContent = tweet.text;

        row.appendChild(usernameCell);
        row.appendChild(tweetCell);
        tableBody.appendChild(row);
    });