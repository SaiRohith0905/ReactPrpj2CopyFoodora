const Shimmer = () => {
  const shimArr = [0, 0, 0, 0,0,0,0,0,0,0,0, 0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <div className="shim-outer-cont">
      {shimArr.map((eachitem,eachindex) => {
        return (
          <div key={eachindex} className="shim-container">
            <div className="img-box"></div>
            <div className="text-box first-box"></div>
            <div className="text-box second-box"></div>
            <div className="text-box third-box"></div>
          </div>
        );
      })}
    </div>
  );
};
export default Shimmer;
