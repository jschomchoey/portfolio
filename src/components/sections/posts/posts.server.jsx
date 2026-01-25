import PostsMotion from "./posts.motion";

export default async function PostsSection() {
  // const res = await fetch(
  //   "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=3",
  //   {
  //     next: { revalidate: 60 },
  //   },
  // );

  // const posts = await res.json();

  const posts = [
    {
      userId: 1,
      id: 1,
      title: "Dealing with Framer Motion in Next.js 13",
      body: "เป็นอะไรที่น่าสนใจมากเมื่อได้ลองใช้ Framer Motion ร่วมกับ Next.js 13 ทำให้การคงคุณสมบัติของ Server Side Rendering (SSR) ยังคงอยู่ได้อย่างดี",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body:
        "est rerum tempore vitae\n" +
        "sequi sint nihil reprehenderit dolor beatae ea dolores neque\n" +
        "fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\n" +
        "qui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body:
        "et iusto sed quo iure\n" +
        "voluptatem occaecati omnis eligendi aut ad\n" +
        "voluptatem doloribus vel accusantium quis pariatur\n" +
        "molestiae porro eius odio et labore et velit aut",
    },
  ];

  return (
    <section>
      <PostsMotion posts={posts} />
    </section>
  );
}
