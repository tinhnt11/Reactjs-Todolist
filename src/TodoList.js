import React from 'react';
import Todo from './Todo';
import  './TodoList.css';



class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.todoRef = React.createRef();
        this.state = { 
          todoListName: props.name, taskName: '', tasks: [] 
        };
      }
      
    myTaskChangeHandler = (event) => {
      this.setState({ taskName: event.target.value });
    };
    
    addTask = () => {
      if (this.state.taskName === ''){
        return;
      }
      const id = this.state.tasks.length;
      const name = this.state.taskName;
      this.state.tasks.push({id, name, done: false});
      this.setState({ taskName: ''});
    
    }
    
    deleteTask = (id) => {
      const tasks = this.state.tasks.filter((task )=> task.id !== id)
      // console.log('sau khi xóa', tasks);
      this.setState({ tasks });
    }
    
    completeTask = (id) => {
      const tasks = this.state.tasks;
      tasks.forEach((task) => {
        if (task.id === id) {
          task.done = true;
        }
      })
    };
    
    
    
    
    render() {
      return (
        <div className="App">
         {this.state.todoListName}
          <br/>
            <div className='aligned'>
            <img src='./assets/172525_plus_icon.png' 
            alt="Add task" width={25} 
            style={{cursor: 'pointer'}}
            title='Bấm để thêm task'
            onClick= {()  => this.addTask()}
            />
            <input type="text" 
            value={this.state.taskName}
            onChange={this.myTaskChangeHandler}/>
            </div>
    
            <ul style={{ paddingLeft: '10px'}}>
              {this.state.tasks.map((value, index) =>{
                return ( 
                <Todo 
                ref={this.todoRef}
                key ={value.id} 
                id ={value.id} 
                value={value.name} 
                deleteTask={this.deleteTask} 
                completeTask={this.completeTask} 
                
                />
                );
              })}
            </ul>
    
          
        </div>
      );
      }
    

      
}

export default TodoList;
