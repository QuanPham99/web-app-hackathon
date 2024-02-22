// Function to fetch student profiles from the backend
export const fetchStudentProfiles = async () => {
    try {
      const response = await fetch('/api/students');
      const data = await response.json();
      return data; // Return fetched data
    } catch (error) {
      console.error('Failed to fetch student profiles:', error);
      throw new Error('Failed to fetch student profiles');
    }
  };