import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Search from './components/Search';
import { EventMessager } from "./components/utils/EventMessager";
import './custom.css'

let eventMessager = new EventMessager();

export default () => (
    <Layout>
        <Route exact path='/' render={(props: any) => <Home {...props} eventMessager={eventMessager} />} />
        <Route path='/search' component={Search} />
    </Layout>
);
