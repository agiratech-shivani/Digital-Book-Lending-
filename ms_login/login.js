import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "e795f125-b26e-405a-9d58-e7088d0f72c0",
    authority:
      "https://login.microsoftonline.com/2a4a5a22-099a-4115-86f7-35b1367f0ea9",
    redirecturl: "http://localhost:8000/",
  },
  cache: {
    cacheLocation: "LocalStorage",
  },
};

const login = async () => {
  console.log("login called");
  const msalInstance =
    await PublicClientApplication.createPublicClientApplication(msalConfig);

  const response = await msalInstance.loginPopup({
    scopes: ["user.read"],
    prompt: "select_account",
    redirectUri: "http://localhost:8000/",
    popup: true,
  });

  console.log(response);
  const myAccounts = msalInstance.getAllAccounts();

  console.log(myAccounts);
  if (myAccounts.length > 0) {
    msalInstance.setActiveAccount(myAccounts[0]);
  }

  const request = {
    scopes: ["User.Read"],
  };

  msalInstance
    .acquireTokenSilent(request)
    .then((tokenResponse) => {
      var headers = new Headers();
      var bearer = "Bearer " + tokenResponse.accessToken;
      console.log(bearer);
      headers.append("Authorization", bearer);
      var options = {
        method: "GET",
        headers: headers,
      };
      var graphEndpoint = "https://graph.microsoft.com/v1.0/me";

      fetch(graphEndpoint, options)
        .then((resp) => {
          console.log("graph response");
          return resp.json();
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem("employee-id", res.id);
          // fetch("http://localhost:8000/users", {
          //   method: "post",
          //   headers: {
          //     "Content-Type": "application/json",
          //   },

          //   body: JSON.stringify({
          //     employeeId: res.id,
          //     mailId: res.mail,
          //     phone: res.mobilePhone,
          //     name: res.displayName,
          //   }),
          // })
          //   .then(() => {

          //     window.location.href = "/";

          //   })
          // .catch((err) => console.log(err));
        });
    })
    .catch(async (error) => {
      console.log(error.name);
      console.log(error);
      if (error.name === "InteractionRequiredAuthError") {
        console.log("shivani");
        return await msalInstance.acquireTokenPopup(request);
      }
    });
};

login();
