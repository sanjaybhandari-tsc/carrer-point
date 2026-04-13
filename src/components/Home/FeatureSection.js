export default function FeaturesSection() {
  const features = [
    {
      title: "Job Opportunities",
      desc: "Explore latest openings from top companies.",
    },
    {
      title: "Skill Development",
      desc: "Enhance your skills with curated resources.",
    },
    {
      title: "Track Applications",
      desc: "Manage and track your job applications easily.",
    },
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-10">Features</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-medium mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}