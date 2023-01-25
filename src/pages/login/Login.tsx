import { useRef, useState, useEffect } from 'react';

import { Link, useNavigate, useLocation } from 'react-router-dom';



import './login.scss'
const LOGIN_URL = '/auth';



 
const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/Admin";
    const userRef:any = useRef();
    const errRef:any = useRef();
    const [pwd,setPwd] = useState('') 
    const [user,setUser] = useState('') 
    const [errMsg, setErrMsg] = useState('');

 

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            if(pwd === "A1998Kar" && user ==="Armen"){
               localStorage.setItem("user",JSON.stringify(user))
                navigate('/Admin')
            }
           
       
            
        } catch (err : any) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Սխալ մուտքանուն կամ գախնաբառ');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }
    return (

        <section className='Login_section'>
            <div className='Login_logo'>
                <div className='Login_gerb'><img src='./images/gerb.png' /></div>
                <div>
                    <img  src='./images/Logo.png' />
                    <h2>Ազգային Ժողով</h2>
                </div>
                
            </div>
            
            <div className='Login_head'>
                <div className='Login_body'>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Մուտք</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            placeholder='Մուտքանուն...'
                            onChange={(e) => setUser(e.target.value)}
                            autoComplete="off"
                            // {...userAttribs}
                            required
                        />

                        <input
                            type="password"
                            id="password"
                            placeholder='Գաղտնաբառ'
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <div className="persistCheck">
                            
                            <input
                                type="checkbox"
                                id="persist"
                                // onChange={toggleCheck}
                                // checked={check}
                            />
                            <label htmlFor="persist">Հիշել</label>
                            </div>
                           <button className='button'>Մուտք </button> 
                        
                    </form>
                </div>
            </div>
        </section>

    )
}

export default Login
