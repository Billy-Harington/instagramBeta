export function Story(item) {
    const story = document.createElement('div')
    const story_box = document.createElement('div')
    const story_text = document.createElement('div')
    const a = document.createElement('a')
    const a_nick = document.createElement('a')
    const img = document.createElement('img')

    story.classList.add('story')
    story_box.classList.add('story_box')
    story_text.classList.add('story_text')

    a.href = "#"
    a_nick.href = "#"
    img.src = item.url
    img.alt = ""
   

    a_nick.innerText = item.email

    story.append(story_box,story_text)
    story_box.append(a)
    a.append(img)
    story_text.append(a_nick)

    return story

}