export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to datebase
        const firestore = getFirestore();
        firestore.collection('project').add({
            ...project,
            authorFirstName: 'Nadya',
            authorLastName: 'Nadya',
            authorID: '12121',
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })
    }

};
