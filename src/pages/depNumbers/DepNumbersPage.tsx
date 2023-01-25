import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Header } from '../../components/Header/Header';

import {useNavigate} from 'react-router-dom'
import "./depNum.scss"


export const DepNumbersPage = () => {


  const navigate = useNavigate();

  const  [depnum,setDepnum] = useState( [
    {
        "id": 1,
        "title": "Քարտուղարություն",
        "tel": "12-54"
    },
    {
        "id": 2,
        "title": "Մարդկային ռեսուրսների կառավարման վարչություն",
        "tel": "13-73"
    },
    {
        "id": 3,
        "title": "Արտաքին կապերի վարչություն",
        "tel": "13-32"
    },
    {
        "id": 4,
        "title": "Արարողակարգի վարչություն",
        "tel": "12-93"
    },
    {
        "id": 5,
        "title": "Ֆինանսական կառավարման եւ հաշվառման վարչություն",
        "tel": "16-05"
    },
    {
        "id": 6,
        "title": "Փորձագիտական եւ վերլուծական վարչություն",
        "tel": "13-61"
    },
    {
        "id": 7,
        "title": "Հասարակայնության հետ կապերի եւ հաղորդակցության վարչություն",
        "tel": "12-10"
    },
    {
        "id": 8,
        "title": "Քաղաքացիների ընդունելության եւ փաստաթղթաշրջանառության վարչություն",
        "tel": "14-07"
    },
    {
        "id": 9,
        "title": "Վարչատնտեսական վարչություն",
        "tel": "13-71"
    },
    {
        "id": 10,
        "title": "Ավտոմատ կառավարման եւ տեղեկատվական համակարգերի վարչություն",
        "tel": "14-21"
    },
    {
        "id": 11,
        "title": "Ներքին աուդիտի բաժին",
        "tel": "13-78"
    },
    {
        "id": 12,
        "title": "Իրավական ապահովման եւ սպասարկման բաժին",
        "tel": "14-91"
    },
    {
        "id": 13,
        "title": "Ազգային ժողովի բյուջետային գրասենյակ",
        "tel": "13-84"
    },
    {
        "id": 14,
        "title": "Զորահավաքային նախապատրաստության, զորահավաքային ծրագրերի եւ     քաղաքացիական պաշտպանության բաժին",
        "tel": "13-84"
    }
])


const [add, setAdd] = useState(false)
const [edit, setEdit] = useState(0)
const [value, setValue] = useState('')
const [value1, setValue1] = useState('')



const remove= (id:any)=>{
  const newComittes = depnum.filter(item => item.id !== id);
  setDepnum(newComittes)

}

const saveData= (value:any,value1:any,id:any)=>{
 
  
  const newComittes = depnum.map(item => {
    if(item.id === id) {
      item.id = id
      item.title = value;
      item.tel = value1
    }
    return item});
  setDepnum(newComittes)

}

const additem = (value:any, value1:any,e:any)=>{
  e.preventDefault()
const newitem ={
  id:Date.now(),
  title:value,
  tel:value1
}
setDepnum([...depnum,newitem])
console.log(depnum);

}
const admin:any = localStorage.getItem('user')


return ( 
  <div className='depnum'> 
    <Header/> 
    <div className='main_2'> 
      <div className='header_'> 
        <img src="./images/Phones.png" alt='' /> 
        <h2>Կառուցվածքային ստորաբաժանումների հեռախոսահամարներ</h2> 
      </div> 

      {add ? <form>
        <label>Ստորաբաժանման անվանումը</label>
        <textarea value={value} onChange={(e:any) => {setValue(e.target.value)}}></textarea>

        <label>Ներքին հեռ․</label>
        <textarea value={value1} onChange={(e:any) => {setValue1(e.target.value)}}></textarea>

        <div className='form_div'>
          <button onClick={(e) => {additem(value, value1,e);setAdd(!add)}} >Ավելացնել</button>
          <button onClick={()=> setAdd(!add)} >Չեղարկել</button>
        </div> 

      </form>  : <table> 
        <thead> 
          <tr> 
            <th>Ստորաբաժանման անվանումը</th> 
            <th>Ներքին հեռ․</th>
          </tr> 
        </thead> 
      { 
        depnum.map((item:any, index:number)=> <tbody key={item.id}> 
          {edit === item.id  ? <tr className='textarea_tr'> 
            <td className='textarea_td'> 
              <textarea value={value} onChange={(e:any) => {setValue(e.target.value)}}></textarea> 
            </td> 
            <td className='textarea_td'> 
              <textarea value={value1} onChange={(e:any) => {setValue1(e.target.value)}}></textarea> 
            </td> 
            <td className='textarea_td'> 
              <button className='save'> <i onClick={() => { saveData( value,value1,item.id);setEdit(0)}} className="fa-regular fa-square-check"></i></button>
            </td> 
            </tr> : <tr> 
            <td>{item.title}</td> 
            <td>{item.tel}</td> 
            <td>{admin && <button onClick={() => { 
            
              setEdit(item.id) 
              setValue(item.title) 
              setValue1(item.tel) 
            }}><i className="fa-solid fa-pen"></i></button>} 
                {admin && <button onClick={() => { 
                remove(item.id,) 
                }}><i className="fa-regular fa-trash-can"></i></button> } 
            </td>   
          </tr>} 
          </tbody> 
        ) 
      } 
      {admin && <i onClick={() =>{setAdd(!add)}} className="fa-solid fa-plus ADD"></i>}
      </table>
    
    }
    </div> 
   
</div> 
)
}