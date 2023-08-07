import React , {useState} from 'react';
import '../App.css'

const Form = ({title,handleClick}) => {
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    return (
        <div>
        <div className={'login-block'}>
            <h1>{title}</h1>
            <form>
                <label htmlFor="email">Email Kiriting</label>
                <input className='form-control' id='email' type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder={'Email...'}  />
                <label htmlFor="pass"> Parol kiriting</label>
                <input className='form-control' id='pass' type="password" value={pass} onChange={(e) => setPass(e.target.value)}  placeholder={'Password...'} />
                <button type='button' onClick={() => handleClick(email,pass)}>
                    {title}
                </button>
            </form>
        </div>
        </div>
    );
};

export default Form;