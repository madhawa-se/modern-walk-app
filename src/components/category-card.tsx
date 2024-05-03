import React from 'react';
import './category-card.scss';

const CategoryCard: React.FC<{
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  category: string;
  className: string;
}> = ({ onClick, category, className }) => (
  <div className={`category-card rounded-3xl shadow-md flex items-center justify-center ${className}`} onClick={onClick}>
    <div className='text-4xl font-bold text-white'>{category}</div>
  </div>
);

export default CategoryCard;
