import React from 'react';
import classnames from 'classnames';
import style from'./Container.scss';
// import Item from './item';
// import Pagination from './pagination';

// const DEMO_PROPS = {
//   list_title: '모심',
//   list_type: 'home',
//   login: false
// }

class ExampleComponent extends React.Component {
  render() {
    // const { list_title, list_type, login } = DEMO_PROPS;
    // let list_type_class;

    // switch (list_type) {
    //   case 'home':
    //   case 'login':
    //     list_type_class = 'type1';
    //     break;

    //   case 'end':
    //     list_type_class = 'type2';
    //     break;
    
    //   default:
    //     break;
    // }

    // const list_wrap_class = classnames("list_wrap", list_type_class, {
    //   'is-login': login
    // });

    return (
      <div className={style.wrap}>
        <h1>Mossim 공식 페이지</h1>
        <footer>
          대표 : 최문수
          tel : 010-0000-0000
        </footer>
      </div>
    );
  }
}

export default ExampleComponent;
