import {GoogleUX} from '../Data/data-proyectos';
import {MicrosoftStudent} from '../Data/data-proyectos';
import {CompanyProject} from '../Data/data-proyectos';
import {TestJobs} from '../Data/data-proyectos';
import {Prototypes} from '../Data/data-proyectos';

export const getProjectById = (id) => {
    return GoogleUX.find( google => google.id === id);
}

export const getProjectById2 = (id) => {
    return CompanyProject.find( company => company.id === id);
}

export const getProjectById3 = (id) => {
    return MicrosoftStudent.find( microsoft => microsoft.id === id);
}

export const getProjectById4 = (id) => {
    return TestJobs.find( testproject => testproject.id === id);
}

export const getProjectById5 = (id) => {
    return Prototypes.find( prototype => prototype.id === id);
}