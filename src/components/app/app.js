import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {

  const data = [
    {name: "Иван Петров", salary: 1000, increase: true, id: 1},
    {name: "Алексей Петров", salary: 850, increase: false, id: 2},
    {name: "Пётр Иванов", salary: 1100, increase: true, id: 3},
    {name: "Николай Сидоров", salary: 950, increase: false, id: 4},
    {name: "Макар Трофимов", salary: 1050, increase: false, id: 5},
    {name: "Александр Серов", salary: 1500, increase: false, id: 6}
  ]

  return (
    <div className="App">
      <AppInfo/>

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data = {data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;