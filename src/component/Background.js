import BigOrangeImg from "../images/BigOrange.svg";
import SmallOrangeImg from "../images/SmallOrange.svg";
import Blue from "../images/Blue.svg";
import Green from "../images/Green.svg";

function Background() {
  return (
    <div className="backGround">
      <div
        id="bigOrange"
        style={{
          backgroundImage: `url(${BigOrangeImg})`,
          backgroundSize: "1100px auto",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
      />
      <div
        id="smallOrange"
        style={{
          backgroundImage: `url(${SmallOrangeImg})`,
          backgroundSize: "550px auto",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
      />
      <div
        id="blue"
        style={{
          backgroundImage: `url(${Blue})`,
          backgroundSize: "600px auto",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
      />
      <div
        id="green"
        style={{
          backgroundImage: `url(${Green})`,
          backgroundSize: "1000px auto",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}

export default Background;
