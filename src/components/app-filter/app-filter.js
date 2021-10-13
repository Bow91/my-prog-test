import './app-filter.css'

const AppFilter = (props) => {

    const buttonArr = [
        {name: 'employees', label: 'Все сотрудники'},
        {name: 'star', label: 'На повышение'},
        {name: 'increase', label: 'Выплата премии'},
        {name: 'salary', label: 'З/п больше 1000$'}
    ]

    const buttons = buttonArr.map(({name, label}) => {
            return (
            <button 
                className={(props.select === name) ? 'btn btn-light' : 'btn btn-outline-light'}
                type="button"
                key = {name}
                onClick={() => props.onSearchSelect(name)}>
                {label}
            </button>
    )
    })
    return (
        <div className="btn-group">
            {buttons} 
        </div>
    )

}

export default AppFilter;