import Datos from "./Datos";

const {personalData:{name, lastname, age, nationality}} = Datos;

const ProfileData = () => {
    return (
        <section className="personalData">
            <h2>Personal Information:</h2>
            <p>Name: {name}</p>
            <p>Lastname: {lastname}</p>
            <p>Age: {age}</p>
            <p>Nationality: {nationality}</p>
        </section>
    )
}

export default ProfileData;