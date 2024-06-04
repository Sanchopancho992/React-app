import React from "react";
import message from "../../assets/message.png";
import call from "../../assets/call.png";
import mail from "../../assets/mail.png";
import marker from "../../assets/marker.png";
import arrow from "../../assets/arrow-right.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ea455092-49ac-4e04-9355-5c179bc37f88");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="m-20 m-auto flex align-center justify-between">
      <div className="basis-2/5	grey ">
        <h3 className="text-myBlue font-medium mb-2">
          Send us a message
          <img src={message} className="w-9 ml-2.5 inline"></img>
        </h3>
        <p className="max-w-md">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          aspernatur explicabo corporis dolore id laborum, fugit nostrum
          eligendi reiciendis quos! Tempore tenetur deleniti illum molestias
          quis eligendi in aperiam officia!
        </p>
        <ul>
          <li className="flex items-center mx-5 my-5 ml-0">
            <img src={mail} className="h-6 mr-2"></img>contact@gmail.com
          </li>
          <li className="flex items-center mx-5 my-5 ml-0">
            <img src={call} className="h-6 mr-2"></img>+852 7898 7489
          </li>
          <li className="flex items-center mx-5 my-5 ml-0">
            <img src={marker} className="h-6 mr-2"></img>Hong Kong, Hong Kong
            Island
          </li>
        </ul>
      </div>
      <div className="basis-2/5	grey">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            required
            className="block w-full bg-myBlue p-2 opacity-45 rounded-md text-white mb-2 outline-none"
          ></input>
          <label>Your Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="enter your mobile number"
            required
            className="block w-full bg-myBlue p-2 opacity-45 rounded-md text-white mb-2 outline-none"
          ></input>
          <label>Your Message</label>
          <textarea
            name="message"
            placeholder="enter your message"
            rows={6}
            required
            className="block w-full bg-myBlue p-2 opacity-45 rounded-md text-white mb-2 outline-none"
          ></textarea>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center"
            type="submit"
          >
            Submit
            <img src={arrow} className="h-6 translate-x-2" alt="arrow" />
          </button>
        </form>
        <span className="block mt-5 mb-0">{result}</span>
      </div>
    </div>
  );
};

export default Contact;
