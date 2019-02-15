// Listen for form Submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save Bookmark
function saveBookmark(e){
  // Get form values
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;

  var bookmark = {
    name: siteName,
    url: siteUrl
  }

  // Test if bookmark is null
  if(localStorage.getItem('bookmarks') === null) {
    // init array
    var bookmarks = [];
    // add to array
    bookmarks.push(bookmark);
    // set to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }
  else {
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // add new bookmark to array
    bookmarks.push(bookmark);
    // Re-set back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  /*
  // Local storage test
  localStorage.setItem('test', 'Hello World');
  console.log(localStorage.getItem('test'));
  localStorage.removeItem('test');
  console.log(localStorage.getItem('test'));
  */

  // prevent form from submitting
  e.preventDefault();
}
