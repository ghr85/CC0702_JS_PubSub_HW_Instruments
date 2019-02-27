# Codeclan Week 07 Day 02
## Javascript
### Pub/Sub Continued


You've been tasked with creating a single page JS web app- using the PubSub design pattern - which provides details of each musical instrument family.

#### Order of Approach

* Draw a diagram of the views and the models and the data passed between each

* Set up your directory structure to accommodate

* Now, you'll need to set up webpack - where's your entry point? npm install? npm build run? Is watcher watching?

* Decide who needs to publish and who needs to subscribe and to what - what is the data flow?

* Pub Sub helper is easy enough to copy - make sure you understand what it's doing

* Pub Sub provides almost a transactional functionality enabling you to have a centralised communication relay. You can use the PubSub helper to create custom events and channels on which to communicate data as a result of those events.

* Pub Sub uses CustomEvent to create a custom event containing a channel and data, it then uses dispatchEvent to broadcast that  message to any addEventListeners who would 'tune into' that channel and receive that data.

* To reiterate, plan, draw your diagram, then you'll know which views are sending and receiving data - and who's doing the processing.

* One you know how your data is moving you can decide what you want to do with it - calculate, process, modify DOM.




#### Notes
* Order is important - a listener must be subscribing before the event trigger and data published to catch it.


#### Files
