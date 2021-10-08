import { Component } from 'react';
import './employees-add-form.css'


class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: 0
        }
    }

    onGetValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {name, salary} = this.state,
              {onAddEmployees} = this.props;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex">
                    <input type="text"
                            className="form-control new-post-label"
                            placeholder="Введите имя и фамилию" 
                            name="name"
                            value={name}
                            onChange={this.onGetValue} />
                    <input type="text"
                            className="form-control new-post-label"
                            placeholder="З/П в $" 
                            name="salary"
                            value={salary}
                            onChange={this.onGetValue} />

                    <button type="submit" 
                            className="btn btn-outline-light"
                            onClick={(e) => {e.preventDefault();  onAddEmployees(name, salary)}}>
                                Добавить
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;