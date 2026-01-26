import ProjectsMotion from "@/components/sections/projects/projects.motion";

export default async function ProjectsSection() {
  // const res = await fetch(
  //   "https://enpoint.here",
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
        "Developed responsive web pages and content layouts based on design mockups, ensuring cross-device compatibility.",
      body: "In sit amet metus a ipsum eleifend dictum vitae vel erat. Sed tincidunt sapien massa, tempor mattis lacus pellentesque vitae. Donec congue varius enim sit amet condimentum. Curabitur sodales erat ut mi gravida, at elementum nulla efficitur. Nam dolor quam, elementum sit amet tincidunt ac,",
      date: "08 Jan 2026",
    },
    {
      userId: 1,
      id: 2,
      slug: "project-find-mate-roommate-recommendation-full-stack",
      image: "/images/projects/clicknext_logo.jpg",
      title: "Project: Find Mate - Roomate Recommendation / Full Stack",
      description:
        "ประสบการณ์การฝึกงานที่ ClickNext ในตำแหน่ง Frontend Developer ประสบการณ์ไม่มีวันลืม เป็นอย่างไร มีอะไรได้เรียนรู้บ้าง มาดูกัน!",
      body:
        "est rerum tempore vitae\n" +
        "sequi sint nihil reprehenderit dolor beatae ea dolores neque\n" +
        "fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\n" +
        "qui aperiam non debitis possimus qui neque nisi nulla",
      date: "08 Jan 2026",
    },
    {
      userId: 1,
      id: 3,
      image: "/images/projects/jsonplaceholder-fake-online-rest-api.webp",
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
    },
    {
      userId: 1,
      id: 4,
      image: "/images/projects/jsonplaceholder-fake-online-rest-api.webp",
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
    },
  ];

  return (
    <section className="projects-section">
      <ProjectsMotion projects={projects} />
    </section>
  );
}
