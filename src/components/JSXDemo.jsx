function JSXDemo() {
    const userName = "Abhishek Shrivastava";
    let x = 20;
    let y = 30;
    return (
        <div>
            <h1>{userName}</h1>
            <h1>{10+20+30}</h1>
            <h1>{x*y}</h1>
            <button onClick={() => alert("Hello World")}>Click Me</button>
        </div>
    )
}

export default JSXDemo;