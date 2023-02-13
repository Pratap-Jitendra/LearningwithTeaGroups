
import './App.css';
import second from './second.jpg'

function App() {


  return (
    <div className="container">
        <h1>Welcome to Learning with Tea Groups!</h1>
      <p>Job oriented Course Registraion Rs.- 1000/00 only.</p>
      <div className='form9'>
        <div className='gallary'>
<img src={second} alt="logo"/>
        </div>
        <form action="https://formspree.io/f/mlekjano" method='post'>
        <h2>Registraion Form</h2>
        <input type="text" placeholder='Enter Your Full Name' name='Name'/>
        <input type="number" placeholder='Mobile_Number' name='Mobile-Number'/>
        <input type="text" placeholder='Highest Qualification:' name='Education'/>
        <input type="text" placeholder='Location' name="Location"/>
        <input type="email" placeholder='Email-id' name="email"/>
        <button type='submit'>Register</button>
        </form>
        </div>
      
    </div>
  );
}

export default App;
