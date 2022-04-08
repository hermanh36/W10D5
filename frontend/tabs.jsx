import React from 'react';
import HeaderTab
 from './header_tab';
class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0
    }

    this.idxHandler = this.idxHandler.bind(this);
  }

  idxHandler(i, e){
    e.target.classList.add('tab-selected');
    this.setState({ index: i });
  }

  render(){
    return (
      <div className="tabs">
        <ul className="headers">
          {this.props.arr.map((el, idx) => {
            return <HeaderTab title={el.title} key={idx + el.title} idx={idx} idxHandler={this.idxHandler} />
          })}
        </ul>
        <article>
          {this.props.arr[this.state.index].content}
        </article>
      </div>
    )
  }
}

export default Tabs;