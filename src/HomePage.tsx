import { useEffect ,useState} from 'react'
import './App.css'
type Post={
    "id": number,
       "name":string,
       "email": string,
       "description":string,
       "image":string
}
export function HomePage(){
useEffect(()=>{
    fetch("http://localhost:3001/posts")
    .then(resp=>resp.json())
    .then(postFromServer=>setPost(postFromServer))
},[])
const[post, setPost]=useState<Post[]>([])
    return(
        <section>
    <div className="Left--side">
    <img className="Left--side--logo" src="./src/image/tweeter.png" alt="Tweeter logo"/>
    <ul className="Left--Menu">
      <li>
        <span className="material-symbols-outlined">
          home
          </span>
          <a href="#"> Home </a>
      </li>
      <li>
        <span className="material-symbols-outlined">
          tag
          </span>
          <a href="#"> Explore </a>
      </li>
      <li>
        <span className="material-symbols-outlined">
          notifications
          </span>
          <a href="#"> Notifications </a>
      </li>
      <li>
        <span className="material-symbols-outlined">
          mail
          </span>
          <a href="#"> Messages </a>
      </li>
      <li>
        <span className="material-symbols-outlined">
          bookmark
          </span>
          <a href="#"> Bookmarks </a>
      </li>
      <li>
        <span className="material-symbols-outlined">
          list_alt
          </span>
          <a href="#">Lists </a>
      </li>
      <li>
        <span className="material-symbols-outlined">
          person
          </span>
          <a href="#">Profile </a>
      </li>
      <li>
        <span className="material-symbols-outlined">
          more
          </span>
          <a href="#">More </a>
      </li>

      <input className="Left--side--button" type="button" value="Tweet"/>
    </ul>
    
    <div className="Left--side--profile">
      <img src="./src/image/eva.avatar.webp" alt="eva photo"/>
      <span><h2>Eva Malluta</h2>
      <p>evamalluta14@gmail.com</p>
    </span>
      <span className="material-symbols-outlined">
        more_horiz
        </span>

    </div>
    </div>
  
  <div className="Main--side"> 

    <header className="Main--side-header">
      <ul className="Main--side-header1">
        <li><h2>Home</h2>
         <span className="material-symbols-outlined">
      
        auto_awesome
        </span></li></ul>
        <div className="Main--side-header2">
      <img src="./src/image/eva.avatar.webp" alt="eva photo"/>
          <input type="text" placeholder="What`s happening?"/>
        </div>
        <div className="Main--side-header3">
      <ul>
        <li>
          <span className="material-symbols-outlined">
            image
            </span>
        </li>
        <li><span className="material-symbols-outlined">
          gif_box
          </span></li>
          <li>
            <span className="material-symbols-outlined">
              align_horizontal_left
              </span>
          </li>
          <li>
            <span className="material-symbols-outlined">
              sentiment_satisfied
              </span>
          </li>
          <li>
            <span className="material-symbols-outlined">
              date_range
              </span>
          </li>
          <li>
            <span className="material-symbols-outlined">
              pin_drop
              </span>
          </li>
      </ul>
      <input type="button" value="Tweet" />
        </div>
    </header>
    {post.map(posts=>( 
 <main className="Main--side--photo">
    

      <div>
      <img className="Main-photo--profili" src="./src/image/tweeter.png" alt="photo profili"/>
      <div><h4>{posts.name}</h4>
      <p>{posts.email}</p>
      <p>12h</p>
      </div>
    </div>
    <p>{posts.description}</p>
    <img src={posts.image} alt="" width={300}/>
    <div className="comments">
      <p><span className="material-symbols-outlined">
        chat_bubble
        </span> 40</p>
        <p><span className="material-symbols-outlined">
          repeat
          </span> 49</p>
          <p><span className="material-symbols-outlined">
            favorite
            </span>76463248</p>
            <p><span className="material-symbols-outlined">
              file_upload
              </span> </p>
    </div>



    </main>
    ))}
  </div>
  <div className="Right--side">hdfjhDFHLKDflkda</div>
  </section>
    )
}

