import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListItemsComponent extends Component {
    componentWillMount(){
        this.setState({
            isCompleted:this.props.isCompleted
        });
    }
    isClick= (event) =>{
      event.preventDefault();
      this.props.removeItem(this.props.idItem);
    }
    isChecked  = (event) =>{
        // this.setState({
        //     isCompleted:!this.props.isCompleted
        // });
    }
    isShowItem=()=>{
        if(this.state.isCompleted===false){
            return(<li><input onChange={(event) =>{this.isChecked(event)}} className="checkbox" type="checkbox" /> <span className="todo-text">{this.props.content}</span><a href="/" onClick={(e)=>{this.isClick(e)}} className="remove text-right"><i className="fa fa-trash" /></a><hr /></li>)
        }
        if(this.state.isCompleted===true){
            return(<li><input onChange={(event) =>{this.isChecked(event)}} className="checkbox" type="checkbox" checked/> <span className="todo-text checked">{this.props.content}</span><a href="/" onClick={(e)=>{this.isClick(e)}} className="remove text-right"><i className="fa fa-trash" /></a><hr /></li>)
        }
      
    }
    render() {
        
        return (
            <div>
                 {this.isShowItem()}
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
