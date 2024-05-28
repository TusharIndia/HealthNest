import { Link, useNavigate } from "react-router-dom"

function Login(){
    const navigate = useNavigate()
    return(
        <div>
              <>

<div className="loginBox21 ">

    <section>
        <div class="login-form">

            <div className="login-form2">
                <div><p onClick={() => { navigate('/') }} className="signUpText2" style={{ color: 'black' }}>Health<span>book</span></p></div>
                <h3>Sign in</h3>



                <form  method="Post"  >
                    <label for="name">Username</label>
                    <input  type="text" id="name" name="username" />

                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" />

                    <button  type="submit">Log in</button>
                </form>

                <div class="text-info">
                    <Link to ="/">Back to Home</Link>

                </div></div>
        </div>
        <div class="login-img">
           

        </div>
    </section>


</div>

</>

        </div>
    )
}

export default Login