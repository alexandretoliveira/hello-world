import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header';
import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashbordPage from '../components/ExpenseDashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';


const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path='/' component={ExpenseDashbordPage} exact={true}/>
            <Route path='/create' component={AddExpensePage} />
            <Route path='/edit/:id' component={EditExpensePage} />
            <Route path='/help' component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
    
    </BrowserRouter>
);

export default AppRouter;