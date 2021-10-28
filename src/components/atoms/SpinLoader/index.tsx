import React from 'react'
import './style.scss'

const SpinLoader: React.FC = () => {
  return (
    <div className={'spinLoader-box'}>
      <div className={'spinLoader-spinner'} />
    </div>
  )
}
export default SpinLoader
