import React from 'react';


export default class InputMeteo extends React.Component {

    constructor(props){
        // console.warn("Constructor")
        super(props)
        this.state = {
            city: '' ,
            items: ''
        }
        this.handelChange = this.handelChange.bind(this) ; 
        this.handelSubmit = this.handelSubmit.bind(this) ;
     
    }

    handelChange (e) {
       this.setState({ city : e.target.value})
    }

    handelSubmit (e){
        e.preventDefault() ;
        console.log(this.state);
        let city = this.state.city ;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7688b4baa29e1a3064e6400b45e142d6`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          // Remarque : il est important de traiter les erreurs ici
          // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
          // des exceptions provenant de réels bugs du composant.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
        
   


  

    render() {
        const {items} = this.state ;
   

       
          return (

            <React.Fragment>
                <h1> Composant InputMeteo</h1>
                {items.name} 
                <form   onSubmit={this.handelSubmit}>
                    <input type="text" placeholder='Saisir une location'  value={this.state.city}  onChange={this.handelChange} ></input>
                    <input type="submit" value='Rechercher'  ></input>
                </form>
            </React.Fragment>
           
            
          )
        }
    }
 

