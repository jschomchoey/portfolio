import ProjectsMotion from "@/components/sections/projects/projects.motion";

export default async function ProjectsSection() {
  // const res = await fetch(
  //   "https://enpoint.here/api/projects",
  //   {
  //     next: { revalidate: 60 },
  //   },
  // );

  // const projects = await res.json();

  const projects = [
    {
      userId: 1,
      id: 1,
      slug: "clicknext-internship-frontend-developer",
      image: "/images/projects/clicknext_logo.jpg",
      title: "Clicknext | Internship / Frontend Developer",
      description:
        "Worked on corporate CMS customization, security vulnerability fixes, and government backend testing, focusing on responsive design, system stability, and bug reduction.",
      body: `
        ## Overview

        This internship focused on **Frontend Development** within a corporate CMS environment, emphasizing real-world production systems and government-related projects.

        ## Responsibilities

        - Developed and customized **CMS components** based on design mockups  
        - Built **responsive layouts** to support multiple screen sizes  
        - Customized widgets for the internal **Page Builder system**  
        - Implemented new UI behaviors using JavaScript and jQuery  

        ## Security & Stability

        - Fixed security vulnerabilities reported from **Pentest**, including:
          - Cross-Site Scripting (XSS)
        - Improved system stability by reducing UI-related bugs
        - Ensured safer content rendering within CMS pages

        ## Testing & Collaboration

        - Participated in **government backend system testing**
        - Worked closely with designers and backend developers
        - Learned real-world development workflows and version control practices

        ## Tech Stack

        - **HTML / SCSS / Bootstrap**
        - **JavaScript / jQuery**
        - **PHP / MySQL**

        > This experience strengthened my understanding of production-grade frontend development, security awareness, and cross-team collaboration.
        `,

      date: "08 Jan 2026",
      type: "Internship",
    },
    {
      userId: 1,
      id: 2,
      slug: "project-find-mate-roommate-recommendation",
      image: "/images/projects/FindMate.webp",
      title: "Project: Find Mate - Roomate Recommendation",
      description:
        "Built a full-stack roommate recommendation application using personality-based compatibility matching. Implemented a secure mutual match system with OTP verification and an admin dashboard for user and report management.",
      body: `
        ## Overview

        Developed a full-stack roommate recommendation application leveraging personality-based compatibility algorithms to enhance user matching accuracy.

        ## Features

        - Implemented a secure mutual match system requiring OTP verification to ensure genuine connections.
        - Designed and developed an admin dashboard for efficient user and report management.
        - Integrated personality assessment tools to improve recommendation quality.

        ## Tech Stack

        - **Frontend:** React, Tailwind CSS
        - **Backend:** Node.js, Express
        - **Database:** MongoDB
        - **Authentication:** OTP-based verification

        > This project enhanced my skills in full-stack development, security implementation, and user-centric design.
        `,
      date: "08 Jan 2026",
      type: "Project",
    },
    {
      userId: 1,
      id: 3,
      image: "/images/projects/CrossBoot.png",
      slug: "crossboot-windows-bootable-usb-creator-on-macos",
      title: "CrossBoot - Windows Bootable USB Creator on macOS",
      description:
        "Architected a macOS utility that simplifies creating Windows bootable USBs with Legacy BIOS, UEFI, and Secure Boot support, featuring automatic WIM splitting and Windows 11 bypass capabilities.",
      body: `
        ## Overview

        Developed a macOS utility to create Windows bootable USB drives, supporting Legacy BIOS, UEFI, and Secure Boot configurations.

        ## Features

        - Automated WIM file splitting for compatibility with FAT32 file systems.
        - Implemented Windows 11 installation bypass mechanisms.
        - User-friendly interface for seamless USB creation.

        ## Tech Stack

        - **Language:** Swift
        - **Platform:** macOS
        - **Tools:** Disk Utility, Terminal commands

        > This project enhanced my skills in system-level programming, macOS development, and Windows installation processes.
        `,
      date: "08 Jan 2026",
      type: "Project",
    },
    {
      userId: 1,
      id: 4,
      image: "/images/projects/CowayCorp.png",
      slug: "coway-sales-representative-websites",
      title: "Coway Sales Representative Websites",
      description:
        "Designed and launched sales representative websites using Wix, focusing on user-centric UI/UX, SEO optimization, and dynamic content management to improve visibility and engagement.",
      body: `
        ## Overview

        Designed and launched sales representative websites using Wix, focusing on user-centric UI/UX, SEO optimization, and dynamic content management to improve visibility and engagement.

        ## Features

        - Created responsive and visually appealing website layouts.
        - Implemented SEO best practices to enhance search engine rankings.
        - Developed dynamic content management systems for easy updates.

        ## Tech Stack

        - **Platform:** Wix
        - **Technologies:** HTML, CSS, JavaScript
        - **Tools:** Wix Editor, SEO tools

        > This project improved my skills in web design, SEO optimization, and content management.
        `,  
      date: "08 Jan 2026",
      type: "Project",
    },
  ];

  return (
    <section className="projects-section">
      <ProjectsMotion projects={projects} />
    </section>
  );
}
