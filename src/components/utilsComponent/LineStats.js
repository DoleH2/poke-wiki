import "../../scss/linestatsstyle.scss";
const LineStats = ({ lineColor, trackLineColor, percent }) => {
  return (
    <div
      className="frame-line-stats"
      style={{ backgroundColor: trackLineColor }}
    >
      <div
        className="line-stats"
        style={{ backgroundColor: lineColor, width: percent + "%" }}
      ></div>
    </div>
  );
};
export default LineStats;
