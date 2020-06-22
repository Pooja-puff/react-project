import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Booking.css';


function Booking() {
    return (

<div className="Booking">

<div class ="container">
<form class="form-horizontal" role="form">
    <h1><center>Book</center></h1>
                <h3><center>YOUR TICKET</center></h3>
                <div class="form-group">
                    <label for="firstName" class="col-sm-3 control-label">From*  </label>
                    <div class="col-sm-9">
                        <input type="text" id="firstName" placeholder="From*" class="form-control" autofocus/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="lastName" class="col-sm-3 control-label">To</label>
                    <div class="col-sm-9">
                        <input type="text" id="lastName" placeholder="To*" class="form-control" autofocus/>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="birthDate" class="col-sm-3 control-label">Date </label>
                    <div class="col-sm-9">
                        <input type="date" id="birthDate" class="form-control"/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="lastName" class="col-sm-3 control-label">All Classes</label>
                    <div class="col-sm-9">
                        <input type="text" id="lastName" placeholder="Class*" class="form-control" autofocus/>
                    </div>
                </div>
                
                <div class="form-group">
                    
                    <div class="col-sm-6">
                        <div class="row">
                            <div class="col-sm-4">
                                <label class="radio-inline">
                                    <input type="radio" id="femaleRadio" value="Female"/>Flexible With Date
                                </label>
                            </div>
                            <div class="col-sm-4">
                                <label class="radio-inline">
                                    <input type="radio" id="maleRadio" value="Male"/>Divyaang Concession
                                </label>
                            </div>
                            <div class="col-sm-4">
                                <label class="radio-inline">
                                    <input type="radio" id="maleRadio" value="Male"/>Journalist Concession
                                </label>
                            </div>
                        </div>
                    </div>
                </div> 
               
                <button type="submit" class="btn btn-primary btn-block">Find Train</button>
            </form>
        </div> 

                                    
   
    
    
   
            
    


    
                    
               
</div>

 
  );
}
export default Booking;