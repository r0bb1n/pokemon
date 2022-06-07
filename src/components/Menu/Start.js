import {Link} from "react-router-dom";
function Start() {
    return (
          <form class="form" id="login">
            <h1 class="form__title">Login</h1>
            <div class="form__message form__message--error"></div>
            <div class="form__input-group">
                <input type="text" class="form__input" autofocus placeholder="Usermane or Email"></input>
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="password" class="form__input form__input--error" autofocus placeholder="password"></input>
                <div class="form__input-error-message"></div>
            </div>
           <Link to="/choose"><button class="form__button" type="submit">Continue</button></Link> 
                       <Link class="form__link"  to="/Account">Don´t have an account? Create accoun</Link>     
          </form>
    );
    }
  
  export default Start;