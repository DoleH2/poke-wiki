
export const checkExistStateDelete = (id) => (store) => {
    return store.stateData.dataDelete.includes(id);
}

export const getListDelete = (store) => store.stateData.dataDelete;