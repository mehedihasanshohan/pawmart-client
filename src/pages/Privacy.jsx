const Privacy = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20 prose prose-teal bg-base-200">
      <h1 className="text-4xl font-bold mb-8 text-teal-600 border-b pb-4">Privacy Policy & Terms</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-base-content">1. Introduction</h2>
        <p className="text-base-content/80 leading-loose">
          Welcome to Pawmart. We are committed to protecting your personal information and your right to privacy. When you visit our website, you trust us with your personal information. We take this trust very seriously.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-base-content">2. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2 text-base-content/80">
          <li>Account credentials (email, name, password)</li>
          <li>Pet listings and adoption history</li>
          <li>Payment information for supplies</li>
          <li>Location data for delivery purposes</li>
        </ul>
      </section>

      <section className="bg-base-100 p-6 rounded-lg border-l-4 border-teal-600">
        <h3 className="font-bold mb-2">Notice:</h3>
        <p className="text-sm">By using Pawmart, you agree to our terms of service and allow us to process your data to improve our services.</p>
      </section>
    </div>
  );
};

export default Privacy;