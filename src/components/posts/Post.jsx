import "./post.css";

export default function Post() {
  return (
    <article className="post">
      <img
        src="https://images.unsplash.com/photo-1670272590027-72888b060829?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Life</span>
          <span className="postCat">Music</span>
        </div>
        <div className="postTitle">Lorem ipsum dolor sit amet</div>
        <hr />
        <span className="postDate">1 hr ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolores
        quam illo nihil ex vel, voluptates placeat esse laudantium, dolorem
        natus? Laboriosam ut est quam beatae placeat dolorum odit molestias.
        Reiciendis ad quae tempore? Pariatur provident mollitia magnam eaque
        laudantium sunt aliquam dolores inventore, sequi, incidunt voluptas
        suscipit eos voluptate perferendis! Officiis eligendi quam qui
        voluptatum corporis illum expedita nostrum? Perferendis porro quod
        itaque laborum ullam eum mollitia ratione placeat blanditiis numquam,
        fugit nisi possimus excepturi unde dolor, doloremque dolorum modi amet
        culpa, repellat qui veritatis est hic eius. Hic!
      </p>
    </article>
  );
}
