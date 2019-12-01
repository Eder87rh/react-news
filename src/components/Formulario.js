import React, {Component} from 'react';

class Formulario extends Component {
  state = {  }
  render() { 
    return (
      <div className="buscador row">
        <div className="col s12 m8 offset-2">
          <form action="">
            <h2>Encuentra noticias por categoria</h2>
            <div className="input-field col s12 m8">
              <select>
                <option value="general">General</option>
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="health">Health</option>
                <option value="sciende">Sciende</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
 
export default Formulario;