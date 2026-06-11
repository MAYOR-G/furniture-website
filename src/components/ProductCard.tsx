import type { Product } from "../data/siteContent";
import { ImageFrame } from "./ImageFrame";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group rounded-[1.75rem] border border-charcoal/10 bg-linen p-3 shadow-insetGlow transition duration-300 hover:-translate-y-1 hover:shadow-card">
      <ImageFrame
        src={product.image}
        alt={product.name}
        className="h-72 rounded-[1.35rem]"
        imageClassName="transition duration-700 group-hover:scale-105"
      >
        <span className="absolute left-4 top-4 rounded-full bg-charcoal px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-ivory">
          {product.badge}
        </span>
      </ImageFrame>
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-bronze">
              {product.category}
            </p>
            <h3 className="mt-2 font-display text-3xl font-semibold leading-none text-charcoal">
              {product.name}
            </h3>
          </div>
          <p className="shrink-0 rounded-full bg-bone px-3 py-1.5 text-sm font-extrabold text-walnut">
            {product.price}
          </p>
        </div>
        <p className="mt-4 text-sm leading-7 text-charcoal/62">
          {product.materials}
        </p>
        <a
          href="#consultation"
          className="mt-5 inline-flex text-sm font-extrabold text-charcoal underline decoration-bronze/35 underline-offset-8 transition hover:text-bronze"
        >
          Request quote
        </a>
      </div>
    </article>
  );
}
