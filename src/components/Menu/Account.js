import {Link} from "react-router-dom";
function Account() {
    return (
        <form class="form" id="createAccount">
        <h1 class="form__title">Create Account</h1>
        <div class="form__message form__message--error"></div>
        <div class="form__input-group">
            <input type="text" id="signupUsername" class="form__input" autofocus placeholder="Usermane"></input>
            <div class="form__input-error-message"></div>
        </div>
        <div class="form__input-group">
            <input type="text" class="form__input" autofocus placeholder="Email Adress"></input>
            <div class="form__input-error-message"></div>
        </div>
        <div class="form__input-group">
            <input type="password" class="form__input" autofocus placeholder="Password"></input>
            <div class="form__input-error-message"></div>
        </div>
        <div class="form__input-group">
            <input type="password" class="form__input" autofocus placeholder="Comfirm password"></input>
            <div class="form__input-error-message"></div>
        </div>
        <Link to="/choose"><button class="form__button" type="submit">Continue</button></Link> 

    
                   <Link class="form__link" to="/Start">Alredy have an account? Sign in here</Link>
                  
      </form>

              
    );
    }
  
  export default Account;