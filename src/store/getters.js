export default {
    getProjectsPreviewRandomOrder: state => {
        return state.projects.filter(project => project.preview).sort(() => Math.random() - 0.5);
    },
    getProjectsPreview: state => {
        return state.projects.filter(project => project.preview);
    },
    getProjectsShown: state => {
        return state.projects.filter(project => project.show);
    },
}