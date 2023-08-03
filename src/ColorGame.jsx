
import { useState } from "react";
import { Colorbox } from "./Colorbox";


export function ColorGame() {
  const [bgCol, setBgCol] = useState("pink");
  const styles = {
    background: bgCol,
  };
  const INITIAL_COLOR_LIST = ["purple", "orange", "pink", "crimson"];
  const [colorList, setColorList] = useState(INITIAL_COLOR_LIST);
  return (
    <div>
      <input
        style={styles}
        type="text"
        placeholder="enter color"
        onChange={(event) => {
          setBgCol(event.target.value);
        }}
      />
      <button onClick={(event) => setColorList([...colorList, bgCol])}>
        AddColor
      </button>
      {colorList.map((col, index) => (
        <Colorbox key={index} clr={col} />
      ))}
    </div>
  );
}