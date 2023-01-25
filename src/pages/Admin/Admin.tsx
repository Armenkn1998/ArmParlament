import { NavLink, useNavigate} from "react-router-dom";
import "./Admin.scss"

const Admin = () => {
    const singin = () =>{
        localStorage.removeItem("user")
        navigate('/') 
      }
        const user = localStorage.getItem('user')
      
    const navigate = useNavigate();
   
    return (
        <div className="admin">
        <section className="section">
            <div className="pannel">
                <h1>Ազգային Ժողով</h1> 
                <NavLink to="/Admin">Գլխավոր</NavLink>
                <NavLink to="/DocCirculation">Քաղաքացիների ընդունելության և  փաստաթղթաշրջանառության կարգը</NavLink>
                <NavLink to="/TimeTable">Քաղաքացիների ընդունելության ժամանակացույց</NavLink>
                <NavLink to="/Committees">Մշտական հանձնաժողովները և նրանց գործունեության ոլորտները</NavLink>
                <NavLink to="/MeetingsSchedule">ԱԺ նիստերի ժամանակացույց</NavLink>
                <NavLink to="/MPNumbers">Պատգամավորների աշխատանքային հեռախոսահամարները</NavLink>
                <NavLink to="/DepNumbers">Կառուցվածքային ստորաբաժանումների հեռախոսահամարներ</NavLink>
                <a onClick={() =>singin()}>Դուրս գալ</a> 
            </div>
           
            
       
        </section>
        <div className='panelTwo'  ></div>
        </div>
    )
}

export default Admin
