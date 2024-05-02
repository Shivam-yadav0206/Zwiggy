<form>
  <h1 className="title text-center mb-4">Talk to Us</h1>

  <div className="form-group position-relative">
    <label for="formName" className="d-block">
      <i className="icon" data-feather="user"></i>
    </label>
    <input
      type="text"
      id="formName"
      className="form-control form-control-lg thick mb-4"
      placeholder="Name"
    />
  </div>



    <input
      type="email"
      id="formEmail"
      className="form-control form-control-lg thick mb-4"
      placeholder="E-mail"
    />


  <div className="form-group message">
    <textarea
      id="formMessage"
      className="form-control form-control-lg mb-4!"
      rows="7"
      placeholder="Message"></textarea>
  </div>

  <div className="text-center">
    <button type="submit" className="btn btn-primary" tabIndex="-1">
      Send message
    </button>
  </div>
</form>;

const ContactUs = () => {
  return (
    <section id="contact" className="bg-secondaryColor py-16">
      <div className="container flex flex-col gap-5 md:items-center md:flex-row">
        <div className="space-y-4 md:flex-1">
          <h2 className="section__title text-blackColor">Connect with us</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="flex-col gap-y-3 md:flex-row md:flex-1 ">
          <h2 className="section__title text-blackColor mb-4">Connect with us</h2>
          <input
            type="text"
            id="Name"
            className=" p-2 text-blackColor mb-4 rounded-lg outline-none md:w-full"
            placeholder="Name"
          />
          <input
            type="email"
            placeholder="Email address"
            className="p-2 text-blackColor mb-4 rounded-lg outline-none md:w-full"
          />
          <textarea
            id="formMessage"
            className="p-2 text-blackColor mb-4 rounded-lg outline-none md:w-full"
            rows="7"
            placeholder="Message"></textarea>
          <button
            href=""
            className=" flex items-center justify-center gap-2 btn bg-blackColor hover:opacity-75">
            <i className="fa-solid fa-paper-plane"></i>
            Send message
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;