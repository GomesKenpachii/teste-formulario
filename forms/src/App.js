
import {useState} from 'react';
import './App.css';

function App() {
  
  const [formValues,setFormValues]=useState({});
  
  const handleInputChange=(e)=>{
    
    
    const {name, value,}=e.target;
    
    setFormValues({...formValues,[name]:value})
    
  }



  console.log('formValues',formValues)
  return (
    <form  action='https://api.sheetmonkey.io/form/9qPnePSXQFBegb7woKQtxB' method='post'>
      <input type="text" name="email" placeholder="Email" onChange={handleInputChange} value={formValues.email ||''} />
      <input type="text" name="nome" placeholder="Nome" onChange={handleInputChange}  value={formValues.nome ||''} />
      
      <select name="apelido" onChange={handleInputChange} value={formValues.apelido ||''}>
        <option value="rafael">rafael</option>
        <option value="rafa">rafa</option>
        <option value="fael">fael</option>
        
      </select>
      <div className='radios'>
        <label><input type="radio" value="café" name="drink" onChange={handleInputChange} checked={formValues.drink==='café'}/>café</label>
        <label><input type="radio" value="chá" name="drink" onChange={handleInputChange} checked={formValues.drink==='chá'}/>chá</label>
        <label><input type="radio" value="leite" name="drink" onChange={handleInputChange} checked={formValues.drink==='leite'}/>leite</label>
      </div>

      <div className='checks'>
        <label>
          <input type="checkbox" name='twitter' value='twitter' onChange={handleInputChange}/>twitter   <br/>  
        </label><br/>
        <label>
          <input type="checkbox" name='facebook' value='facebook' onChange={handleInputChange}/>facebook <br/>
        </label><br/>
        <label>
          <input type="checkbox" name='instagram' value='instagram' onChange={handleInputChange}/>instagram <br/>
        </label><br/>
      </div>
      
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
