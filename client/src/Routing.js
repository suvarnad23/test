// import React,{lazy,Suspense} from "react";
// import { RouteObject,useRoutes} from "react-router-dom";

// const Login=lazy(()=>import("./Login"));

// const Crud=lazy(()=>import("./Crud"));



// const mainrouter=[
//     {
//         path:"/",
//         Element:<Login/>
//     },

//     {
//         parh:"/Crud",
//         Element:<Crud/>
//     }
// ];

// const Navigate=()=>{
//     const element=useRoutes(mainrouter);
//     return<Suspense fallback={<div>Loading</div>}>{element}</Suspense>
// }

// export default Navigate;