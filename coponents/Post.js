export function Post(item) {
    const post = document.createElement('div')
    const main_post_info = document.createElement('div')
    const user = document.createElement('div')
    const post_data = document.createElement('div')
    const reactions = document.createElement('div')
    const first_3 = document.createElement('div')
    const post_body = document.createElement('div')
    const body_comments = document.createElement('div')
    const comment = document.createElement('div')
    const likes = document.createElement('div')



    const h2 = document.createElement('h2')


    const p_data = document.createElement('p')
    const p_body_likes = document.createElement('p')
    const p_body_info = document.createElement('p')
    const p_comment = document.createElement('p')


    
    const a_svg = document.createElement('a')
    const a_like = document.createElement('a')
    const a_share = document.createElement('a')
    const a_comment = document.createElement('a')
    const a_save = document.createElement('a')
    const a_view = document.createElement('a')
    const a_likes = document.createElement('a')

    const img_user = document.createElement('img')
    const img_main = document.createElement('img')
    const img_like = document.createElement('img')
    const img_comment = document.createElement('img')
    const img_share = document.createElement('img')
    const img_save = document.createElement('img')

    const br = document.createElement('br')
    const hr = document.createElement('hr')

    post.classList.add('post')
    main_post_info.classList.add('main_post_info')
    user.classList.add('user')
    post_data.classList.add('post_data')
    reactions.classList.add('reactions')
    first_3.classList.add('first_3')
    post_body.classList.add('post_body')
    body_comments.classList.add('body_comments')
    comment.classList.add('comment')
    likes.classList.add('likes')

    h2.innerText = item.name

    p_data.innerText = item.email
    p_body_likes.innerText = `${Math.round(Math.random()*10000000)} likes`
    p_comment.innerText = `${item.name}  Lorem ipsum dolor sit amet`
    p_body_info.innerText = `${item.name}  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis... more`

    a_svg.href = "#"
    

    a_like.href="#"
    a_view.href="#"
    a_share.href="#"
    a_save.href="#"
    a_comment.href = "#"
    a_likes.href = "#"


    img_user.src = item.thumbnailUrl

    
    
    img_user.alt = ""
    img_main.src = item.thumbnailUrl
    img_main.alt = ""
    img_main.classList.add('main_pic')
    img_comment.src = "../img/comment.png"
    img_comment.alt = ""
    img_like.src = "../img/like.png"
    img_like.alt = ""
    img_save.src = "../img/save.png"
    img_save.alt = ""
    img_share.src = "../img/share.png"
    img_share.alt = ""


    post.append(main_post_info,img_main,reactions,post_body)

    main_post_info.append(user,a_svg)
    user.append(img_user,post_data)
    post_data.append(h2,p_data)

    reactions.append(first_3,a_save)
    first_3.append(a_like,a_share,a_comment)
    a_like.append(img_like)
    a_share.append(img_share)
    a_comment.append(img_comment)
    a_save.append(img_save)

    post_body.append(p_body_likes,br,p_body_info,a_view,body_comments,likes,hr)
    body_comments.append(comment)
    comment.append(p_comment)
    likes.append(a_likes)
    a_likes.append(img_like)

    
    
    return post
}
