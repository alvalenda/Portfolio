export const Testimonial = ({ item }) => {
  return (
    <>
      <div className="client__avatar">
        <img src={item.image} alt={`Photo of ${item.name}`} />
      </div>
      <h5>{item.name}</h5>
      <small className="client__review">{item.review}</small>
    </>
  );
};
