import Header from "./Header"
import Login,{Profile,Setting,UserKey} from "./components/UserComponent"
import JSXDemo from "./components/JSXDemo"

function Apple() {
  return(
    <div>
      <Header />      
      {/* <h1>Hello World</h1>
      <h2>Code By Abhi</h2>
      <Login />
      <Profile />
      <Setting /> */}
      {/* <h1>{UserKey}</h1> */}
      <JSXDemo />

    </div>
  )
}

export default Apple;