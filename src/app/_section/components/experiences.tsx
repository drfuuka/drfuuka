"use client";

import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Button, Divider } from "@nextui-org/react";
import { useState } from "react";
import { TExperienceTimeline } from "@/types/timeline.type";

export default function Experiences() {
  const experiencesData: TExperienceTimeline[] = [
    {
      companyName: "BIT - Barito Technologies Group in Prudential",
      location: "Jakarta Selatan, Indonesia",
      locationType: "Hybrid",
      employmentType: "Fulltime",
      experiences: [
        {
          title: "Frontend Developer",
          description: `
        <p>✓ Develop clean, maintainable, and efficient React Native codebase, focusing on both iOS and Android platforms, ensuring consistency and quality across devices.</p>
        <p>✓ Design and implement responsive and intuitive mobile interfaces that provide a seamless user experience, leveraging React Native components and libraries to optimize performance.</p>
        <p>✓ Produce detailed and accessible documentation for mobile applications, supporting both technical teams and end-users in understanding functionality and usage.</p>
        <p>✓ Manage and optimize state management, ensuring the app remains responsive and performant by integrating best practices and leveraging tools like Redux or Context API.</p>
        <p>✓ Seamlessly connect mobile front-end with RESTful APIs and backend services, ensuring data synchronization and real-time updates.</p>
        <p>✓ Conduct thorough unit, integration, and end-to-end testing to uphold app stability, utilizing testing libraries such as Jest and React Native Testing Library.</p>
        <p>✓ Actively contribute to code reviews, ensuring adherence to React Native best practices and maintaining a high standard of code quality within the development team.</p>
        `,
          startDate: "Jun 2024",
          endDate: "Present",
        },
      ],
    },
    {
      companyName: "BERJASA CONSULTING",
      location: "Jakarta, Indonesia",
      locationType: "On-site",
      employmentType: "Fulltime",
      experiences: [
        {
          title: "Software Engineer & Senior Fullstack Developer",
          description: `
        <p>✓ Develop clean, testable, and efficient codebase encompassing both front-end and back-end components, adhering to established design patterns and architectural principles.</p>
        <p>✓ Design and implement responsive user interfaces that provide optimal user experience across various devices and screen sizes, ensuring seamless functionality and aesthetic appeal.</p>
        <p>✓ Produce comprehensive and insightful documentation for both end-users and fellow developers, facilitating smooth onboarding, troubleshooting, and maintenance processes.</p>
        <p>✓ Manage and maintain client-side code to continuously enhance the overall user experience, addressing performance optimizations and usability improvements as needed.</p>
        <p>✓ Seamlessly integrate front-end designs with back-end logic, leveraging modern web technologies and frameworks to deliver robust and scalable solutions.</p>
        <p>✓ Conduct thorough testing and debugging of both front-end and back-end components, utilizing automated testing frameworks and methodologies to uphold code quality and reliability.</p>
        <p>✓ Actively participate in code reviews, providing constructive feedback and contributing to the ongoing refinement of coding standards and best practices within the development team.</p>
        `,
          startDate: "May 2021",
          endDate: "May 2024",
        },
        {
          title: "Frontend Developer & UI/UX Designer",
          description: `
        <p>✓ Writing clean code, testable, efficient and easily maintained code based on design</p>
        <p>✓ Develop responsive interface website that suit and look nice on every device</p>
        <p>✓ Write clean, helpful, and meaningful documentation for user / developer</p>
        <p>✓ Maintaining every client side code, for best user experience</p>
        <p>✓ Designing an UI/UX for a website or smartphone with pixel perfect and paying attention to details</p>
        <p>✓ Craft code from designed prototype, convert design to HTML code. I'm designing and code the frontend so that client can get the best experience from our application</p>
        `,
          startDate: "Nov 2020",
          endDate: "May 2021",
        },
      ],
    },
    {
      companyName: "Lefgrin Tekno Kreatif",
      location: "East Jakarta, Jakarta, Indonesia",
      locationType: "Remote",
      employmentType: "Freelance",
      experiences: [
        {
          title: "Frontend Developer & UI/UX Designer",
          description: `
        <p>✓ Develop and maintaining design to code</p>
        <p>✓ Craft code from scratch and delivered a nice quality of code to design work</p>
        <p>✓ Designing an Mobile Apps & Web Apps UI/UX and satisfy client with high quality work</p>
        <p>✓ Collaborate with other engineering team to brainstorm some of new idea to achieve client satisfy</p>
        `,
          startDate: "Jun 2021",
          endDate: "Dec 2021",
        },
      ],
    },
    {
      companyName: "Wonder Print",
      location: "East Jakarta, Jakarta, Indonesia",
      locationType: "On-site",
      employmentType: "Fulltime",
      experiences: [
        {
          title: "Illustrator & Graphic Designer",
          description: `
        <p>✓ Develop visually compelling designs for apparel and accessories that align with the brand's image and target market, considering factors such as color, silhouette, and fabric selection.</p>
        <p>✓ Collaborate closely with the design team to brainstorm and conceptualize new collections, providing input on trends, themes, and design directions.</p>
        <p>✓ Research and source innovative materials, trims, and embellishments that enhance the quality and aesthetic appeal of the brand's products.</p>
        <p>✓ Participate in fittings and garment evaluations, offering feedback on fit, construction, and overall design integrity to achieve desired aesthetic and performance standards.</p>
        `,
          startDate: "Dec 2019",
          endDate: "Nov 2020",
        },
      ],
    },
  ];

  // State to manage expanded/collapsed states for each experience within each company
  const [expandedItems, setExpandedItems] = useState<
    Record<number, Record<number, boolean>>
  >({});

  const toggleExpand = (companyIndex: number, experienceIndex: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [companyIndex]: {
        ...prev[companyIndex],
        [experienceIndex]: !prev[companyIndex]?.[experienceIndex], // Toggle the expanded state for the clicked experience item
      },
    }));
  };

  return (
    <div className="bg-background-50 dark:bg-background rounded-xl px-5 py-4 max-h-[700px] overflow-auto">
      {experiencesData.map((item, companyIndex) => (
        <div className="flex flex-col" key={companyIndex}>
          <div className="flex flex-col mb-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold">{item.companyName}</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-xs">{item.employmentType}</span>
              {/* <span className="text-xs">{item.employmentType}</span>•
              <span className="text-xs font-light">3 yrs 1 mo</span> */}
            </div>
            <div className="flex gap-2 items-center opacity-80">
              <span className="text-xs">{item.location}</span>•
              <span className="text-xs font-light">{item.locationType}</span>
            </div>
          </div>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            {item.experiences.map((experience, experienceIndex) => {
              const isExpanded = expandedItems[companyIndex]?.[experienceIndex]; // Check if this experience item is expanded

              return (
                <TimelineItem key={experienceIndex}>
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector sx={{ bgcolor: "primary.main" }} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className="flex flex-col gap-7">
                      <div className="flex flex-col">
                        <span className="font-semibold text-base">
                          {experience.title}
                        </span>
                        <span className="text-xs text-primary mt-1">
                          {experience.startDate} - {experience.endDate}
                        </span>
                        <div
                          className={`font-light text-xs mt-3 flex flex-col gap-3 ${
                            !isExpanded ? "clamped-text" : ""
                          }`} // Conditionally apply clamped-text class
                          dangerouslySetInnerHTML={{
                            __html: experience.description,
                          }}
                        />
                        <Button
                          size="sm"
                          variant="light"
                          className="mt-2"
                          onClick={() =>
                            toggleExpand(companyIndex, experienceIndex)
                          } // Toggle on click
                        >
                          {isExpanded ? "See less" : "See more"}
                        </Button>
                      </div>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>

          {companyIndex !== experiencesData.length - 1 && (
            <Divider className="my-7" />
          )}
        </div>
      ))}
    </div>
  );
}
