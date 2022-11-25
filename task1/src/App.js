import { useState } from 'react';
import './index.css';
import data from './data';
import Objects from './Objects';
import UserContext from './userContext';
import data2 from './data2';
import { FiArrowRight } from 'react-icons/fi';

function App() {
  const [color, setColor] = useState();
  const [person, setPerson] = useState(data);
  const [experience, setExperience] = useState(data2);
  const [index,setIndex] = useState(0)

  function changeColor(){
    const letters = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let colors = '#';
    for(let i=0;i<6;i++){
      let randomColor = Math.floor(Math.random()*letters.length);
      colors+=letters[randomColor];
    }
    setColor(colors);
  }
  
  function clearAll(){
    setPerson([]);
  }

  const {profession, name, date, text} = experience[index]
  return (

    <div className='content'>
      <div style={{backgroundColor:color}} className="App">
        <p>{color}</p>
        <button className='changeColor' onClick={changeColor}>change color</button>
      </div>

      <UserContext.Provider value={{person, setPerson}}>
        <div className='birthday'>
          <h1 className='title'> {person.length} birthdays today</h1>
          <div className='objects'>
            <Objects person={person}/>
          </div>
          <button className='clearBtn' onClick={clearAll}>Clear All</button>
        </div>
      </UserContext.Provider> 
      <div className='experience'>
        <h1 className='title'>Experience</h1>
        <div className='exp_container'>
          <div className='name'>
            {experience.map((item, ind) => {
              return(
                <button className={ind === index && 'active'} key={item.id} onClick={() => setIndex(ind)}>
                  {item.name}
                </button>
              )
              
            })}
          </div>
          <div className='exp_info'>
            <h1>{profession}</h1>
            <h3>{name}</h3>
            <p className='date'>{date}</p>
            {text.map((item, ind) => {
              return(
                <div key={ind} className='text'>
                  <FiArrowRight className='arrow'/>
                  <p>{item}</p>
                </div>
              )
            })}
          </div>
        </div> 
        <button className='more_info'>more info</button>
      </div>
    </div>
  );
}
export default App;
