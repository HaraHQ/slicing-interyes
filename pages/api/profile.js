export default async function handler(req, res) {
  const login = await fetch("https://reqres.in/api/users/4", {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    },
  });

  const response = await login.json();

  if (!login.ok) {
    return res.status(500).json(response);
  }

  return res.json(response);
}