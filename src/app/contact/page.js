export default function Contact() {
  return (
    <div className="grid max-w-screen grid-cols-1 gap-8 px-8 py-16 mx-auto  md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:dark:bg-gray-800 dark:dark:text-gray-100">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leadi lg:text-5xl">Let's talk!</h2>
          <div className="dark:dark:text-gray-400">
            Vivamus in nisl metus? Phasellus.
          </div>
        </div>
        <img
          src="https://source.unsplash.com/"
          alt="Contact our customer support"
          className="p-6 h-52 md:h-64"
        />
      </div>
      <htmlform noValidate="" className="space-y-6">
        <div>
          <label htmlFor="name" className="text-sm">
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            className="w-full p-3 rounded dark:dark:bg-gray-800"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your email"
            className="w-full p-3 rounded dark:dark:bg-gray-800"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <textarea
            id="message"
            rows="3"
            placeholder="Your message"
            className="w-full p-3 rounded dark:dark:bg-gray-800"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 text-sm font-bold tracki uppercase rounded dark:dark:bg-violet-400 dark:dark:text-gray-900"
        >
          Send Message
        </button>
      </htmlform>
    </div>
  );
}
