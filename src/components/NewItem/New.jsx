import React, { useState } from "react";
import NewBottles from "./NewsBottls.module";


const News= ()=>{
    const [lists] = useState([{
        id:1, asd:'Вахтер', img: "img/bottle-left.jpg",
         alk: '<1%', kkal: '35', 
        compound: 'Ржаной хлеб, Вода, Солод, Соль',
        description: 'Терпкий и мощный, вкус этого кваса взбодрит после тяжёлого дня и придаст сил для вечерних приключений!',
        price: '150р.'
    },{
        id:2, asd:'Романтик', img: "img/bottle-right.jpg",
        alk: '0,5%', kkal: '35', 
       compound: 'Ячменный хлеб, Вода, Солод, Апельсин',
       description: 'Лёгкий и освежающий напиток поможет сохранять отличное настроение в течение всего дня.',
       price: '90р.'  
    },
    
])
    return(
<div className="news">
   
        <div className="title"><h2>Новинки</h2> </div>
        
        <div className="bottles">
        {lists.map(listBotles =>
            <NewBottles toCreate={listBotles}  key={listBotles.id}/>
        )}
        
    </div>
</div>
    )
}

export default News