import React, { Component } from 'react';
import '../components/list.css';

const  List=({people})=> {
         {console.log(people)}
        return (
            <>
            
             {people.map((person)=>{
                 const{id,name,age,image}=person;
                
                 return(
                     <article key={id} className='list'>
                         <img src={image} alt={name}/>
                         <div className='name'>
                         <h2 >{name}</h2>
                         <p>{age}years</p>
                         </div>

                     </article>
                 )

                 
             })}
            </>
        )
    
}

export default List

