async function getToken() {
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(
          '68b1be58d9e94cc3b7859289bfbff336' +
            ':' +
            'af0bf22b53ac404489bcc56092d988a4'
        )}`,
      },
      body: 'grant_type=client_credentials',
    });

    const auth = await response.json();
    localStorage.setItem('token', `${auth.token_type} ${auth.access_token}`);
  } catch (error) {
    console.log(error);
  }
}

export { getToken };
