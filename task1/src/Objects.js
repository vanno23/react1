import UserContext from "./userContext";
import {useContext} from "react";
import { BsFillTrashFill } from 'react-icons/bs';

function Objects({person}){
    const user = useContext(UserContext);

    function deleteObject(deleteId){
        user.setPerson(person.filter(item => item.id !== deleteId))
      }
    
    return (
        <>
        {person.map((item) => {
            let {id,name,age,img} = item;

            return(
              <div key={id} className='mainObject'>
                <div className='object'>
                    <img src={img}/>
                    <div className='info'>
                    <h1>{name}</h1>
                    <h3>{age} years</h3>
                    </div>
                </div>
                <button className="deleteBtn" onClick={() => deleteObject(item.id)}><BsFillTrashFill /></button>
              </div>
            )
        })}
        </>
    )

}

export default Objects