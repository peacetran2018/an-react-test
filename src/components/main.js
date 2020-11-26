import ReusableCard from './card';
import React, { useEffect, useState } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

function Main() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            fetch('/data/data.json'
                , {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            )
                .then(res => res.json())
                .then(function (result) {
                    console.log(result);
                    setIsLoaded(true);
                    setItems(result);
                },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    });
        }, 3000);
        return () => clearInterval(interval);

    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
        return (
            <div className="container">
                <div className="mt-3">
                    <h2>APIs & Services</h2>
                    <h6>Access information on how to use Forge APIs & services</h6>
                </div>
                <div className="center">
                    <Loader
                        type="ThreeDots"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs

                    />
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container">
                <div className="mt-3">
                    <h2>APIs & Services</h2>
                    <h6>Access information on how to use Forge APIs & services</h6>
                </div>
                <div className="row">
                    {
                        items.map(item => (
                            <div className="col-lg-4 col-sm-6 m-tb-16">
                                <ReusableCard icon={item.icon} title={item.title} description={item.description} links={item.links} />
                            </div>
                        ))
                    }
                </div>

            </div>
        )
    }
}

export default Main;