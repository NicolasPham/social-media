import "./write.scss";

export default function Write() {
  return (
    <div className="write">
      <img
        src="https://images.unsplash.com/photo-1668606161328-c5073e2152e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
        className="writeImg"
      />
      <form action="POST" className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="inputFile">
            <i class="writeIcon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            name=""
            id="inputFile"
            style={{ display: "none" }}
          />
          <input
            type="text"
            className="writeInput"
            autoFocus={true}
            placeholder="Title"
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
