function Contact() {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold">Contact Me</h2>
      <form className="mt-4 flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-2 border rounded" />
        <input type="email" placeholder="Your Email" className="p-2 border rounded" />
        <textarea placeholder="Your Message" className="p-2 border rounded"></textarea>
        <button className="p-2 bg-blue-500 text-white rounded">Send</button>
      </form>
    </div>
  );
}

export default Contact;
