document.getElementById('searchIcon').addEventListener('click', function () {
    var searchBar = document.getElementById('searchBarContainer');
    searchBar.style.display = 'block';
});

document.getElementById('closeIcon').addEventListener('click', function () {
    var searchBar = document.getElementById('searchBarContainer');
    searchBar.style.display = 'none';
});

document.querySelector('.navbar-toggler').addEventListener('click', function () {
    var searchIconContainer = document.querySelector('.nav-search-container');
    var navbar = document.getElementById('navbarNav');
    
    if (navbar.classList.contains('show')) {
        searchIconContainer.style.top = '50%';
    } else {
        searchIconContainer.style.top = '8%';
    }
});
