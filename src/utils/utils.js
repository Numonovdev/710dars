
async function getToken() {
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(
          "b1715a255afa4ec995b56aa7dea12983" +
            ":" +
            "4794a545b58442ae84a5d83544fd34bf"
        )}`,
      },
      body: "grant_type=client_credentials",
    });

    const auth = await response.json();
    localStorage.setItem("token", `${auth.token_type} ${auth.access_token}`);
  } catch (error) {
    console.log(error);
  }
}

export { getToken };

