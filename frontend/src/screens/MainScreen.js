import React from 'react';
import caro1 from "../images/caro1.jpg";
import caro2 from "../images/caro2.jpg";
import caro3 from "../images/caro3.jpg";
import caro4 from "../images/caro4.webp";
import allProductsData from "../Data/allProductsData";
import Card from "../components/Card";


function mainScreen({setShowNav}) {
    setShowNav(true);
    return (
        
        <div>
            <div className="container text-center ">
                <h1 className="mt-3 "> Online Medicine Store</h1>
                <hr className="w-50 mx-auto" />
            </div>

            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={caro1} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={caro2} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={caro3} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={caro4} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div className="homescreen" style={{marginTop:"50px"}}>
                <div className="container text-center ">
                    <h1 className="mt-3 ">Explore By</h1>
                    <hr className="w-50 mx-auto" />
                </div>

                <div className="homescreen__products">
                    {allProductsData.map((val, index) => {
                        return (
                            <Card
                                key={index}
                                imgsrc={val.imgsrc}
                                title={val.title}
                                info={val.info}
                                link={val.link}
                                id={val.id}

                            />
                        )

                    })}

                </div>
            </div>
        </div>
    )
}

export default mainScreen
