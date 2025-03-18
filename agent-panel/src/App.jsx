// import { Suspense, lazy, useEffect, useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import { Toaster } from "react-hot-toast";

// import ECommerce from "./pages/Dashboard/ECommerce";
// import SignIn from "./pages/Authentication/SignIn";
// import SignUp from "./pages/Authentication/SignUp";
// import Loader from "./common/Loader";
// import routes from "./routes";

// const DefaultLayout = lazy(() => import("./layout/DefaultLayout"));

// function App() {
//   const [loading, setLoading] = useState(true); // ✅ Fixed TypeScript syntax

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 1000);
//   }, []);

//   return loading ? (
//     <Loader />
//   ) : (
//     <>
//       <Toaster position="top-right" reverseOrder={false} containerClassName="overflow-auto" />
//       <Routes>
//         {/* Authentication Routes */}
//         <Route path="/auth/signin" element={<SignIn />} />
//         <Route path="/auth/signup" element={<SignUp />} />

//         {/* Layout Wrapper */}
//         <Route path="/" element={<DefaultLayout />}>
//           <Route index element={<ECommerce />} />
//           {routes.map(({ path, component: Component }, index) => (
//             <Route
//               key={index}
//               path={path}
//               element={
//                 <Suspense fallback={<Loader />}>
//                   <Component />
//                 </Suspense>
//               }
//             />
//           ))}
//         </Route>
//       </Routes>
//     </>
//   );
// }

// export default App;



import { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import ECommerce from "./pages/Dashboard/ECommerce";
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import Loader from "./common/Loader";
import routes from "./routes";

const DefaultLayout = lazy(() => import("./layout/DefaultLayout"));

function App() {
  // const [loading, setLoading] = useState<boolean>(true);
  const [loading, setLoading] = useState(true); // ✅ Correct (JavaScript syntax)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route element={<DefaultLayout />}>
          <Route index element={<ECommerce />} />
          {routes.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })} 
        </Route>
      </Routes>
    </>
  );
}

export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ECommerce from "./pages/Dashboard/ECommerce";
// import SignIn from "./pages/Authentication/SignIn";
// import SignUp from "./pages/Authentication/SignUp";
// import { Toaster } from "react-hot-toast";
// import DefaultLayout from "./layout/DefaultLayout";

// function App() {
//   return (
//     <Router>
//       <Toaster />
//       <Routes>
//         <Route path="/" element={<DefaultLayout />}>
//           <Route index element={<ECommerce />} />
//           <Route path="signin" element={<SignIn />} />
//           <Route path="signup" element={<SignUp />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;
