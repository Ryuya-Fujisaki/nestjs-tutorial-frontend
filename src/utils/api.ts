export async function getAllPosts() {
  const res = await fetch("http://localhost:5001/posts");
  const data = await res.json();
  return data;
}

export async function getPostById(id: any) {
  const res = await fetch(`http://localhost:5001/posts/${id}`);
  const data = await res.json();
  return data;
}
