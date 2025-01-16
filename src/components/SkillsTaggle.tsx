import React from 'react';
import { ArrowDown, ArrowUp } from '../lib/AllowUp';

interface SkillToggleProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const SkillToggle: React.FC<SkillToggleProps> = ({ title, isExpanded, onToggle, children }) => {
  return (
    <>
      <dt
        className={`flex items-center justify-between mt-4 text-zinc-300 cursor-pointer py-2 px-4 bg-gray-900 ${
          isExpanded && 'rounded bg-gray-800'
        }`}
        onClick={onToggle}
      >
        {title}
        <span>{isExpanded ? <ArrowDown /> : <ArrowUp />}</span>
      </dt>
      {isExpanded && <dd className="mt-2 text-zinc-500 px-4">{children}</dd>}
    </>
  );
};

export default SkillToggle;
