
//Using Page.js to route route between the three main sections of our pages
page('/', searchController.reveal);
page('/search_section', searchController.reveal);
page('/mixtape', mixtapeController.reveal);
page('/about', aboutController.reveal);

page();
