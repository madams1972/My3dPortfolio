import React, { useState } from 'react'

export const useAbout = () => {
  const [skillData] = useState([
    'Communicator',
    'Motivator',
    'Manager',
    'Leader',
    'Creator',
  ])

  const [attributeData] = useState([
    'Passionate',
    'Motivated',
    'Expressive',
    'Aware',
    'Positive',
    'Flexibile',
    'Assertive',
    'Balanced',
    'Organised',
  ])

  const [proficiencyData] = useState([
    {
      name: 'Git',
      src: '/images/logos/git-logo.png',
      compressedSrc: '/images/logos/compressed/git-logo.png',
    },
    {
      name: 'NPM',
      src: '/images/logos/npm-logo.png',
      compressedSrc: '/images/logos/compressed/npm-logo.png',
    },
    {
      name: 'Node.js',
      src: '/images/logos/nodejs-logo.png',
      compressedSrc: '/images/logos/compressed/nodejs-logo.png',
    },
    {
      name: 'Three.js',
      src: '/images/logos/threejs-logo.png',
      compressedSrc: '/images/logos/compressed/threejs-logo.png',
    },
    {
      name: 'Vite.js',
      src: '/images/logos/vite-logo.png',
      compressedSrc: '/images/logos/compressed/vite-logo.png',
    },
    {
      name: 'Vue.js',
      src: '/images/logos/vuejs-logo.png',
      compressedSrc: '/images/logos/compressed/vuejs-logo.png',
    },
    {
      name: 'React',
      src: '/images/logos/react-logo.png',
      compressedSrc: '/images/logos/compressed/react-logo.png',
    },
    {
      name: 'Angular',
      src: '/images/logos/angular-logo.png',
      compressedSrc: '/images/logos/compressed/angular-logo.png',
    },
    {
      name: 'Webpack',
      src: '/images/logos/webpack-logo.png',
      compressedSrc: '/images/logos/compressed/webpack-logo.png',
    },
    {
      name: 'Unity',
      src: '/images/logos/unity-logo.png',
      compressedSrc: '/images/logos/compressed/unity-logo.png',
    },
    {
      name: 'Mono',
      src: '/images/logos/mono-logo.png',
      compressedSrc: '/images/logos/compressed/mono-logo.png',
    },
    {
      name: 'Docker',
      src: '/images/logos/docker-logo.png',
      compressedSrc: '/images/logos/compressed/docker-logo.png',
    },
    {
      name: 'VSCode',
      src: '/images/logos/vscode-logo.png',
      compressedSrc: '/images/logos/compressed/vscode-logo.png',
    },
    {
      name: 'VS',
      src: '/images/logos/visualstudio-logo.png',
      compressedSrc: '/images/logos/compressed/visualstudio-logo.png',
    },
  ])

  const [languageData] = useState([
    {
      name: 'js',
      src: '/images/logos/javascript-logo.png',
      compressedSrc: '/images/logos/compressed/javascript-logo.png',
    },
    {
      name: 'ts',
      src: '/images/logos/typescript-logo.png',
      compressedSrc: '/images/logos/compressed/typescript-logo.png',
    },
    {
      name: 'CSS',
      src: '/images/logos/css-logo.png',
      compressedSrc: '/images/logos/compressed/css-logo.png',
    },
    {
      name: 'SCSS',
      src: '/images/logos/scss-logo.png',
      compressedSrc: '/images/logos/compressed/scss-logo.png',
    },
    {
      name: 'C',
      src: '/images/logos/c-logo.png',
      compressedSrc: '/images/logos/compressed/c-logo.png',
    },
    {
      name: 'C++',
      src: '/images/logos/cplusplus-logo.png',
      compressedSrc: '/images/logos/compressed/cplusplus-logo.png',
    },
    {
      name: 'C#',
      src: '/images/logos/csharp-logo.png',
      compressedSrc: '/images/logos/compressed/csharp-logo.png',
    },
    {
      name: 'Lua',
      src: '/images/logos/lua-logo.webp',
      compressedSrc: '/images/logos/compressed/lua-logo.png',
    },
    {
      name: 'PHP',
      src: '/images/logos/php-logo.png',
      compressedSrc: '/images/logos/compressed/php-logo.png',
    },
    {
      name: 'Python',
      src: '/images/logos/python-logo.png',
      compressedSrc: '/images/logos/compressed/python-logo.png',
    },
    {
      name: 'WebGL',
      src: '/images/logos/webgl-logo.png',
      compressedSrc: '/images/logos/compressed/webgl-logo.png',
    },
    {
      name: 'OpenGL',
      src: '/images/logos/opengl-logo.png',
      compressedSrc: '/images/logos/compressed/opengl-logo.png',
    },
  ])

  

  const [historyData] = useState([
    {
      title: (
        <h2>
          Interim Executive Director The Diversity Institute Mar 2023 - Present
        </h2>
      ),
      content: (
        <p>
          I engage with a wide array of stakeholders to help set and execute a
          vision that elevates the Diversityprofession and improves outcomes for
          marginalized communities. Provide consulting, coaching, andtraining
          services to Executive Leaders, Chief Diversity Officers, and staff in
          public, private, nonprofit,and educational institutions on successful
          Inclusion program strategies and ERG implementation withan integrated
          approach that fully realizes the business case. Developed, socialized,
          implemented, andmanaged the strategy for small to midsized businesses.
          Providing rigor and structure around Inclusion Recruiting, DEI Program
          Development, Talent Pipeline Development, and Storytelling. Help
          client-ledteams focus on pipelining diverse talent across organization
          lines of businesses while collaborating withthe Recruiting team to
          embed the Inclusion Recruiting strategy into sourcing, interviewing,
          selection,and onboarding processes while supporting the development of
          diversity-focused training. Many of our clients know that Diversity is
          essential; they are just not sure where to start.
        </p>
      ),
    },
    {
      title: (
        <h2>
          Director of People and Operations Genesys Works Jun 2022 - Mar 2023
        </h2>
      ),
      content: (
        <p>
          The People Operations Director embodies Gensys Works culture and core
          values by cultivating agreat team member experience and is a champion
          for both team members and their leaders. I amresponsible for providing
          a people business partnership that results in an engaged workforce and
          amore productive business. I am also responsible for and contribute to
          developing people strategies,overseeing a team of People Operations
          Business Partner (POBP’s) and, provide thought leadershipto the
          organization and the senior leadership teams developing, and executing
          talent management andchange management strategies while partnering
          with the Centers of Excellence (Talent Management,Employee Relations,
          Recruiting, Total Rewards, etc.) to deliver results against the people
          strategies.
        </p>
      ),
    },
    {
      title: (
        <h2>
          Program Manager Catholic Charities Twin Cities Apr 2017 - Apr 2019
        </h2>
      ),
      content: (
        <p>
          Lead and Manage-Provide leadership to manage vital aspects of success
          and uphold a high levelof accountability for case management and
          specific assistance needs. Coach, mentor, and motivateemployees to do
          their best. Accountability and Evaluation-Create an environment of
          accountability and evaluation, by monitoringand analyzing spending,
          program data, staff outputs, and client outcomes to make sound
          decisionsregarding staffing, clients, and funding. Improve Processes-
          Continuously improve services, programs, and the department by
          identifying areasof growth, potential barriers, or new opportunities.
          •Work to capitalize on opportunities or create solutions, and execute
          changes while sensitively providingstaff transparency and time to
          process. Collect and report program data, including but not limited
          to, HMIS reporting and funders requireddata.
        </p>
      ),
    },
    {
      title: (
        <h2>
          Rapid Rehousing Advocate Simpson Housing Services Dec 2015 - Mar 2017
        </h2>
      ),
      content: (
        <p>
          Assess housing barriers of individuals experiencing homelessness to
          determine housing and serviceneeds. Develop housing procurement,
          financial, and self-sufficiency case management plan withclients. This
          includes intake interview to determine clients needs, goals, and
          eligibility. Provide mediation and advocacy with landlords on the
          clients behalf to develop a workable plan toobtain and or maintain
          housing. Assist participants in locating and securing housing of their
          choice. Serve as an ongoing liaison between property managers and
          participants. Provide information andreferral assistance regarding
          available support from appropriate social service agencies
          and/orcommunity programs. Assist in development of and encourage
          adherence to a personal budget throughpro-active housing and budget
          counseling sessions; provide budget counseling and education to
          assistclients in establishing payments plans for bills and past debts
          and to assist clients in obtaining andmaintaining their housing.
          Assist participants in development of a
          strength-based/solution-focusedindividualized goal and action plan
          that promotes permanent housing and self-sufficiency; developan
          effective, timely referral network in order to ensure ongoing
          direction and support as needed.Provide pro-active follow-up home
          visits to ensure stability and further progress towards
          self-sufficiency;this includes support, advocacy, reducing isolation,
          listening, problem solving, and identification ofresources to assist
          with reintegration of participants in the community. Apply knowledge
          of residentiallease contracts to educate clients of their rights and
          responsibilities. Maintain accurate daily logsrecords, monthly outcome
          reports, and files for each client. Transport clients as deemed
          necessary.Collect and report program data, including but not limited
          to HMIS reporting and funders’ required data.
        </p>
      ),
    },
    {
      title: (
        <h2>
          Diversity and Inclusion Consultant Stanton Adams Consulting Oct 2010 -
          Mar 2015 (4 years 6 months)
        </h2>
      ),
      content: (
        <p>
          Stanton AdamsConsulting offers a wide range of consulting services for
          several industries. I createdthe necessary tools to help public,
          private, nonprofit, and educational leaders to manage
          diversityinitiatives properly. I partnered with clients to develop a
          diversity strategy. If the organization alreadyhad a Diversity Plan in
          place, we I helped by assessing its effectiveness. I also developed
          engaging professional development strategies and designed high-quality
          training solutions that developedengaging learning experiences. I am a
          coach, and Diversity Leader who has seen firsthand the impact of
          intentional Diversity initiatives.
        </p>
      ),
    },
  ])

  const [educationData] = useState([
    {
      title: <h2>Masters , Non-Profit and Public Adminstration</h2>,
      content: <p>Metro State University, Minneapolis, MN</p>,
    },
    {
      title: <h2>Bachelors Degree, Business Management</h2>,
      content: <p>Rasmussen University, Port Richey, FL</p>,
    },
    {
      title: <h2>Full Stack Web Development Certificate</h2>,
      content: (
        <p>
          University of Minnesota, Minneapolis, MN
        </p>
      ),
    },
    {
      title: <h2>NFT MasterClass</h2>,
      content: (
        <p>
          StackSkills
        </p>
      ),
    },
  ])

  const [resumeData] = useState([
    {
      name: 'Resume -Malissa Adams',
      path: '/resumes/bl-resume.pdf',
    },
  ])

  return {
    skillData,
    attributeData,
    proficiencyData,
    languageData,
    // achievementData,
    historyData,
    educationData,
    resumeData,
  }
}

export default useAbout



















