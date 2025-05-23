import React from 'react';

interface SkillCardProps {
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description }) => {
  return (
    <div className="bg-backgroundLight dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <span className="text-primary font-semibold">{title}</span>
      <p className="text-textDark dark:text-textLight text-sm">{description}</p>
    </div>
  );
};

export default SkillCard;
