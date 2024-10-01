import { Link } from "react-router-dom";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" style= {{width: 120}} className="wd list-group fs-5 rounded-0">
      
      <Link to={`/Kanbas/Account/Signin`}  className= "list-group-item text-danger border border-0"> 
      Signin  </Link>

      <Link to={`/Kanbas/Account/Signup`}  className= "list-group-item text-danger border border-0"> 
      Signup  </Link>

      <Link to={`/Kanbas/Account/Profile`} className= "list-group-item text-danger border border-0">
       Profile </Link>
       
    </div>
  );
}
