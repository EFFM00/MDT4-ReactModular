import Datos from "./Datos";
import './style/dates.css';

const {experience} = Datos;

const ExperienceData = () => {
    return (
        <section className="experience">
            <h2>Experience in movies</h2>
            {
                experience.map(item =>
                    <li key={item.id}>{item.movie}</li>
                )
            }    
        </section>
    )
}

export default ExperienceData;