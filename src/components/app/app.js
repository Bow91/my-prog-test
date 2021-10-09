import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data:  [
        {name: "Иван Петров", salary: 1000, increase: true, star: true, id: 1},
        {name: "Алексей Петров", salary: 850, increase: false, star: false, id: 2},
        {name: "Пётр Иванов", salary: 1100, increase: true, star: false, id: 3},
        {name: "Николай Сидоров", salary: 950, increase: false, star: false, id: 4},
        {name: "Макар Трофимов", salary: 1050, increase: false, star: false, id: 5},
        {name: "Александр Серов", salary: 1500, increase: false, star: false, id: 6}
      ]
    }
    this.maxId = 7;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(elem => elem.id !== id)
      }
    })
  }

  addEmployees = (names, salarys) => {
    const newItem = {
      name: names,
      salary: salarys,
      increase: false,
      star: false,
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {  
        data: newArr
      }
    })
  }

  // onToggleIncrease = (id) => {
  //   this.setState(({data}) => {
  //     const index = data.findIndex(elem => elem.id === id),
  //           old = data[index],
  //           newItem = {...old, increase: !old.increase},
  //           newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      
  //     return {
  //       data: newArr
  //     }
  //   })
  // }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {return {...item, [prop]: !item[prop]}} 
        return item;      
      })
    }))
  }
  
  render() {
    const countEmployees = this.state.data.length,
          countIncrease = this.state.data.filter(elem => elem.increase === true).length;
    return (
      <div className="App">
        <AppInfo 
          countEmployees = {countEmployees}
          countIncrease = {countIncrease} />
  
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
  
        <EmployeesList 
          data = {this.state.data} 
          onDelete = {this.deleteItem} 
          onToggleProp = {this.onToggleProp} />
        <EmployeesAddForm onAddEmployees = {this.addEmployees} />
      </div>
    );
  }
}  

export default App;