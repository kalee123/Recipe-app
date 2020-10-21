import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import {fetchRecipes} from './components/fetch';
import RecipeList from './components/RecipeList';
import OnImagesLoaded from 'react-on-images-loaded';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [],
      isRecived: false,
      value: ''
    };
  }

  async componentDidMount(){
    if(localStorage.getItem('recipes')){
      let recipes = JSON.parse(localStorage.getItem('recipes'));
      this.setState({
        recipes,
        isRecived: true
      });
      return;
    }
      let recipes = await fetchRecipes('egg rice');
      this.setState({
        recipes,
        isRecived: true
      });
      console.log(this.state.recipes);
  }
 
  handleChange = (e) => {
    this.setState({
        value: e.target.value
    })
  }
  searchRecipes = async (e) =>{
    e.preventDefault();
    let recipes = await fetchRecipes(this.state.value);
    console.log(recipes);
      this.setState({
        recipes,
        isRecived: true
      });
  }
  render() {
    if(!this.state.isRecived){
      return (
        <div>Loading...</div>
      )
    }
    return (
      <OnImagesLoaded
  onLoaded={this.runAfterImagesLoaded}
  onTimeout={this.runTimeoutFunction}
  timeout={7000}
>
      <div className="app">
        <SearchBar
          searchVal={this.state.value}
          onChange={this.handleChange}
          onClick={this.searchRecipes}
        />
        <RecipeList recipes={this.state.recipes} />       
      </div>
      </OnImagesLoaded>
    );
  }
}

export default App;