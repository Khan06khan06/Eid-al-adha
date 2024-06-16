document.getElementById('yes').addEventListener('click', function() {
    alert("Send the Eid on my phonepe😁,Thank you💙");
});

document.getElementById('no').addEventListener('click', function() {
    var noButton = document.getElementById('no');
    var container = document.querySelector('.container');

    var maxX = container.clientWidth - noButton.clientWidth;
    var maxY = container.clientHeight - noButton.clientHeight;

    var newX = Math.floor(Math.random() * maxX);
    var newY = Math.floor(Math.random() * maxY);

    // Ensure the button moves a significant distance
    var currentX = noButton.offsetLeft;
    var currentY = noButton.offsetTop;
    
    // Add minimum distance
    while (Math.abs(newX - currentX) < 100) {
        newX = Math.floor(Math.random() * maxX);
    }

    while (Math.abs(newY - currentY) < 100) {
        newY = Math.floor(Math.random() * maxY);
    }

    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';
});