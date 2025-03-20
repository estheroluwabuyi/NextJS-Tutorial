import Hello from "./components/hello";

export default function Home() {
  console.log("What am I doing here?---SERVER/CLIENT");

  return (
    <>
      <h1 className="text-3xl">Hello Next.js</h1>
      <Hello />
    </>
  );
}
