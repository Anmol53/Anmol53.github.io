export const calculateExperience = (startDate: string): number => {
  const start = new Date(startDate);
  const today = new Date();
  const yearsDiff = today.getFullYear() - start.getFullYear();
  const monthsDiff = today.getMonth() - start.getMonth();
  
  let years = yearsDiff;
  if (monthsDiff < 0) {
    years--;
  }
  
  return years;
};

export const getCurrentYear = (): number => {
  return new Date().getFullYear();
}; 