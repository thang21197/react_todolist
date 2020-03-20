import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddComponet extends Component {
    getTodo = (event) =>{
      var value=event.target.value;
      var name=  event.target.name;
      this.setState({
          [name]:value
      });  
    }
    isAddtodo = () =>{
        if(this.state.content!==""){
            this.props.addTodo(this.state.content);
        }     
    }
    render() {
        return (
            <div>   
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-todo-input-wrap">
                        <div className="main-todo-input fl-wrap">
                            <div className="main-todo-input-item"> 
                            <input onChange={(e) =>{this.getTodo(e)}} name="content" type="text" id="todo-list-item" placeholder="What will you do today?" /></div> 
                            <button onClick={() =>{this.isAddtodo()}} className="add-items main-search-button">ADD</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addTodo: (data) => {
            dispatch({type:'ADD_TO_DO',data})
        }
    }
}
export default connect(null,mapDispatchToProps)(AddComponet)
