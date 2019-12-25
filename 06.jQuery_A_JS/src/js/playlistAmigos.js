// const $playlistFriendsContainer = document.getElementById('playlistFriends')
// const $ulHTML = document.getElementById('ul')

// async function getDataUser(url){
//     const response = await fetch(url)
//     const data = await response.json()
//     return data
// }

// function userTemplate(user){
//     return(`
//         <a href="#">
//             <img src="${user.results[0].picture.thumbnail}" alt="echame la culpa" />
//             <span>${user.results[0].name.first} ${user.results[0].name.last}</span>
//         </a>
//     `)
// }

// async function renderUserList(){
//     const $ul = document.createElement('ul')
//     for (let i = 0; i<8; i++){
//         const user = await getDataUser('https://randomuser.me/api/')
//         const $li = document.createElement('li')
//         const HTMLString = userTemplate(user)
//         $li.innerHTML = HTMLString
//         $li.classList = 'playlistFriends-item'
//         $ul.style.padding = '0'
//         $ul.append($li)
//     }
//     return $playlistFriendsContainer.replaceChild($ul, $ulHTML)
//     debugger
// }

const { results: usersList } = getUsers('https://randomuser.me/api/')
  
  async function getUsers(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data
  }
  
  function playlistFriendsItemTemplate({ name: { first }, picture: { thumbnail } }) {
    return (
      `<li class="playlistFriends-item">
        <a href="#">
          <img src="${thumbnail}" alt="${first}" />
          <span>
            ${first}
          </span>
        </a>
      </li>`
    )
  }

  try {
    $usersContainer.children[0].remove();
    usersList.forEach(user => {    
      const HTMLString = playlistFriendsItemTemplate(user)
      const html = document.implementation.createHTMLDocument()
      html.body.innerHTML = HTMLString
      $usersContainer.append(html.body.children[0])
      $usersContainer.classList.add('fadeIn');
    })
  } catch (error) {
    throw new Error('No se pudieron encontrar usuarios')
  }

})()