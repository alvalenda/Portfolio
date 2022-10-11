import AVT1 from "@assets/avatar1.jpg";
import AVT2 from "@assets/avatar2.jpg";
import AVT3 from "@assets/avatar3.jpg";
import AVT4 from "@assets/avatar4.jpg";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Person One",
    image: AVT1,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed eaque maiores adipisci reprehenderit esse exercitationem nam, ipsam est labore. Tempore soluta fugit ipsam perspiciatis? Tempora culpa dolor iusto optio laborum!",
  },
  {
    name: "Person Two",
    image: AVT2,
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla inventore placeat voluptas impedit magni fugit quasi voluptates unde voluptatibus obcaecati perferendis dicta corporis aspernatur qui iste cupiditate, illum quisquam facilis.",
  },
  {
    name: "Person Three",
    image: AVT3,
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat deserunt, eius quis at facilis doloribus, voluptatem sit sunt distinctio debitis sapiente consectetur officia voluptatibus enim officiis minus sint quia odit?",
  },
  {
    name: "Person Four",
    image: AVT4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolorum provident rem vero consequatur possimus eaque distinctio architecto accusantium nulla dolore, minima necessitatibus, similique quos! Voluptatum, maxime iure? Asperiores, quia!",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {/* DINAMIC GENERATING TESTIMONIALS */}

        {testimonials.map((item, index) => (
          <article className="testimonial">
            <div className="client__avatar">
              <img src={item.image} alt={`Photo of ${item.name}`} />
            </div>
            <h5>{item.name}</h5>
            <small className="client__review">{item.review}</small>
          </article>
        ))}

        {/* END OF MAP */}
      </div>
    </section>
  );
};
