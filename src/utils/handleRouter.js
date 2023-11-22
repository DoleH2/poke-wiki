
export const changeRouter = (navigate, path, data) => {
    navigate(path, { state: data });
}