<form>
  <h1 class="title text-center mb-4">Talk to Us</h1>

  <div class="form-group position-relative">
    <label for="formName" class="d-block">
      <i class="icon" data-feather="user"></i>
    </label>
    <input
      type="text"
      id="formName"
      class="form-control form-control-lg thick mb-4"
      placeholder="Name"
    />
  </div>



    <input
      type="email"
      id="formEmail"
      class="form-control form-control-lg thick mb-4"
      placeholder="E-mail"
    />


  <div class="form-group message">
    <textarea
      id="formMessage"
      className="form-control form-control-lg mb-4!"
      rows="7"
      placeholder="Message"></textarea>
  </div>

  <div class="text-center">
    <button type="submit" class="btn btn-primary" tabIndex="-1">
      Send message
    </button>
  </div>
</form>;

const ContactUs = () => {
  return (
    <section id="contact" class="bg-secondaryColor py-16">
      <div class="container flex flex-col gap-5 md:items-center md:flex-row">
        <div class="space-y-4 md:flex-1">
          <h2 class="section__title text-blackColor">Connect with us</h2>
          <p class="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div class="flex-col gap-y-3 md:flex-row md:flex-1 ">
          <h2 class="section__title text-blackColor mb-4">Connect with us</h2>
          <input
            type="text"
            id="Name"
            class=" p-2 text-blackColor mb-4 rounded-lg outline-none md:w-full"
            placeholder="Name"
          />
          <input
            type="email"
            placeholder="Email address"
            class="p-2 text-blackColor mb-4 rounded-lg outline-none md:w-full"
          />
          <textarea
            id="formMessage"
            className="p-2 text-blackColor mb-4 rounded-lg outline-none md:w-full"
            rows="7"
            placeholder="Message"></textarea>
          <button
            href=""
            class=" flex items-center justify-center gap-2 btn bg-blackColor hover:opacity-75">
            <i class="fa-solid fa-paper-plane"></i>
            Send message
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;