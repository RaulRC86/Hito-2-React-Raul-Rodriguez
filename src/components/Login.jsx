import { useState } from "react";

const Login= () => {
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [error, setError] = useState('')

    const handleSubmit= (e) => {
        e.preventDefault();
        if (!email || !contraseña){
            setError('Ambos campos son obligatorios')
            return;
        }
        if(contraseña.length < 6){
            setError('La contraseña es demasiado corta')
            return;
        }
        setError('');
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Email</label>
            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
        <div>
            <label>Contraseña</label>
            <input type="password" value={contraseña} onChange={(e)=>{setContraseña(e.target.value)}} />
        </div>
        <button type="submit">Iniciar Sesión</button>
              {/* Mostrar el error si existe */}
      {error && <p className="error">{error}</p>}
    </form>
        </>
    )
}
export default Login