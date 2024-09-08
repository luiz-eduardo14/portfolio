import traineeRadarDescription from './md/trainee-radar.md?raw';
import { ContractType } from "$lib/types";

const traineRadar = {
    description: traineeRadarDescription,
    shortDescription: 'Minha primeira experiência com desenvolvimento de software profissional envolve trabalhar como desenvolvedor full stack, criando e atualizando funcionalidades de ponta a ponta, sempre aprendendo e evoluindo ao longo do processo.',
    name: 'Estagiário na Radar Saúde',
    title: 'Estagiário',
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