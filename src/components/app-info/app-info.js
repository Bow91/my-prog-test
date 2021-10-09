import './app-info.css';

const AppInfo = ({countEmployees, countIncrease}) => {

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее количество сотрудников: {countEmployees}</h2>
            <h2>Премию получат: {countIncrease}</h2>
        </div>
    )
}

export default AppInfo;