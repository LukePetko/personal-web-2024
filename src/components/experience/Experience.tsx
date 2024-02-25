import React from "react";

const Experience = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold">AKULAR</h2>
        <p className="text-lg font-semibold">Frontend developer</p>
        <p className="text-base">Jun 2022 - Present</p>
        <p className="text-xl">
          In my most recent role, which I began while still pursuing my
          university studies—a commitment I maintain to this day—I specialize in
          developing an application focused on the visualization of digital
          twins in construction. My work primarily involves utilizing React,
          TypeScript, Material-UI (MUI), and GraphQL, with integration into AWS
          for cloud services and Hasura for efficient data management. This role
          allows me to contribute significantly to the innovative field of
          construction visualization, leveraging advanced technologies to
          enhance user experience and data interaction.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold">
          Faculty of Informatics and Information Technologies, Slovak University
          of Technology
        </h2>
        <p className="text-lg font-semibold">Teaching Assistant</p>
        <p className="text-base">Sep 2023 - Feb 2024</p>
        <p className="text-xl">
          In my next position, while continuing my studies, I took on the role
          of instructing JavaScript to fellow university students at my alma
          mater. This opportunity allowed me to share my expertise and
          enthusiasm for programming, enhancing my pedagogical skills and
          reinforcing my understanding of JavaScript fundamentals within an
          academic setting.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold">PosAm</h2>
        <p className="text-lg font-semibold">Junior Deleloper</p>
        <p className="text-base">Feb 2021 - Jun 2022</p>
        <p className="text-xl">
          During my university studies, I started a position where I continued
          to harness Angular for development purposes. Additionally, I expanded
          my technical repertoire by writing automated tests using Robot
          Framework. This role was instrumental in the development of a project
          for a power plant, allowing me to contribute significantly while
          enhancing my skills in both front-end development and quality
          assurance.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold">Asseco Central Europe</h2>
        <p className="text-lg font-semibold">Junior Delevoper</p>
        <p className="text-base">Jun 2019 - Aug 2019</p>
        <p className="text-xl">
          Following my high school graduation, I started on an internship where
          I focused on developing a banking application using Angular. This
          experience allowed me to apply and enhance my programming skills in a
          real-world financial technology environment, contributing to projects
          while gaining valuable industry knowledge.
        </p>
      </div>
    </div>
  );
};

export default Experience;
