function MapEx() {
  const numbers = [10, 20, 30, 40, 50];

  // const doubled = numbers.map((number) => {
  //   return number * 2;
  // });

  return (
    <div>
      <ul className={'list-group'}>
        {
          numbers.map((number, index) => {
            return <li className={'list-group-item'} key={index}>{number * 2}</li>
          })
        }
      </ul>
    </div>
  );
}

export default MapEx;