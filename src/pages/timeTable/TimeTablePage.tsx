import { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { fetchTimeTable } from "../../store/action/timeTableActions";
import "./timeTable.scss"


export const TimeTablePage = () => {

  const [admission,setAdmission]= useState([
    {
        "id": 1,
        "name": "Արտաքին հարաբերությունների",
        "day": "02.11.2022",
        "time": "10.00-12.00"
    },
    {
        "id": 2,
        "name": "Եվրոպական ինտեգրման հարցերի",
        "day": "03.11.2022",
        "time": "15.00-17.00"
    },
    {
        "id": 3,
        "name": "Տարածաշրջանային և եվրասիական ինտեգրման հարցերի",
        "day": "04.11.2022",
        "time": "15.00-17.00"
    },
    {
        "id": 4,
        "name": "Տնտեսական հարցերի",
        "day": "08.11.2022",
        "time": "11.00-13.00"
    },
    {
        "id": 5,
        "name": "Պետական-իրավական հարցերի",
        "day": "10.11.2022",
        "time": "10.00-12.00"
    },
    {
        "id": 6,
        "name": "Տարածքային կառավարման, տեղական ինքնակառավարման, գյուղատնտեսության և շրջակա միջավայրի պահպանության հարցերի մշտական հանձնաժողով",
        "day": "11.11.2022",
        "time": "11.00-13.00"
    },
    {
        "id": 7,
        "name": "Մարդու իրավունքների պաշտպանության և հանրային հարցերի",
        "day": "21.11.2022",
        "time": "11.00-13.00"
    },
    {
        "id": 8,
        "name": "Ֆինանասավարկային և բյուջետային հարցերի",
        "day": "22.11.2022",
        "time": "10.00-12.00"
    },
    {
        "id": 9,
        "name": "Պաշտպանության և անվտանգային հարցերի",
        "day": "23.11.2022",
        "time": "15.00-17.00"
    },
    {
        "id": 10,
        "name": "Աշխատանքի և սոցիալական հարցերի",
        "day": "24.11.2022",
        "time": "10.00-12.00"
    },
    {
        "id": 11,
        "name": "Առողջապահության հարցերի",
        "day": "24.11.2022",
        "time": "14.00-16.00"
    },
    {
        "id": 12,
        "name": "Գիտության, կրթության, մշակույթի, սփյուռքի, երիտասարդության և սպորտի հարցերի",
        "day": "25.11.2022",
        "time": "15.00-17.00"
    }
])

const [citizenAdmission,setCitizenAdmission] = useState( [
  {
      "id": 1,
      "name": "Ռուբեն Ռոիբինյան",
      "day": "14.11.2022",
      "time": "14.00-16.00"
  },
  {
      "id": 2,
      "name": "Եվրոպական ինտեգրման հարցերի",
      "day": "18.11.2022",
      "time": "14.00-16.00"
  }
])

  return (
    <div className='depNum'>
      <Header/>
      <div className='main_1'>
        <div className='header_'>
          <img src="./images/day.png" alt='' />
          <h2>Քաղաքացիների ընդունելության ժամանակացույց</h2>
        </div>

        <h3 className='h3-1'>ԺԱՄԱՆԱԿԱՑՈՒՅՑ ԱԶԳԱՅԻՆ ԺՈՂՈՎԻ ՄՇՏԱԿԱՆ ՀԱՆՁՆԱԺՈՂՈՎՆԵՐԻ ԿՈՂՄԻՑ  ՔԱՂԱՔԱՑԻՆԵՐԻ ԸՆԴՈՒՆԵԼՈՒԹՅՈՒՆՆԵՐԻ(2022 թ. նոյեմբեր)</h3>

        <table className='secondTable'>
          <thead>
            <tr>
              <th>Ստորաբաժանման անվանումը</th>
              <th>Օրը</th>
              <th>Ժամը</th>
            </tr>
          </thead>
          {
            admission.map(item=> <tbody key={item.id}><tr> 
              <td>{item.name}</td>
              <td>{item.day}</td>
              <td>{item.time}</td>
              </tr></tbody>
            )
          }
        </table>

        <h3 className='h3-2'>ԺԱՄԱՆԱԿԱՑՈՒՅՑ ԱԶԳԱՅԻՆ ԺՈՂՈՎԻ ՆԱԽԱԳԱՀԻ ՏԵՂԱԿԱԼՆԵՐԻ ԿՈՂՄԻՑ ԿԱԶՄԱԿԵՐՊՎՈՂՔԱՂԱՔԱՑԻՆԵՐԻ ԸՆԴՈՒՆԵԼՈՒԹՅՈՒՆՆԵՐԻ</h3>
        <table>
          <thead className='secondTable'>
            <tr>
              <th>Ստորաբաժանման անվանումը</th>
              <th>Օրը</th>
              <th>Ժամը</th>
            </tr>
          </thead>
        {
          citizenAdmission.map(item=> <tbody key={item.id}><tr> 
            <td>{item.name}</td>
            <td>{item.day}</td>
            <td>{item.time}</td>
            </tr></tbody>
          )
        }
        </table>
      </div>
      
    </div>
  )
}
