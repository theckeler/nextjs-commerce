import { ThreeItemGrid } from "components/grid/three-items";
// import {type LoaderArgs, json} from '@shopify/remix-oxygen';

export const runtime = "edge";

export const metadata = {
  description: "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website"
  }
};

export default function Home() {
  return (
    <>
      <ThreeItemGrid />
      {/* <Suspense>
        <Carousel />
      </Suspense> */}
    </>
  );
}
