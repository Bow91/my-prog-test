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
        ],
        search: '',
        select: 'employees'
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

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {return {...item, [prop]: !item[prop]}} 
        return item;      
      })
    }))
  }

  searchEmployees = (data, search) => {
    if (search.length === 0) {
      return data;
    }
    return data.filter(elem => elem.name.indexOf(search) > -1)
  }

  searchFilter = (data, select) => {
    switch (select) {
      case 'star':
        return data.filter(elem => elem.star === true);
      case 'increase':
        return data.filter(elem => elem.increase === true);
      case 'salary':
        return data.filter(elem => elem.salary > 1000);
      default:
        return data;
    }
  }

  onSearchSelect = (select) => {
    this.setState({select});
  }

  onUpdateSearch = (search) => {
    this.setState({search});
  }

  onSalary = (id, salarys) => {
    this.setState(({data}) => ({
      data: data.map(elem => {
        if (elem.id === id) {
          return {...elem, salary: +salarys.match(/\w/gi).join('')}
        }
      return elem;
      })
    }));
  }
  
  render() {
    
    const {data, search, select} = this.state,
          countEmployees = data.length,
          countIncrease = data.filter(elem => elem.increase === true).length,
          searchVisible = this.searchEmployees(this.searchFilter(data, select), search);
    
    return (
      <div className="App">
        <AppInfo 
          countEmployees = {countEmployees}
          countIncrease = {countIncrease} />
  
        <div className="search-panel">
          <SearchPanel onUpdateSearch = {this.onUpdateSearch} />
          <AppFilter 
            select = {select}
            onSearchSelect = {this.onSearchSelect} />
        </div>
  
        <EmployeesList 
          data = {searchVisible} 
          onDelete = {this.deleteItem} 
          onToggleProp = {this.onToggleProp}
          onSalary = {this.onSalary} />
        <EmployeesAddForm onAddEmployees = {this.addEmployees} />
      </div>
    );
  }
}  

export default App;