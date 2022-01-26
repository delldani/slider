import React from "react";

function App() {
  const onClickLeft = () => {
    const element = document.getElementsByClassName("image-wrapper")[0];
    element.classList.add("move");
  };
  const onClickRight = () => {
    const element = document.getElementsByClassName("image-wrapper")[0];
    element.classList.remove("move");
  };

  return (
    <div className="App">
      <button className="button-left" onClick={onClickLeft}>
        mozgat
      </button>
      <button className="button-right" onClick={onClickRight}>
        vissza
      </button>

      <div className="image-wrapper1">
        <img
          src="https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1561&q=80"
          alt="kep"
        />
      </div>
      <div className="image-wrapper">
        <img
          src="https://images.unsplash.com/photo-1642986951104-428827cfe46b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="kep"
        />
      </div>
    </div>
  );
}

export default App;
