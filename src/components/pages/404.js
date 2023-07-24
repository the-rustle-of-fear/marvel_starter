import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";
const Pages404 = () => {
    return(
        <div>
            <ErrorMessage></ErrorMessage>
            <p>Ошибка 404 страница не существует</p> 
            <Link style={{'color' : 'red'}} to="/">Вернуться назад</Link>
        </div>
    )
}

export default Pages404;


