import React from 'react';
import './Todo.css';


class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: props.id, value: props.value, done : props.done};
  }

  completeTask = () => {
    this.setState({ done: true});
    this.props.completeTask(this.props.id);
  }

render() {
  let checkDone = '';
  if(!this.state.done) {
    checkDone = (
    <img src='./assets/326572_check_icon.png' 
    alt="Hoàn thành" width={20} style={{cursor: 'pointer'}} title='Bấm để hoàn thành task'
    onClick={this.completeTask}  
    />);
  }
  return (
    <div className="todo aligned">
     {checkDone}
      <img className={this.state.done ? 'done' : ''}
      src='./assets/4781812_bin_delete_file_garbage_recycle_icon.png' 
        alt="Hoàn thành" width={25} style={{cursor: 'pointer'}}  title='Bấm để xóa task'
        onClick={() => this.props.deleteTask(this.props.id)}
        />
      &nbsp;&nbsp;
      <span className={this.state.done ? 'done' : ''} >
          {this.state.value}
        </span>
      
    </div>
  );
  }

}

export default Todo;
