import PostsMotion from "@/components/sections/posts/posts.motion";

export default async function PostsSection() {
  // const res = await fetch(
  //   "https://enpoint.here",
  //   {
  //     next: { revalidate: 60 },
  //   },
  // );

  // const posts = await res.json();

  const posts = [
    {
      userId: 1,
      id: 1,
      slug: "framer-motion-with-nextjs-13",
      image: "/images/posts/framer-motion-with-nextjs-13.webp",
      title: "เมื่อ Framer Motion ต้องการ Client Component ร่วมกับ Next.js 13",
      description:
        "เลือกใช้ Next.js เพื่อจะใช้ประโยชน์จาก Server Component แต่ Framer Motion ดันต้องการ Client Component ในการทำ Animation จะทำอย่างไรดี?",
      body: "เลือกใช้ Next.js เพื่อจะใช้ประโยชน์จาก Server Component แต่ Framer Motion ดันต้องการ Client Component ในการทำ Animation จะทำอย่างไรดี?",
      date: "08 Jan 2026",
    },
    {
      userId: 1,
      id: 2,
      slug: "internship-review-clicknext",
      image: "/images/posts/clicknext_logo.jpg",
      title: "รีวิวฝึกงานที่ ClickNext - Frontend Developer",
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
      image: "/images/posts/jsonplaceholder-fake-online-rest-api.webp",
      slug: "jsonplaceholder-fake-online-rest-api",
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      description:
        "เลือกใช้ Next.js เพื่อจะใช้ประโยชน์จาก Server Component แต่ Framer Motion ดันต้องการ Client Component ในการทำ Animation จะทำอย่างไรดี?",
      body:
        "et iusto sed quo iure\n" +
        "voluptatem occaecati omnis eligendi aut ad\n" +
        "voluptatem doloribus vel accusantium quis pariatur\n" +
        "molestiae porro eius odio et labore et velit aut",
      date: "08 Jan 2026",
    },
  ];

  return (
    <section className="posts-section">
      <PostsMotion posts={posts} />
    </section>
  );
}
