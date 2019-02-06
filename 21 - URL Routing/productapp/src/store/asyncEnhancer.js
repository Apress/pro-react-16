export const asyncEnhancer = delay => createStoreFunction => (...args) => {
    const store = createStoreFunction(...args);
    return {
        ...store,
        dispatchAsync: (action) => new Promise((resolve, reject) => {
            setTimeout(() => {
                store.dispatch(action);
                resolve();
            }, delay);
        })
    };
}
