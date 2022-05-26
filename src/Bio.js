import Datos from "./Datos";

const {bio} = Datos;

const BioText = () => {
    return (
        <section className="bio">
            <h2>Bio</h2>
            <p>{bio}</p>
        </section>
    )
}

export default BioText;