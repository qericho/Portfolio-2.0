import { useState } from "react";
import Title from "./ui/Title";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.email) {
      toast.error("Email is required");
      return false;
    }
    // simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email");
      return false;
    }
    if (!formData.subject.trim()) {
      toast.error("Subject is required");
      return false;
    }
    if (!formData.message.trim()) {
      toast.error("Message cannot be empty");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "e2a2472f-baad-4ef5-a37e-3026b1e33240",
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setFormData({ email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <section className="py-16 bg-[var(--color-gry)]">
      <div id="contact" className="max-w-3xl mx-auto px-4">
        {/* Toast Container */}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "var(--color-whte)",
              color: "var(--color-dark)",
              border: "1px solid var(--color-primary)",
              padding: "12px 16px",
              fontWeight: "600",
              borderRadius: "0px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            },
            success: {
              style: { borderLeft: "4px solid var(--color-primary)" },
            },
            error: {
              style: { borderLeft: "4px solid red" },
            },
          }}
        />
        {/* Title Component */}
        <Title
          h1="Contact Me"
          h5="Get In Touch"
          p="Feel free to reach out to me for projects, collaborations, or just a friendly hello!"
          h1Style="text-dark text-center"
          imgStyle="hidden"
          pStyle="text-center text-[var(--color-fade2)] py-2 md:py-3"
          divStyle="mb-10"
        />
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[var(--color-whte)] p-8 shadow-sm space-y-6"
        >
          <div>
            <label className="block mb-2 text-[var(--color-dark)] font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label className="block mb-2 text-[var(--color-dark)] font-semibold">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              placeholder="Subject"
            />
          </div>

          <div>
            <label className="block mb-2 text-[var(--color-dark)] font-semibold">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-6 bg-[var(--color-primary)] text-[var(--color-whte)] font-semibold hover:bg-pink-600 transition duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
