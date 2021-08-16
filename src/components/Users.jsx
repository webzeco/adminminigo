import React, { useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteReview, getAllReviews, updateReview } from '../services/reviewServices';
import { deleteUser, getStaff } from '../services/UsersService';

export default function Users() {
    const [staff, setStaff] = useState([]);
    const [favorite, setFavorite] = useState([]);

    const getStaffHandler = async () => {
        const  {data}  = await getStaff();
        setStaff(data.users); 
        console.log(data.users);
    }

    const onDeleteHandler = async (user) => {
        console.log({ user });
        const preUsers=staff; 
        const filtered = staff.filter(rev => rev._id !== user._id);
        setStaff(filtered);
        try {
            await deleteUser(user.name);
        } catch (error) {
toast.error('Something went wrong User Not Deleted !!!');
setStaff(preUsers)
        }
    }
  
    useEffect(() => {
        getStaffHandler();
        return () => {
            console.log("clean up users");
        }
    }, [])
    return (
        <div>
            <div className="container">
                <div className="display-6 px-3 fw-bold mt-3 ">ALL USERS</div>
            </div>
            <Link to='/addUser'>Add New User</Link>
            <div class="table-responsive">
            <table className="table mx-2 mt-3">
               
                <thead>
                    <tr className="bg-info">
                        <th scope="col">#</th>
                        <th scope="col">User</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">CreatedAt</th>
                        <th scope="col">Action</th>                  

                    </tr>
                </thead>
                {staff && staff.map((user, index) => {
                    console.log(user);
                    return (
                        <tr>
                            <td className="px-2" style={{width:"5%"}}>{index + 1}</td>
                            <td style={{width:"25%"}}>{user.profile}</td>
                            <td style={{width:"25%"}}>{user.name}</td>
                            <td style={{width:"25%"}} >{user.email}</td>
                            <td style={{width:"10%"}}>{user.createdAt.substring(0, 10)}</td>
                            <td style={{width:"10%"}}><div class="d-grid gap-1 mx-auto">
                                <button class="btn btn-sm btn-info" type="button">Detail</button>
                                <button onClick={() => onDeleteHandler(user)} class="btn btn-sm btn-danger" type="button">Delate</button>
                            </div></td>
                        </tr>
                    );
                })}
            </table>
            </div>
        </div>
    )
}
