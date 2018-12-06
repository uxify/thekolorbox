import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from 'root_source/routes'

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }
    componentDidCatch(error, info) {
        console.log(error,info)
        this.setState({
            hasError: true
        });
    }
    render() {
        if (this.state.hasError) {
            return <div>Error Loading Content</div>
        }
        return (
            <div className="content">
                <main>
                    {
                        routes.map(({ path, exact, component: C, ...rest }) => (
                            <Route
                                key={path}
                                path={path}
                                exact={exact}
                                render={(props) => (
                                    <C {...props} {...rest} />
                                )}
                            />
                        ))
                    }
                </main>
            </div>
        )
    }
}

export default Content