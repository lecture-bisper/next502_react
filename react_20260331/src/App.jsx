import CounterFunc from './components/CounterFunc.jsx';
import CounterClass from './components/CounterClass.jsx';
import CounterUseState from './components/CounterUseState.jsx';
import CounterUseEffect from './components/CounterUseEffect.jsx';
import LifeCycleClass from './components/LifeCycleClass.jsx';
import LifeCycleFunc from './components/LifeCycleFunc.jsx';
import VolumeControl from './components/VolumeControl.jsx';
import UseMemo1 from './components/UseMemo1.jsx';
import UseMemo2 from './components/useMemo2.jsx';
import HookUseRef from './components/HookUseRef.jsx';
import Accommodate from './components/Accommodate.jsx';

function App() {
  return (
    <div className={'container mt-5'}>
      <h2>React Hook 사용하기</h2>
      <br />
      <h3>함수 컴포넌트에서 Hook 없이 그냥 사용했을 경우</h3>
      <CounterFunc />

      <br />
      <hr />
      <br />

      <h3>클래스 컴포넌트에서 Hook 없이 그냥 사용했을 경우</h3>
      <CounterClass />

      <br />
      <hr />
      <br />

      <h3>useState() 훅 사용</h3>
      <CounterUseState />

      <br />
      <hr />
      <br />

      <h3>useEffect() 훅 사용</h3>
      {/*<CounterUseEffect />*/}
      <hr />
      {/*<LifeCycleClass />*/}
      <hr />
      <LifeCycleFunc />

      <br/><hr/><br/>
      <h3>볼륨 컨트롤러 만들기</h3>
      <VolumeControl />

      <br/><hr/><br/>

      <h3>useMemo 사용하기</h3>
      <UseMemo1 />
      <hr/>
      <UseMemo2 />

      <br/><hr/><br/>

      <h3>useRef 사용하기</h3>
      <HookUseRef />

      <br/><hr/><br/>

      <h3>커스텀 훅 사용하기</h3>
      <Accommodate />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App
