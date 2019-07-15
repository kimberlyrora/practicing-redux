import React from "react";
import Lista from "./List";
import Formulario from './Form'
const App2 = () => (
    <div className='row mt-5'>
        <div className="row mt-5">
            <div className="col-md-4 offset-md-1">
                <h2>Articles</h2>
                <Lista />
            </div>
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>Add a new article</h2>
            <Formulario />
        </div>
    </div>

)
export default App2