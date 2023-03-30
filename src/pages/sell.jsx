import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/sell.css";

const Sell = () => {
  const [upload, setUpload] = useState({
    image: "",
    category: "",
    price: "",
    fname: "",
  });
  const navigate = useNavigate();
  function handleInput(event) {
    event.preventDefault();
    if ([event.target.name] == "image") {
      setUpload({
        ...upload,
        [event.target.name]: event.target.files[0],
      });
    } else {
      setUpload({
        ...upload,
        [event.target.name]: event.target.value,
      });
    }
  }
  const formData = new FormData();
  formData.append("fname", upload.fname);
  formData.append("category", upload.category);
  formData.append("price", upload.price);
  formData.append("file", upload.image);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("/api/users/product", {
      method: "POST",
      body: formData,
    });

    const json = await response.json();
    if (response.ok) {
      navigate("/");
    }
  }

  return (
    <>
      <div className="centerDiv">
        <label htmlFor="fname">Name</label>
        <br />
        <input
          className="input"
          type="text"
          id="fname"
          name="fname"
          onChange={handleInput}
          value={upload.fname}
          required={true}
        />
        <br />
        <label htmlFor="fname">Category</label>
        <br />
        <input
          className="input"
          type="text"
          id="category"
          name="category"
          onChange={handleInput}
          value={upload.category}
          required={true}
        />
        <br />
        <label htmlFor="fname">Price</label>
        <br />
        <input
          className="input"
          type="number"
          id="price"
          name="price"
          onChange={handleInput}
          value={upload.price}
          required={true}
        />
        <br />
        <br />
        {upload.image && (
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={upload.image && URL.createObjectURL(upload.image)}
            style={{ objectFit: "cover", clipPath: "fill-box" }}
          />
        )}
        <form onSubmit={handleSubmit} encType={"multipart/form-data"}>
          <br />
          <input type="file" onChange={handleInput} name="image"  required={true}/>
          <br />
          <button className="uploadBtn">upload and Submit</button>
        </form>
      </div>
    </>
  );
};

export default Sell;
