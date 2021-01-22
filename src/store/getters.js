export default {
    getProjectsPreview: state => {
        return state.projects.filter(project => project.preview).sort(() => Math.random() - 0.5);
    },
    getProjectsShown: state => {
        return state.projects.filter(project => project.show);
    },
}