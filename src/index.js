import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import App from './containers/App'
import './styles/app.css'
import configureStore from './store/configureStore'

const store = configureStore();

//store : 배열트리.
render(
    <AppContainer>
        <Provider store={store}>
            <div className='app'>
                <App />  
            </div>
        </Provider>
    </AppContainer>,
    document.getElementById("root")
);

// 코드가 변경될 때마다 페이지가 새로고침없이 업데이트
if (module.hot) {
    module.hot.accept('./containers/App', () => {
        const NextApp = require('./containers/App').default;
        render(
            <AppContainer>
                <Provider store={store}>
                    <div className='app'>
                        <NextApp/>

                    </div>
                </Provider>
            </AppContainer>,
            document.getElementById('root')
        );
    });
}