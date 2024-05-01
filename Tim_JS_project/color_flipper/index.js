const body = document.getElementsByTagName('body')[0];
// body.style.backgroundColor = "red";

setColor = (name) => {
    body.style.backgroundColor = name;
}

randomColor = () => {
    // let color = Math.floor(Math.random() * 16777215).toString(16);
    // let color = Math.round(Math.random() * 255);
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    const color = `rgb(${red}, ${green}, ${blue})`;

    // console.log(color);
    setColor(color);
}
