# **EEBO**-
* _Evan, Evan, Betram, Owen_

**EEBO** is a marketplace designed for college students to trade or give away items to other college students. 
The app was built to have functionalities including posting, implementation of apis for mapping/location, and searchable posts to name a few!

### The app has different pages including:

  * _Homeview_: posts, newPostButton, sign out are accessible here
  * _DetailsView_: each posts info page, picture, description, GoogleMapsWidget, Uber hyperlink, backbutton
  * _NewPostView_: page meant for creating new posts, uploading photo, description, location etc
  * _StartPage_: welcome page with google login
  
### Homeview in depth (HomeView.js):
  * this page serves as the main hub for the entire app
  * it includes all the current posts in a flex format
  * each post in homeview shows the photo associated with thus post, a title (ex: Apple Watch), and price
  * each individual post "cover" code is hosted in SinglePostView.js
  * Homeview also contains some nice css additions including a expanding animation on hover over each "singepost" and some stubborn flex and other spacing codeblocks that took a lot of trial and error even though it looks quite simple

### Detailsview in depth (DeatilsView.js):
  * when you click on a individual post this page appears displaying the data of each post
  * it is organized into 3 panes: left, middle, right
  * leftpane contains the image associated with post and has a simple hover animation in css, borders etc. / also has a buy/bought button
  * the middle pane has a description of the item
  * right pane has two boxes, a googleMapsWidget, which displays the location on google maps, with the addition of markers. 
  * the other box contains a uber hyperlink with a gif background + css animations
  * backbutton: sends user back to homeview page

### NewPostView in depth (NewPostView.js):
  * large block of code here to create the page responsible for inputting the info for a new post, and posting it, along with cancelling post.
  * primary calls to firebase takes place here
  * takes in info like Geocode location(address), picutreInput(file), description, and price
  * hosts two buttons, postButton and cancelButton

