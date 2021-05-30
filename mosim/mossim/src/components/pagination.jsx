import React from 'react';
import classnames from 'classnames';
import style from './pagination.module.scss';

const DEMO_PROPS = {
  max_page: 10,
  current_page: 1
}

class Pagination extends React.Component {
  render() {
    const { max_page, current_page } = DEMO_PROPS;

    return (
      <div className={style.wrap}>
        {
          Array(max_page).fill(0) // [0,0,0,0,0,0,0,0,0,0]
          .map((value, index) => {
            let page = index + 1;
            // style['is-active']
            let pageClass = classnames(style.link, {
              [ style['is-active'] ]: page === current_page
            });
            
            return <a className={pageClass} href={"#"+page} key={index}>{page}</a>;
          })
        }
      </div>
    );
  }
}

export default Pagination;