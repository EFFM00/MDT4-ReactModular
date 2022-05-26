import Datos from "./Datos";

const {personalData:{avatar}} = Datos;

const Avatar = () => {
    return (
        <div className="imgProfile">
            <img src={avatar} alt="profile"></img>
        </div>
    )
}

export default Avatar;