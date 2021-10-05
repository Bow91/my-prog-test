import { Component } from 'react';
import './employees-list-item.css'

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            star: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    onStar = () => {
        console.log('s');
        this.setState(({star}) => ({
            star: !star
        }))
    }

    render(){
        const {name, salary} = this.props;
        const {increase, star} = this.state;

        let incrClass = increase ? ' increase' : '';
        let starClass = star ? ' like' : '';

        return (
            <li className={"list-group-item justify-content-betwen" + incrClass + starClass}>
                <span className="list-group-item-label" onClick={this.onStar}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button"
                        className="btn-cookie btn-sm">
                            <i className="fas fa-cookie" onClick={this.onIncrease} />
                    </button>
                    <button type="button"
                        className="btn-trash btn-sm">
                            <i className="fas fa-trash" />
                    </button>
                    <i className="fa fa-star"></i>
                </div>
            </li>
        )
    }
}
export default EmployeesListItem;