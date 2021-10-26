import "./App.css";
// import UserForm from './Components/UserForm/UserForm';
import Content from "./Content/Content";
import {Switch, Route } from "react-router-dom";
import UserProfile from "./pages/UserProfile";
import {useSelector} from "react-redux"


function App() {
  // const users = useSelector((state) => state.userReducer.info);
  // console.log(users,"from app")
  // const [id,data]= users;
  // const userdata = users.map(({id,data})=>{
  //   return data;
  // })
// console.log(userdata,"frim App")
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={Content} />
          {/* <Route path="/userprofile" children={ <UserProfile users={userdata} />} /> */}
          <Route path="/userprofile/:id" component={UserProfile} />
        </Switch>
    </div>
  );
}

export default App;
