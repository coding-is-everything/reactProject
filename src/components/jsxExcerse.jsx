function jsxExcerse() {

    function callFun(){
        alert("Function called.")
    }
    return (
        <div>
            <h1>Abhishek Shrivastava Todos</h1>
            <img src="https://picsum.photos/id/237/536/354"
            alt="Abhishek Shrivastava"
            class="photo"
            />
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
            <button onClick={callFun}>Click Me</button>
        </div>
    )
}

export default jsxExcerse;