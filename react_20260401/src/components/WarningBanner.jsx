//  WarningBanner.jsx

function WarningBanner(props) {
  if (!props.warning) {
    return null;
  }

  return (
    <div>
      <h2 className={'text-danger'}>경고!!</h2>
    </div>
  );
}

export default WarningBanner;