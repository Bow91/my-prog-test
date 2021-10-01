import './employees-list-item.css'

const EmployeesListItem = () => {
    return (
        <li className="list-group-item justify-content-betwen">
            <span className="list-group-item-label">Ivan Petrov</span>
            <input type="text" className="list-group-item-input" defaultValue="1000$" />
            <div className="d-flex justify-content-center align-items-center">
                <button type="button"
                    className="btn-cookie btn-sm">
                        <i className="fas fa-cookie" />
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

export default EmployeesListItem;