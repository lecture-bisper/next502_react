// Ex2.jsx

// 문제 2) https://www.w3schools.com/w3css/tryw3css_examples_pricing_tables.htm 를 클론 코딩하세요
// 반복 되는 부분을 자식 컴포넌트로 따로 분리하여 호출하는 방식으로 클론 코딩

const priceList = [
  {
    seq: 1,
    grade: 'Basic',
    storage: '10',
    emails: '10',
    domains: '10',
    supports: 'Endless',
    price: '10',
    color: 'bg-dark'
  },
  {
    seq: 2,
    grade: 'Pro',
    storage: '25',
    emails: '25',
    domains: '25',
    supports: 'Endless',
    price: '25',
    color: 'bg-success'
  },
  {
    seq: 3,
    grade: 'Premium',
    storage: '50',
    emails: '50',
    domains: '50',
    supports: 'support',
    price: '50',
    color: 'bg-dark'
  },
];

function Ex2() {
  return (
    <div>
      ex2
    </div>
  );
}
export default Ex2;
