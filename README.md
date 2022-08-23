# YelpCamp

**Welcome to YelpCamp**, a web application project based on popular website called [Yelp](https://www.yelp.ie/dublin). It is a one-stop local platform for consumers to discover, connect and transact with local businesses. YelpCamp is a version for campsites only with all the essential functionality.

## About

**Technologies used:** YelpCamp was built with _Express_, _EJS_, _MongoDB/Mongoose_, _Bootstrap_ and hosted on _Heroku_.

Project uses session based authentication, authorization, form validation (JOI data validator), flash messaging, fully interactive cluster map with geocoding, image storage, user registration and feedback on selected campsites. This feedback incorporates comment section with a star rating and modifiable reviews. Application has main security features (sanitize-html, helmet – secures HTTP headers) and uses cloud database for information storage (Mongo Atlas).

---

_Authentication was implemented using Passport API._ Passport is Express-compatible authentication middleware for Node.js. Passport's sole purpose is to authenticate requests, which it does through an extensible set of plugins known as strategies. Passport does not mount routes or assume any particular database schema, which maximizes flexibility and allows application-level decisions to be made by the developer. The API is simple: you provide Passport a request to authenticate, and Passport provides hooks for controlling what occurs when authentication succeeds or fails.

---

_Cluster map was created using Mapbox API._ Specifically – Mapbox GL JS JavaScript library. Mapbox GL JS is used to build web maps with Mapbox's mapping technology. This library makes it possible to display Mapbox maps in a web browser or client, add user interactivity, and customize the map experience in the application by using provided object methods and properties.

_Main Mapbox GL JS use cases are:_

- Visualizing and animating geographic data
- Querying and filtering features on a map
- Placing your data between layers of a Mapbox style
- Dynamically displaying and styling custom client-side data on a map
- 3D data visualizations and animations
- Adding markers and popups to maps programmatically

---

_Image storage was done using Cloudinary API_. Cloudinary is a Software-as-a-Service (SaaS) solution for managing web application’s media assets in the cloud. Cloudinary offers an end-to-end solution for uploading, storing, administrating, transforming and optimizing delivery. Media upload, processing, and delivery are handled on Cloudinary’s servers, which automatically scale for handling high load and bursts of traffic.

---

**Access and try out the web app here: [YelpCamp](https://evening-mountain-18503.herokuapp.com/)**

## Author

Created by [Martynas Goberis](https://www.linkedin.com/in/martynasgoberis/). Feel free to reach out on Linkedin! :mailbox_closed:
