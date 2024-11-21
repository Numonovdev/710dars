async function getToken() {
  try {
    const clientId = 'b1715a255afa4ec995b56aa7dea12983';
    const clientSecret = '4794a545b58442ae84a5d83544fd34bf';
    const authHeader = btoa(`${clientId}:${clientSecret}`); // Basic token generatsiya

    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${authHeader}`, // Basic tokenni yuborish
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials', // Tanlangan grant turi
      }).toString(),
    });

    if (!response.ok) {
      // Javob muvaffaqiyatsiz bo'lsa, xatoni tashlang
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const auth = await response.json();
    localStorage.setItem('token', `${auth.token_type} ${auth.access_token}`);
    console.log('Token muvaffaqiyatli saqlandi:', `${auth.token_type} ${auth.access_token}`);
  } catch (error) {
    console.error('Token olishda xato:', error.message);
  }
}

export { getToken };

