import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Item from "./Item";
function App() {
  return (
    <main>
      <Item toast={toast} />
      <ToastContainer position="top-center" />
    </main>
  );
}

export default App;
