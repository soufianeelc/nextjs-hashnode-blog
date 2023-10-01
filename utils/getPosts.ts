export async function getPosts() {
  try {
    const { data } = await fetch("https://api.hashnode.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
    {
      user(username: "soufianeelc") {
        publication {
          posts(page: 0) {
            _id
            slug
            brief
            coverImage
            title
            dateAdded
            contentMarkdown
            readTime
          }
        }
      }
    }`,
      }),
    }).then((response) => response.json());

    return data.user.publication.posts;
  } catch (err) {
    console.log(err);
  }
}
