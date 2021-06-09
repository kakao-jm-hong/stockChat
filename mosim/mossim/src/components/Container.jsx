import React from 'react';
import classnames from 'classnames';
import style from './Container.scss';
import Footer from '../common/Footer';
import GlobalStyle from '../GlobalStyle.js';
class ExampleComponent extends React.Component {
  render() {
    return (
      <>
        {/* [D] 글로벌 reset.css */}
        <GlobalStyle />
        <div className={style.wrap}>
          <h1>Mossim</h1>
          <Footer />
        </div>
      </>
    );
  }
}

export default ExampleComponent;
