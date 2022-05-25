import Datos from "./Datos";
import './style/ProfileData.css';

const {personalData:{avatar}} = Datos;

const Avatar = () => {
    return (
        <div className="imgProfile">
            <img src={avatar} alt="profile"></img>
        </div>
    )
}

export default Avatar;