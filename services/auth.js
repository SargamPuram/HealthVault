// Simulated signup function
export const signup = async (formData) => {
    // Simulate signup process (e.g., API call, database interaction)
    console.log('Signing up with data:', formData);
    // Simulated delay (remove this in production)
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Signup successful!');
  };
  