//  File: Ex3About.jsx
//  User: it
//  Date: 2026-04-02 16:19
//  Time: 오후 4:19
//  Desc :

function Ex3About(props) {
  return (
    <div className={'row my-5'}>
      <div className={'col-sm px-3 d-flex justify-content-start'}>
        <img
          src={'https://www.w3schools.com/w3images/tablesetting2.jpg'}
          alt=""
          className={'mw-100'}
        />
      </div>
      <div className={'col-sm px-3'}>
        <h1 className={'text-center'}>About Catering</h1>
        <br />
        <h5>Tradition since 1889</h5>
        <p>
          The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur
          adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal
          ingredients.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}

export default Ex3About;
