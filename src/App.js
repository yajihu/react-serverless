import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactReadMoreReadLess from "react-read-more-read-less";

/**
 * App
 *
 * Simple react js fetch example
 */
class App extends React.Component {

  /**
   * constructor
   *
   * @object  @props  parent props
   * @object  @state  component state
   */
  constructor(props) {

    super(props);

    this.state = {
      items: [],
      isLoaded: false
    }

  }

  /**
   * componentDidMount
   *
   * Fetch json array of objects from given url and update state.
   */
  componentDidMount() {

    fetch('https://4k4guuibdl.execute-api.us-east-1.amazonaws.com/dev/api/condition')
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json.conditions,
          isLoaded: true,
        })
      }).catch((err) => {
        console.log(err);
      });

  }

  /**
   * render
   *
   * Render UI
   */
  render() {

    const { isLoaded, items } = this.state;

    if (!isLoaded)
      return <div>Loading...</div>;

    return (

      <div className="App">
        <CardDeck>
          {items.map(item => (
            <div key={item.id}>

              <Card className="mb-5" style={{ width: '28rem' }}>
                <Card.Img variant="top" src={item.image ? item.image : 'https://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg'} onError={(e) => {
                  e.target.src = 'https://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg' // some replacement image
                }} />
                <Card.Body>
                  <Card.Title>{item.label}</Card.Title>
                  <Card.Text>
                    <ReactReadMoreReadLess
                      charLimit={60}
                      readMoreText={"find out more."}
                      readLessText={"find out less."}
                      readMoreClassName="read-more-less--more"
                      readLessClassName="read-more-less--less"
                    >
                      {item.snippet?item.snippet:"Contents were not found on the database, please try later."}
                    </ReactReadMoreReadLess>
              </Card.Text>


                </Card.Body>
              </Card>

            </div>
          ))}
        </CardDeck>
      </div>
    );

  }

}

export default App;