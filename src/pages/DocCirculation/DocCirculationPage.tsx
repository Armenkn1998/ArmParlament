import { Header } from '../../components/Header/Header'
import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DocCirculation.scss';

export const DocCirculationPage = () => {

  
  const navigate = useNavigate();
  const [add, setAdd] = useState(false);
  const [add1, setAdd1] = useState(false);
  const [add2, setAdd2] = useState(false);
  const [edit, setEdit] = useState('')
  const [erorr, setErorr] = useState(false)
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState<string[] | undefined[]>(['', '']);
  const [addValue, setaddValue] = useState('');
  const [addValue1, setaddValue1] = useState<string[] | undefined[]>(['', '', '']);
  const  [DocCirculation_1,setDocCirculation_1] = useState([
    {
        "id": 1,
        "text": " Սույն կարգով սահմանվում է Հայաստանի Հանրապետության Ազգային ժողովի (այսուհետ՝ ՀՀ Ազգային ժողով կամ Ազգային ժողով) նախագահի, նրա տեղակալների, աշխատակազմի ղեկավար-գլխավոր քարտուղարի և մշտական հանձնաժողովների կողմից քաղաքացիների ընդունելության կազմակերպման ու իրականացման կարգը։"
    },
    {
        "id": 2,
        "text": "Ազգային ժողովում քաղաքացիների ընդունելությունը կազմակերպում է Ազգային ժողովի աշխատակազմի քաղաքացիների ընդունելության և փաստաթղթաշրջանառության վարչության քաղաքացիների ընդունելության և նամակների բաժինը (այսուհետ՝ Քաղաքացիների ընդունելության և նամակների բաժին):"
    },
    {
        "id": 3,
        "text": "Քաղաքացիների մուտքն Ազգային ժողովի շենքի վարչական տարածք իրականացվում է Ազգային ժողովի նստավայրի տարածքում և շենքում գործող անվտանգության կանոներին համապատասխան (ՀՀ ԱԺ նախագահի ՆՈ-01-Լ որոշման համաձայն, մուտքը միայն անձը հաստատող փաստաթղթով)։"
    },
    {
        "id": 4,
        "text": "Քաղաքացիների ընդունելությունն իրականացվում է ընդունելությունների համար նախատեսված սրահում (հասցե՝ ք. Երևան, Մ․ Բաղրամյան պող., 19 շենք, ՀՀ Ազգային ժողովի ընդունարան)։"
    }
])
  const  [DocCirculation_2,setDocCirculation_2] = useState([
    {
        "id": 1,
        "text": " Քաղաքացիների ընդունելությունը կազմակերպվում է նախապես հերթագրման միջոցով։"
    },
    {
        "id": 2,
        "text": "Հերթագրման համար քաղաքացիները կարող են այցելել Ազգային ժողով կամ զանգահարել Ազգային ժողովի պաշտոնական ինտերնետային կայքում տեղադրված տեղեկատու հեռախոսահամարներով՝ 87-88, 010-50-60-50, 011-50-60-50 (կայքը՝ http://www.parliament.am) կամ ներկայացնել գրավոր դիմում (փոստով, առձեռն, Էլեկտրոնային հարցումների միասնական հարթակով՝ https://e-request.am/hy կամ էլ-փոստի միջոցով` letter@parliament.am)՝ ընդունելության անհրաժեշտության վերաբերյալ։ Դիմումում ներառվում է դիմումատուի անունը, ազգանունը, հայրանունը, բնակության հասցեն, ստորագրությունը, բջջային կամ քաղաքային հեռախոսահամարը և ամփոփ ներկայացվում է բարձրաձայնվող հարցը։"
    },
    {
        "id": 3,
        "text": "Ընդունելության համար հերթագրված քաղաքացիների տվյալները հավաքագրվում են Քաղաքացիների ընդունելության և նամակների բաժնում և ընդունելությունից 1 օր առաջ ուղարկվում են ընդունելությունն իրականացնող պաշտոնատար անձին՝ «Mulberry» էլեկտրոնային փաստաթղթաշրջանառության համակարգի միջոցով (այսուհետ՝ «Mulberry» համակարգ) կամ էլ-փոստի միջոցով։ Ընդունելության համար հերթագրված քաղաքացիների տվյալները գրանցվում են գրանցամատյաններում (գրանցամատյանները լինում են կնքված և համարակալված), որոնք էլ թղթային տվյալների հետ միասին հանձնվում են ՀՀ ԱԺ աշխատակազմի արխիվ՝ տարեկան ամփոփումից հետո (որպես կանոն արխիվ են հանձնվում դիմումները և մատյանները)։"
    },
    {
        "id": 4,
        "text": "Քաղաքացիների ընդունելության տվյալ ամսվա ցուցակում ընդգրկվում են յուրաքանչյուր ընդունելությունից առնվազն երկու աշխատանքային օր առաջ հերթագրված քաղաքացիները։ Նշված ժամկետից հետո հերթագրված քաղաքացիների հայտերը ներառվում են հաջորդ ամսվա ընդունելության ցուցակում, բացառությամբ հրատապ դեպքերի (դեպքի հրատապությունը որոշվում է ընդունելությունն իրականացնող պաշտոնատար անձի հետ քննարկման արդյունքում)։"
    },
    {
        "id": 5,
        "text": "Քաղաքացին չի ընդգրկվում ընդունելության ցուցակում, եթե.",
        "text_A": "վերջին երեք ամսվա ընթացքում քաղաքացին միևնույն հարցով մասնակցել է միևնույն պաշտոնատար անձի, կամ նրա կողմից լիազորված անձի ընդունելությանը և իր բարձրացրած հարցի վերաբերյալ ստացել է պարզաբանում։Այս դեպքում դիմումատուին Քաղաքացիների ընդունելության և նամակների բաժնի կողմից տրվում է պատճառաբանված գրավոր կամ բանավոր պատասխան ընդունելության ցուցակում չընդգրկվելու վերաբերյալ (կախված քաղաքացու՝ բանավոր կամ գրավոր դիմելու հանգամանքից)։",
        "text_B": "բարձրացված հարցը պահանջում է այնպիսի գործողություն, որը կարող է հանգեցնել արդարադատություն իրականացնող և/կամ իրավապահ մարմինների գործունեության միջամտությանը։"
    },
    {
        "id": 6,
        "text": "Ընդունելությունն իրականացնող պաշտոնատար անձանց հանձնարարությամբ նրանց կողմից կազմակերպված ընդունելությանը կարող են մասնակցել և/կամ իրականացնել նրանց խորհրդականները, օգնականները, փորձագետները:"
    },
    {
        "id": 7,
        "text": "Յուրաքանչյուր ընդունելության համար նախատեսվում է 2 (երկու) ժամ, ընդունելությանը կարող է մասնակցել առավելագույնը 8 (ութ) քաղաքացի: Ընդունելության ժամանակ մեկ քաղաքացու հարցի քննարկման համար նախատեսվում է 15 րոպե։ Քննարկման տևողությունը կարող է փոփոխվել ընդունելությունն իրականացնող պաշտոնատար անձի կամ նրա կողմից լիազորված անձի առաջարկով։"
    },
    {
        "id": 8,
        "text": "Ընդունելություն իրականացնող պաշտոնատար անձի կամ նրա կողմից լիազորված անձի բացակայության դեպքում ընդունելությունը տեղափոխվում է այլ աշխատանքային օր, ինչի մասին նախապես ծանուցվում է ընդունելությանը հերթագրված քաղաքացիներին: "
    },
    {
        "id": 9,
        "text": "Սույն Կարգը, ինչպես նաև Ազգային ժողովի նախագահի, նրա տեղակալների, աշխատակազմի ղեկավարի-գլխավոր քարտուղարի և մշտական հանձնաժողովների կողմից իրականացվող քաղաքացիների ընդունելության օրերի և ժամերի վերաբերյալ տեղեկատվությունը տեղադրվում է Ազգային ժողովի պաշտոնական ինտերնետային կայքում և Ֆեյսբուքյան պաշտոնական էջում, ինչպես նաև փակցվում է Ազգային ժողովի ընդունարանում (այդ թվում՝ թվային տարբերակով էլեկտրոնային մոնիտորի վրա, որը տեղադրված է ընդունարանում)՝ քաղաքացիների համար տեսանելի վայրում:"
    }
])
  const  [DocCirculation_3,setDocCirculation_3] = useState([
    {
        "id": 1,
        "text": "Սույն Կարգով սահմանված ՀՀ Ազգային ժողովի նախագահի, նրա տեղակալների, աշխատակազմի ղեկավար-գլխավոր քարտուղարի (ինչպես նաև նրանց խորհրդականների, օգնականների, փորձագետների) և մշտական հանձնաժողովների կողմից քաղաքացիների ընդունելության ժամանակ, անհրաժեշտության դեպքում, քաղաքացու կողմից ներկայացված գրավոր դիմումները գրանցվում են «Mulberry» համակարգում և ուղարկվում են ընդունելությունն իրականացրած պաշտոնատար անձին՝ համապատասխան ընթացքն ապահովելու համար։"
    },
    {
        "id": 2,
        "text": "Սույն Կարգով սահմանված քաղաքացիների ընդունելության վերաբերյալ հավաքագրված տվյալների հիման վրա՝ Քաղաքացիների ընդունելության և նամակների բաժինը քաղաքացիների դիմումների, բողոքների և առաջարկությունների հետ միաժամանակ վերլուծում և ամփոփում է կատարված աշխատանքների արդյունքները, կազմում է ամսական, կիսամյակային և տարեկան վիճակագրական հաշվետվություններ՝ Ազգային ժողովի աշխատակազմի ղեկավար-գլխավոր քարտուղարին ներկայացնելու համար: Ներկայացված տարեկան հաշվետվությունը տեղադրվում է Ազգային ժողովի պաշտոնական ինտերնետային կայքում և Ֆեյսբուքյան պաշտոնական էջում:"
    },
    {
        "id": 3,
        "text": "Պաշտոնատար անձանց կողմից քաղաքացիների ընդունելություն չի իրականացվում հունվար, հուլիս և օգոստոս ամիսներին՝ բացառությամբ սույն կարգով սահմանված հրատապ դեպքերի:"
    }
])

function saveDate1(id: number, text: string) {
  const newDocCirculation = DocCirculation_1.map(item => {
    if(item.id === id) item.text = text
    return item});
  setDocCirculation_1(newDocCirculation)
}
function saveDate2(id: number, text: string, value2: string[] | undefined[]) {
  const newDocCirculation = DocCirculation_2.map(item => {
    if(item.id === id) item.text = text;item.text_A=value2[0];item.text_B=value2[1]
    return item});
  setDocCirculation_2(newDocCirculation)
}
function saveDate3(id: number, text: string) {
  const newDocCirculation = DocCirculation_3.map(item => {
    if(item.id === id) item.text = text
    return item});
  setDocCirculation_3(newDocCirculation)
}
 function deleteItem1(id: number) {
  const newDocCirculation=DocCirculation_1.filter((item:any)=>item.id!==id)
  setDocCirculation_1(newDocCirculation)

}
function deleteItem2(id: number) {
  const newDocCirculation=DocCirculation_2.filter((item:any)=>item.id!==id)
  setDocCirculation_2(newDocCirculation)

} 
function deleteItem3(id: number) {
  const newDocCirculation=DocCirculation_3.filter((item:any)=>item.id!==id)
  setDocCirculation_3(newDocCirculation)

}

function addText1(text: string,e:any) {
  e.preventDefault()
  setErorr(false)

  if (text.trim() === '') {
    setErorr(true)
  } else {
    const newDocCirculation = {
      id:Date.now(),
      text
    }
    setDocCirculation_1([...DocCirculation_1,newDocCirculation])
    
    setAdd(false)
  }
}

function addText2(addValue1: any,e:any) {
  e.preventDefault()
  setErorr(false)

  if (addValue1[0]?.trim() === '') {
    setErorr(true)
  } else  {
    const newDocCirculation = {
      id:Date.now(),
      text: addValue1[0],
      text_A: addValue1[1],
      text_B: addValue1[2]
    }
    setDocCirculation_2([...DocCirculation_2, newDocCirculation])
    setAdd1(false)

  }
}
function addText3(text: string,e:any) {
  e.preventDefault()
  setErorr(false)
  if (text.trim() === '') {
    setErorr(true)
  } else {
    const newDocCirculation = {
      id:Date.now(),
      text
    }
    setDocCirculation_3([...DocCirculation_3,newDocCirculation])
    setAdd2(false)

  }
}

const admin:any = localStorage.getItem('user')

  return (
    <div className='DocCirculation'>
      <Header />
      <div className='DocCirculationBody'>
        <div className='DocCirculation_title'>
          <img src="./images/Frame1.png" alt="" />
          <h2>Քաղաքացիների ընդունելության և  փաստաթղթաշրջանառության կարգը</h2>
          </div>
        <hr />
        {add ? <div className='addDiv'>
          <span>Տեղեկություն *։<textarea className={erorr ? 'erorrText' : 'text'} value={addValue} onChange={(e: any) => setaddValue(e.target.value)} /></span>
          <button onClick={() => setAdd(false)} className='back'>Չեղարկել</button>
          <button onClick={(e:any) => addText1(addValue,e)} className='save' >Հաստատել</button>
          <p>* : Դաշտը պետք է լրացվի!!!</p>
        </div> : add1 ? <div className='addDiv'>
          <span>Տեղեկություն *։<textarea className={erorr ? 'erorrText' : 'text'} value={addValue1[0]} onChange={(e: any) => setaddValue1([e.target.value, addValue1[1], addValue1[2]])} /></span>
          <span>Կետ 1։<textarea value={addValue1[1]} onChange={(e: any) => setaddValue1([addValue1[0], e.target.value, addValue1[2]])} /></span>
          <span>Կետ 2։<textarea value={addValue1[2]} onChange={(e: any) => setaddValue1([addValue1[0], addValue1[1], e.target.value])} /></span>
          <button onClick={() => setAdd1(false)} className='back'>Չեղարկել</button>
          <button onClick={(e) => addText2(addValue1,e)} className='save'>Հաստատել</button>
          <p>* : Դաշտը պետք է լրացվի!!!</p>
        </div> : add2 ? <div className='addDiv'>
          <span>Տեղեկություն *։<textarea className={erorr ? 'erorrText' : 'text'} value={addValue} onChange={(e: any) => setaddValue(e.target.value)} /></span>
          <button onClick={() => setAdd2(false)} className='back'>Չեղարկել</button>
          <button onClick={(e) => addText3(addValue,e)} className='save' >Հաստատել</button>
          <p>* : Դաշտը պետք է լրացվի!!!</p>
        </div> :
          <div className='DocCirculation_main'>
            <h2>ԿԱՐԳ</h2>
            <div className='DocCirculation_main_page'>
              <h3>I.	Ընդհանուր դրույթներ</h3>
              {
                DocCirculation_1.map(item => <ul key={item.id}>
                  {
                    edit === item.text ?
                      <li>
                        <textarea value={value === '' ? item.text : value} onChange={(e:  React.ChangeEvent<HTMLTextAreaElement>) => { setValue(e.target.value) }} />
                        <button onClick={() => saveDate1(item.id, value)}><i className="fa-regular fa-square-check"></i></button>
                        <button onClick={() => navigate(0)} ><i className="fa-solid fa-xmark"></i></button>
                      </li> :
                      <li>{item.text}<br />{admin && <><button onClick={() => { setEdit(item.text); setValue(item.text) }} ><i className="fa-solid fa-pen"></i>Փոփոխել</button><button onClick={() => deleteItem1(item.id)}><i className="fa-regular fa-trash-can"></i>Ջնջել</button></>}</li>
                  }
                </ul>)
              }
              {admin&&<button onClick={() => setAdd(true) }><i  className="fa-solid fa-plus ADD"></i>Ավելացնել</button>}
              <h3>I.	Ընդհանուր դրույթներ</h3>
              {
                DocCirculation_2.map(item => <ul key={item.id}>
                  {
                    edit === item.text ?
                      <li>
                        <textarea value={value} onChange={(e:  React.ChangeEvent<HTMLTextAreaElement>) => { setValue(e.target.value) }} />
                        {item?.text_A && <textarea value={value2[0]} onChange={(e: any) => { setValue2([e.target.value, value2[1]]) }} />}
                        {item?.text_B && <textarea value={value2[1]} onChange={(e: any) => { setValue2([value2[0], e.target.value]) }} />}
                        <button onClick={() => saveDate2(item.id, value,  value2)}><i className="fa-regular fa-square-check"></i></button>
                        <button onClick={() => navigate(0)} ><i className="fa-solid fa-xmark"></i></button>
                    
                      </li> :

                      <li>{item.text}
                        {item.text_A && <p>{item?.text_A}</p>}
                        {item.text_B && <p>{item?.text_B}</p>}
                        <br />
                        {admin && <><button onClick={() => { setEdit(item.text); setValue(item.text); item.text_A && item.text_B ? setValue2([item.text_A, item.text_B]) : item.text_A ? setValue2([item.text_A, '']) : item.text_B && setValue2(['', item.text_B]) }} ><i className="fa-solid fa-pen"></i>Փոփոխել</button><button onClick={() => deleteItem2(item.id)}><i className="fa-regular fa-trash-can"></i>Ջնջել</button></>}
                      </li>}
                </ul>)
              }
              {admin&&<button onClick={() =>  setAdd1(true)}><i  className="fa-solid fa-plus ADD"></i>Ավելացնել</button>}
              <h3>III.	Պաշտոնատար անձանց կողմից իրականացված ընդունելության ժամանակ քաղաքացու կողմից ներկայացված գրավոր դիմումների գրանցում  և հաշվետվողականության ապահովում</h3>
              {
                DocCirculation_3.map(item => <ul key={item.id}>
                  {
                    edit === item.text ?
                      <li>
                        <textarea value={value} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => { setValue(e.target.value) }}/>
                        <button onClick={() => saveDate3(item.id, value)}><i className="fa-regular fa-square-check"></i></button>
                        <button onClick={() => navigate(0)} ><i className="fa-solid fa-xmark"></i></button>
                      </li> :
                      <li>{item.text}<br />{admin && <><button onClick={() => { setEdit(item.text); setValue(item.text) }} ><i className="fa-solid fa-pen"></i>Փոփոխել</button><button onClick={() => deleteItem3(item.id)}><i className="fa-regular fa-trash-can"></i>Ջնջել</button></>}</li>
                  }
                </ul>)
              }
              {admin&&<button onClick={() => setAdd2(true)}><i  className="fa-solid fa-plus ADD"></i>Ավելացնել</button>}
            </div>
          </div>}
      </div>
    </div>
  )
}
