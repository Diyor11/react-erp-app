import { Progress } from 'antd'
import React from 'react'
import { getColor } from '../../utils'

export default function PreViewbox({title, states}) {
  return (
    <div className="pad15 preview-box">
        <h3
        className='preview-box__title'
        >
        {title}
        </h3>
        {states.map(({tag, color, value}, index) => {
            let colorCode = getColor(color)
            return(
                <div key={index} style={{ color: '#595959', marginBottom: 5 }}>
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
            )
        })}
    </div>
  )
}
