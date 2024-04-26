
function homePage(){
    console.log('HOME!!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerCategoryTitle.classList.add('inactive');
    headerTitle.classList.remove('inactive');
    searchForm.classList.remove('inactive')

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');

    getTrendingMoviesPreview();
    getCategoriesPreview();
}

function categoriesPages(){
    console.log('categoriesPages');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerCategoryTitle.classList.remove('inactive');
    headerTitle.classList.add('inactive');
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
    
    const [ ,categoryData]= location.hash.split("=");
    const [categoryId,categoryName] = categoryData.split("-")

    headerCategoryTitle.innerHTML = decodeURI(categoryName);

    getMoviesByCategory(categoryId);

}

function moviesDetailPage(){
    console.log('moviesPage');

    headerSection.classList.add('header-container--long');
    // headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerCategoryTitle.classList.add('inactive');
    headerTitle.classList.add('inactive');
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');

    const [ ,movieId]= location.hash.split("=");
    getMovieById(movieId);
}

function trendsPage(){
    console.log('trendsPage');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerCategoryTitle.classList.remove('inactive');
    headerTitle.classList.add('inactive');
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    headerCategoryTitle.innerHTML = "Tendencias";

    getTrendingMovies();
}

function searchsPage(){
    console.log('searchsPage');
    

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerCategoryTitle.classList.add('inactive');
    headerTitle.classList.add('inactive');
    searchForm.classList.remove('inactive')

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    const [ ,query]= location.hash.split("=");
    getMoviesBySearch(query);

}

function navigator() {
    console.log({location});
    if(location.hash.startsWith('#trends')){
        trendsPage();
    }else if(location.hash.startsWith('#search=')){
        searchsPage();
    }else if(location.hash.startsWith('#movie=')){
        moviesDetailPage();
    }else if(location.hash.startsWith('#category=')){
        categoriesPages();
    }else {
        homePage();
    }


    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;

    

}


// Eventos


searchFormBtn.addEventListener('click', () => {
    
    location.hash = '#search=' + searchFormInput.value;
});

arrowBtn.addEventListener('click', () => {
    // if(history.length-1){
    //     history.back();
    // }else{
    //     location.hash = '#home';
    // }
    const previousUrl = document.referrer;

    console.log(previousUrl);

    if(previousUrl.includes(location.hostname)){
        history.back();
    }else{
        location.hash ="#home"
    }   

    
    
});

trendingBtn.addEventListener('click',() => {
    location.hash ="#trendsPage";
});

window.addEventListener('load', navigator,false);
window.addEventListener('hashchange', navigator,false);


