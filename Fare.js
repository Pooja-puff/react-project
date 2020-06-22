import React from 'react';
import logo from './logo.svg';
import './Register.css';



function Fare() {
  return (
 
  <div className="Fare">
<h1><center>Fare Enquiry</center></h1>



<form class="form-horizontal" role="form">
                
                <div class="form-group">
                    <label for="firstName" class="col-sm-3 control-label">Enter Train Number  </label>
                    <div class="col-sm-9">
                        <input type="text" id="Train Number " placeholder=" Train Number " class="form-control" autofocus/>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="birthDate" class="col-sm-3 control-label"> Enter Journey Date</label>
                    <div class="col-sm-9">
                        <input type="date" id="birthDate" class="form-control"/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="firstName" class="col-sm-3 control-label">Enter Source Station  </label>
                    <div class="col-sm-9">
                        <input type="text" id="Enter Source Station " placeholder=" Enter Source Station " class="form-control" autofocus/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="firstName" class="col-sm-3 control-label">Enter Destination Station </label>
                    <div class="col-sm-9">
                        <input type="text" id="Enter Destination Station " placeholder=" Enter Destination Station " class="form-control" autofocus/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="firstName" class="col-sm-3 control-label">Enter Class</label>
                    <div class="col-sm-9">
                        <input type="text" id="Sleeper Class" placeholder=" Sleeper Class" class="form-control" autofocus/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="firstName" class="col-sm-3 control-label">Enter Quota</label>
                    <div class="col-sm-9">
                        <input type="text" id="General Quota" placeholder=" General Quota" class="form-control" autofocus/>
                    </div>
                </div>
               
                
                
                
                <button type="submit" class="btn btn-primary btn-block">Get Fare</button>
            </form>
        </div> 

                                    
   
    
    
   



 
   





  );
}
export default Fare;