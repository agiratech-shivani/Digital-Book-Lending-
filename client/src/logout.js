import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "e795f125-b26e-405a-9d58-e7088d0f72c0",
    authority:
      "https://login.microsoftonline.com/2a4a5a22-099a-4115-86f7-35b1367f0ea9",
    redirecturl: "http://localhost:9000/",
  },
  cache: {
    cacheLocation: "localStorage",
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

const logout = async () => {
  // Initiate logout using MSAL
  await msalInstance.initialize();
  
  msalInstance.logout();
  // Clear local storage
  localStorage.clear();
  
};

export default logout;
