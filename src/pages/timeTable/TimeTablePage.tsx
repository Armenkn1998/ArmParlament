import { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage} from '../../components/Error/Error'
import "./timeTable.scss"


export const TimeTablePage = () => {

  const navigate = useNavigate()

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

  

  const [edit, setEdit] = useState(-1)
  const [value, setValue] = useState('')
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')

  const [editCitizen, seteditCitizen] = useState(-1)
  const [valueCitizen, setValueCitizen] = useState('')
  const [valueCitizen1, setValueCitizen1] = useState('')
  const [valueCitizen2, setValueCitizen2] = useState('')

  const [add, setAdd] = useState(false)
  const [add1, setAdd1] = useState(false)

  const [error, setError] = useState("")

  
  
  const adminDelete = (id:any)=>{
    const newComittes = admission.filter(item => item.id !== id);
    setAdmission(newComittes)
  }
  
  const adminDeleteCitizen = (id:any)=>{
    const newComittes = citizenAdmission.filter(item => item.id !== id);
    setCitizenAdmission(newComittes)
  }


  
  function adminAdd() {
    setValue("")
    setValue1("")
    setValue2("")
    setAdd(!add)
  }

  function adminAdd1() {
    setValueCitizen("")
    setValueCitizen1("")
    setValueCitizen2("")
    setAdd1(!add1)
  }


  
  function adminSave1(id:any, valueCitizen:any, valueCitizen1:any, valueCitizen2:any) {
    const newComittes = citizenAdmission.map(item => {
      if(item.id === id) {
        item.id = id;
        item.name = valueCitizen;
        item.day = valueCitizen1;
        item.time = valueCitizen2;
      }
      return item});
      setCitizenAdmission(newComittes)
      setAdd1(false)
  }


  function adminSave(id:any, value:any, value1:any, value2:any, e:any) {
    e.preventDefault()
    const newComittes = admission.map(item => {
      if(item.id === id) {
        item.id = id;
        item.name = value;
        item.day = value1;
        item.time = value2;
      }
      return item});
      setAdmission(newComittes);
      setAdd(false)
  }






  function adminsSave(value:any, value1:any, value2:any, e:any) {
    e.preventDefault()
    setError('');
    if(value.trim().length=== 0 || value1.trim().length=== 0){
    setError('Անհրաժեշտ է լրացնել');
      return
    }
    const newInfo = {
      id: Date.now(),
      name: value,
      day: value1,
      time: value2,
    }
    setAdmission([...admission, newInfo]);
    setAdd(!add)
  }

  function adminsSave1(valueCitizen:any, valueCitizen1:any, valueCitizen2:any, e:any) {
    e.preventDefault()
    setError('');
    if(valueCitizen.trim().length=== 0 || valueCitizen1.trim().length=== 0){
      setError('Անհրաժեշտ է լրացնել');
      return
    }
    const newInfo = {
      id: Date.now(),
      name: valueCitizen,
      day: valueCitizen1,
      time: valueCitizen2,
    }
    setAdmission([...admission, newInfo]);
    setAdd1(!add1)
  }
  const admin:any = localStorage.getItem('user')

  return (
    <div className='timeTable'>
      <Header />
      <div className='main_1'>
        <div className='header_'>
          <img src="./images/day.png" alt='' />
          <h2>Քաղաքացիների ընդունելության ժամանակացույց</h2>
        </div>

        
        
        {add ? <form className='form'>

            <label>Ստորաբաժանման անվանումը</label>
            <textarea  value={value} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => { setValue(e.target.value) }} style={{ resize: "none" }}></textarea>
            {error && value.trim().length===0 && <ErrorMessage error={error} />} 
          
        
            <label>Օրը</label>
            <textarea   value={value1} onChange={(e: any) => { setValue1(e.target.value) }} style={{ resize: "none" }}></textarea>
            {error && value1.trim().length===0 && <ErrorMessage error={error} />} 

            <label>Ժամը</label>
            <textarea   value={value2} onChange={(e: any) => { setValue2(e.target.value) }} style={{ resize: "none" }}></textarea>
         
          <div className="btn">
            <button onClick={(e) => adminsSave(value, value1, value2, e)} >Ավելացնել</button>
            <button onClick={()=> setAdd(!add)} >Չեղարկել</button>
          </div>

        </form> : add1 ? <form className="form">

          <label>Ստորաբաժանման անվանումը</label>
          <textarea value={valueCitizen} onChange={(e: any) => { setValueCitizen(e.target.value) }} style={{ resize: "none" }}></textarea>
          {error && valueCitizen.trim().length===0 && <ErrorMessage error={error} />} 

          <label>Օրը</label>
          <textarea value={valueCitizen1} onChange={(e: any) => { setValueCitizen1(e.target.value) }} style={{ resize: "none" }}></textarea>
          {error && valueCitizen1.trim().length===0 && <ErrorMessage error={error} />} 

          <label>Ժամը</label>
          <textarea value={valueCitizen2} onChange={(e: any) => { setValueCitizen2(e.target.value) }} style={{ resize: "none" }}></textarea>

          <div className="btn">
            <button onClick={(e) => adminsSave1(valueCitizen, valueCitizen1, valueCitizen2, e)}>Ավելացնել</button>
            <button onClick={()=> setAdd1(!add)} >Չեղարկել</button>
          </div>

        </form> :
        <div>
          <div>
            <h3 className='h3-1'>ԺԱՄԱՆԱԿԱՑՈՒՅՑ ԱԶԳԱՅԻՆ ԺՈՂՈՎԻ ՄՇՏԱԿԱՆ ՀԱՆՁՆԱԺՈՂՈՎՆԵՐԻ ԿՈՂՄԻՑ  ՔԱՂԱՔԱՑԻՆԵՐԻ ԸՆԴՈՒՆԵԼՈՒԹՅՈՒՆՆԵՐԻ(2022 թ. նոյեմբեր)</h3>
            <table >
              <thead>
                <tr>
                  <th>Ստորաբաժանման անվանումը</th>
                  <th>Օրը</th>
                  <th>Ժամը</th>
                </tr>
              </thead>
              {
                admission.map((item: any, index: number) => <tbody key={item.id}>
                  {edit === item.id ? <tr>
                    <td>
                      <textarea rows={4} value={value} onChange={(e: any) => { setValue(e.target.value) }} style={{ resize: "none" }}></textarea>
                    </td>
                    <td>
                      <textarea value={value1} onChange={(e: any) => { setValue1(e.target.value) }} style={{ resize: "none" }}></textarea>
                    </td>
                    <td>
                      <textarea value={value2} onChange={(e: any) => { setValue2(e.target.value) }} style={{ resize: "none" }}></textarea>
                    </td>
                    <td>
                      <button className='save'> <i onClick={(e) => {adminSave(item.id, value, value1, value2, e); setEdit(-1)}} className="fa-regular fa-square-check"></i></button>
                      <button onClick={() => setEdit(-1)} ><i className="fa-solid fa-xmark"></i></button>
                    </td>
                  </tr> : <tr>
                    <td>{item.name}</td>
                    <td>{item.day}</td>
                    <td>{item.time}</td>
                    {admin &&<td> <button onClick={() => {
                      setEdit(item.id);
                      setValue(item.name);
                      setValue1(item.day);
                      setValue2(item.time)
                    }}><i className="fa-solid fa-pen"></i></button>

                      {admin && <button onClick={() => {
                        adminDelete(item.id)
                      }}><i className="fa-regular fa-trash-can"></i></button>}
                    </td>}
                  </tr>}
                </tbody>
                )}
              {admin && <i onClick={() => {adminAdd(); setEdit(-1)}} className="fa-solid fa-plus ADD"></i>}

            </table>
          </div>
        

        {/* -----------------------------Next----------------------------- */}

        <div>
          <h3 className='h3-2'>ԺԱՄԱՆԱԿԱՑՈՒՅՑ ԱԶԳԱՅԻՆ ԺՈՂՈՎԻ ՆԱԽԱԳԱՀԻ ՏԵՂԱԿԱԼՆԵՐԻ ԿՈՂՄԻՑ ԿԱԶՄԱԿԵՐՊՎՈՂՔԱՂԱՔԱՑԻՆԵՐԻ ԸՆԴՈՒՆԵԼՈՒԹՅՈՒՆՆԵՐԻ</h3>
          <table className='secondTable'>
            <thead>
              <tr>
                <th>Ստորաբաժանման անվանումը</th>
                <th>Օրը</th>
                <th>Ժամը</th>
              </tr>
            </thead>
            {
              citizenAdmission.map((item: any, index: number) => <tbody key={item.id}>
                {editCitizen === item.id ? <tr>
                  <td>
                    <textarea value={valueCitizen} onChange={(e: any) => { setValueCitizen(e.target.value) }} style={{ resize: "none" }}></textarea>
                  </td>
                  <td>
                    <textarea value={valueCitizen1} onChange={(e: any) => { setValueCitizen1(e.target.value) }} style={{ resize: "none" }}></textarea>
                  </td>
                  <td>
                    <textarea value={valueCitizen2} onChange={(e: any) => { setValueCitizen2(e.target.value) }} style={{ resize: "none" }}></textarea>
                  </td>
                  <td>
                    <button className='save'> <i onClick={() => adminSave1(item.id, valueCitizen, valueCitizen1, valueCitizen2)} className="fa-regular fa-square-check"></i></button>
                    <button onClick={() => seteditCitizen(-1)} ><i className="fa-solid fa-xmark"></i></button>
                  </td>
                </tr> 
                  :
                <tr>
                    <td>{item.name}</td>
                    <td>{item.day}</td>
                    <td>{item.time}</td>
                    {admin && <td><button onClick={() => {
                      seteditCitizen(item.id);
                      setValueCitizen(item.name);
                      setValueCitizen1(item.day);
                      setValueCitizen2(item.time)
                    }}><i className="fa-solid fa-pen"></i></button>

                      {admin && <button onClick={() => {
                        adminDeleteCitizen(item.id)
                      }}><i className="fa-regular fa-trash-can"></i></button>}
                    </td>}
                  </tr>}


              </tbody>
              )
            }
            {admin && <i onClick={() => {adminAdd1(); seteditCitizen(-1)}} className="fa-solid fa-plus ADD"></i>}
          </table>
        </div>
      </div>
    }
    </div>

    </div >
  )
}