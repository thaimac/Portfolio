// Experience.js
import React from "react";

const experiences = [
  {
    title: "Various Roles (Co-op Student -> IT Developer -> IT Analyst/Developer -> Data Science Engineer)",
    company: "Canada Revenue Agency",
    dates: "2021 - Present",
    description: [`Spearheaded the end-to-end development of the Content Migration Utility, a Java application that connected to our internal Electronic Document and 
            Records Management (EDRMS) system, OpenText Content Server, via it's REST API, and automated certain operations requested by our business clients.`
            ,
            `Optimized various database queries using indexes, resulting, in the most noteable case, in a 96% decrease in load time for retrieving a data asset's 
            lineage in our internal data asset catalog, IBMs Information Governance Catalog`],
  },
  {
    title: "Network Analyst Student",
    company: "City of Edmonton",
    dates: "2020 - 2021",
    description: [`Managed the upgrade from SNMPv2 to SNMPv3 on our over 150 network switches in Edmonton's public network infrastructure.`
    ,
    `Assisted in the refreshing of all switches, routers and access points that had reached their end of life.`],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Experience</h2>
      <div className="mt-6">
        {experiences.map((exp, index) => (
          <div key={index} className="p-4 bg-white shadow-md rounded-lg mb-4">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-500">{exp.company} ({exp.dates})</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              {exp.description.map((point, i) => (
                <li key={i} className="text-gray-700">{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
