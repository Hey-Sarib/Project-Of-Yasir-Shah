function activateLink(link) {
    // Remove active class from all links
    var links = document.querySelectorAll('.nav-item-header a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });

    // Add active class to the clicked link
    link.classList.add('active');
}