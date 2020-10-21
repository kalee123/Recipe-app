

export const fetchRecipes = async recipe => {
    console.log("fetch");
    const appId = "0a886643";
    const key = "de87a8e0ff945e5d71564ed45bbac0f4";
    const url = `https://api.edamam.com/search?q=${recipe}&app_id=${appId}&app_key=${key}&from=0&to=10`;
    //Api call promise
    try {
      let response = await fetch(url);
      let result = await response.json();
      localStorage.setItem("recipes", JSON.stringify(result.hits));
      return result.hits;
    } catch (error) {
      let response = [];
      return response;
    }
  };