export default async function handler(req, res) {
  const { email, password } = req.body;

  const login = await fetch("https://reqres.in/api/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
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