// Substitua o localStorage por uma API real:
async function registerUser(userData) {
    const response = await fetch('https://suaapi.com/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    });
    return await response.json();
}