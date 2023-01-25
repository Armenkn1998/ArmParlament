import {  useState } from 'react';
import './StepStyle.scss'
import { ErrorMessage } from '../Error/Error';



export const CommittePage = () => {

  
  const [edit, setEdit] = useState<number>(-1)
  const [add, setAdd] = useState<boolean>(false)
  const[admin, setAdmin]=useState(false)
  const [error, setError]=useState('')
  const [value, setValue] = useState<any>({
    name: '',
    member1: '',
    member2: '',
    cityphone: '',
    internalphone: '',
    internalphone2: '',
  })
  const [addvalue, setAddvalue] = useState<any>({
    name: '',
    member1: '',
    member2: '',
    cityphone: '',
    internalphone: '',
    internalphone2: '',
  })

  const [Committe, setCommittee]=useState([
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
  ],)
const user:any = localStorage.getItem('user')


  async function Save(id: number, e: React.FormEvent, value:any) {
    e.preventDefault()
    const newCommittee=Committe.filter(item=>{
      if(item.id===id) {item.id=id; item.name= value.name; item.member1= value.member1; 
       item.member2=value.member2; item.cityphone=value.cityphone;  item.internalphone=value.internalphone; item.internalphone2= value.internalphone2}
    return item})
    setCommittee(newCommittee)
    setEdit(-1)
  }

  async function Add(e: React.FormEvent) {
    e.preventDefault()
    setError('');
    if(addvalue.member2.trim().length===0 || addvalue.member1.trim().length === 0){
    setError('Անհրաժեշտ է լրացնել');
      return
    }

    const newCommitte = {
      id:Date.now(), name: addvalue.name, member1: addvalue.member1,
      member2: addvalue.member2, cityphone: addvalue.cityphone,
      internalphone: addvalue.internalphone, internalphone2: addvalue.internalphone2
     }
     setCommittee([...Committe, newCommitte])

    setAdd(false)
  }

  async function Delete(id: number, e: React.FormEvent) {
    e.preventDefault()
    const newCommitte=Committe.filter(item=> item.id !== id)
    setCommittee(newCommitte)
    setAdd(false)
  }

  return (
    <>
    
      {add ? <form className='form' onSubmit={(e) => Add(e)}>

        <label>Հանձնաժողովի անվանումը</label>
        <input className='td1' value={addvalue.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setAddvalue({
            name: e.target.value, member1: addvalue.member1,
            member2: addvalue.member2, cityphone: addvalue.cityphone, 
            internalphone: addvalue.internalphone, internalphone2: addvalue.internalphone2
          })
        }} />

        <label>Հանձնաժողովի նախագահ</label>
        <input className='td1' value={addvalue.member1} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setAddvalue({
            name: addvalue.name, member1: e.target.value,
            member2: addvalue.member2, cityphone: addvalue.cityphone, 
            internalphone: addvalue.internalphone, internalphone2: addvalue.internalphone2
          })
        }} />
          {error &&  addvalue.member1.trim().length===0 && <ErrorMessage error={error} />}

        <label>Հանձնաժողովի նախագահի տեղակալ</label>
        <input className='td1' value={addvalue.member2} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setAddvalue({
            name: addvalue.name, member1: addvalue.member1,
            member2: e.target.value, cityphone: addvalue.cityphone, 
            internalphone: addvalue.internalphone, internalphone2: addvalue.internalphone2
          })
        }} />
          {error &&  addvalue.member2.trim().length===0 && <ErrorMessage error={error} />}

        <label>Քաղաքային հեռախոսահամարը</label>
        <input className='td1' value={addvalue.internalphone2} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setAddvalue({
            name: addvalue.name, member1: addvalue.member1,
            member2: addvalue.member2, cityphone: addvalue.cityphone, 
            internalphone: addvalue.internalphone, internalphone2: e.target.value
          })
        }} />

        <label>1-ին Ներքին հեռախոսահամարը</label>
        <input className='td1' value={addvalue.cityphone} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setAddvalue({
            name: addvalue.name, member1: addvalue.member1,
            member2: addvalue.member2, cityphone: e.target.value, 
            internalphone: addvalue.internalphone, internalphone2: addvalue.internalphone2
          })
        }} />

        <label>2-րդ Ներքին հեռախոսահամարը</label>
        <input className='td1' value={addvalue.internalphone} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setAddvalue({
            name: addvalue.name, member1: addvalue.member1,
            member2: addvalue.member2, cityphone: addvalue.cityphone, 
            internalphone: e.target.value, internalphone2: addvalue.internalphone2
          })
        }} />
       <div className='button'>
         <button className='button1' onClick={(e) => Add(e)} >Ավելացնել</button>
         <button className='button2' onClick={()=>{setAdd(false); setError('')}}>Չեղարկել</button>
        </div>

      </form> : <form>
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
              Committe.map((item, index) =>
                <>
                  {edit === index ?
                    <tr >
                      <td><input className='td2_input jj' value={value.name} onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                        setValue({
                          name: e.target.value, member1: value.member1, member2: value.member2, 
                          cityphone: value.cityphone, internalphone: value.internalphone, internalphone2: value.internalphone2
                        })
                      }} /></td>
                      <td><input className='td2_input jj' value={value.member1} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setValue({
                          name: value.name, member1: e.target.value, member2: value.member2, 
                          cityphone: value.cityphone, internalphone: value.internalphone, internalphone2: value.internalphone2
                        })
                      }} />
                        <input className='td2_input jj' value={value.member2} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setValue({
                            name: value.name, member1: value.member1, member2: e.target.value, 
                            cityphone: value.cityphone, internalphone: value.internalphone, internalphone2: value.internalphone2
                          })
                        }} /></td>
                      <td><input className='td2_input' value={value.cityphone} onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                        setValue({
                          name: value.name, member1: value.member1, member2: value.member2, 
                          cityphone: e.target.value, internalphone: value.internalphone, internalphone2: value.internalphone2
                        })
                      }} /></td>
                      <td><input className='td2_input' value={value.internalphone} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setValue({
                          name: value.name, member1: value.member1, member2: value.member2, 
                          cityphone: value.cityphone, internalphone: e.target.value, internalphone2: value.internalphone2
                        })
                      }} /></td>

                      <button className='save'> <i onClick={(e) => Save(item.id, e, value)} className="fa-regular fa-square-check"></i></button>

                    </tr> : <tr key={item.id}>

                      <td className='td1'>{item.name}</td>
                      <td className='td2'>{item.member1}<br /><span>տեղ.</span>{item.member2}</td>
                      <td className='td3'>{item.cityphone}</td>
                      <td className='td4'>{item.internalphone}<br />{item.internalphone2}</td>
                      {user && <td><button onClick={() => {
                        setEdit(index); setValue({
                          name: item.name, member1: item.member1, member2:item.member2, cityphone:item.cityphone,
                           internalphone: item.internalphone, internalphone2:item.internalphone2
                        })
                      }}><i className="fa-solid fa-pen"></i></button>
                        <button onClick={(e) => Delete(item.id, e)}><i className="fa-regular fa-trash-can"></i></button></td>
                      }
                    </tr>
                  }
                </>
              )
            }
          </tbody>
        </table>
        {user && <i onClick={() => { setAdd(!add) }} className="fa-solid fa-plus"></i>}
      </form>}
    </>
  )
}