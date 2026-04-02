function Ex1Sub({data}) {
  return (
    <div className={'row mb-3'}>
      <div className={'col-sm-4'}>
        <img src={data.imgSrc} alt={data.title} className={'mw-100'} />
      </div>
      <div className={'col-sm-8'}>
        <h2 className={'mt-3'}>{data.title}</h2>
        <p className={'mt-3'}>{data.text}</p>
      </div>
    </div>
  );
}
export default Ex1Sub;