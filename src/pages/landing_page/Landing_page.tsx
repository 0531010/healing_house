import Navbar from "../../components/Navbar";
import backround_design from "../../assets/svg/backround_design.svg";

export default function Landing_page() {
  return (
    <div >
      {/* background_effect */}
      <div
        style={{
          position: "absolute",
          overflow: "visible",
          backgroundImage: `url(${backround_design})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          backgroundPositionX: "-300px",
          backgroundPositionY: "100px",
          width: "100%",
          zIndex: "-2",
        }}
      >
        {/* navbar */}
        <div className="">
          <Navbar />
        </div>

        {/* first_content */}
        <div
          className="flex flex-col md:flex-row container"
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "5%",
          }}
        >
          {/*flex flex-row text-4xl mt-28 ml-auto mr-auto ml-[100px] */}

          {/* pharagraph */}
          <div className="flex flex-col">
            <h1 className="font-light text-8xl ">Neque parra</h1>
            <h1 className="text-xl mt-4">
              quisquam est qui dolorem ipsum
              <h1>quia dolor sit amet, consectetur,adipisci velit</h1>
            </h1>
          </div>

          {/* image_cube */}
          <div
            className="w-48 sm:w-64 md:w-96 lg:w-[650px] relative"
            style={{

              // boxSizing: "border-box",
              // width:"650px",
              height: "400px",
              border: "2px solid #329BFB",
              borderRadius: "250px",
              display: "flex",
              alignItems:"flex-end",
            }}
          >
            {/* text_cube */}
            <div
              className="absolute"
              style={{
                // boxSizing: "border-box",
                width: "350px",
                height: "200px",
                bottom:"-20%",
                right:"50%",
                backgroundColor: "#ffffffdd",
                backdropFilter:'blur(2px)',
                // opacity:
                // top: "200px",
                border: "2px solid #28FFFF",
                borderRadius: "250px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Rectangle 1 */

// box-sizing: border-box;
// position: absolute;
// width: 825px;
// height: 533.65px;
// left: 1092px;
// top: 343px;
// border: 2px solid #329BFB;
// border-radius: 250px;
