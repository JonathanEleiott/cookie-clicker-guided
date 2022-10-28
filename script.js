// Need to use the window object to get access to our data from data.js

// Make your references to the your DOM nodes here as you need them


/**************
 *   SLICE 1
 **************/

// Create a render view function for your counter
  // Create a reference to your counter element
  // Set the innerText of that element to be the resource quantity

// Create a function to handle what happens when the user clicks the "clicker" element
  // Increment the data object's resource property by one
  // call the render view function and pass it the newly updated resource
  // call the render producers function and pass it the data object 
    // need to create the render producers function first in slice 2

/**************
 *   SLICE 2
 **************/

// create a function to render the producers
  // call the unlock producers function
    // default to all producers and then create the unlock producers function
  // call the delete all child nodes function and pass it the producer container element
    // need to create a function to delete all the child nodes of a passed in container
  // call the function to get all the unlocked producers so that we can display them
    // need to create this function
  // create a function that creates a div for each producer
  // loop through the unlocked producers
    // call appendChild on the producer container for each producer

// create a function that goes through the producers and sets isLocked
  // loop through the producers array passed into the function
  // for each producer, if the resource count (passed in) is greater than or equal
    // to half the producer's price, reassign the producers.unlocked property to equal true

// create a function that deletes all of the child nodes of a given container

// create a function that gets all of the unlocked producers
  // use the Array.prototype.filter() method
  // filter through the producers and return an array with only the producers whose
    // unlocked property is true

// create a function that creates a div for a given producer

/**************
 *   SLICE 3
 **************/

// create a buy button click function
  // if the target is a button
    // attempt to buy the producer
      // need to create the function to attempt to buy the producer
    // if they can't buy the producer
      // tell the user they do not have enough resources
    // else
      // call the render producers function
      // call the update resource view function
      // call the update CPS view function
        // need to create this function

// create the attempt to buy producer function
  // if they can afford the producer
    // reduce the amount of resources they have by the price of the producer
    // increase the producer quantity by 1
    // update the price of the producer to something more expensive (maybe x1.25)
    // update the totalCPS
  // return true or false based on if the user could afford the producer

// create a function to update the CPS view
  // use the cps element to change the inner text to the new cps

// create a tick function
  // increment the data object's resource by the totalCPS
  // call the update resource view function
  // call the render producers function


// Event Listeners

// add a 'click' event listener to the "clicker" element (that you referenced above)
// the event listener should call the click function

// add a 'click' event listener to the buy element (referenced at the top of the file)
// the event listener should call the buy function

// create a setInterval that calls the tick function every second
