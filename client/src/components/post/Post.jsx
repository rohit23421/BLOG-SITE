import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.immediate.co.uk/production/volatile/sites/25/2020/05/Mars-Saturn-Jupiter-3bd67e3-e1591182300998.jpg?quality=90&resize=768,574"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">MUSIC</span>
          <span className="postCat">LIFE</span>
        </div>
        <span className="postTitle">Lorem ipsum is a dummy text</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet. Aut dicta soluta aut expedita harum ut
        facilis nemo ut Quis error ut quia adipisci ut facere dolorem. Ea
        tempore magnam aut libero fugit qui fuga odio et consequuntur magni et
        maxime officia aut fugiat facere. Lorem ipsum dolor sit amet. Aut dicta
        soluta aut expedita harum ut facilis nemo ut Quis error ut quia adipisci
        ut facere dolorem. Ea tempore magnam aut libero fugit qui fuga odio et
        consequuntur magni et maxime officia aut fugiat facere. Lorem ipsum
        dolor sit amet. Aut dicta soluta aut expedita harum ut facilis nemo ut
        Quis error ut quia adipisci ut facere dolorem. Ea tempore magnam aut
        libero fugit qui fuga odio et consequuntur magni et maxime officia aut
        fugiat facere.
      </p>
    </div>
  );
}
