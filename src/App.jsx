import React from "react";
import Config from "./components/Config";
import useApiConnection from "./hooks/useApiConnection";

const App = () => {
  const { status, checkApiKeyStatus, logoUrl } = useApiConnection();
  return (
    <div className="p-6 bg-[#e4ecf6] min-h-screen flex flex-col items-center border b-2">
      <img src={logoUrl} alt="OutamationLLM Logo" className="w-40 mb-6" />
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <p className="text-black text-sm font-medium mb-6">
          Right click on any page and send selected text or entire pages to
          OutamationLLM.
        </p>
        <Config status={status} onStatusChange={checkApiKeyStatus} />
      </div>
    </div>
  );
};

export default App;
