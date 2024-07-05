import AllRoutes from "./Page/AllRoutes";

import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      {/* <AuthForm /> */}
      <Navbar />
      <AllRoutes />
      <Toaster />
    </>
  );
}

export default App;
