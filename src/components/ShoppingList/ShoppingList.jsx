import React, { useState } from "react";

function ShoppingList (props) {
  const [isDeleted, setIsDeleted] = useState(true);

  
  const deleteItem = () => {
    console.log('Deleted?');
    // set state
    setIsDeleted(!isDeleted)
  }

  const purchasedItem = () => {
    console.log('purchased clicked');
  }



  return (
    <li>
      {props.item.name}, {props.item.quantity}, {props.item.unit}
      <button onClick={deleteItem}>Delete</button>
      <button onClick={purchasedItem}>Purchased</button>
    </li>
    
  )
}
export default ShoppingList;

// I GET IT NOW ROX!
// i think?


// Do it Lady! ok-  we're missing quantity, otherwise no errors in the console! running agian
//It WORRRRRKS WOOOO IM SAVING AND SHUTTING IT DOWN :0





// ok try it??? :o

// lol i mispelled qty.. try again?


// LETS GOOOOO!!!!!!!!!!!!

// mkay gn!! ^-^ 3000!