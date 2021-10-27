import React from 'react'
import BeautySVG from '../../atoms/BeautyDot'
import './style.scss'

interface GridDotProps {
  row?: number
  column?: number
  height?: string
  width?: string
}

const GridDot: React.FC<GridDotProps> = ({
  row = 2,
  column = 2,
  height = '20px',
  width = '20px',
}) => {
  const rows: Array<Array<number>> = Array(row)
  for (let i = 0; i < row; i++) {
    rows[i] = Array(column)
    for (let j = 0; j < column; j++) {
      rows[i][j] = (i + 1) * (j + 1) + (j + 1)
    }
  }
  return (
    <>
      {rows.map((columns: number[], index: number) => {
        return (
          <div className={'griddot-row'} key={columns[index].toString()}>
            {columns.map((value: number) => {
              return (
                <BeautySVG
                  key={value.toString()}
                  height={height}
                  width={width}
                />
              )
            })}
          </div>
        )
      })}
    </>
  )
}
export default GridDot
