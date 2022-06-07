import {Link} from "react-router-dom";

function Rival() {
    return (
        
        <div className="rival-img">
        <Link class="pkmn_link" to="/Start"><img src="/images/001.png" alt=""/></Link> 
        <Link class="pkmn__link" to="/Start"><img src="/images/007.png" alt=""/></Link>
        <Link class="pkmn__link" to="/Arena"><img src="/images/jj.png" alt=""/></Link>
   </div>           
    );
    }
  
  export default Rival;