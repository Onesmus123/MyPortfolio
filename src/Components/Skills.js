import React from 'react'; 
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaBootstrap, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiVercel, SiTailwindcss, SiNextdotjs, SiMysql, SiPostgresql } from "react-icons/si";

const Skills = ({ skill }) => {
    const icon = {
        Postman: <SiPostman />,
        React: <FaReact />,
        Javascript: <DiJavascript1 />,
        Node: <DiNodejs />,
        Express: <SiExpress />,
        MongoDb: <SiMongodb />,
        Git: <FaGitAlt />,
        Github: <FaGithub />,
        Npm: <FaNpm />,
        Bootstrap: <FaBootstrap />,
        Vercel: <SiVercel />,
        HTML5: <FaHtml5 />,
        CSS3: <FaCss3Alt />,
        TailwindCSS: <SiTailwindcss />,
        'Next.js': <SiNextdotjs />,
        MySQL: <SiMysql />,
        PostgreSQL: <SiPostgresql />,
        Python: <FaPython/>
    };

    return (
        <div title={skill} className='SkillBox'>
            {icon[skill]}
        </div>
    );
}

export default Skills;
