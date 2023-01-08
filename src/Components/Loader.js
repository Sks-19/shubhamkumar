import { Spin } from "antd";

const Loader = () => {
  return (
    <>
      <div
        className="container"
        style={{ textAlign: "center", marginTop: "30%" }}
      >
        <Spin style={{ height: "200px" }} />
      </div>
    </>
  );
};

export default Loader;
