import './employees-list-item.css'

const EmployeesListItem = (props) => {

        const {name, salary, increase, star, onDelete, onToggleProp} = props;

        let incrClass = increase ? ' increase' : '';
        let starClass = star ? ' like' : '';

        return (
            <li className={"list-group-item justify-content-betwen" + incrClass + starClass}>
                <span className="list-group-item-label" onClick={onToggleProp} data-toggle = "star">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button"
                        className={"btn-cookie btn-sm" + incrClass}>
                            <i className="fas fa-cookie" onClick={onToggleProp} data-toggle = "increase" />
                    </button>
                    <button type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                            <i className="fas fa-trash" />
                    </button>
                    <i className="fa fa-star"></i>
                </div>
            </li>
        )
    }
export default EmployeesListItem;