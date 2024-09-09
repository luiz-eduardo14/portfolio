import traineeRadarDescription from './md/trainee-radar.md?raw';
import juniorDeveloperRadarDescription from './md/junior-software-developer.md?raw';
import { ContractType } from "$lib/types";

const traineRadar = {
    description: traineeRadarDescription,
    shortDescription: 'My first experience with professional software development involved working as a full stack developer, creating and updating end-to-end features, always learning and evolving throughout the process.',
    name: 'Trainee at Radar Saúde',
    title: 'Trainee',
}

const juniorDeveloperRadar = {
    description: juniorDeveloperRadarDescription,
    shortDescription: 'My first full-time experience as a full-time developer allowed me to take on more complex and challenging features.',
    name: 'Junior Developer at Radar Saúde',
    title: 'Junior Developer',
}

const contractType: {
    [key in ContractType]: string;   
} = {
    [ContractType.Freelance]: 'Freelance',
    [ContractType.FullTime]: 'Full Time',
    [ContractType.Internship]: 'Internship',
    [ContractType.PartTime]: 'Part Time',
    [ContractType.SelfEmployed]: 'Self-Employed',
    [ContractType.Contract]: 'Contract',
};

export default {
    ['trainee-radar']: traineRadar,
    ['junior-software-developer']: juniorDeveloperRadar,
    contractType
};