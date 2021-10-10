import Head from 'next/head';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Contact us</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>Contact us</h1>
        <h2>Contact form</h2>
        <form action="#" method="post">
          <div>
            <input type="text" name="firstname" id="firstname" placeholder="Firstname" />
          </div>
          <div>
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>
          <div>
            <textarea name="message" id="" cols="30" rows="10" placeholder="Your message..."></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
