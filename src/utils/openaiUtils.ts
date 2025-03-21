const API_URL = '/api/generate-cover-letter';

export async function generateCoverLetter(
  company: string,
  jobTitle: string,
  skills: string,
  additionalDetails?: string
): Promise<string> {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        company,
        jobTitle,
        skills,
        additionalDetails,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate cover letter');
    }

    const data = await response.json();
    return data.coverLetter;
  } catch (error) {
    console.error('Error generating cover letter:', error);
    throw new Error('Failed to generate cover letter. Please try again.');
  }
}
