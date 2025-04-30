import { createElement } from "react";

function withoutJSX() {
    return createElement("div", {id: "rootDiv"}, "Hello Div");
}

export default withoutJSX