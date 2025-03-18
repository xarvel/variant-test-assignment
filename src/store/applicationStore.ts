import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TOTAL_GOAL } from '../constants';
import { generateCoverLetter } from '../utils/openaiUtils';

// Types
export interface FormData {
  company: string;
  jobTitle: string;
  skills: string;
  additionalDetails?: string;
}

export interface Application {
  id: string;
  text: string;
  formData: FormData;
  createdAt: Date;
}

interface ApplicationState {
  applications: Application[];
  isLoading: boolean;
  error: string | null;
}

interface ApplicationActions {
  addApplication: (text: string, formData: FormData, id?: string) => void;
  deleteApplication: (id: string) => void;
  updateApplication: (id: string, text: string, formData: FormData) => void;
  getApplicationById: (id: string) => Application | undefined;
  generateApplication: (formData: FormData) => Promise<string>;
  clearError: () => void;
}

type ApplicationStore = ApplicationState & ApplicationActions;

const sanitizeFormData = (formData: FormData): FormData => {
  return {
    company: formData.company.trim(),
    jobTitle: formData.jobTitle.trim(),
    skills: formData.skills.trim(),
    additionalDetails: formData.additionalDetails?.trim() || undefined,
  };
};

export const useApplicationStore = create<ApplicationStore>()(
  persist(
    (set, get) => ({
      // State
      applications: [],
      isLoading: false,
      error: null,

      // Actions
      addApplication: (text, formData, id) => {
        const newApplication: Application = {
          id: id || crypto.randomUUID(),
          text,
          formData,
          createdAt: new Date(),
        };

        set(state => ({
          applications: [...state.applications, newApplication],
        }));
      },

      deleteApplication: id => {
        set(state => ({
          applications: state.applications.filter(app => app.id !== id),
        }));
      },

      updateApplication: (id, text, formData) => {
        set(state => ({
          applications: state.applications.map(app =>
            app.id === id ? { ...app, text, formData } : app
          ),
        }));
      },

      getApplicationById: id => {
        return get().applications.find(app => app.id === id);
      },

      clearError: () => set({ error: null }),

      generateApplication: async formData => {
        try {
          set({ isLoading: true, error: null });

          const sanitizedData = sanitizeFormData(formData);

          const letterText = await generateCoverLetter(
            sanitizedData.company,
            sanitizedData.jobTitle,
            sanitizedData.skills,
            sanitizedData.additionalDetails
          );

          return letterText;
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
          set({ error: errorMessage });
          console.error('Error generating application:', error);
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: 'cover_letters',
      partialize: state => ({ applications: state.applications }), // only store applications in localStorage
    }
  )
);

export const useApplicationsCount = () => useApplicationStore(state => state.applications.length);
export const useHasMetGoal = () =>
  useApplicationStore(state => state.applications.length >= TOTAL_GOAL);
