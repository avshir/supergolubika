import { motion } from "motion/react";

import { ContainerMain } from "../components/ContainerMain";
import { Container } from "../components/Container";
import { BgImgSection } from "../components/sections/BgImgSection";
import Button from "../components/Button";
import { MPostDescription } from "../components/PostDescription";

import { posts } from "../constans/posts";
import { listAnimation } from "../utils/animationVariantsMotion";

export const BlogPage = () => {
  return (
    <ContainerMain className="py-0 sm:py-0 lg:py-0">
      <BgImgSection bgOverlayColorClassName="bg-black/0" />
      <Container className="pt-8 sm:pt-12 lg:pt-18">
        <motion.section
          id="blog-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <h1>
            <span className="h2-text-span">Статьи</span>
          </h1>
          <div className="max-w-5xl mx-auto p-6 space-y-6 sm:space-y-12">
            <div className="grid  justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* post sorts in order id */}
              {posts &&
                posts
                  .sort((curPost, nextPost) => curPost.id - nextPost.id)
                  .map((post, index) => (
                    <MPostDescription
                      key={post.id}
                      post={post}
                      variants={listAnimation}
                      custom={index + 2}
                    />
                  ))}
            </div>
            <div className="flex justify-center hidden">
              <Button color="accent" size="md">
                Загрузить больше статей...
              </Button>
            </div>
          </div>
        </motion.section>
      </Container>
    </ContainerMain>
  );
};
