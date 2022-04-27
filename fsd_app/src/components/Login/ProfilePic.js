
import { useState } from "react";



function ProfilePic(){
    const [file,setFile]=useState("")

      //taking the input from the user
      return (<div>
          <form className="form-box" action="http://localhost:9000/uploadfile" enctype="multipart/form-data" method="POST">
      <h1>Uplaod Profile Pic</h1>
      <div className="field1">
          <input type="file" placeholder="Licence"  name="myFile"  onChange={(e)=>setFile(e.target.value)}  />
        </div>
          <button className="submitBtn">Uplaod</button>

          </form>
      </div>)
}

export default ProfilePic;