import React from "react";
const Menu = () => {
  return (
    <div className="Menu">
      <h2>Menu</h2>
      <p>
        We start early, with a breakfast menu including juices, pastries,
        pancakes, all kinds of eggs and freshly-roasted coffee. At 11.30am, we
        switch to our all-day menu.
      </p>
      <p>On weekends we serve brunch until 4pm.</p>
      <button>
        <a>Breakfast</a>
      </button>
      <button>
        <a>Brunch</a>
      </button>
      <button>
        <a>All Day</a>
      </button>
      <hr></hr>
    </div>
  );
};
export default Menu;
