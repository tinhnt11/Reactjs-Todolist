import React from 'react';
import './App.css';
import TodoList from './TodoList';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      taskName: '', tasks: [] 
    };
  }
  

render() {
  return (
    <div className="App">
     <table border={'1'} >
      <thead>
        <th>Nhiệm vụ 1</th>
        <th>Nhiệm vụ 2</th>
      </thead>
        
      <tbody>
        <tr>
          <td>
            <TodoList name = 'Đi chợ' />
          </td>
          <td>
            <TodoList name = 'Học tiếng Anh' />
          </td>
        </tr>
        </tbody> 
      </table> 

    </div>
  );
  }

}

export default App;
