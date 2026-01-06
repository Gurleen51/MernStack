import {useEffect, useState} from 'react';
import axios from 'axios';

const Cars = () => {
    const [data, setData] = useState([]);

    const getCars = async () => {
        console.log("running");
        try {
            const carsData = await axios.get('https://myfakeapi.com/api/cars/');
            setData(carsData.data.cars);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getCars();
    }, []);
    console.log(data);
  return (
    <>
    <h1>cars Data</h1>
    <div className="cars">
        {data.map((item, index) => (
            <div key={index} className="card" style={{backgroundColor: item.car_color}}>
                {" "}
                <h1 className="b1">{item.car}</h1>{""}
                <h2>{item.car_model}</h2>
                <h3>{item.car_model_year}</h3>
            </div>
        ))}
    </div>
    </>
  )
}

export default Cars
