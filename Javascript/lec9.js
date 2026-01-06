const ul = document.querySelector("#ul");

const carsData = async () => {
try {
    const res = await fetch("https://myfakeapi.com/api/cars/");
    const data = await res.json();
    console.log(data);
    data.cars.forEach((item) => {
        const li = document.createElement("li");
        
        li.innerText = item.car;
        li.style.backgroundColor = item.car_color;
        li.style.height = "6rem";
        li.style.width = "6rem";
        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.justifyContent = "center";
        ul.appendChild(li);
    });
} catch (err) {
    console.log(err);
}
}
carsData();   