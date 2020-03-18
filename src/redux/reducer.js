import authors from "../data";

const initialState = {
  authors: authors,
  newAuthorId: 5
};
const addAuthor = (newId)=>{

return {
  id: newId,
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
};}
export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_AUTHOR":
      return{
        newAuthorId:state.newAuthorId+1,
        authors: state.authors.concat(addAuthor(state.newAuthorId)),
      }
    case "DELETE_AUTHOR" :
      return{
        authors:state.authors.filter(author =>author.id !== action.payload.id)
      }
    default:
      return state;
  }
};

