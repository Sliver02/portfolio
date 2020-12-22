export default {
    getProjectsPreview: state => {
        return state.projects.filter(project => project.preview);
    },
    getProjectsShown: state => {
        return state.projects.filter(project => project.show);
    },
}