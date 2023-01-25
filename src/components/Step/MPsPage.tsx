import { useState } from 'react';
import './StepStyle.scss'
import { ErrorMessage } from '../Error/Error';

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
  const [MPs, setMPs]=useState( [
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
const admin:any = localStorage.getItem('user')

  const [edit, setEdit] = useState<number>(-1)
  const [error, setError]=useState('')
  const [add, setAdd] = useState<boolean>(false)
  const [value, setValue] = useState({
    name: '',
    lastname: '',
    firstname: '',
    phonenumber: '',
  })
  const [addvalue, setAddvalue] = useState({
    name: '',
    lastname: '',
    firstname: '',
    phonenumber: '',
    key: 'noboss'
  })


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

  async function Save(id: number, value:any) {
  
     const newMPs=MPs.filter(item=>{
      if(item.id===id) {item.id=id; item.name= value.name; item.lastname= value.lastname; 
       item.firstname=value.firstname; item.phonenumber= value.phonenumber}
    return item})
    setMPs(newMPs)
    setEdit(-1)
  }

  async function Add(e: React.FormEvent) {
    e.preventDefault()
    setError('');
    if(addvalue.name.trim().length===0 || addvalue.lastname.trim().length===0 || addvalue.firstname.trim().length=== 0){
    setError('Անհրաժեշտ է լրացնել');
      return
    }
    const newMPs = {
     id:Date.now(),  name: addvalue.name, lastname: addvalue.lastname, 
      firstname: addvalue.firstname, phonenumber: addvalue.phonenumber, key: 'noboss'
    }
    setMPs([...MPs, newMPs])

    setAdd(false)
  }

  async function Delete(id: number, e: React.FormEvent) {
    e.preventDefault()
    const newMPs=MPs.filter(item=> item.id !== id)
    setMPs(newMPs)
    setAdd(false)
  }


  return (
    <>
    
      {add ? <form className='form'  onSubmit={(e) => Add(e)} >

        <label>Անուն</label>
        <input className='td1' value={addvalue.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setAddvalue({ name: e.target.value, lastname: addvalue.lastname, 
            firstname: addvalue.firstname, phonenumber: addvalue.phonenumber, key:'noboss'
          })
        }} />
          {error && addvalue.name.trim().length===0 && <ErrorMessage error={error} />}

        <label>Ազգանուն</label>
        <input className='td1' value={addvalue.lastname} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setAddvalue({
            name: addvalue.name, lastname: e.target.value,
            firstname: addvalue.firstname, phonenumber: addvalue.phonenumber, key:'noboss'
          })
        }} />
          {error &&  addvalue.lastname.trim().length===0 && <ErrorMessage error={error} />}

        <label>Հայրանուն</label>
        <input className='td1' value={addvalue.firstname} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setAddvalue({
            name: addvalue.name, lastname: addvalue.lastname,
            firstname: e.target.value, phonenumber: addvalue.phonenumber, key:'noboss'
          })
        }} />
          {error && addvalue.firstname.trim().length===0 && <ErrorMessage error={error} />}

        <label>Ներքին հեռախոսահամարը</label>
        <input className='td1' value={addvalue.phonenumber} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setAddvalue({
            name: addvalue.name, lastname: addvalue.lastname,
            firstname: addvalue.firstname, phonenumber: e.target.value, key:'noboss'
          })
        }} />
        <div className='button'>
         <button className='button1' onClick={(e) => Add(e)} >Ավելացնել</button>
         <button className='button2' onClick={()=>{setAdd(false); setError('')}}>Չեղարկել</button>
        </div>
      </form> : <div className='Mps'>

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
                <> {edit === item.id ? <tr >

                  <td>{index + 1}</td>
                  <td><input className='td1_input' value={value.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setValue({
                      name: e.target.value,
                      lastname: value.lastname, firstname: value.firstname, phonenumber: value.phonenumber
                    })
                  }} />
                    <input className='td1_input gg' value={value.lastname} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setValue({
                        name: value.name,
                        lastname: e.target.value, firstname: value.firstname, phonenumber: value.phonenumber,
                      })
                    }} />
                    <input className='td1_input gg' value={value.firstname} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setValue({
                        name: value.name,
                        lastname: value.lastname, firstname: e.target.value, phonenumber: value.phonenumber
                      })
                    }} /></td>
                  <td><input className='td1_input' value={value.phonenumber} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setValue({
                      name: value.name,
                      lastname: value.lastname, firstname: value.firstname, phonenumber: e.target.value
                    })
                  }} /></td>

                  <button className='save'> <i onClick={() => Save(item.id, value)} className="fa-regular fa-square-check"></i></button>

                </tr> : <tr key={item.id}>

                  <td className='td1'>{index + 1}</td>
                  <td className='td2'>{item.name} {item.firstname} {item.lastname}</td>
                  <td className='td4'>{item.phonenumber}</td>
                  <td className='button' >{admin && <><button><i onClick={() => {
                    setEdit(item.id); setValue({
                      name: item.name,
                      lastname: item.lastname, firstname: item.firstname, phonenumber: item.phonenumber
                    })
                  }} className="fa-solid fa-pen"></i></button>

                    <button><i onClick={(e) => Delete(item.id, e)} className="fa-regular fa-trash-can"></i></button></>
                  }</td>
                </tr>
                }
                </>)
            }
          </tbody>
        </table>

        <div>
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
                      <>
                        {edit === iteme.id ? <tr >

                          <td className='td1'>{index + 1}</td>
                          <td><input className='td1_input' value={value.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setValue({
                              name: e.target.value,
                              lastname: value.lastname, firstname: value.firstname, phonenumber: value.phonenumber
                            })
                          }} />
                            <input className='td1_input gg' value={value.lastname} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                              setValue({
                                name: value.name,
                                lastname: e.target.value, firstname: value.firstname, phonenumber: value.phonenumber,
                              })
                            }} />
                            <input className='td1_input gg' value={value.firstname} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                              setValue({
                                name: value.name,
                                lastname: value.lastname, firstname: e.target.value, phonenumber: value.phonenumber
                              })
                            }} /></td>
                          <td><input className='td1_input' value={value.phonenumber} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setValue({
                              name: value.name,
                              lastname: value.lastname, firstname: value.firstname, phonenumber: e.target.value
                            })
                          }} /></td>

                          <button className='save'> <i onClick={() => Save(iteme.id, value)} className="fa-regular fa-square-check"></i></button>

                        </tr> : <>

                          <tr key={iteme.id}>
                            <td className='td1'>{index + 4}</td>
                            <td className='td2'>{iteme.lastname}  {iteme.name}   {iteme.firstname}</td>
                            <td className='td4'>{iteme.phonenumber}</td>

                            <td>  {admin && <td><button onClick={() => {
                              setEdit(iteme.id); setValue({
                                name: iteme.name,
                                lastname: iteme.lastname, firstname: iteme.firstname, phonenumber: iteme.phonenumber
                              })
                            }}><i className="fa-solid fa-pen"></i></button>

                              <button onClick={(e) => Delete(iteme.id, e)}><i className="fa-regular fa-trash-can"></i></button></td>
                            }</td>
                          </tr>
                        </>
                        }
                      </>

                    )}

                  </tbody>
                </table>
              </div>
            )
          }
        </div>
       {admin && <i onClick={() => {setAdd(!add); setAddvalue({
    name: '',  lastname: '',    firstname: '',
    phonenumber: '',    key: 'noboss'
  })}} className="fa-solid fa-plus"></i>}
      </div>}

    </>
  )
}
