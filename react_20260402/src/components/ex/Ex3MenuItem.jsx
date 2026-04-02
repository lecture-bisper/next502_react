//  File: Ex3MenuItem.jsx
//  User: it
//  Date: 2026-04-02 16:21
//  Time: 오후 4:21
//  Desc :

function Ex3MenuItem(props) {
  return (
    <div>
      <br/>
      <h4>{props.menu.name}</h4>
      <p>{props.menu.desc} {props.menu.price}</p>
    </div>
  );
}

export default Ex3MenuItem;
