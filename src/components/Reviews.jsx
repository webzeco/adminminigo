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
        const preReviews = reviews;
        // console.log(e.target.checked, id);
        try {
            const { data } = await updateReview(e.target.checked, id);
            e.target.checked = e.target.checked ? false : true;
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
                <div className="display-6 px-3 fw-bold mt-3 ">Reviews</div>
            </div>
            <div class="table-responsive">
                <table className="table mx-2 mt-3">

                    <thead>
                        <tr className="bg-info text-white">
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
                                <td className="px-2 fw-bold" style={{ width: "5%" }}>{index + 1}</td>
                                <td style={{ width: "10%" }}>{rev.product?.title}</td>
                                <td style={{ width: "10%" }} >{rev.email}</td>
                                <td className="px-5" style={{ width: "5%" }} >
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" onChange={(e) => onselectHandler(e, rev._id)} id="flexSwitchCheckChecked" checked={rev.favorite} />
                                    </div>
                                </td>
                                <td style={{ width: "10%" }}><ReactStars
                                    value={rev.rating}
                                />
                                </td>
                                <td style={{ width: "10%" }}>{rev.createdAt.substring(0, 10)}</td>
                                <td className="px-2" style={{ width: "10%" }}><div class="d-grid gap-1 mx-auto">
                                    <button class="btn btn-sm btn-info" type="button">Detail</button>
                                    <button onClick={() => onDeleteHandler(rev)} class="btn btn-sm btn-danger"
                                        type="button">Delate</button>
                                </div></td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </div>
    )
}
