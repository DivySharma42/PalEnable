let contactSubmissions = [];

const contactApi = {
  // Get all contact submissions
  getAll: () => {
    return [...contactSubmissions];
  },

  // Add a new contact submission
  add: (submission) => {
    const newSubmission = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...submission,
      status: 'new'
    };
    contactSubmissions.push(newSubmission);
    return newSubmission;
  },

  // Get a single submission by ID
  getById: (id) => {
    return contactSubmissions.find(sub => sub.id === id);
  },

  // Update a submission status
  updateStatus: (id, status) => {
    const index = contactSubmissions.findIndex(sub => sub.id === id);
    if (index !== -1) {
      contactSubmissions[index] = {
        ...contactSubmissions[index],
        status,
        updatedAt: new Date().toISOString()
      };
      return contactSubmissions[index];
    }
    return null;
  },

  // Delete a submission
  delete: (id) => {
    contactSubmissions = contactSubmissions.filter(sub => sub.id !== id);
    return { success: true };
  }
};
export default contactApi;
