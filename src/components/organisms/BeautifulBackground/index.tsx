import GridDot from '../../molecules/GridDot/'
import BeautyDot from '../../atoms/BeautyDot'

const BeautifulBackground = () => {
  return (
    <div className={'beautyBackground'}>
      <GridDot height={'14px'} width={'14px'} row={2} column={4} />
      <BeautyDot height={'47px'} width={'47px'} />
      <BeautyDot height={'287px'} width={'287px'} color={'#FFCF54'} />
      <BeautyDot height={'70px'} width={'70px'} color={'#B9E6FF'} />
      <BeautyDot height={'131px'} width={'131px'} color={'#FFCF54'} />
      <BeautyDot height={'37px'} width={'37px'} color={'#FFCF54'} />
      <BeautyDot height={'37px'} width={'37px'} color={'#FFCF54'} />
      <BeautyDot height={'34px'} width={'34px'} />
    </div>
  )
}
export default BeautifulBackground
