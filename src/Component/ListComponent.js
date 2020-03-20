import React, { Component } from 'react';
import ListItemsComponent from './ListItemsComponent';
import { connect } from 'react-redux';
import datafirebase from '../firebaseConnect';

class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            listTodo:[]
        }
    }
    componentWillMount(){
        //  datafirebase.once("value").then((snapshot)=>{
        //     var newArray=[];
        //     snapshot.forEach((snapshotChild)=>{
        //              var listkey=snapshotChild.key;
        //              var value=snapshotChild.val();
        //              newArray.push({
        //                 key:listkey,
        //                 value:value
        //        })
        //      }) 
        //      this.setState({
        //         listTodo:newArray
        //      });        
        // });   
        datafirebase.on("value",(snapshot)=>{
            var newArray=[];
            snapshot.forEach((snapshotChild)=>{
                     var listkey=snapshotChild.key;
                     var value=snapshotChild.val();
                     newArray.push({
                        key:listkey,
                        value:value
               })
             }) 
             this.setState({
                listTodo:newArray
             });        
        });  
    }
    showListItem=()=>{
        return this.state.listTodo.map((value)=>{
            return <ListItemsComponent key={value.key} content={value.value} idItem={value.key}/>      
        })
    }
    render() {  
        
        return (
            <div>
                <div className="main-todo-input-wrap">
              <div className="main-todo-input fl-wrap todo-listing">
              <ul id="list-items">
              {this.showListItem()}
            </ul>
              </div>
            </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        database: state.database
    }
}
export default connect(mapStateToProps)(ListComponent)
