import './style/App.css';
import Nav from './Nav';
import './ProfileData';
import ProfileData from './ProfileData';
import Avatar from './Avatar';
import ExperienceData from './ExperienceData';
import EducationData from './EducationData';
import BioText from './Bio';
import './style/profile.css'
import './style/Avatar.css'

function App() {
  return (
    <div>
      <Nav/>
      <main>
        <span className="profile">
          <Avatar/>
          <div className="textData">
            <ProfileData/>
            <ExperienceData/>
            <EducationData/>
            <BioText/>
          </div>
        </span> 
      </main>
    </div>
  );
}

export default App;
