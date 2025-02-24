import { Puck } from "@measured/puck";
import { config } from "./config";
import "@measured/puck/dist/index.css";

function App() {
  return (
    <Puck
      config={config}
      data={{
        content: [],
        root: {
          props: {
            zones: {
              root: []
            }
          }
        }
      }}
      onPublish={async (data) => {
        console.log("Published Form Data:", JSON.stringify(data, null, 2));
      }}
    />
  );
}

export default App;
