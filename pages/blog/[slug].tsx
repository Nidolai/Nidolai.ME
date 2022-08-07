import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts, Post } from 'contentlayer/generated'
import BlogLayout from 'components/Blog/BlogLayout'

const PostPage = ({ post }: { post: Post }) => {
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <BlogLayout post={post}>
      <MDXContent />
    </BlogLayout>
  )
}

export default PostPage

export async function getStaticPaths() {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }: any) {
  const post = allPosts.find((post) => post.slug === params.slug);

  return { props: { post } };
}