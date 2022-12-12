# **EEBO**
 _Evan, Evan, Betram, Owen_

**EEBO** is a marketplace designed for college students to trade or give away items to other college students. 
The app was built to have functionalities including posting, implementation of apis for mapping/location, and searchable posts to name a few!

## The app hosts pages including:

  * **Homeview**: posts, newPostButton, sign out are accessible here
  * **DetailsView**: info page for individual posts, picture, description, GoogleMapsWidget, Uber hyperlink, backbutton
  * **NewPostView**: page meant for creating new posts, uploading photo, description, location etc
  * **StartPage**: welcome page with google login
  
## Homeview in depth (HomeView.js):
  * this page serves as the main hub for the entire app
  * it includes all the current posts in a flex format
  * each post in homeview shows the photo associated with thus post, a title (ex: Apple Watch), and price
  * each individual post "cover" code is hosted in SinglePostView.js
  * Homeview also contains some nice css additions including a expanding animation on hover over each "singepost" and some stubborn flex and other spacing codeblocks that took a lot of trial and error even though it looks quite simple

## Detailsview in depth (DetailsView.js):
  * when you click on a individual post this page appears displaying the data of each post
  * it is organized into 3 panes: left, middle, right
  * leftpane contains the image associated with post and has a simple hover animation in css, borders etc. / also has a buy/bought button
  * the middle pane has a description of the item
  * right pane has two boxes, a googleMapsWidget, which displays the location on google maps, with the addition of markers. 
  * the other box contains a uber hyperlink with a gif background + css animations
  * backbutton: sends user back to homeview page

## NewPostView in depth (NewPostView.js):
  * large block of code here to create the page responsible for inputting the info for a new post, and posting it, along with cancelling post.
  * primary calls to firebase takes place here
  * takes in info like Geocode location(address), picutreInput(file), description, and price
  * hosts two buttons, postButton and cancelButton

## API Functionality (goolgeMap.js etc ...):
  * imports googlemap, loadscript, info window, markerF from @react-google-maps/api
  * API key is not hosted locally at this moment, right now the key is literally just in the code but we will change upon deployment
  * in general this google map widget takes latitude and longitude to show a small block of maps, and has code for markers onClick

  * imports geocode module to newPostView to add address.

### Other .js files
  * App.js, primary js file where everything connects together and all the other files are imported into
  * LoadingIndicator.js : loading indicator
  * Nav.js : meant to be the left pane navigation panel in HomeView high likelihood of scrapping
  * SearchBar.js : code for the search bar in homeview, works as intended
  * SinglePostView.js, code for the brief image,title,price view of each post in homeview
  * goolgeMap.js as explained above
  * post.js : where data is stored, includes items like id, datePosted, description etc.

### CSS
  * lots of little css details, most stuff is displayed using a flex/grid layout
  * posts are neatly displayed in boxes with borders and soft corners, with simple and readable colors, linear gradients where it makes sense
  * a primary theme of blue, very subtle gradients in description boxes etc
  * heavy focus on spacing, more difficult to line everything up than expected
  * chose to display most items on a pixel basis and not percentages, so that when the window is minimized the items do not shrink in an unwanted way, but rather the flex should wrap or make items closer

### Other Notes:
  * files are neatly organized into folders, like CSSFolder, Views(where most js files are hosted), firebase etc.
  * The project was more advanced than we thought, some parts are not yet implemented. We had intended to implement messaging or commenting since we are obviously not allowed to add real purchasing elements, but the load of the other tasks was too heavy
  * lot of trial and error especially with googlemapswidget and general css stuff, spacing, sizing, and debugging overlapping
  * even with alot of css work put in, it struggles to work when minimized.
  

