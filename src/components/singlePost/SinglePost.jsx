import "./singlePost.scss";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.unsplash.com/photo-1670272590027-72888b060829?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-sharp fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-sharp fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Nicolas Pham</b>
          </span>
          <span className="singlePostDate">1 hr ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
          dignissimos numquam necessitatibus. Sapiente nostrum ipsum eaque
          dolorem temporibus? Cum nihil neque facere aspernatur aut consequatur
          sit deleniti veritatis fugiat totam. Doloribus atque mollitia commodi
          voluptatem aliquid architecto minus maiores quia, molestias eum,
          incidunt dicta ex culpa assumenda sunt optio repellendus? Minus, iusto
          cumque odit aut minima dolores molestiae error ut? Dolores, ipsa
          soluta? Sapiente accusantium perferendis odit fuga inventore in, rerum
          amet necessitatibus esse debitis maxime facilis magnam culpa fugit
          obcaecati sint voluptatum iste natus vitae earum? Repudiandae, odio!
          Voluptates. Ratione id iste nihil quam nisi vitae inventore, expedita
          voluptate, dolorum error ipsa quaerat maxime suscipit quo veniam
          laudantium nam, perferendis aliquam. Officiis distinctio, accusantium
          similique voluptate aliquam veritatis! Facere. Nobis, eveniet optio
          similique consequuntur tempore odit voluptas eos accusantium
          cupiditate enim, dolor ratione sunt eius asperiores non distinctio
          maiores quaerat impedit officiis repellat ea commodi. Corporis sed
          beatae laborum.
        </p>
      </div>
    </div>
  );
}
