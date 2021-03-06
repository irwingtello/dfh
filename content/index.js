const serverUrl = "https://xf2slglmhlsr.usemoralis.com:2053/server";
const appId = "BJg5V4IlNGGMSohvAX0Oe0kmWLMfvALWdbNlzZFA";

Moralis.start({ serverUrl, appId });

async function login() {
  let user = Moralis.User.current();

  if (!user) {
    user = await Moralis.authenticate({ signingMessage: "Log in using Moralis" })
      .then(function (user) {
        localStorage.setItem("moralisUser", user.get("username"));
        localStorage.setItem("moralisAddress", user.get("ethAddress"));
        console.log(":)");

      })
      .catch(function (error) {
        console(error);
      });
  }
}
async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
  }

  document.getElementById("btnLogin").onclick = login;
  document.getElementById("btnLogout").onclick = logOut;