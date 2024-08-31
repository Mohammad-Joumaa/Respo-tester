document.getElementById('testBtn').addEventListener('click', function() {
    const url = document.getElementById('urlInput').value;
    if (url) {
        document.getElementById('mobileView').src = url;
        document.getElementById('tabletView').src = url;
        document.getElementById('pcView').src = url;
    } else {
        alert('Please enter a valid URL');
    }
});
