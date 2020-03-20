import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListItemsComponent extends Component {
    isClick= (event) =>{
      event.preventDefault();
      this.props.removeItem(this.props.idItem);
    }
    render() {
        return (
            <div>
                 <li><input className="checkbox" type="checkbox" /> <span className="todo-text">{this.props.content}</span><a href="/" onClick={(e)=>{this.isClick(e)}} className="remove text-right"><i className="fa fa-trash" /></a><hr /></li>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        removeItem: (id_item) => {
            dispatch({type:"REMOVE_TO_DO",id_item})
        }
    }
}
export default connect(null, mapDispatchToProps)(ListItemsComponent)
