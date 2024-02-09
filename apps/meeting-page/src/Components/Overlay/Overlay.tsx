interface IOverlay {
  imgOverlay: string;
}

const Overlay = ({imgOverlay}: IOverlay) => {

  const styles = {
      backgroundColor: `rgba(${imgOverlay}, 0.5)`,
      height: '100%',
      width: '100%',
  } as React.CSSProperties;
  
  return (
    <div style={styles}></div>
  )
}

export default Overlay