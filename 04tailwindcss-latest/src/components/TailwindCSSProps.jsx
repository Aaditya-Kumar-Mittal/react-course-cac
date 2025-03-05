import Card from "./Card";

function TailwindCSSProps() {
  return (
    <div className="bg-gray-400 m-5 p-5">
      <h1 className="bg-slate-900 text-white text-3xl p-2 border-2 border-white rounded-xl m-5 w-1/2 text-center mx-auto">
        Tailwind Test
      </h1>
      <Card username="Aaditya" image="image1.jpg" />
      <br />
      <Card username="Resham" image="image2.jpg" />
    </div>
  );
}

export default TailwindCSSProps;
