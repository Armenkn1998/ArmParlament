import {useEffect,useState} from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { fetchFraction } from "../../store/action/NumbersAction";
import './StepStyle.scss'



export const FactionPage = () => {

const [fraction,setFraction ] = useState( [
  {
      "id": 1,
      "name": "Ուժ Հայրենաց>",
      "leader": "Տիգրան Արզաքանչյան",
      "member": "Նատալյա Ռոտենբեռգ",
      "cityphone": "",
      "internalphone": "13-33"
  },
  {
      "id": 2,
      "name": "Քաղաքացիական Պայմանագիր",
      "leader": "Նիկոլ Փաշինյան",
      "member": "Հայկ Կոնջորյան",
      "cityphone": "",
      "internalphone": "13-70"
  },
  {
      "id": 3,
      "name": "Հայաստան Դաշինք",
      "leader": "Ռոբերտ Քոչարյան",
      "member": "Սեյրան Օհանյան",
      "cityphone": "",
      "internalphone": "13-88"
  },
  {
      "id": 4,
      "name": "Պատիվ ՈՒնեմ",
      "leader": "Սերժիկ Սարգսյան",
      "member": "Արթուր Վանեցյան",
      "cityphone": "",
      "internalphone": "14-65"
  }
],)

  return (
    <div>
    <table className='table3'>
      <thead>
        <tr>
          <th className='th1'>Կուսակցության&nbsp; Անվանումը</th>
          <th className='th2'>Անդամներ</th>
          <th className='th3'>Քաղ. Հեռ․</th>
          <th className='th4'>Ներքին  Հեռ․</th>
        </tr>
      </thead>
      <tbody>
        {
          fraction.map(item=>
            <tr key={item.id}>
              <td className='td1'>{item.name}</td>
              <td className='td2'>{item.leader}<br/><span>քարտուղար </span>{item.member}</td>
              <td className='td3'>{item.cityphone}</td>
              <td className='td4'>{item.internalphone}</td>
                         
            </tr>
            )
        }
      </tbody>
    </table>
    </div>
  )
}
