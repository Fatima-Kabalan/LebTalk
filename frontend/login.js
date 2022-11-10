// import { setUser } from "./auth";
// import { httpPost } from "./httpcommon";


// const login = async(e)=>{
//     e.preventDefault();
//     setLoading(true);

//     const data = {
//         email: e.target.email.value,
//         password: e.target.password.value,
//     };

//     const result = await httpPost("/login",data);

//     if(result.data.success){
//         setUser(result.data);
//         if(location.state == undefined){
//             history.pushState("landingPage");
//         }else{
//             history.pushState(location.state.from.pathname);
//         }
//     }else{
//         setErrorMessage(result.data.message);
//         setLoading(false);
//     }
// }