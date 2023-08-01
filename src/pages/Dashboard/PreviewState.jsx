import { Progress } from "antd";

const PreviewState = ({ tag, color, value }) => {
    let colorCode = '#000';
    switch (color) {
      case 'bleu':
        colorCode = '#1890ff';
        break;
      case 'green':
        colorCode = '#95de64';
        break;
      case 'red':
        colorCode = '#ff4d4f';
        break;
      case 'orange':
        colorCode = '#ffa940';
        break;
      case 'purple':
        colorCode = '#722ed1';
        break;
      case 'grey':
        colorCode = '#595959';
        break;
      case 'cyan':
        colorCode = '#13c2c2';
        break;
      case 'brown':
        colorCode = '#614700';
        break;
      default:
        break;
    }
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