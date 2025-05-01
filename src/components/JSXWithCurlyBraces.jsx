function JSXWithCurlyBraces(){

    const name="Abhishek Shrivastava";
    let x=10;
    let y=20;

    function fruit()
    {
        return "Apple";
    }
    return (
        <div>
            <h1>JSX with Curly Braces</h1>
            <h1>{name}</h1>
            <h1>{x+y}</h1>
            <h1>{fruit()}</h1>
            <button onClick={() => alert("Hello World")}>Click Me</button>
        </div>
    )
}

export default JSXWithCurlyBraces