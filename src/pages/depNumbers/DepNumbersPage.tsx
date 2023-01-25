import { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { fetchDepNum } from "../../store/action/depNumbersActions";
import "./depNum.scss"


export const DepNumbersPage = () => {

  // const {depnum} = useAppSelector(state => state.telNumbers)
  // const dispatch = useAppDispatch()
  
  // useEffect(()=>{
  //   dispatch(fetchDepNum())
  // },[])

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

  return (
    <div className='timeTable'>
    <Header/>
    <div className='main_2'>
      <div className='header_'>
        <img src="./images/Phones.png" alt='' />
        <h2>Կառուցվածքային ստորաբաժանումների հեռախոսահամարներ</h2>
      </div>

      <table>
        <thead>
          <tr>
            <th>Ստորաբաժանման անվանումը</th>
            <th>Ներքին հեռ․</th>
          </tr>
        </thead>
      {
        depnum.map(item=> <tbody key={item.id}><tr> 
          <td>{item.title}</td>
          <td>{item.tel}</td>
          </tr></tbody>
        )
      }
      </table>
    </div>
    
  </div>
  )
}