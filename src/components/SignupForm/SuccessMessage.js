import { Link } from "react-router-dom"
function SuccessLoginMessage() {
   return (
      <div className="Success-login-msg">
         <div class="d-flex align-items-center justify-content-center">
            <div class="alert alert-success px-5 w-50" role="alert">
               Your sign up was successful !
            </div>
         </div>
         <Link to="/">
            <button type="button" class="btn btn-success mt-4">
               Go to DashBoard <i class="fa-solid fa-arrow-right"></i></button>
         </Link>
      </div>
   )
}

export default SuccessLoginMessage;