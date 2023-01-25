import {useEffect, useState} from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { fetchCommitte } from "../../store/action/NumbersAction";
import './StepStyle.scss'

export const CommittePage = () => {

  // const {Committe} = useAppSelector(state => state.Committes)
  // const dispatch = useAppDispatch()
  
  // useEffect(()=>{
  //   dispatch(fetchCommitte())
  // },[])

  const [Committe,setCommitte] = useState( [
    {
        "id": 1,
        "name": "Աշխատանքի և սոցիալական հարցերի",
        "member1": "Տիգրանյան Հերիքնազ",
        "member2": "Ավետիսյան Թադևոս",
        "cityphone": " ",
        "internalphone": "13-88",
        "internalphone2": " "
    },
    {
        "id": 2,
        "name": "Առողջապահության հարցերի",
        "member1": "Զեյնալյան Նարեկ",
        "member2": "Բադալյան Լուսինե",
        "cityphone": "52-54-30",
        "internalphone": "13-80",
        "internalphone2": " "
    },
    {
        "id": 3,
        "name": "Գիտության, կրթության, մշակույթի, սփյուռքի, երիտասարդության և սպորտի հարցերի",
        "member1": "Գաբրիելյան Սիսակ",
        "member2": "Ղազարյան Թագուհի",
        "cityphonr": " ",
        "internalphone": "13-88",
        "internalphone2": " "
    },
    {
        "id": 4,
        "name": "Եվրոպական ինտեգրման հարցերի",
        "member1": "Եղոյան Արման ",
        "member2": "Գալստյան Մերի ",
        "cityphone": " ",
        "internalphone": "13-88",
        "internalphone2": " "
    },
    {
        "id": 5,
        "name": "Մարդու իրավունքների պաշտպանության և հանրային հարցերի",
        "member1": "Թովմասյան Թագուհի",
        "member2": "Բաքոյան Ռուստամ",
        "cityphone": "52-67-01",
        "internalphone": "19-88 ",
        "internalphone2": "16-44 "
    },
    {
        "id": 6,
        "name": "Պետական-իրավական հարցերի",
        "member1": "Վարդանյան Վլադիմիր",
        "member2": "Արուսյակ Ջուլհակյան",
        "cityphonr": "52-78-20",
        "internalphone": "15-97 ",
        "internalphone2": "13-85 "
    },
    {
        "id": 7,
        "name": "Տարածաշրջանային և եվրասիական ինտեգրման հարցերի",
        "member1": " ",
        "member2": "Հակոբյան Վաղարշակ",
        "cityphone": "58-80-02",
        "internalphone": "13-88",
        "internalphone2": " "
    },
    {
        "id": 8,
        "name": "Տարածքային կառավարման, տեղական ինքնակառավարման, գյուղատնտեսության և շրջակա միջավայրի պահպանության հարցերի մշտական հանձնաժողով",
        "member1": "Ղալումյան Վահե",
        "member2": "Մկրտչյան Արեն",
        "cityphone": "58-77-60 ",
        "internalphone": "13-98",
        "internalphone2": " "
    },
    {
        "id": 9,
        "name": "Տնտեսական հարցերի",
        "member1": " ",
        "member2": "Թունյան Բաբկեն",
        "cityphone": " ",
        "internalphone": "13-88",
        "internalphone2": " "
    },
    {
        "id": 10,
        "name": "Ֆինանասավարկային և բյուջետային հարցերի",
        "member1": "Պապոյան Գևորգ",
        "member2": "Խաչատրյան Արթուր",
        "cityphone": "54-48-82",
        "internalphone": "13-78 ",
        "internalphone2": "13-65 "
    }
])

  return (
    <div>
             <table className='table2'>
      <thead>
        <tr>
          <th className='th1'>Հանձնաժողովի&nbsp; Անվանումը</th>
          <th className='th2'>Անդամներ</th>
          <th className='th3'>Քաղ. Հեռ․</th>
          <th className='th4'>Ներքին  Հեռ․</th>
        </tr>
      </thead>
      <tbody>
        {
          Committe.map(item=>
            <tr key={item.id}>
              <td className='td1'>{item.name}</td>
              <td className='td2'>{item.member1}<br/><span>տեղ.</span>{item.member2}</td>
              <td className='td3'>{item.cityphone}</td>
              <td className='td4'>{item.internalphone}<br/>{item.internalphone2}</td>
                         
            </tr>
            )
        }
      </tbody>
    </table>
    </div>
  )
}
