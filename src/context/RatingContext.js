import React, { createContext, useState, useContext } from 'react';

const RatingContext = createContext();

export const useRatings = () => useContext(RatingContext);

export const RatingProvider = ({ children }) => {
  const [ratings, setRatings] = useState({});

  const rateCourse = (courseId) => {
    setRatings(prev => ({
      ...prev,
      [courseId]: Math.min((prev[courseId] || 0) + 1, 6)
    }));
  };

  const getRating = (courseId) => ratings[courseId] || 0;

  return (
    <RatingContext.Provider value={{ ratings, rateCourse, getRating }}>
      {children}
    </RatingContext.Provider>
  );
};