import type { ShowroomStory } from "../data/siteContent";
import { ImageFrame } from "./ImageFrame";

type ShowroomCardProps = {
  story: ShowroomStory;
  featured?: boolean;
};

export function ShowroomCard({ story, featured = false }: ShowroomCardProps) {
  return (
    <article className={featured ? "lg:col-span-2" : undefined}>
      <ImageFrame
        src={story.image}
        alt={story.title}
        className="h-80 rounded-[1.4rem] shadow-soft sm:h-[420px] sm:rounded-[2rem]"
        imageClassName="transition duration-700 hover:scale-105"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-bone">
            {story.detail}
          </p>
          <h3 className="mt-3 font-display text-4xl font-semibold leading-none">
            {story.title}
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/76">
            {story.description}
          </p>
        </div>
      </ImageFrame>
    </article>
  );
}
