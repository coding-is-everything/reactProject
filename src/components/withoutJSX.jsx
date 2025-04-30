import { createElement } from "react";

function withoutJSX() {
    // return createElement("div", {id: "rootDiv"}, "Hello Div");
    return (
        <div className="rootDiv">
            <h1>Hello Div</h1>
        </div>
    )
}

export default withoutJSX