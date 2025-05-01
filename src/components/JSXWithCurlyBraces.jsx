function JSXWithCurlyBraces(){

    const name="Abhishek Shrivastava";
    let x=10;
    let y=20;

    function fruit()
    {
        return "Apple";
    }

    //Parameterized Function
    function sum(a,b) {
        return a+b;
    }

    function operation (a, b, op) {
        let result = 0;
        if (op == "+") {
            result = a + b;
        } else if (op == "-") {
            result = a - b;
        } else if (op == "*") {
            result = a * b;
        } else if (op == "/") {
            result = a / b;
        }
        return result;
    }
    return (
        <div>
            <h1>JSX with Curly Braces</h1>
            <h1>{name}</h1>
            <h1>{x+y}</h1>
            <h1>{fruit()}</h1>
            <h1>{sum(10,100)}</h1>
            <h1>{operation(10, 20, "*")}</h1>
            <button onClick={() => alert("Hello World")}>Click Me</button>
        </div>
    )
}

export default JSXWithCurlyBraces