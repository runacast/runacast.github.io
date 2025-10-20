import Register from '@/components/admin/Register'

export default ({ children }) => {
    return <div className="container">
        <div className="content">
            <form className="form">
                <fieldset>
                    <div className="field-group">
                        <input type="" name="username" placeholder="Username"/>
                    </div>
                    <div className="field-group">
                        <input type="" name="password" placeholder="Username"/>
                    </div>
                    <div className="field-group">
                        <button type="button" className='btn btn-form'>Login</button>
                    </div>
                </fieldset>
            </form>
            <Register />
        </div>
    </div>
}