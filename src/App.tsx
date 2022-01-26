import React from "react";

const images = [
 {id:'1',src:"https://images.unsplash.com/photo-1643175816971-a463dee6ae61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
  {id:"2",src:"https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1561&q=80"},
  {id:"3",src:"https://images.unsplash.com/photo-1642986951104-428827cfe46b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
  {id:"4",src:"https://images.unsplash.com/photo-1643133277936-9f93d8792522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
  {id:"5",src:"https://images.unsplash.com/photo-1642977129002-410dec0c90c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
  {id:"6",src:"https://images.unsplash.com/photo-1643146970682-7edef5a299ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"},
  {id:"7",src:"https://images.unsplash.com/photo-1643139713458-1e3e31577d38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
  {id:"8",src:"https://images.unsplash.com/photo-1643118156795-260d71d95756?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1076&q=80"},
  {id:"9",src:"https://images.unsplash.com/photo-1643145024647-9d13e5185dd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"},
  {id:"10",src:"https://images.unsplash.com/photo-1643130420763-964c891d218c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1145&q=80"},
];

const App = () => {
  const wasLeft = React.useRef(false);
  const [baseElements, setBaseElements] = React.useState(images.slice(0, 7));
  const [elements, setElements] = React.useState(images.slice(7, images.length));

  const onClickLeft = () => {
    for (let i = 0; i < 6; i++) {
      const element = document.getElementsByClassName("image-wrapper")[i];
      element.className = "image-wrapper";
      element.classList.add("wr" + (i + 2).toString());
    };
    wasLeft.current  = true;
  };

  const onClickRight = () => {
    for (let i = 6; i > -1; i--) {
      const element = document.getElementsByClassName("image-wrapper")[i];
      element.className = "image-wrapper";
      element.classList.add("wr" + i.toString());
    };
    wasLeft.current  = false;
  };

  const onTransistionEnd = () => {
    const baseArray = [...baseElements];
    const pufferArray = [...elements]
    if(wasLeft.current){
      const lastBaseArray = baseArray.pop();
      const lastPufferArray = pufferArray.pop();
      baseArray.unshift(lastPufferArray!);
      pufferArray.unshift(lastBaseArray!)
    }else{
      const firstBaseArray = baseArray.shift();
      const firstPufferArray = pufferArray.shift();
      baseArray.push(firstPufferArray!);
      pufferArray.push(firstBaseArray!);
    }
    setBaseElements(baseArray);
    setElements(pufferArray);
  };
  // console.log(baseElements);
  // console.log(elements)
  const cards: JSX.Element[] = baseElements.map((item, index) => {
    const clsName = "image-wrapper " + "wr" + (index + 1).toString();
    return (
      <div className={clsName} key={item.id} onTransitionEnd={index === 0 ? onTransistionEnd: ()=>{}}>
        <img src={item.src} alt={index.toString()} />
      </div>
    );
  });

  return (
    <div className="App" >
      <button className="button-left" onClick={onClickLeft}>
        előre
      </button>
      <button className="button-right" onClick={onClickRight}>
        vissza
      </button>
      {cards}
    </div>
  );
};

export default App;
