import Button from "./ui/button";

const CTA = () => {
  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Join Our Journey?
        </h2>
        <p className="text-lg text-white opacity-90  max-w-2xl mx-auto">
          Experience the future of banking today. Join millions of satisfied
          customers who have made the switch to intelligent banking.
        </p>
        <Button variant="outline" size="lg">
          Get Started Today
        </Button>
      </div>
    </section>
  );
};

export default CTA;
