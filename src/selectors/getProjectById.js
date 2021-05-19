import {MobileApp} from '../Data/data-proyectos';

export const getProjectById = (id) => {
    return MobileApp.find( project => project.id === id);
}