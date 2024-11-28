import { useNavigate, useParams } from "react-router-dom";

import { ContainerMain } from "../components/ContainerMain";
import { Container } from "../components/Container/index";
import { Post } from "../components/Post";
import ButtonLink from "../components/ButtonLink";
import Button from "../components/Button";
import { ArrowLeftIcon } from "../components/Icons";

export const PostPage = () => {
  const { id: postId } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <ContainerMain>
      <Container>
          <Button
            onClick={goBack}
            size="md"
            color="outline"
            className="flex items-center gap-1 px-0"
          >
            <ArrowLeftIcon className="size-5" /> Назад{" "}
          </Button>
        <div className="max-w-xl mx-auto space-y-4">
          {postId && <Post id={+postId} />}
          <div className="text-center">
            <ButtonLink href="/blog" size="md" color="accent">
              Назад к статьям
            </ButtonLink>
          </div>
        </div>
      </Container>
    </ContainerMain>
  );
};
