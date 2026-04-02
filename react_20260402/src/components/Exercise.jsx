import {useState} from "react";
import Ex1 from "./ex/Ex1.jsx";
import Ex2 from "./ex/Ex2.jsx";
import Ex3 from "./ex/Ex3.jsx";
import Ex4 from "./ex/Ex4.jsx";

function Exercise() {
  const [viewState1, setViewState1] = useState(true);
  const [viewState2, setViewState2] = useState(false);
  const [viewState3, setViewState3] = useState(false);
  const [viewState4, setViewState4] = useState(false);

  const btn1Click = () => {
    setViewState1(true);
    setViewState2(false);
    setViewState3(false);
    setViewState4(false);
  }
  
  const btn2Click = () => {
    setViewState1(false);
    setViewState2(true);
    setViewState3(false);
    setViewState4(false);
  };

  const btn3Click = () => {
    setViewState1(false);
    setViewState2(false);
    setViewState3(true);
    setViewState4(false);
  };

  const btn4Click = () => {
    setViewState1(false);
    setViewState2(false);
    setViewState3(false);
    setViewState4(true);
  };

  let view = <Ex1 />

  if (viewState1 == true) {
    view = <Ex1 />
  }
  else if (viewState2 == true) {
    view = <Ex2 />
  }
  else if (viewState3) {
    view = <Ex3 />
  }
  else if (viewState4) {
    view = <Ex4 />
  }

  return (
    <div className={'mt-3'}>
      <div className={'container mb-4'}>
        <div className={'btn-group'}>
          <button type={'button'} className={'btn btn-primary'} onClick={btn1Click}>
            첫번째 문제
          </button>
          <button type={'button'} className={'btn btn-primary'} onClick={btn2Click}>
            두번째 문제
          </button>
          <button type={'button'} className={'btn btn-primary'} onClick={btn3Click}>
            세번째 문제
          </button>
          <button type={'button'} className={'btn btn-primary'} onClick={btn4Click}>
            네번째 문제
          </button>
        </div>
      </div>
      <hr />
      <div>{view}</div>
    </div>
  );
}

export default Exercise;