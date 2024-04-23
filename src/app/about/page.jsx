const SKILLS = [
  "React Js",
  "Next Js",
  "JavaScript",
  "HTML",
  "CSS",
  "SASS",
  "Node Js",
  "Express Js",
  "MongoDb",
  "Serverless",
];

const About = () => {
  return (
    <div className="mt-12 flex flex-col gap-10">
      <div>
        <h2 className="text-xl font-bold">Professional Summary:</h2>
        <ul className="mt-4 ml-4 flex flex-col   gap-2">
          <li className="list-disc">
            Over 2+ years of experience in Full stack development and web
            applications using technologies such as React JS , Node JS , MongoDB
            , JavaScript, ES6, Redux, HTML 5, CSS3 , SASS , Express Js
          </li>
          <li className="list-disc">
            Experience with popular React.js workflows (such as Redux,Context
            API).
          </li>
          <li className="list-disc">
            Have experience with developing RESTful apis using Node js, Express
            js and Mongo DB and serveless framework
          </li>
          <li className="list-disc">
            Knowledge of Version Control Systems like GIT.
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-bold">Skills</h2>
        <ul className="flex gap-8 flex-wrap mt-4">
          {SKILLS.map((skill) => (
            <li
              key={skill}
              className="bg-black hover:bg-gray-900 px-4 py-2 text-white rounded"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
