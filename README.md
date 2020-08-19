# photobucket-downloader

A small script that downloads images from photobucket

## Setup

These steps may be a little confusing, especially without pictures or guidance, I will update this in the future.

* Clone this repository
* Log into photobucket.com
* Click on a checkbox on any image
* Towards the upper right, click 'Select All'
* At the bottom of the page, click the 'Link' button
* Click on the box labeled 'Email & IM'
* Copy and paste the links from the box into `photobucket.txt`
  * You may need to right click and copy, rather than `ctrl + C` it
* These steps may be a little weird, but you need to get the direct link of a single image
  * Photobucket likes to hide direct links to images, so we will need to get it from dev tools
  * Go back to your browser with photobucket.com opened up
  * Open up your browser dev tools and go to the network tab
  * In the network tab, click "Images" to filter the network tab and make it only show images
  * Now click on any single image in your photobucket library
  * In the network tab, try to find the request for the image
  * Once you find the request, right click it and copy the URL
    * It should look something like `https://i82.photobucket.com/albums/a123/your_user_name/filename.jpg`
  * Now copy that URL with the exception of the filename (Everything up to and including the slash before the filename)
  * Paste that url into line 33 of index.js, being sure to leave the `${file}` at the end.  Use the example that's there to see what your URL should look like
* Open up a terminal at the root of the project
* Run an `npm install`
* Finally, run `npm start` 
