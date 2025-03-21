import { VercelRequest, VercelResponse } from '@vercel/node';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { company, jobTitle, skills, additionalDetails } = req.body;

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      max_tokens: 500,
      messages: [
        {
          role: 'system',
          content:
            'You are a professional cover letter writer. Write a compelling cover letter based on the provided information.',
        },
        {
          role: 'user',
          content: `Write a cover letter for ${company} for the position of ${jobTitle}. Skills: ${skills}. ${additionalDetails ? `Additional details: ${additionalDetails}` : ''}`,
        },
      ],
    });

    res.json({ coverLetter: response.choices[0]?.message.content });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to generate cover letter' });
  }
}
