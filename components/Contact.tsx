import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1600px] px-8">

        <div className="mb-16 text-center">

          <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-blue-600">
            Contact Us
          </p>

          <h2 className="text-5xl font-black text-slate-900">
            Request A Free Consultation
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Whether you&ldquo;re planning a commercial development,
            road project, car park or driveway, our team is
            ready to help.
          </p>

        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Contact Details */}

          <div className="rounded-2xl bg-[#071B39] p-10 text-white">

            <h3 className="mb-8 text-3xl font-black">
              Get In Touch
            </h3>

            <div className="space-y-8">

              <div className="flex gap-4">
                <Phone className="text-blue-400" />
                <div>
                  <p className="font-bold">Telephone</p>
                  <p>028 9264 8270</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-blue-400" />
                <div>
                  <p className="font-bold">Email</p>
                  <p>enquiries@armstrong-surfacing.co.uk</p>
                  <p>accounts@armstrong-surfacing.co.uk</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-blue-400" />
                <div>
                  <p className="font-bold">Address</p>
                  <p>35 Stoneyford Road</p>
                  <p>Lisburn</p>
                  <p>BT28 3RG</p>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}

          <form className="rounded-2xl border border-slate-200 bg-white p-10 shadow-lg">

            <div className="grid gap-6">

              <div>
                <label className="mb-2 block font-semibold">
                  Full Name
                </label>

                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-300 p-4"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Email Address
                </label>

                <input
                  type="email"
                  className="w-full rounded-lg border border-slate-300 p-4"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Telephone
                </label>

                <input
                  type="tel"
                  className="w-full rounded-lg border border-slate-300 p-4"
                  placeholder="Phone Number"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Project Type
                </label>

                <select className="w-full rounded-lg border border-slate-300 p-4">
                  <option>Commercial Surfacing</option>
                  <option>Road Construction</option>
                  <option>Car Parks</option>
                  <option>Civil Engineering</option>
                  <option>Driveways</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Project Details
                </label>

                <textarea
                  rows={6}
                  className="w-full rounded-lg border border-slate-300 p-4"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
              >
                SEND ENQUIRY
              </button>

            </div>

          </form>

        </div>

      </div>
    </section>
  );
}