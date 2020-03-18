const intialState = {
    id: this.state.newAuthorId,
      first_name: "Author",
      last_name: "McAuthorFace",
      imageUrl:
        "https://www.netz.de/images/2016-11-21-firefox-focus-header-58cfedd908c25_500_300.jpg",
      books: [
        {
          title: "Anonymous book",
          color: "mysterious color"
        }
      ]
}

const reducer = (state = intialState, action) =>{

}
export default reducer;