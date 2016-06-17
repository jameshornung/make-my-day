Main Idea:

Have you ever noticed that making decisions about going out in Austin can be daunting? How often does a group of friends actually agree on something in the first go? Have you ever played the dreaded "I don't know, what do you want to do?" game with your partner? Do you get bored with your usual happy hour haunts? 

Well, if so, this app may come in handy.

Night-lyfe takes minimal user input, and delivers an entire evening to the enduser, specifically a bar, a restaurant, and some parking. 

By accessing the Google Maps Javascript API, we populate a dynamic map and places information on each location, and we enhance UX by incorporating the Bing Image search, so that the end user has pictures of not only location, but all the quintessence of a location--as defined by other people. 

It takes a human problem--albeit not a major problem--and aggregates data in a meaningful way...for an unforgettable evening.




My part:

My task was to incorporate the Google Maps API, and attempt to incorporate Yelp data. Initially, we went with the google static map because we couldn't figure out the dynamic map. 

Things worked fine, until I started digging into the Yelp API. Yelp requires OAuth1.0a, which requires a backend...which we haven't covered yet. So after dealing with creating a workaround, I threw in the towel, and went with google places...

which led me to discover that the Google Places API also a backend driven element. HOWEVER, the Google Places Libary in the Google Maps Javascript API functions as the front end equivalent. There was much dancing.

So, since I was already calling stuff from the javascript API, I generated a dynamic map with place results data. That seemed almost easy after trying to create a front end yelp workaround. The result? 

A dynamic map that auto centers based on location data. I'm pretty proud of that.