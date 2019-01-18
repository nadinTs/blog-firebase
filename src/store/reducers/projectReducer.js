const initState = {
    projects: [
        { id: '1', title: 'help mefind peach', content: 'blach blach blach' },
        { id: '2', title: 'collect all the stars', content: 'blach blach blach' },
        { id: '3', title: 'egg hunt with yoshi', content: 'blach blach blach' },
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT' :
            console.log('CREATE_PROJECT', action.project);
    }
    return state;
};

export default projectReducer;
