/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Divider } from "@nextui-org/react";
import { TProjectTimeline } from "@/types/timeline.type";
import Image from "next/image";
import { useMemo, useState } from "react";
import ModalViewProject from "./modal-view-project";

export default function Projects() {
  const projectsData: TProjectTimeline[] = [
    {
      projectName: "GAFI",
      description:
        "GAFI is a apps that helps user manage and maintain everything about their industy. From freezer management and reimbursements to stock control, tagging, and approvals, and hundred submodules or features that simplified all in one place.",
      companyName: "BERJASA CONSULTING",
      startDate: "Apr 2023",
      endDate: "May 2023",
      galleries: [
        {
          title: "Dynamic Approval",
          description:
            "This is for user to manage their approval flow, if certain condition of document meets it will direct the approval based on given condition. On this apps there is some approval flow config that has different from each other, i.e the most complex one is by condition of comparison budget either greater or lower or many more (all comparison condition is included in condition)",
          url: "/assets/project-galleries/gafi-dynamic-approval.jpeg",
        },
        {
          title: "Dashboard",
          description:
            "This is for user to view all summary from their business, and many call to action so it helps user to decide what to do from given information",
          url: "/assets/project-galleries/gafi-dashboard.jpeg",
        },
      ],
      skill: ["Vue.js", "Laravel", "Tailwind CSS", "RabbitMQ", "pgSQL"],
    },
    {
      projectName: "BeAttendance",
      description:
        "BeAttendance is designed to streamline employee attendance tracking with automatic and efficient systems. The app includes key features such as user authentication, sick leave and vacation requests, shift management, and more to help businesses manage their workforce effortlessly.",
      companyName: "BERJASA CONSULTING",
      startDate: "Jul 2023",
      endDate: "Oct 2023",
      galleries: [
        {
          title: "Role Authorization (Dark Theme)",
          description: "",
          url: "/assets/project-galleries/beattendance-role-authorization.jpeg",
        },
        {
          title: "Attendance - Tracker (Dark Theme)",
          description: "",
          url: "/assets/project-galleries/beattendance-attendance-tracker.jpeg",
        },
        {
          title: "Live Attendance - Management",
          description: "",
          url: "/assets/project-galleries/beattendance-live-attendance.jpeg",
        },
      ],
      skill: ["Next.js", "Laravel", "TypeScript", "Google Maps API"],
    },
    {
      projectName: "BePOS",
      description:
        "BePos is a point-of-sale system that simplifies sales, inventory, and payment processing for user business. It’s designed to streamline operations, helping you manage transactions, track stock, and keep everything running smoothly so user can focus on growing their business. This is one of the most challenging projects I’ve worked on, with features like tracking complex stock flows. For example, a coffee cup might be made with various compositions of sugar or powder in grams or milligrams. Each type of stock requires a different approach to calculate its usage.",
      companyName: "BERJASA CONSULTING",
      startDate: "Nov 2022",
      endDate: "Sep 2023",
      galleries: [
        {
          title: "Central Area",
          description: "This is for head of department area, this will help user decide what to do from given information. This dashboard including sales tracker, revenue, .etc",
          url: "/assets/project-galleries/bepos-central-area.jpeg",
        },
        {
          title: "Cashier Area",
          description: "This is for cashier area to order, from this user will be directed to integrated payment and the stock is decreased based on it formula",
          url: "/assets/project-galleries/bepos-cashier-area.jpeg",
        },
      ],
      skill: ["Vue.js", "Laravel", "Tailwind CSS", "RabbitMQ", "Socket.io"],
    },
    {
      projectName: "BeCoffee - Mobile",
      description:
        "BeCoffee Mobile is a user-friendly app designed to make ordering coffee a breeze. It allows you to explore our full menu, customize your coffee to your taste, and place orders quickly and easily. With features like order tracking, special promotions, and a seamless checkout process, BeCoffee Mobile ensures you get your favorite coffee exactly how you like it, with minimal effort and maximum convenience.",
      companyName: "BERJASA CONSULTING",
      startDate: "Nov 2022",
      endDate: "Sep 2023",
      galleries: [],
      skill: ["React Native", "Redux.js", "Laravel", "RabbitMQ", "Socket.io"],
    },
    {
      projectName: "SEKATA",
      description:
        "SEKATA is an app for managing foundation activities, including university operations and financial data. It helps streamline administrative processes, track financial records, and oversee various aspects of foundation management, ensuring everything is organized and efficient",
      companyName: "BERJASA CONSULTING",
      startDate: "Jan 2022",
      endDate: "Oct 2022",
      galleries: [],
      skill: ["AJAX", "CodeIgniter", "Bootstrap", "SASS"],
    },
    {
      projectName: "Shopiea - Frontend Mentor",
      description:
        "Shopiea is an online store offering a smooth shopping experience with a wide range of products, easy navigation, and secure checkout. However, this is for educational purposes only; I am serving as a mentor for the client.",
      companyName: "BERJASA CONSULTING",
      startDate: "Jun 2022",
      endDate: "Aug 2022",
      galleries: [],
      skill: [
        "SASS",
        "Tailwind CSS",
        "Front-End Development",
        "Laravel",
        "UI/UX",
      ],
    },
    {
      projectName: "BeCoffee",
      description:
        "BeCoffee is a website that promotes our coffee products in a clean, modern way. It’s like a company profile but focused on our products, with great visuals, product details, and customer reviews. Easy to navigate, it helps coffee lovers discover and connect with our brand. https://becoffee.id",
      companyName: "BERJASA CONSULTING",
      startDate: "Mar 2022",
      endDate: "May 2022",
      galleries: [],
      skill: ["Laravel", "AJAX", "Bootstrap"],
    },
    {
      projectName: "ASATU",
      description:
        "ASATU is an app designed for universities to manage all their data efficiently. It streamlines administrative tasks, student information, academic records, professor data and more, making university management smoother and more organized.",
      companyName: "BERJASA CONSULTING",
      startDate: "Jun 2021",
      endDate: "Jan 2022",
      galleries: [],
      skill: ["jQuery", "AJAX", "Bootstrap", "SASS"],
    },
    {
      projectName: "eCatalogue - WIKA Gedung",
      description:
        "eCatalogue is an app designed for commercial industries to showcase and manage product catalogs digitally. It offers easy navigation, detailed product information, and efficient catalog management. Additionally, it supports legal documentation and contract management for products. However, the project is currently stopped.",
      companyName: "BERJASA CONSULTING",
      startDate: "Nov 2020",
      endDate: "May 2021",
      galleries: [
        {
          title: "Multiple SPM Document",
          description: "",
          url: "/assets/project-galleries/wika-multiple-spm.jpeg",
        },
        {
          title: "SPM Document",
          description: "",
          url: "/assets/project-galleries/wika-spm.jpeg",
        },
        {
          title: "Dashboard Interface",
          description: "",
          url: "/assets/project-galleries/wika-dashboard.jpeg",
        },
      ],
      skill: ["SASS", "JavaScript", "jQuery", "UI/UX"],
    },
  ];

  const [modalState, setModalState] = useState({
    view: false,
    add: false,
    update: false,
  });

  const [activeGalleryIndex, setActiveGalleryIndex] = useState<null | number>(
    null
  );
  const [activeProjectIndex, setActiveProjectIndex] = useState<null | number>(
    null
  );

  const modalData = useMemo(() => {
    if (activeProjectIndex != null && activeGalleryIndex != null) {
      return projectsData[activeProjectIndex]?.galleries[activeGalleryIndex];
    }

    return null;
  }, [modalState.add, activeGalleryIndex, activeProjectIndex]);

  const handleModalViewProject = (
    projectIndex: number,
    galleryIndex: number
  ) => {
    setModalState((prev) => ({ ...prev, view: true }));
    setActiveGalleryIndex(galleryIndex);
    setActiveProjectIndex(projectIndex);
  };

  return (
    <div className="bg-background-50 dark:bg-background rounded-xl px-5 py-4 max-h-[700px] overflow-auto">
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {projectsData.map((item, projectIndex) => (
          <div className="flex flex-col" key={projectIndex}>
            <TimelineItem key={projectIndex}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector sx={{ bgcolor: "primary.main" }} />
              </TimelineSeparator>
              <TimelineContent>
                <div className="flex flex-col mb-4">
                  <span className="font-semibold">{item.projectName}</span>
                  <span className="text-xs text-primary mt-1">
                    {item.startDate} - {item.endDate}
                  </span>
                  <div className="flex gap-2 items-center mt-1">
                    <span className="text-xs font-light opacity-50">
                      Associated with {item.companyName}
                    </span>
                  </div>
                  <div
                    className="font-light text-xs mt-3"
                    dangerouslySetInnerHTML={{
                      __html: item.description,
                    }}
                  />

                  <div className="flex gap-3 mt-5">
                    {item.galleries.map((gallery, galleryIndex) => (
                      <div
                        className="cursor-pointer"
                        key={galleryIndex}
                        onClick={() =>
                          handleModalViewProject(projectIndex, galleryIndex)
                        }
                      >
                        <Image
                          src={gallery.url}
                          alt={""}
                          width={100}
                          height={100}
                          className="h-full"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-xs mt-3">
                    {item.skill?.join(" • ")}
                  </span>
                </div>
              </TimelineContent>
            </TimelineItem>

            {projectIndex !== projectsData.length - 1 && (
              <Divider className="my-7" />
            )}
          </div>
        ))}
      </Timeline>

      <ModalViewProject
        modalData={modalData}
        isOpen={modalState.view}
        onOpenChange={(val) =>
          setModalState((prev) => ({ ...prev, view: val }))
        }
      />
    </div>
  );
}
