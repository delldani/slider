import React from "react";

const images = [
  "https://images.unsplash.com/photo-1643175816971-a463dee6ae61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1561&q=80",
  "https://images.unsplash.com/photo-1642986951104-428827cfe46b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1643133277936-9f93d8792522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1642977129002-410dec0c90c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1643146970682-7edef5a299ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  "https://images.unsplash.com/photo-1643139713458-1e3e31577d38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1643118156795-260d71d95756?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1076&q=80",
  "https://images.unsplash.com/photo-1643145024647-9d13e5185dd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
  "https://images.unsplash.com/photo-1643130420763-964c891d218c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1145&q=80",
];

const App = () => {
  const firstElement = React.useRef(0);
  const wasLeft = React.useRef(false);
  const [elements, setElements] = React.useState(images.slice(0, 7));

  const onClickLeft = () => {
    firstElement.current =
      firstElement.current < images.length - 1 ? firstElement.current++ : 0;
    for (let i = 0; i < 6; i++) {
      const element = document.getElementsByClassName("image-wrapper")[i];
      element.className = "image-wrapper";
      element.classList.add("wr" + (i + 2).toString());
    }
  };

  const onClickRight = () => {
    firstElement.current =
      firstElement.current > 0 ? firstElement.current-- : images.length - 1;
    for (let i = 6; i > -1; i--) {
      const element = document.getElementsByClassName("image-wrapper")[i];
      element.className = "image-wrapper";
      element.classList.add("wr" + i.toString());
    }
  };

  const onTransistionEnd = () => {
    console.log("121212");
  };

  const cards: JSX.Element[] = elements.map((item, index) => {
    const clsName = "image-wrapper " + "wr" + (index + 1).toString();
    return (
      <div className={clsName} onTransitionEnd={onTransistionEnd}>
        <img src={item} alt="kep" />
      </div>
    );
  });

  return (
    <div className="App">
      <button className="button-left" onClick={onClickLeft}>
        mozgat
      </button>
      <button className="button-right" onClick={onClickRight}>
        vissza
      </button>
      {cards}
    </div>
  );
};

export default App;
