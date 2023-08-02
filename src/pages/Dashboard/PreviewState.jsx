import { Progress } from "antd";
import { getColor } from "../../utils";

const PreviewState = ({ tag, color, value }) => {
    let colorCode = getColor(color)
    
    return (
      <div style={{ color: '#595959', marginBottom: 5 }}>
        <div className="left alignLeft">{tag}</div>
        <div className="right alignRight">{value} %</div>
        <Progress
          percent={value}
          showInfo={false}
          strokeColor={{
            '0%': colorCode,
            '100%': colorCode,
          }}
        />
      </div>
    );
  };

  export default PreviewState