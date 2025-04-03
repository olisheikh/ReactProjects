const container = [React.createElement(
    'div',
    { className: 'rootContainer', key:'div-1'},
    React.createElement(
        'section',
        { id: 'headingSection', key:'section-1' },
        [
            React.createElement(
                'p',
                {key:'p-1'},
                'Welcome to the React element'
            ),
            React.createElement(
                'img',
                {
                    src: 'https://assets.weforum.org/article/image/responsive_large_0ZUBmNNVLRCfn3NdU55nQ00UF64m2ObtcDS0grx02fA.jpg',
                    id: 'image',
                    width: '200px',
                    height: '100px',
                    key:'image-1'
                }
            )
        ]
    ),
),
React.createElement(
    'div',
    {className: 'div-2', key:'div-2'},
    React.createElement(
        'form',
        {className:'login-form', key:'form-1'},
        [
            React.createElement(
                'label',
                {key:'name', for:'name'},
                'Name'
            ),
            React.createElement(
                'input',
                {key:'inputName', placeholder:'Enter Your name', id:'name'},
            ),
            React.createElement(
                'input',
                {key:'pass', type:'password', placeholder:'Enter your password'},
            )
        ]
        )
)]

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(container);
