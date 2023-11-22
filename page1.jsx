import React, { useState } from 'react';

const BugComponent = () => {
  // Bug 1: Missing import for useState
  // Bug 2: Variable misspelled as "countt"
  const [countt, setCount] = useState(0);

  const handleClick = () => {
    // Bug 3: Attempting to mutate state directly
    // This will not trigger a re-render, and React will not be aware of the state change
    countt++;

    // Bug 4: Accessing a property of an undefined object
    console.log(obj.property);

    // Bug 5: Condition always evaluates to true
    if (countt = 5) {
      console.log('Count is 5!');
    }

    // Bug 6: Using setState in an asynchronous manner
    // React's state updates are asynchronous, so trying to access the updated state
    // immediately after calling setState may lead to unexpected results
    setCount(countt + 1);
    console.log('Count after update:', countt);
  };

  return (
    <div>
      {/* Bug 7: Using undefined variable */}
      <p>Count: {count}</p>

      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
};

export default BugComponent;
