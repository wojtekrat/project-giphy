class Searchbar {


    searchbarPlaceholder = $('.search-input').placeholder;

    constructor() {
        this.flag = false;
        this.searchbarPlaceholder = 'Search various GIFs and Stickers!';
        setInterval(this.changePlaceholder, 2000);
    }

    changePlaceholder = () => {
        if (this.flag) {
            this.searchbarPlaceholder = 'Search various GIFs and Stickers!';
            this.flag = !this.flag;
        } else {
            this.searchbarPlaceholder = '@username + tag to search within a verified channel';
            this.flag = !this.flag;
        }
    };
}

export default Searchbar;