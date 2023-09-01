let SliderComp = ({ imgSrc, title, sector, service }) => {
  return (
    <>
      <div className="slide-comp">
        <div className="img-container">
          <img src={imgSrc} />
        </div>
        <h4>{title}</h4>
        <div className="comp-detail">
          <p className="sector">{sector}</p>
          <p className="service">{service}</p>
        </div>
      </div>
    </>
  );
};

export default SliderComp;
