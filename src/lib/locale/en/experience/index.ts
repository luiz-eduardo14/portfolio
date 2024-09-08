import traineeRadarDescription from './md/trainee-radar.md?raw';
import { ContractType } from "$lib/types";

const traineRadar = {
    description: traineeRadarDescription,
    shortDescription: 'My first experience with professional software development involved working as a full stack developer, creating and updating end-to-end features, always learning and evolving throughout the process.',
    name: 'Trainee at Radar Saúde',
    title: 'Trainee',
}

const contractType: {
    [key in ContractType]: string;   
} = {
    [ContractType.Freelance]: 'Freelance',
    [ContractType.FullTime]: 'Tempo Integral',
    [ContractType.Internship]: 'Estágio',
    [ContractType.PartTime]: 'Meio Período',
    [ContractType.SelfEmployed]: 'Autônomo',
    [ContractType.Contract]: 'Contrato',
};

export default {
    ['trainee-radar']: traineRadar,
    contractType
};