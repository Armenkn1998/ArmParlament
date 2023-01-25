import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { fetchMpsnumber } from "../../store/action/NumbersAction";
import './StepStyle.scss'

interface Ibos {
  id: number,
  name: string,
  lastname: string,
  firstname: string,
  phonenumber: string,
  key: string
}
export const MPsPage = () => {

  const nobos: Ibos[] = []
  const newsortnobos: string[] = []
  const aybub: string[] = []
  const bos: Ibos[] = []

  const [MPs,setMPs]= useState([
    {
        "id": 1,
        "name": "Ալեն",
        "lastname": "Սիմոնյան",
        "firstname": "Ռոբերտի",
        "phonenumber": "14-55",
        "key": "boss"
    },
    {
        "id": 2,
        "name": "Հակոբ",
        "lastname": "Արշակյան",
        "firstname": "Աշոտի",
        "phonenumber": "14-78",
        "key": "noboss"
    },
    {
        "id": 3,
        "name": "Ռուբեն",
        "lastname": "Ռուբինյան",
        "firstname": "Վալոդի",
        "phonenumber": "14-45",
        "key": "boss"
    },
    {
        "id": 4,
        "name": "Տիգրան",
        "lastname": "Աբրահամյան",
        "firstname": "Հրանտի",
        "phonenumber": "14-34",
        "key": "noboss"
    },
    {
        "id": 5,
        "name": "Աշոտիկ",
        "lastname": "Սիմոնյան",
        "firstname": "Հրանտի",
        "phonenumber": "14-63",
        "key": "noboss"
    },
    {
        "id": 6,
        "name": "Վահագն",
        "lastname": "Ալեքսանյան",
        "firstname": "Հովիկի",
        "phonenumber": "14-88",
        "key": "noboss"
    },
    {
        "id": 7,
        "name": "Էդուարդ",
        "lastname": "Աղաջանյան",
        "firstname": "Արթուրի",
        "phonenumber": "14-35",
        "key": "boss"
    },
    {
        "id": 8,
        "name": "Գևորգ",
        "lastname": "Բալդրյան",
        "firstname": "Վահեի",
        "phonenumber": "15-75",
        "key": "noboss"
    },
    {
        "id": 9,
        "name": "Գոռ",
        "lastname": "Սանոսյան",
        "firstname": "Վաչեի",
        "phonenumber": "18-88",
        "key": "noboss"
    },
    {
        "id": 10,
        "name": "Տիգրան",
        "lastname": "Արզաքանչյան",
        "firstname": "Սերգեի",
        "phonenumber": "13-88",
        "key": "noboss"
    }
])

  const newMOs = MPs.filter(item => item.key === "boss")
  bos.push(...newMOs)

  const newnobos = MPs.filter(item => item.key === "noboss")

  const sortnobos = newnobos.sort((a, b) => (a.lastname > b.lastname) ? 1 : -1)
  nobos.push(...sortnobos)

  for (let i = 0; i < nobos.length; i++) {
    aybub.push(nobos[i].lastname[0])

  }

  for (let i = 0; i < aybub.length; i++) {
    if (aybub[i] !== aybub[i + 1]) {
      newsortnobos.push(aybub[i])
    }
  }

  return (
    <div className='Mps'>
      <table className='table1'>
        <thead>
          <tr>
            <th className='th1'>Հ․Հ․</th>
            <th className='th2'>Անուն Ազգանուն Հայրանուն</th>
            <th className='th4'>Ներքին  Հեռ․</th>
          </tr>
        </thead>
        <tbody>
          {
            bos.map((item, index) =>
              <tr key={item.id}>
                <td className='td1'>{index + 1}</td>
                <td className='td2'>{item.name} {item.firstname} {item.lastname}</td>
                <td className='td4'>{item.phonenumber}</td>
              </tr>
            )
          }
        </tbody>
      </table>
      <div className=''>
        {
          newsortnobos.map((item: string, index: number) =>
            item !== item + 1 &&
            <div key={index}><div>
              <div className='alfa'> <p>{item}</p></div>
            </div>
              <table className='table0'>
                <tbody>
                  {nobos.map((iteme, index) =>
                    iteme.lastname[0] === item &&
                    <tr key={iteme.id}>
                      <td className='td1'>{index + 4}</td>
                      <td className='td2'>{iteme.lastname}      {iteme.name} {iteme.firstname}</td>
                      <td className='td4'>{iteme.phonenumber}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )
        }
      </div>
    </div>
  )
}
