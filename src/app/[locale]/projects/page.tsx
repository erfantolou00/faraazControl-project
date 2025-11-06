import React from 'react';

const projects = [
    { id: 1, name: 'Project One', description: 'Description for project one' },
    { id: 2, name: 'Project Two', description: 'Description for project two' },
    { id: 3, name: 'Project Three', description: 'Description for project three' },
];

const ProjectsPage: React.FC = () => {
    return (
        <div>
            <h1>Projects List</h1>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectsPage;