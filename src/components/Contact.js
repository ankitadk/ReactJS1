const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-lg p-4 m-4">Contact Us Page</h1>
      <form>
        <input
          type="text"
          className="border border-black m-2 p-2"
          placeholder="Name"
        />
        <input
          type="text"
          className="border border-black m-2 p-2"
          placeholder="Message"
        />
        <button className="border border-black rounded-lg p-2 m-2 bg-gray-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
