import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './contexts/UserContext';

export default function Profile() {
    const { user } = useContext(UserContext);
    console.log(user);
    const [User, setUser] = useState();
    useEffect(() => {
        setUser(user?.data);
        return () => {
            console.log("Profile clean up");
        }
    }, [])

    return (
        <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        {    console.log(User)
}
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                <img class="rounded-circle mt-3 " width="150px"
         src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
         <span class="font-weight-bold">{User?.name}</span>
         <span class="text-black-50">{User?.email}</span>
         <span className='mx-5 '>
         {/* <input type="file" class="form-control-small btn-danger m-4" /> */}
         </span>
             {/* */}
         
        </div>
        </div>
        <div class="col-md-4 border-right ">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-12"><label class="labels">User Name</label><input readOnly type="text" class="form-control" placeholder="Enter User Name" value={User.name}/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" value={User.contactNo}/></div>
                </div>

            </div>
        </div>
        <div class="col-md-5">
            <div class="p-3 py-5">
              
                <div class="col-md-12"><label class="labels">Province</label> 
                 <select class="form-select">
                    <option selected> </option> 
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                    <div class="col-md-12"><label class="labels">City</label>
                        <select class="form-select mt-1 mb-1">
                            <option selected> </option> 
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            
                          </select>
                    </div>
                    <div class="col-md-12"><label class="labels">Area</label>
                        <select class="form-select mt-1 mb-1">
                            <option selected> </option> 
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            
                          </select>
                    </div>
                    <div class="col-md-12"><label class="labels">Address</label><input type="text" class="form-control" placeholder="Enter Address" value=""/></div>
                    
                    <div class="mt-3"><button class="btn btn-danger profile-button" type="button">Save Profile</button></div> 
            </div>
        </div>
    </div>
</div>

    )
}
