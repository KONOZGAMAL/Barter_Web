import {React , useState , useEffect , useRef} from 'react'
import Style from './Register.module.css'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,16}$/;
// const REGISTER_URL = "/register";
export default function Register() {
  // const userRef = useRef();
  const [firstname, setFirstName] = useState("");
  // const [userFocus, setUserFocus] = useState(false);
  const [validFirstName, setValidFirstName] = useState(false);

  const [lastName, setLastName] = useState("");
  const [validLastName, setValidLastName] = useState(false);


  const [email, setEmail] = useState("");
  // const [emailFocus, setEmailFocus] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  // const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);

  // useEffect(() => {
//       userRef.current.focus();
// }, [])
useEffect(() => {
  setValidFirstName(USER_REGEX.test(firstname));
  setValidLastName(USER_REGEX.test(lastName));
  setValidEmail(EMAIL_REGEX.test(email));
}, [firstname , lastName , email]);

useEffect(() => {
  setValidPwd(PWD_REGEX.test(pwd));
  setValidMatch(pwd === matchPwd);
}, [pwd, matchPwd]);

  const handleSubmit = (event)=>{
     event.preventDefault()
  }
  return (
    <div className={Style.container}>
      <section>
      <h1>Create account</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="firstname">
           First Name   
            </label>
            <input
            type="text"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            required
            aria-describedby="uidnote"
            placeholder='Write Your First Name'
            />
           
             <p  className={validFirstName || !firstname?Style.hide : Style.invalid }>First Name shoud be greater than 3 characters</p>
            <label htmlFor="lastName">
            Last Name   
            </label>
            <input
            type="text"
            required
            id='lastName'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            aria-describedby="uidnote"
            placeholder='Write Your Last Name'/>
            {
             lastName === '' ? '':
             <p  className={validLastName ?Style.hide : Style.invalid }>Last Name shoud be greater than 3 characters</p>
            }

            <label htmlFor="emailUser">
            Email
          </label>
          <input
            type="email"
            id="emailUser"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="uidnote"
            placeholder='Write your Email'
            />
            {
              email === ''? '' :<p  className={validEmail ?Style.hide : Style.invalid }>The Email is not Valid</p>
            }
         <div className={Style.card}>
                  <p>Gender </p>
                    <div className={Style.form}>
                <label><input type="radio" className={Style.input_radio} name="pilih" value="male"/>Male </label>
               <label><input type="radio" className={Style.input_radio} checked name="pilih" value="female"/> Female</label>
               </div>
               </div>
          <label htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            aria-describedby="pwdnote"
          />
          {
            pwd === ''? "" : <p className={validPwd ? Style.hide : Style.invalid }>
              password should cantain al least i special character the length should be between 6 to 16 character
             </p>
          }
          <label htmlFor="confirm_pwd">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm_pwd"
            value={matchPwd}
            onChange={(e) =>setMatchPwd(e.target.value)}
            required
            aria-describedby="confirmnote"
          />
              {
              matchPwd === ''? "" : <p className={validMatch ? Style.hide : Style.invalid }>
             Password should be match 
             </p>
          }
          <label htmlFor="checkbox">
       <input type="checkbox" id="checkbox" required/>
       <span className={Style.prg_checkbox}> I accepted privacy and security</span>
      </label>
      <button >
            Send
          </button>
      </form>
      </section>
    </div>
  )
}
