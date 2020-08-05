document.addEventListener("DOMContentLoaded", ()=>{

// Adding the book of the Week to the hero section
// Var declarations bw for Book of the Week
const bk_search_title = "the+lord+of+the+ring";
let bk_cover_isbn = "0261102303";
    const bw_url = `http://openlibrary.org/search.json?title=${bk_search_title}`;
const cover_url = `http://covers.openlibrary.org/b/isbn/`;

// get the data from URL CLass  var bk_... for book
class bkFetchData{
    constructor(url, cover){
        this.url = url;
        this.cover = cover;
    }
    async actionFetchData(){
        const bk_raw = await fetch(this.url);
        const data = await bk_raw.json();
        const bk_author = await data.docs[0].author_name[0];
        const bk_author_key = await data.docs[0].author_key[0];
        const bk_title = await data.docs[0].title;
        const bk_year = await data.docs[0].first_publish_year;
        this.cover = await data.docs[0].isbn;
        let allCovers = await this.cover;

        console.log(data);
       console.log(bk_author_key);
       console.log(bk_author);
       console.log(bk_title);
       console.log(bk_year);
       console.log(this.cover);
      
    }
}
// book of the week data
let bw_fetch = new bkFetchData(bw_url,bk_cover_isbn);
bw_fetch.actionFetchData();



})
