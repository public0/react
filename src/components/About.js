import React from 'react';
import {Link} from 'react-router-dom';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items : null
        };
        this.fetchItems().then((items) => this.setState({loading: false, items:items}));
    }

    fetchItems = async () => {
        const data = await fetch(
            'https://api.github.com/users/hadley/orgs',
            {
                method: 'GET',
                // headers : {
                //     'Content-Type': 'application/json',
                //     'TRN-Api-Key': '3d26b63b-49c6-4b0d-bc6b-1c31e24250de'
                // }
            }
        );

        return await data.json();
    };

    showItems() {
        if (this.state.items !== null) {
            this.state.items.map(item => (
//                console.log(item.login)
                <h1>{item.login}</h1>
            ))
        }

//        console.log(this.state);

    }

    render() {
        const {items, loading} = this.state;
        if(loading === false) {
            console.log(items);
        }
            return (
            <div>
                About Page
                {
                    (loading === false)?items.map(item => (
                        <h3 key={item.id}><Link to={`/help/${item.id}`}>{item.login}</Link></h3>
                    )):''
                }

            </div>
        );
    }
}


export default About