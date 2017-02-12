# Mood for Thought #

Mood for Thought is a web app that allows users to receive 'mystery' recommendations from other users for a certain mood, and to recommend tidbits and media pertaining to a mood to other people around the world. It is built on node.js and webGL, and uses express, ajax, and jquery to transfer input between the site and the database generated with mongodb.

--
### Installation & User Guide ###
Mood for Thought requires [`mongoDB`](https://github.com/mongodb/mongo) and [`node.js`](https://github.com/nodejs). You can read more about their documentation in their respective repositories.
Once you have `node.js` and `mongoDB` set up, just clone this repository into your local drive. To get up and running, you need to run `mongo` in the command line. In a new shell / command window, you can use commands to work with the server. To check the files in the database, run `mongo` and enter `use letters`, then `db.documents.find()` to show all the stored entries.

--
### Version 1.0.0 ###
Currently, Mood for Thought must be run through the local host. Current functionality allows for entry through the URL in the format of `'mood'-'description'` to be stored in the database. Requested moods through the text box are sent to the server and printed to the console (not the webpage) with the push of a button on the home screen.
Goals for the near future are to implement our new home page with dynamic elements and to create a form to enter elements into the database rather than using the URL.
