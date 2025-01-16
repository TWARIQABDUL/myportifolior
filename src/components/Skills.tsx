import React, { useState } from 'react';
import SkillToggle from './SkillsTaggle';

interface ExpandedState {
  [key: string]: boolean;
}

const Skills: React.FC = () => {
  const [expanded, setExpanded] = useState<ExpandedState>({
    frontend: false,
    backend: false,
    versionControl: false,
    cloud: false,
  });

  const toggleSkill = (skill: string): void => {
    setExpanded((prev) => ({
      ...prev,
      [skill]: !prev[skill],
    }));
  };

  return (
    <div>
      <h2 className="text-white underline">Skills</h2>
      <dl>
        <SkillToggle
          title="Front End"
          isExpanded={expanded.frontend}
          onToggle={() => toggleSkill('frontend')}
        >
          <span className="text-blue-500 pr-2">{'>'}</span>
          React, HTML, CSS, JavaScript
        </SkillToggle>

        <SkillToggle
          title="Backend"
          isExpanded={expanded.backend}
          onToggle={() => toggleSkill('backend')}
        >
          <span className="text-blue-500 pr-2">{'>'}</span>
          Nodejs, PHP, MySQL
        </SkillToggle>

        <SkillToggle
          title="Version Control"
          isExpanded={expanded.versionControl}
          onToggle={() => toggleSkill('versionControl')}
        >
          <span className="text-blue-500 pr-2">{'>'}</span>
          Git
        </SkillToggle>

        <SkillToggle
          title="Cloud"
          isExpanded={expanded.cloud}
          onToggle={() => toggleSkill('cloud')}
        >
          <span className="text-blue-500 pr-2">{'>'}</span>
          AWS S3, EC2, RDS
        </SkillToggle>
      </dl>
    </div>
  );
};

export default Skills;
