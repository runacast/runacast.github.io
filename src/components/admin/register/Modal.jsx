'use client'

export default ({set}) => {
    
    return <div className="modal-container">
        <form className="form modal-content">
            <fieldset>
                <legend>Register me</legend>
                <div className="field-group">
                    <input type="email" name="email" placeholder="Input your email" />
                </div>
                <div className="field-group">
                    <input type="password" name="password" placeholder="Your password" />
                </div>
                <div className="field-group">
                    <button type="button" className="btn btn-modal" onClick={() => set(false)}>Cerrar</button>
                </div>
                <button type="button" className="btn btn-modal" onClick={() => set(false)}>Cerrar</button>
            </fieldset>
        </form>
    </div>

}