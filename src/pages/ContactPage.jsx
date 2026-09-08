import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiSend, FiCopy, FiCheck } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hey.sridhar@yahoo.com"); 
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    alert("Thanks for reaching out! (This is a demo action)");
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center p-4 py-20 bg-[#faf9f7]">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* Left Side: Info & Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-bold font-[Meow_Script] mb-6 text-slate-800">
              Let's Connect
            </h1>
            <p className="text-slate-600 font-[Lexend] text-lg leading-relaxed max-w-md">
              Have a project in mind, a question about my work, or just want to say hi? I'm always open to discussing new ideas and opportunities.
            </p>
          </div>

          <div className="space-y-6">
            {/* Email Card */}
            <div 
              onClick={handleCopyEmail}
              className="group flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-pointer"
            >
              <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <FiMail size={24} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-400 font-[Lexend] font-medium">Email Me</p>
                <p className="text-slate-800 font-[Lexend] font-semibold text-lg">
                  hey.sridhar@yahoo.com
                </p>
              </div>
              <div className="text-slate-400 group-hover:text-blue-500 transition-colors">
                {isCopied ? <FiCheck size={20} /> : <FiCopy size={20} />}
              </div>
            </div>

            {/* Location Card */}
            <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="h-12 w-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center">
                <FiMapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-400 font-[Lexend] font-medium">Location</p>
                <p className="text-slate-800 font-[Lexend] font-semibold text-lg">
                  Bengaluru, India
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <p className="text-sm text-slate-400 font-[Lexend] font-medium mb-4 uppercase tracking-wider">
              Follow Me
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaGithub size={24} />, link: "https://github.com/SridharPlays", color: "hover:text-slate-900" },
                { icon: <FaLinkedin size={24} />, link: "https://www.linkedin.com/in/sridhar-n-65b545316/", color: "hover:text-blue-700" },
                { icon: <FaDiscord size={24} />, link: "https://discord.com/users/738966907914420276", color: "hover:text-indigo-600" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`h-14 w-14 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/50"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold text-slate-700 font-[Lexend] ml-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-[Lexend] text-slate-700 placeholder:text-slate-400"
                placeholder="How should I call you?"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold text-slate-700 font-[Lexend] ml-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-[Lexend] text-slate-700 placeholder:text-slate-400"
                placeholder="where@can-i-reach.you"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-slate-700 font-[Lexend] ml-1">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-[Lexend] text-slate-700 placeholder:text-slate-400 resize-none"
                placeholder="Tell me about your project or idea..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-slate-900 text-white font-[Lexend] font-medium py-4 rounded-xl shadow-lg shadow-slate-900/20 hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
            >
              Send Message
              <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;