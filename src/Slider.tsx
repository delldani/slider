import React from "react";

interface ImagesType {
  id: string;
  src: string;
}

interface SliderProps {
  images: JSX.Element[];
}
export const Slider = (props: SliderProps) => {
  const { images } = props;
  const wasLeft = React.useRef(false);
  const wasTransistion = React.useRef(false);
  const [baseElements, setBaseElements] = React.useState(images.slice(0, 7));
  const [pufferElements, setPufferElements] = React.useState(
    images.slice(7, images.length)
  );

  const onClickLeft = () => {
    moveCards("left");
    wasLeft.current = true;
    wasTransistion.current = true;
  };

  const onClickRight = () => {
    moveCards("right");
    wasLeft.current = false;
    wasTransistion.current = true;
  };

  const onTransitionEnd = () => {
    if (wasTransistion.current) {
      const { baseArray, pufferArray } = shiftArrayElements(
        baseElements,
        pufferElements,
        wasLeft.current
      );
      setBaseElements(baseArray);
      setPufferElements(pufferArray);
      wasTransistion.current = false;
    }
  };

  const cards: JSX.Element[] = baseElements.map((item, index) => {
    const clsName = "image-wrapper " + "wr" + (index + 1).toString();
    return (
      <div className={clsName} key={item.key}>
        {item}
      </div>
    );
  });

  return (
    <div className="App" onTransitionEnd={onTransitionEnd}>
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

const moveCards = (direction: "left" | "right") => {
  if (direction === "left") {
    for (let i = 0; i < 6; i++) {
      const element = document.getElementsByClassName("image-wrapper")[i];
      element.className = "image-wrapper";
      element.classList.add("wr" + (i + 2).toString());
    }
  } else {
    for (let i = 6; i > -1; i--) {
      const element = document.getElementsByClassName("image-wrapper")[i];
      element.className = "image-wrapper";
      element.classList.add("wr" + i.toString());
    }
  }
};

const shiftArrayElements = (
  base: JSX.Element[],
  puffer: JSX.Element[],
  wasLeft: boolean
) => {
  const baseArray = [...base];
  const pufferArray = [...puffer];
  if (wasLeft) {
    const lastBaseArray = baseArray.pop();
    const lastPufferArray = pufferArray.pop();
    baseArray.unshift(lastPufferArray!);
    pufferArray.unshift(lastBaseArray!);
  } else {
    const firstBaseArray = baseArray.shift();
    const firstPufferArray = pufferArray.shift();
    baseArray.push(firstPufferArray!);
    pufferArray.push(firstBaseArray!);
  }
  return { baseArray, pufferArray };
};
