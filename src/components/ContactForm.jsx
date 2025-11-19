import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/xblwgkjb", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="Name: "
        placeholder="Name"
        required
        className="w-full px-6 py-3 rounded-full bg-white/70 text-[#2A4540] placeholder-[#2A4540]/60 focus:outline-none"
      />

      <input
        type="email"
        name="Reply To:"
        placeholder="Email"
        required
        className="w-full px-6 py-3 rounded-full bg-white/70 text-[#2A4540] placeholder-[#2A4540]/60 focus:outline-none"
      />

      <textarea
        name="Message:"
        placeholder="Message"
        required
        className="w-full px-6 py-3 rounded-3xl bg-white/70 text-[#2A4540] placeholder-[#2A4540]/60 focus:outline-none h-32 resize-none"
      />

      <button
        type="submit"
        className="w-full py-3 bg-[#2A4540] text-white font-semibold rounded-full hover:bg-[#1e332e] transition-all duration-300 shadow-md"
      >
        {status === "loading" ? "Sending..." : "Send"}
      </button>

      {status === "success" && (
        <p className="text-green-200 text-sm">Message sent successfully!</p>
      )}

      {status === "error" && (
        <p className="text-red-200 text-sm">
          Something went wrong. Try again later.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
