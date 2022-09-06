import type { NextApiRequest, NextApiResponse } from "next";

// https://braydoncoyer.dev/blog/create-a-newsletter-subscription-form-with-next.js-api-routes-and-the-twitter-revue-api
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const result = await fetch("", {
    method: "POST",
    headers: {
      Authorization: `Token ${process.env.REVUE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      double_opt_in: false,
    }),
  });

  const data = await result.json();

  if (!result.ok) {
    return res.status(500).json({ error: data.error.email[0] });
  }

  res.status(201).json({ error: "" });
}