import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Armstrong Surfacing Ltd",
  description:
    "Get in touch with Armstrong Surfacing to discuss surfacing, civil engineering and infrastructure projects across Northern Ireland.",
};

export default function ContactPage() {
  return (
    <main>

      {/* Hero */}

      <section className="bg-[#071B39] py-32">

        <div className="mx-auto max-w-[1400px] px-8">

          <p className="mb-4 text-sm font-bold uppercase tracking-[5px] text-blue-400">
            Contact Us
          </p>

          <h1 className="text-4xl font-black text-white md:text-6xl">
            Let&apos;s Discuss
            <br />
            Your Next Project
          </h1>

        </div>

      </section>

      {/* Contact Information */}

      <section className="bg-white py-24">

        <div className="mx-auto grid max-w-[1400px] gap-12 px-8 lg:grid-cols-2">

          {/* Contact Details */}

          <div>

            <h2 className="mb-8 text-4xl font-black">
              Get In Touch
            </h2>

            <div className="space-y-8">

              <div>
                <h3 className="mb-2 text-lg font-bold">
                  Telephone
                </h3>

                <p className="text-slate-600">
                  028 9264 8270
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-bold">
                  Email
                </h3>

                <p className="text-slate-600">
                  enquiries@armstrong-surfacing.co.uk
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-bold">
                  Address
                </h3>

                <p className="text-slate-600">
                  Armstrong Surfacing Ltd
                  <br />
                  Lisburn
                  <br />
                  Northern Ireland
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-bold">
                  Opening Hours
                </h3>

                <p className="text-slate-600">
                  Monday – Friday
                  <br />
                  08:00 – 17:00
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="rounded-2xl bg-slate-50 p-8 shadow-lg">

            <h2 className="mb-8 text-3xl font-black">
              Send An Enquiry
            </h2>

            <form className="space-y-6">

              <div>
                <label className="mb-2 block font-semibold">
                  Name
                </label>

                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-300 p-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Email
                </label>

                <input
                  type="email"
                  className="w-full rounded-lg border border-slate-300 p-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Phone Number
                </label>

                <input
                  type="tel"
                  className="w-full rounded-lg border border-slate-300 p-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Subject
                </label>

                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-300 p-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Message
                </label>

                <textarea
                  rows={6}
                  className="w-full rounded-lg border border-slate-300 p-3"
                />
              </div>

              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
              >
                Send Enquiry
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Map Placeholder */}

      {/* Map */}

    <section className="bg-slate-100 py-24">

        <div className="mx-auto max-w-[1400px] px-8">

            <h2 className="mb-8 text-center text-4xl font-black">
            Find Us
            </h2>

            <div className="overflow-hidden rounded-2xl shadow-xl">

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2313.8137253711147!2d-6.091972523430182!3d54.55440907266429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4861015264fc96a3%3A0x8d58125af7ea5512!2s35%20Stoneyford%20Rd%2C%20Lisburn%20BT28%203RG!5e0!3m2!1sen!2suk!4v1792340882753!5m2!1sen!2suk"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Armstrong Surfacing Location"
            />

            </div>

            <div className="mt-8 flex flex-col gap-4 md:flex-row">

            <a
                href="tel:02892648270"
                className="rounded-lg bg-blue-600 px-6 py-4 text-center font-bold text-white"
            >
                Call Us
            </a>

            <a
                href="mailto:enquiries@armstrong-surfacing.co.uk"
                className="rounded-lg border border-slate-300 px-6 py-4 text-center font-bold"
            >
                Email Us
            </a>

            <a
                href="https://maps.google.com/?q=35+Stoneyford+Road+Lisburn+BT28+3RG"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-300 px-6 py-4 text-center font-bold"
            >
                Get Directions
            </a>

            </div>

        </div>

    </section>

    </main>
  );
}