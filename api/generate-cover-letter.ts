import { VercelRequest, VercelResponse } from '@vercel/node';
import OpenAI from 'openai';

import {
  COVER_LETTER_SYSTEM_MESSAGE,
  createStructuredTemplate,
  createCoverLetterPrompt,
} from '../src/constants/prompts';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { company, jobTitle, skills, additionalDetails } = req.body;

    const template = createStructuredTemplate(company, jobTitle, skills, additionalDetails);
    const prompt = createCoverLetterPrompt(company, jobTitle, skills, additionalDetails, template);

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      max_tokens: 500,
      messages: [
        {
          role: 'system',
          content: COVER_LETTER_SYSTEM_MESSAGE,
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    res.json({ coverLetter: response.choices[0]?.message.content });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to generate cover letter' });
  }
}
