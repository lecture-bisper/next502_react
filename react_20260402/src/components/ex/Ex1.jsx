// Ex1.jsx

// 문제 1) https://www.w3schools.com/w3css/tryw3css_examples_album_text.htm 를 클론 코딩하세요
// 반복 되는 부분을 자식 컴포넌트로 따로 분리하여 호출하는 방식으로 클론 코딩

import Ex1Sub from './Ex1Sub.jsx';

const holidayResort = [
  {
    seq: 1,
    imgSrc: 'https://www.w3schools.com/w3css/img_5terre.jpg',
    title: '5 Terre',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  },
  {
    seq: 2,
    imgSrc: 'https://www.w3schools.com/w3css/img_monterosso.jpg',
    title: 'Monterosso',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  },
  {
    seq: 3,
    imgSrc: 'https://www.w3schools.com/w3css/img_vernazza.jpg',
    title: 'Vernazza',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  },
  {
    seq: 4,
    imgSrc: 'https://www.w3schools.com/w3css/img_manarola.jpg',
    title: 'Manarola',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  },
  {
    seq: 5,
    imgSrc: 'https://www.w3schools.com/w3css/img_corniglia.jpg',
    title: 'Corniglia',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  },
  {
    seq: 6,
    imgSrc: 'https://www.w3schools.com/w3css/img_riomaggiore.jpg',
    title: 'Riomaggiore',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  },
];

function Ex1() {
  return (
    <div>
      <nav className={'navbar navbar-expand-sm navbar-dark bg-success mb-3 p-2'}>
        <a href="" className={'navbar-brand fs-2 ms-2'}>Summer Holiday</a>
      </nav>

      <div className={'container'}>
        {holidayResort.map(item => <Ex1Sub data={item} key={item.seq} />)}
      </div>
    </div>
  );
}
export default Ex1