// Cover letter prompts and templates

// System message for OpenAI
export const COVER_LETTER_SYSTEM_MESSAGE =
  "You are a cover letter writing assistant. You must ONLY use the information provided by the user without adding any fictional details, experiences, or qualifications. Do not make assumptions about the user's background.";

// Template for creating a structured cover letter
export const createStructuredTemplate = (
  company: string,
  jobTitle: string,
  skills: string,
  additionalDetails?: string
) => `Dear ${company} Team,

[INTRODUCTION_PARAGRAPH: Express interest in the ${jobTitle} position without adding any fictional background or experiences]

[SKILLS_PARAGRAPH: Highlight the following skills without embellishment or adding fictional experiences: ${skills}]

${additionalDetails ? `[ADDITIONAL_DETAILS_PARAGRAPH: Incorporate these additional details without adding fiction: ${additionalDetails}]` : ''}

[CONCLUSION_PARAGRAPH: Standard professional conclusion without making claims about qualifications not mentioned above]
`;

// Prompt template for OpenAI
export const createCoverLetterPrompt = (
  company: string,
  jobTitle: string,
  skills: string,
  additionalDetails?: string,
  template?: string
) => `Write a professional cover letter using ONLY the information provided below:
- Company: ${company}
- Job Title: ${jobTitle}
- Skills: ${skills}
- Additional Details: ${additionalDetails || 'None provided'}

IMPORTANT INSTRUCTIONS:
1. DO NOT invent or assume ANY additional information beyond what is provided above
2. DO NOT add fictional experiences, education, or qualifications
3. ONLY use the exact information provided in the variables
4. Follow the structure of the template below, replacing the placeholder sections with appropriate content
5. The letter should be concise (approximately 250-300 words)

TEMPLATE TO FOLLOW:
${template}`;

// OpenAI model configuration
export const OPENAI_CONFIG = {
  model: 'gpt-4o',
  temperature: 0.6,
  max_tokens: 500,
};
