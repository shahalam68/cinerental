import Star from "../assets/star.svg";
export default function Rating({ value }) {
  const Stars = Array(value).fill(Star);
  return (
    <>
      {Stars.map((star, index) => (
        <img key={index} src={Star} width="14" height="14" alt="star" />
      ))}
    </>
  );
}
