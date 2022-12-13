import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts as listContacts } from "../redux/actions/contactActions";
import "../styles/Contact.css";
import Contact from "../components/Contact";

function AdminScreen({setShowNav}) {

    setShowNav(true);

    const dispatch = useDispatch();

    const getContacts = useSelector((state) => state.getContacts);
    const { contacts, loading, error } = getContacts;
    useEffect(() => {
        dispatch(listContacts());

    }, [dispatch]);

    return (
        <div>
            <div className="content-wrapper">
                <div className="container-fluid">

                    <div className="card mb-3">

                        <div className="card-body">

                        <table className="table">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Contact Id</th>
                                            <th scope="col">Full Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Message</th>
                                            <th scope="col">City</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                            {loading ? (
                                            <h2>Loading...</h2>
                                            ) : error ? (
                                            <h2>{error}</h2>
                                            ) : (
                                            contacts.map((contact) => (
                                                <Contact
                                                id={contact._id}
                                                fullName={contact.fullName}
                                                email={contact.email}
                                                message={contact.message}
                                                city={contact.city}
                                                />
                                            )
                                            )
                                            )}
                                    </tbody>
                        </table>

                                    {/* <thead>
                                        <tr>
                                            <th>Contact Id</th>
                                            <th>Full Name</th>
                                            <th>Email</th>
                                            <th>Message</th>
                                            <th>City</th>
                                            <th>Start date</th>
                                        </tr>
                                    </thead> */}

                                    {/* <div className="contact">
                                            <div class="grid-container">
                                            <div class="grid-item">Contact Id</div>
                                            <div class="grid-item">Full Name</div>
                                            <div class="grid-item">Email</div>  
                                            <div class="grid-item">Message</div>
                                            <div class="grid-item">City</div>
                                            <div class="grid-item">Start date</div>  
                                            </div>
                                    </div>

                                    

                                    <div>
                                    <div className="homescreen__products">
                                        {loading ? (
                                        <h2>Loading...</h2>
                                        ) : error ? (
                                        <h2>{error}</h2>
                                        ) : (
                                        contacts.map((contact) => (
                                            <Contact
                                            id={contact._id}
                                            fullName={contact.fullName}
                                            email={contact.email}
                                            message={contact.message}
                                            city={contact.city}
                                            />
                                        )
                                        )
                                        )}
                                        </div>
                                    </div> */}

                                    {/* <tbody>
                                        <tr>
                                            <td>Tiger Nixon</td>
                                            <td>System Architect</td>
                                            <td>Edinburgh</td>
                                            <td>61</td>
                                            <td>2011/04/25</td>
                                            <td>$320,800</td>
                                        </tr>
                                    </tbody> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default AdminScreen
