import { ContainerMain } from "../components/ContainerMain";
import { Container } from "../components/Container";
import { BgImgSection } from "../components/sections/BgImgSection";
import { PostDescription } from "../components/PostDescription";
import Button from "../components/Button";
import { posts } from "../constans/posts";

export const BlogPage = () => {
  return (
    <ContainerMain className="py-0 sm:py-0 lg:py-0">
      <BgImgSection bgOverlayColorClassName="bg-black/0" />
      <Container className="pt-8 sm:pt-12 lg:pt-18">
        <h1>
          <span className="h2-text-span">Статьи</span>
        </h1>
        <section id="blog-section">
          <div className="max-w-5xl mx-auto p-6 space-y-6 sm:space-y-12">
            <div className="grid  justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* post sorts in order id */}
              {posts &&
                posts
                  .sort((curPost, nextPost) => curPost.id - nextPost.id)
                  .map((post) => <PostDescription post={post} />)}
            </div>
            <div className="flex justify-center hidden">
              <Button color="accent" size="md">
                Загрузить больше статей...
              </Button>
            </div>
          </div>
        </section>
      </Container>
    </ContainerMain>
  );
};
