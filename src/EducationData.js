import Datos from "./Datos";

const {education} = Datos;

const EducationData = () => {
    return (
        <section className="education">
            <h2>Education</h2>
            {
                education.map(item =>
                    <li key={item.id}>{item.institute}</li>
                )
            }    
        </section>
    )
}

export default EducationData;