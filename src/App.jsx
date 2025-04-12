import { defineCustomElements } from "ionicons/dist/loader";
import MainRoutes from "./MainRoutes";
import AuthContextProvider from "./context/AuthContextProvider";

defineCustomElements(window);

const App = () => {
  return (
    <div className="appBlock">
      <AuthContextProvider>
        <MainRoutes />
      </AuthContextProvider>
    </div>
  );
};

export default App;
