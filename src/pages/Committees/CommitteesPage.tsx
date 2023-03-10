import './Committees.scss'
import { Header } from '../../components/Header/Header'
import { useEffect, useState } from 'react';


export const CommitteesPage = () => {
 
  const [Committees,setCommittes] = useState( [
    {
        "id": 1,
        "title": "1. Աշխատանքի եւ սոցիալական հարցերի մշտական հանձնաժողով՝",
        text: "սոցիալական ապահովություն, հաշմանդամության հիմնահարցեր, աշխատանք, զբաղվածություն, արհեստակցական միություններ, ժողովրդագրություն եւ այդ ոլորտները կարգավորող օրենքներ"
    },
    {
        "id": 2,
        "title": "2․ Առողջապահության հարցերի մշտական հանձնաժողով՝",
        text: "առողջապահություն, մայրություն, մանկություն, դեղերի արտադրություն, ներմուծում եւ անվտանգություն, սանիտարահամաճարակային անվտանգություն եւ այդ ոլորտները կարգավորող օրենքներ"
    },
    {
        "id": 3,
        "title": "3․ Արտաքին հարաբերությունների մշտական հանձնաժողով՝",
        text: "միջազգային հարաբերություններ, Միավորված ազգերի կազմակերպության, Եվրոպայի խորհրդի, Եվրոպայում անվտանգության եւ համագործակցության կազմակերպության, ինչպես նաեւ այլ միջազգային կազմակերպությունների հետ կապեր, միջխորհրդարանական համաձայնագրեր եւ կապեր, խորհրդարանական բարեկամական խմբեր եւ այդ ոլորտները կարգավորող օրենքներ"
    },
    {
        "id": 4,
        "title": "4․ Գիտության, կրթության, մշակույթի, սփյուռքի, երիտասարդության եւ սպորտի հարցերի մշտական հանձնաժողով՝",
        text: "գիտություն, կրթություն, մշակույթ, հայրենադարձություն, սփյուռքի հետ կապեր, երիտասարդություն, սպորտ, տեղեկատվություն, մամուլ, ռադիո, հեռուստատեսություն եւ այդ ոլորտները կարգավորող օրենքներ"
    },
    {
        "id": 5,
        "title": "5․ Եվրոպական ինտեգրման հարցերի մշտական հանձնաժողով՝",
        text: "Եվրոպական միության հետ կապեր, Եվրոպական միության եւ Հայաստանի Հանրապետության միջեւ Համապարփակ եւ ընդլայնված գործընկերության համաձայնագրի իրագործման հետ կապված հարցեր, Եվրոպական միության իրավական ակտերին Հայաստանի Հանրապետության օրենքների մոտարկում եւ այդ ոլորտները կարգավորող օրենքներ"
    },
    {
        "id": 6,
        "title": "6․ Մարդու իրավունքների պաշտպանության եւ հանրային հարցերի մշտական հանձնաժողով՝",
        text: "մարդու իրավունքների պաշտպանություն, երեխայի իրավունքներ, կրոն, կանանց եւ տղամարդկանց իրավահավասարություն, ազգային փոքրամասնություններ, փաստաբանություն, հասարակական կազմակերպություններ եւ այդ ոլորտները կարգավորող օրենքներ"
    },
    {
        "id": 7,
        "title": "7․ Պաշտպանության եւ անվտանգության հարցերի մշտական հանձնաժողով՝",
        text: "պաշտպանություն, ազգային անվտանգություն, ոստիկանություն, արտակարգ իրավիճակներ, ռազմաարդյունաբերական համալիր, զինված ուժերում, ազգային անվտանգության, ոստիկանության եւ այլ ռազմականացված մարմիններում ծառայություն եւ այդ ոլորտները կարգավորող օրենքներ"
    },
    {
        "id": 8,
        "title": "8․ Պետական-իրավական հարցերի մշտական հանձնաժողով՝",
        text: "սահմանադրաիրավական հարցեր, հանրաքվե, կուսակցություններ, ընտրական համակարգ, Ազգային ժողովի կանոնակարգ, Սահմանադրական դատարան, արդարադատություն, դատարանակազմություն, դատախազություն, քննչական մարմիններ, դատական ակտերի հարկադիր կատարում, քրեակատարողական ծառայություն, համաներում, հանրային ծառայություն, նոտարիատ, վարչարարություն եւ այդ ոլորտները կարգավորող օրենքներ, Սահմանադրության փոփոխություններ, դատավարական օրենսգրքեր, ինչպես նաեւ քաղաքացիական, քրեական օրենսգրքեր, վարչական իրավախախտումների վերաբերյալ օրենսգիրք"
    },
    {
        "id": 9,
        "title": "9․ Տարածաշրջանային եւ եվրասիական ինտեգրման հարցերի մշտական հանձնաժողով՝",
        text: "Եվրասիական տնտեսական միության եւ տարածաշրջանի մյուս երկրների հետ կապեր, Հայաստանի Հանրապետության եւ Եվրասիական տնտեսական միության անդամ մյուս պետությունների օրենսդրության ներդաշնակեցում, միասնականացում եւ այդ ոլորտները կարգավորող օրենքներ"
    },
    {
        "id": 10,
        "title": "10․ Տարածքային կառավարման, տեղական ինքնակառավարման, գյուղատնտեսության եւ շրջակա միջավայրի պահպանության հարցերի մշտական հանձնաժողով",
        text: "տարածքային կառավարում, վարչատարածքային բաժանում, տեղական ինքնակառավարում, տարածքային զարգացում, համայնքային ծառայություն, տեղական հարկեր, տուրքեր եւ վճարներ, գյուղատնտեսություն, շրջակա միջավայրի պահպանություն "
    },
    {
        "id": 11,
        "title": "11․ Տնտեսական հարցերի մշտական հանձնաժողով",
        text: "հարկեր, տուրքեր, վճարներ, արդյունաբերություն, քաղաքաշինություն, էներգետիկա, բնական պաշարներ, տրանսպորտ, կապ, հեռահաղորդակցություն, ինտերնետ (համացանց), արտադրական ենթակառուցվածքի այլ ճյուղեր, զբոսաշրջություն, առեւտուր եւ ծառայություններ, ձեռնարկատիրական գործունեություն, պետական գույքի կառավարում, սակագներ, ներդրումներ, տնտեսական մրցակցություն, հակամենաշնորհ եւ այդ ոլորտները կարգավորող օրենքներ"
    },
    {
        "id": 12,
        "title": "12․ Ֆինանսավարկային եւ բյուջետային հարցերի մշտական հանձնաժողով",
        text: "հարկեր, տուրքեր, վճարներ, արդյունաբերություն, քաղաքաշինություն, էներգետիկա, բնական պաշարներ, տրանսպորտ, կապ, հեռահաղորդակցություն, ինտերնետ (համացանց), արտադրական ենթակառուցվածքի այլ ճյուղեր, զբոսաշրջություն, առեւտուր եւ ծառայություններ, ձեռնարկատիրական գործունեություն, պետական գույքի կառավարում, սակագներ, ներդրումներ, տնտեսական մրցակցություն, հակամենաշնորհ եւ այդ ոլորտները կարգավորող օրենքներ"
    }
])


const [add, setAdd] = useState(false)
const [edit, setEdit] = useState(0)
const [value, setValue] = useState('')
const [erorr, setErorr] = useState(false)
const [erorr1, setErorr1] = useState(false)
const [addValue, setAddValue] = useState(['', '']) 

const remove= (id:any)=>{
  const newComittes = Committees.filter(item => item.id !== id);
  setCommittes(newComittes)

}

const saveData= (value:any,id:any)=>{
  
  const newComittes = Committees.map(item => {
    if(item.id === id) item.text = value
    return item});
  setCommittes(newComittes)

}

const additem = (value:any, value1:any)=>{
const newitem ={
  id:Date.now(),
  title:value,
  text:value1
}
setCommittes([...Committees,newitem])
}

const admin:any = localStorage.getItem('user')
 
    return (
      <div className='Committees'>
        <Header />
        <div className='CommitteesBody'>
          <div className='Committees_title'>
            <img src="./images/Frame3.png" alt="" />
            <h2>Մշտական հանձնաժողովները և նրանց գործունեության ոլորտները</h2>
             
          </div>
          <hr />
          {
            add ? <div className='addDiv'>
              <span>Վերնագիր *։<textarea className={erorr1 ? 'erorrText' : 'text'} value={addValue[0]} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => { setAddValue([e.target.value, addValue[1]]); setErorr1(false) }} /></span>
              <span>Տեղեկություն *։<textarea className={erorr ? 'erorrText' : 'text'} value={addValue[1]} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => { setAddValue([addValue[0], e.target.value]); setErorr(false) }} /></span>
              <button onClick={() => setAdd(false)} className='back' >Չեղարկել</button>
              <button onClick={() => {additem(addValue[0],addValue[1]);setAdd(!add)}} className='save' >Հաստատել</button>
              <p>* : Դաշտը պետք է լրացվի!!!</p>
            </div> :
  
              <div className='Committees_main'>
                <h2>ՀՀ ԱԶԳԱՅԻՆ ԺՈՂՈՎԻ ՄՇՏԱԿԱՆ ՀԱՆՁՆԱԺՈՂՈՎՆԵՐԸ ԵՎ ՆՐԱՆՑ ԳՈՐԾՈՒՆԵՈՒԹՅԱՆ ՈԼՈՐՏՆԵՐԸ</h2>
                <div className='Committees_main_page'>
                  {
                    Committees.map((item, index) => <div key={item.id}>
                      {
                        edit === item.id ? <div className='edit_committees'>
                          <h3>{item.title}</h3>
                          <textarea className={erorr ? 'erorrText' : 'text'} value={value} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => { setValue(e.target.value); setErorr(false) }} />
                          <button onClick={() => {saveData( value, item.id); setEdit(0)}} ><i className="fa-regular fa-square-check"></i></button>
                          <button onClick={() => setEdit(0)} ><i className="fa-solid fa-xmark"></i></button>
                        </div> : <div>
                          <h3><span>{index+1}.</span>{item.title}</h3>
                          <p>{item.text}</p>
                          {admin && <><button onClick={() => { setValue(item.text); setEdit(item.id) }}><i className="fa-solid fa-pen"></i>Փոփոխել</button><button onClick={() => remove(item.id)}><i className="fa-regular fa-trash-can"></i>Ջնջել</button></>}</div>
                      }
  
                    </div>)
                  }
                 {admin &&  <button onClick={() => setAdd(true)}><i  className="fa-solid fa-plus ADD"></i>Ավելացնել</button>}
                </div>
              </div>}
        </div>
      </div>
    )
}

