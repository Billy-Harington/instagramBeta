import { Post } from "./coponents/Post.js";
import { Recomendations } from "./coponents/Recomendations.js";
import { Story } from "./coponents/Story.js";
import { reload } from "./utilit/reload.js";

const recomended = document.querySelector('.recomended')
const new_posts = document.querySelector('.new_posts')
const new_stories = document.querySelector('.new_stories')

const res_pics = await fetch("http://localhost:2020/photos?_limit=4")
const pics_db = await res_pics.json()
const res_users = await fetch("http://localhost:2020/users?_limit=5")
const users_db = await res_users.json()


reload(pics_db,users_db,Post,new_posts)
reload(pics_db,users_db,Recomendations,recomended)
reload(pics_db,users_db,Story,new_stories)


