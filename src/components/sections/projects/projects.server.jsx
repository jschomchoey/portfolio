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
      body: "In sit amet metus a ipsum eleifend dictum vitae vel erat. Sed tincidunt sapien massa, tempor mattis lacus pellentesque vitae. Donec congue varius enim sit amet condimentum. Curabitur sodales erat ut mi gravida, at elementum nulla efficitur. Nam dolor quam, elementum sit amet tincidunt ac,",
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
      body:
        "est rerum tempore vitae\n" +
        "sequi sint nihil reprehenderit dolor beatae ea dolores neque\n" +
        "fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\n" +
        "qui aperiam non debitis possimus qui neque nisi nulla",
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
      body:
        "et iusto sed quo iure\n" +
        "voluptatem occaecati omnis eligendi aut ad\n" +
        "voluptatem doloribus vel accusantium quis pariatur\n" +
        "molestiae porro eius odio et labore et velit aut",
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
      body:
        "et iusto sed quo iure\n" +
        "voluptatem occaecati omnis eligendi aut ad\n" +
        "voluptatem doloribus vel accusantium quis pariatur\n" +
        "molestiae porro eius odio et labore et velit aut",
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
