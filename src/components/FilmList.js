import React, {Component, Fragment} from 'react'
import Film from './Film'

class FilmList extends Component {
    
    render(){
        
        const filmComponents = this.props.films.map(filmData => {
            return (
                <Film 
                    name={filmData.name}
                    key={filmData.id}
                    >
                        {filmData.url}
                </Film>
            )
        })

        return(
            <Fragment>
              {filmComponents}
            </Fragment>
            
        )
    }

}

export default FilmList;