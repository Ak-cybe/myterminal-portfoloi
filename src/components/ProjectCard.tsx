import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../types/types';

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    return (
        <motion.div
            className="project-card p-4 mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
        >
            {/* Project Header */}
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-cyber-green font-bold text-glow-dim">
                    {project.url ? (
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-cyber-blue hover:underline decoration-1 underline-offset-4 transition-colors"
                        >
                            {project.name} ↗
                        </a>
                    ) : (
                        project.name
                    )}
                </h3>
                <span className="text-cyber-gray text-xs font-mono">
                    {project.permissions}
                </span>
            </div>

            {/* Description */}
            <p className="text-cyber-greenDim text-sm mb-3 leading-relaxed">
                {project.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="text-xs px-2 py-0.5 border border-cyber-gray text-cyber-blue"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Owner */}
                <span className="text-cyber-gray text-xs">
                    {project.owner}
                </span>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
