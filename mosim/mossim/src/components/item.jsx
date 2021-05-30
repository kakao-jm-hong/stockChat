import React from 'react';

const DEMO_PROPS = {
  list_type: 'test',
  item: [{
    item_title: '아이템 타이틀 1',
    item_content: '아이템 내용 1',
    thumbnail: 'http://dev.ui.naver.com/tmp/?100x100'
  },{
    item_title: '아이템 타이틀 2',
    item_content: '아이템 내용 2',
    thumbnail: 'http://dev.ui.naver.com/tmp/?100x100'
  },{
    item_title: '아이템 타이틀 3',
    item_content: '아이템 내용 3',
    thumbnail: ''
  }]
}

function Thumbnail (props) {
  const { url } = props;

  return url && (
        <div className="thumbnail_area">
          <img src={url} alt=""></img>
        </div>
      )
}

class Item extends React.Component {
  render() {
    const { item, list_type } = DEMO_PROPS;    
    
    return (
      <ul className="list">
        {
          item.map(
            (value, index) => {
              return (
                <li className="item" key={index}>
                  <Thumbnail url={value.thumbnail}></Thumbnail>
                  {
                    list_type === 'home' ? <a href="#home">go Home</a> : <span>not Home</span>
                  }
                  <strong className="item_title">{list_type === 'home' ? 'HOME' : value.item_title}</strong>
                  <p className="item_content">{value.item_content}</p>
                </li>
              );
            }
          )
        }
      </ul>      
    );
  }
}

export default Item;