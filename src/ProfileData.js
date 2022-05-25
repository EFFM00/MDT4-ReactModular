import Datos from "./Datos";

const { personalData } = Datos;

const ProfileData = () => {
    return (
        <span className="profile">
            console.log(personalData);
            <div className="imgProfile">
                {/* <img src={pe} alt="profile photo"></img> */}
            </div>
            <div className="textData">
                <section className="personalData">
                    <h2>Personal Information:</h2>
                    {/* <p>Name: {name}</p> */}
                    {/* <p>Lastname: {lastname}</p> */}
                    {/* <p>Age: {age}</p> */}
                    {/* <p>Nationality: {nationality}</p> */}
                </section>
            </div>
        </span>            
    )
}

export default Datos;