import React from "react";
import { BeatLoader } from "react-spinners";

const LoadingComponent: React.FC = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* <img
        src="/logo_dimmed.png"
        alt="Picture of the author"
        style={{ borderBottom: "none", color: "none", marginRight: "32px" }}
        height={32}
      /> */}
      <br />
      <div style={{ marginRight: "32px" }}>
        <BeatLoader size={20} color="#d5d4d4" />
      </div>
    </div>
  );
};

export default LoadingComponent;
