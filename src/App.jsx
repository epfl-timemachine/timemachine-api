import "swagger-ui-react/swagger-ui.css"
import SwaggerUI from "swagger-ui-react";

function App() {
  return (
    <div className="App">
      <SwaggerUI url="timemachine-api-v0.yml"></SwaggerUI>
    </div>
  );
}

export default App;