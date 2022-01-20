// import StylesCheck from "./StylesCheck";
import ClassComponent from "./ClassComponent";
import FuncComponent from "./FuncComponent";
import "./styles.scss";
import "./writeStylesHere.scss";

export const devs = ["David", "Brian", "Tom", "Brandon"];
const handleDevRemoval = (value) => {
  console.log(value);
};
export default function App() {
  return (
    <div className="App">
      {/* <StylesCheck name="Aditee" devs={devs} /> */}
      <ClassComponent name="Aditee" devs={devs} />
      <FuncComponent
        name="Aditee"
        handleDevRemoval={handleDevRemoval}
        devs={devs}
      />
    </div>
  );
}
