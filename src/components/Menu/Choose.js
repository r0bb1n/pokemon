import {Link} from "react-router-dom";
function Choose() {
    return (
        
        <div className="choose-img">
           <Link class="pkmn__link" to="/Rival"><img src="/images/jj.png" alt=""/></Link>
            <Link class="pkmn_link" to="/Rival"><img src="/images/001.png" alt=""/></Link>
           <Link class="pkmn__link" to="/Start"><img src="/images/007.png" alt=""/></Link>
   </div>           
    );
    }
  
  export default Choose;