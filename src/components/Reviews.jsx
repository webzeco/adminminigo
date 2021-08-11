import React, { useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { toast } from 'react-toastify';
import { deleteReview, getAllReviews, updateReview } from '../services/reviewServices';

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [favorite, setFavorite] = useState([]);



    const getAllReviewsHandler = async () => {
        const { data } = await getAllReviews();
        setReviews(data.data); console.log(data.data);

    }

    const onDeleteHandler = async (review) => {
        console.log({ review });
        const filtered = reviews.filter(rev => rev._id !== review._id);
        setReviews(filtered);
        await deleteReview(review._id);
    }
    const onselectHandler = async (e, id) => {
        const preReviews=reviews;
        // console.log(e.target.checked, id);
        try {
           const {data}= await  updateReview(e.target.checked,id);
            e.target.checked=e.target.checked?false:true;
            // console.log(data);
            return setReviews(data.data);
        } catch (error) {
            toast.error("Something went Wrong Please Try again!!!");
            setReviews(preReviews);
        }
    }
    useEffect(() => {
        getAllReviewsHandler();
        return () => {
            console.log("clean up reviews");
        }
    }, [])
    return (
        <div>
            <div className="container">
                <div className="display-4 ">Reviews</div>
            </div>
            <table class="table caption-top mx-3">
                <caption>List of latest Reviews</caption>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product</th>
                        <th scope="col">Email</th>
                        <th scope="col">Favorite</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                {reviews && reviews.map((rev, index) => {
                    return (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{rev.product?.title}</td>
                            <td>{rev.email}</td>
                            <td>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox"  onChange={(e) => onselectHandler(e, rev._id)} id="flexSwitchCheckChecked" checked={rev.favorite} />
                                </div>
                            </td>
                            <td><ReactStars
                                value={rev.rating}
                            />
                            </td>
                            <td>{rev.createdAt.substring(0, 10)}</td>
                            <td><div class="d-grid gap-1 col-1 mx-auto">
                                <button class="btn btn-info" type="button">Detail</button>
                                <button onClick={() => onDeleteHandler(rev)} class="btn btn-danger" type="button">Delate</button>
                            </div></td>
                        </tr>
                    );
                })}
            </table>
        </div>
    )
}
