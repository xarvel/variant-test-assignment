import OpenAI from 'openai';
import { ENV } from './env';
import {
  COVER_LETTER_SYSTEM_MESSAGE,
  createStructuredTemplate,
  createCoverLetterPrompt,
  OPENAI_CONFIG
} from '../constants/prompts';

const openai = new OpenAI({
  apiKey: ENV.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function generateCoverLetter(
  company: string,
  jobTitle: string,
  skills: string,
  additionalDetails?: string
): Promise<string> {
  try {
    const template = createStructuredTemplate(company, jobTitle, skills, additionalDetails);
    const prompt = createCoverLetterPrompt(company, jobTitle, skills, additionalDetails, template);

    const response = await openai.chat.completions.create({
      ...OPENAI_CONFIG,
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

    let generatedText =
      response.choices[0]?.message.content ||
      'Failed to generate a cover letter. Please try again.';

    return generatedText;
  } catch (error) {
    console.error('Error generating cover letter with OpenAI:', error);
    throw new Error('Failed to generate cover letter. Please check your API key and try again.');
  }
}
